import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { fetchProducts } from "../redux/actions/productActions";

const ProductList = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log("product lists ", products);
  return (
    <>
      <div className="productlist mt-5 mb-5 d-flex flex-wrap">
        <ProductComponent />
      </div>
    </>
  );
};

export default ProductList;
