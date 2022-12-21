import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./components/Admin";
import CreateAccount from "./components/CreateAccount";
import CreateCategory from "./components/CreateCategory";
import CreateProduct from "./components/CreateProduct";
import Home from "./components/Home";
import HomeProducts from "./components/HomeProducts";
import Login from "./components/Login";
import UpdateCategory from "./components/subpages/UpdateCategory";
import UpdateProduct from "./components/subpages/UpdateProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/create-account" exact element={<CreateAccount />} />
        <Route path="/admin" exact element={<Admin />} />
        <Route path="/create-category" exact element={<CreateCategory />} />
        <Route path="/update-category/:id" exact element={<UpdateCategory />} />
        <Route path="/home-products/:id" exact element={<HomeProducts />} />
        <Route path="/create-product/:id" exact element={<CreateProduct />} />
        <Route path="/update-product/:id" exact element={<UpdateProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
