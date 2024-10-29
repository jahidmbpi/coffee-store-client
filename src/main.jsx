import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffe from "./components/AddCoffe.jsx";
import UpdateCoffe from "./components/UpdateCoffe.jsx";
import Root from "./components/Root.jsx";
import AuthProvider from "./components/provider/Authprovider.jsx";
import SingUp from "./components/SingUp.jsx";
import SingIn from "./components/SingIn.jsx";
import Users from "./components/Users.jsx";

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
      {
        path: "/registation",
        element: <SingUp></SingUp>,
      },
      {
        path: "/login",
        element: <SingIn></SingIn>,
      },
      {
        path: "/user",
        element: <Users></Users>,
        loader: () => fetch(`http://localhost:3000/user`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
