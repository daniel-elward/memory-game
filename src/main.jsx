import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Container } from "./components/Container";
import "./style.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container />
  </StrictMode>,
);
