import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  removeSelectedProducts,
} from "../redux/actions/productActions";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  console.log(product);

  const { category, description, image, price, rating, title } = product;

  // const fetchProductDetails = async () => {
  //   const response = await axios
  //     .get(`https://fakestoreapi.com/products/${productId}`)
  //     .catch((err) => console.log(err));

  //   dispatch(selectedProducts(response.data));
  // };

  useEffect(() => {
    if (productId && productId !== "") {
      dispatch(fetchProduct(productId));
    }
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [productId]);

  return (
    <>
      <>
        <h2>Product Details</h2>
        <div className="container productContainer">
          {Object.keys(product).length === 0 ? (
            <div className="spinner-border text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <div className="d-flex m-1 p-3">
              <div className="left">
                <img src={image} alt="productImage" className="productImg" />
              </div>
              <div className="right">
                <h2>{title}</h2>
                <br />
                <h2>
                  <span className="badge rounded-pill bg-success">
                    $ {price}
                  </span>
                </h2>
                <br />
                <h4 className="bg-warning p-2 text-dark bg-opacity-50 category">
                  {category}
                </h4>
                <br />
                <p className="desc">{description}</p>
                <br />
                <button type="button" className="buton">
                  Add To Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </>
    </>
  );
};

export default ProductDetails;
