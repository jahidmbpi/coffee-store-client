import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffe from "./components/AddCoffe.jsx";
import UpdateCoffe from "./components/UpdateCoffe.jsx";
import Root from "./components/Root.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () => fetch(`http://localhost:3000/coffe`),
      },
      {
        path: "addCoffe",
        element: <AddCoffe></AddCoffe>,
      },
      {
        path: "updatecoffe/:id",
        element: <UpdateCoffe></UpdateCoffe>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffe/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
