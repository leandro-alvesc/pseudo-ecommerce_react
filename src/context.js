import React, { Component } from "react";
import { produtosJogos, detalheProduto } from "./data";

const ContextProduto = React.createContext();

class ProvedorProduto extends Component {
  state = {
    sortTypeName: true,
    sortTypePrice: true,
    sortTypeScore: true,
    products: [],
    detalheProduto: detalheProduto,
    cart: [],
    modalOpen: false,
    modalProduct: detalheProduto,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    cartItems: 0,
  };
  componentDidMount() {
    this.setProdutcs();
  }
  setProdutcs = () => {
    let tempProducts = [];
    produtosJogos.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  getCartTotal = () => {
    return this.cartTotal;
  };

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detalheProduto: product };
    });
  };
  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: [...this.state.cart, product],
          cartItems: (this.state.cartItems += 1),
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count += 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          cartItems: (this.state.cartItems += 1),
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count -= 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return {
            cart: [...tempCart],
            cartItems: (this.state.cartItems -= 1),
          };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };
  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    const tempCartItems = removedProduct.count;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts],
          cartItems: (this.state.cartItems -= tempCartItems),
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  clearCart = () => {
    this.setState(
      () => {
        return {
          cart: [],
          cartItems: 0,
        };
      },
      () => {
        this.setProdutcs();
        this.addTotals();
      }
    );
  };
  addTotals = () => {
    let subTotal = 0;
    let countTotal = 0;
    this.state.cart.map((item) => (countTotal += item.count));
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal >= 250 ? 0 : 10 * countTotal;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;

    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };
  sortName = () => {
    let tempProducts = [...this.state.products];
    if (this.sortTypeName) {
      this.sortTypeName = false;
      tempProducts.sort((a, b) => (a.name < b.name ? 1 : -1));
    } else {
      this.sortTypeName = true;
      tempProducts.sort((a, b) => (a.name > b.name ? 1 : -1));
    }

    this.setState(() => {
      return {
        products: [...tempProducts],
      };
    });
  };
  sortPrice = () => {
    let tempProducts = [...this.state.products];
    if (this.sortTypePrice) {
      this.sortTypePrice = false;
      tempProducts.sort((a, b) => (a.price < b.price ? 1 : -1));
    } else {
      this.sortTypePrice = true;
      tempProducts.sort((a, b) => (a.price > b.price ? 1 : -1));
    }

    this.setState(() => {
      return {
        products: [...tempProducts],
      };
    });
  };
  sortScore = () => {
    let tempProducts = [...this.state.products];
    if (this.sortTypeScore) {
      this.sortTypeScore = false;
      tempProducts.sort((a, b) => (a.score > b.score ? 1 : -1));
    } else {
      this.sortTypeScore = true;
      tempProducts.sort((a, b) => (a.score < b.score ? 1 : -1));
    }

    this.setState(() => {
      return {
        products: [...tempProducts],
      };
    });
  };
  render() {
    return (
      <ContextProduto.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          sortName: this.sortName,
          sortPrice: this.sortPrice,
          sortScore: this.sortScore,
          getCartTotal: this.getCartTotal,
        }}
      >
        {this.props.children}
      </ContextProduto.Provider>
    );
  }
}

const ConsumerProduto = ContextProduto.Consumer;

export { ProvedorProduto, ConsumerProduto };
