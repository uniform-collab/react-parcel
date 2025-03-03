import { createRoot } from "react-dom/client";
import { Composition } from "./Composition";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<Composition />);
