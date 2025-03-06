import { useEffect, useState } from "react";
import { UniformComposition } from "@uniformdev/canvas-react";
import { resolveComponent } from "./lib/uniform/resolve";

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
    <UniformComposition data={composition} resolveRenderer={resolveComponent} />
  );
}
