import styled from "styled-components";

export const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.5s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.5 linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 5px 0px rga(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.2s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightGreen);
    border: none;
    color: var(--mainWhite);
    font-size: 1.6rem;
    border-radius: 0 0 0 0.2rem;
    transform: translate(100%, -100%);
  }
  .incart {
    display: inline-block;
    position: absolute;
    right: 0;
    top: 0;
    height: 2.5rem;
    padding: 0.2rem 0.4rem;
    background: var(--lightGreen);
    border: none;
    color: var(--mainWhite);
    font-size: 1.3rem;
    border-radius: 0 0 0 0.2rem;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
    transition: all 0.2s linear;
  }
  .cart-btn:hover {
    color: var(--mainGreen);
    cursor: pointer;
  }
`;
