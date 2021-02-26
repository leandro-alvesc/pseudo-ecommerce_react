import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ConsumerProduto } from "../context";
import { ProductWrapper } from "./ProductWrapper";
import PropTypes from "prop-types";

function Product(props) {
  const { id, name, price, score, image, inCart } = props.product;
  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <ConsumerProduto>
          {(value) => (
            <div
              className="img-container p-5"
              onClick={() => value.handleDetail(id)}
            >
              {/*<Link to="/details">*/}
              <img src={image} alt="produto" className="card-img-top" />
              {/*</Link>*/}
              {inCart ? (
                <button
                  className="incart"
                  // disabled={inCart ? true : false}
                  onClick={() => {
                    value.removeItem(id);
                  }}
                >
                  Remover
                </button>
              ) : (
                <button
                  className="cart-btn"
                  //disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    //value.openModal(id);
                  }}
                >
                  <i className="fas fa-cart-plus" />
                </button>
              )}
            </div>
          )}
        </ConsumerProduto>
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{name}</p>
          <h5 className="text-green.font-talic mb-0">
            <span className="mr-1"> R$ </span>
            {price.toString().replace(".", ",")}
          </h5>
        </div>
        <div className="card-footer justify-content-between">
          <p className="align-self-center mb-0">Score: {score}</p>
        </div>
      </div>
    </ProductWrapper>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    score: PropTypes.number,
    image: PropTypes.string,
    inCart: PropTypes.bool,
  }).isRequired,
};

export default Product;
