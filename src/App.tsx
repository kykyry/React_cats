import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import { ProductPage } from "./page/ProductsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductPage/>
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
