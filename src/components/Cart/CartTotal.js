import React from "react";
import { Link } from "react-router-dom";

export default function CartTotal({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                limpar carrinho
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal:</span>
              <strong>R$ {cartSubTotal.toFixed(2).toString().replace(".", ",")}</strong>
            </h5>
            <h5>
              <span className="text-title">frete:</span>
              <strong>R$ {cartTax.toFixed(2).toString().replace(".", ",")}</strong>
            </h5>
            <h5>
              <span className="text-title">total:</span>
              <strong>R$ {cartTotal.toFixed(2).toString().replace(".", ",")}</strong>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
