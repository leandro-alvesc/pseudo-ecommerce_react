import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { ConsumerProduto } from "../context";

const Navbar = () => {
  return (
    <ConsumerProduto>
      {(value) => {
        const { cartItems } = value;
        console.log(value);
        return (
          <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            <Link to="/">
              <img src={logo} alt="loja" className="navbar-brand" />
            </Link>
            <ul className="navbar-nav align-items-center">
              <Switch>
                <Route exact path="/">
                  {() => {
                    return <li className="nav-item ml-5">Produtos</li>;
                  }}
                </Route>
                {/* 
                <Route path="/details">
                  {() => {
                    return <li className="nav-item ml-5">Detalhes</li>;
                  }}
                </Route>
                */}
                <Route path="/cart">
                  {() => {
                    return <li className="nav-item ml-5">Carrinho</li>;
                  }}
                </Route>
                <Route>
                  {() => {
                    return (
                      <li className="nav-item ml-5">Página não encontrada</li>
                    );
                  }}
                </Route>
              </Switch>
            </ul>
            <Link to="/cart" className="ml-auto">
              <ButtonContainer>
                <span className="mr-2">
                  <i className="fas fa-cart-plus" />
                </span>
                Carrinho ({cartItems})
              </ButtonContainer>
            </Link>
          </NavWrapper>
        );
      }}
    </ConsumerProduto>
  );
};

const NavWrapper = styled.nav`
    .nav-link{
        color:var(--mainWhite) !important;
        font-size1.3rem;
        text-transform:capitalize !important;
    }
`;
export default Navbar;
