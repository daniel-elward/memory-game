import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Container } from "./components/Container";
import "./style.css";
import Header from "./components/Header";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Container />
  </StrictMode>,
);
