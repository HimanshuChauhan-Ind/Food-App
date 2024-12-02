import react from "react";
import { createRoot } from "react-dom/client";
import Body from "./Body";

const app = document.getElementById("app");
const root = createRoot(app);

root.render(<Body />);
