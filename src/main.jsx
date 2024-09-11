import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import WebSocketScreen from "./components/WebSocketScreen";
import ApiScreen from "./components/ApiScreen";
import InfiniteScrollScreen from "./components/InfiniteScrollScreen";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/websocket" />,
  },
  {
    path: "/websocket",
    element: <WebSocketScreen />,
  },
  {
    path: "/api",
    element: <ApiScreen />,
  },
  {
    path: "/infinite-scroll",
    element: <InfiniteScrollScreen />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
