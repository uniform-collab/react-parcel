import { UniformText } from "@uniformdev/canvas-react";

const ProductGallery = ({ eyebrowText, title }) => {
  return (
    <div style={{ paddingTop: "200px", paddingBottom: "200px" }}>
      ProductGallery: {eyebrowText} {title}
      <UniformText parameterId="title" placeholder={"Enter title"} />
    </div>
  );
};

export default ProductGallery;
