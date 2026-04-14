import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./router";
import { ToastContainer } from "react-toastify";
import Context from "./Context/Context";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Context>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </Context>
  </StrictMode>,
);
