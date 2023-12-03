import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Recipes from "../components/Recipes/Recipes";
const Layout = () => {
  return (
    <div>
      <Header />
      <Recipes />
    </div>
  );
};

export default Layout;
