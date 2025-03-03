import { useEffect, useState } from "react";
import {
  DefaultNotImplementedComponent,
  UniformComposition,
} from "@uniformdev/canvas-react";
import FeaturedProduct from "./components/featuredProduct";
import EmailComposition from "./components/emailComposition";
import ProductGallery from "./components/productGallery";

export function Root() {
  let [composition, setComposition] = useState(null);
  const compositionPath = "/campaign-emails/product-launch-q2-25";
  const projectId = "1d90b3f7-0fe8-4157-88dd-6d9cbe737c46";
  useEffect(() => {
    fetch(
      `https://uniform.app/api/v1/route?path=${compositionPath}&projectId=${projectId}`,
      {
        headers: {
          "x-api-key":
            "uf1gfh5julvdaqs3smljwjk5qhfehajek4qzucnerdvpdt62a4xsxep0n5686x7jf46yzaxue0va9z85lncgccfaek805kujw",
        },
      }
    )
      .then((response) => response.json())
      .then((data) =>
        setComposition(data?.compositionApiResponse?.composition)
      );
  }, []);

  return (
    <UniformComposition data={composition} resolveRenderer={resolveRenderer} />
  );
}

const mapping = {};
mapping["featuredProduct"] = FeaturedProduct;
mapping["page"] = EmailComposition;
mapping["productGallery"] = ProductGallery;

export const resolveRenderer = (component) => {
  if (component?.type) {
    const implementation = mapping[component.type];
    if (implementation) return implementation;
  }
  return DefaultNotImplementedComponent;
};
