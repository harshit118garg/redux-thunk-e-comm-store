import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="item shadow" key={id}>
        <Link to={`/product/${id}`}>
          <div className="card-container">
            <img src={image} className="card-img-top" alt="item" />
            <div className="card-body">
              <h3 className="card-title">{title}</h3>
              <p className="card-text">$ {price}</p>
              <p className="card-category">{category}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <>
      {Object.keys(products).length === 0 ? (
        <div class="text-center">
          <div class="spinner-border text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        renderList
      )}
    </>
  );
};

export default ProductComponent;
