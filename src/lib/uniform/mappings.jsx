import FeaturedProduct from "../../components/featuredProduct";
import ProductGallery from "../../components/productGallery";
import FormattedMessage from "../../components/formattedmessage";
import Button from "../../components/button";
import EmailComposition from "../../components/emailComposition";
import { UniformSlot } from "@uniformdev/canvas-react";

export const hero = {
  type: "featuredProduct",
  component: FeaturedProduct,
};

export const productGallery = {
  type: "productGallery",
  component: ProductGallery,
};

export const button = {
  type: "button",
  component: Button,
  parameters: {
    href: {},
  },
  children: <UniformSlot name="formattedmessage" />,
};

export const formattedMessage = {
  type: "formattedmessage",
  component: FormattedMessage,
};

export const compositionMapping = {
  type: "page",
  component: EmailComposition,
  parameters: {
    title: {},
  },
};
