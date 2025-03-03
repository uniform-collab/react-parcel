import { createRoot } from "react-dom/client";
import { EMPTY_COMPOSITION } from "@uniformdev/canvas";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<UniformComposition data={EMPTY_COMPOSITION} />);
