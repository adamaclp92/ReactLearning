import React from "react";
import Category from "../category/category-component";

import { Route, Routes } from "react-router-dom";

const Shop = () => {
  return (
    <Routes>
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
