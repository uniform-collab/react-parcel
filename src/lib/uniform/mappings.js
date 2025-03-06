import FeaturedProduct from "../../components/featuredProduct";
import ProductGallery from "../../components/productGallery";
import FormattedMessage from "../../components/formattedmessage";
import Button from "../../components/button";
import EmailComposition from "../../components/emailComposition";

export const compositionMapping = {
  type: "page",
  component: EmailComposition,
};

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
  slots: {
    children: {
      slotName: "formattedmessage",
    },
  },
};

export const formattedMessage = {
  type: "formattedmessage",
  component: FormattedMessage,
};
