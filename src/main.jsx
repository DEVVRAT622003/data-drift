import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { myRoute } from "./Route/myRoute.jsx";
import { RouterProvider } from "react-router-dom";
import UserProvider from "./Context/UserProvider.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={myRoute}>
        <App />
      </RouterProvider>
    </UserProvider>
    <Toaster />
  </React.StrictMode>
);
