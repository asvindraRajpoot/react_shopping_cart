import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  close = () => {
    this.setState({ isOpen: false });
  };
  open = () => {
    this.setState({ isOpen: true });
  };
  render() {
    const { isOpen } = this.state;
    let totalQuantity = this.props.cartItems.reduce((acc, cv) => {
      acc = acc + cv.quantity;
      return acc;
    }, 0);
    let totalAmount = this.props.cartItems.reduce((acc, cv) => {
      acc = acc + cv.price * cv.quantity;
      return acc;
    }, 0);
    if (!isOpen) {
      return <ClosedCart open={this.open} totalQuantity={totalQuantity} />;
    }

    return (
      <aside className="cart">
        <div onClick={this.close} className="close-btn">
          X
        </div>
        <div className="cart-body">
          <div className="cart-heading">
            <div className="cart-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="item-count">{totalQuantity}</span>
            </div>
            <h2>Cart</h2>
          </div>
          {this.props.cartItems.map((item) => (
            <CartItem
              {...item}
              incrementQuantity={this.props.incrementQuantity}
              decrementQuantity={this.props.decrementQuantity}
              deleteItem={this.props.deleteItem}
            />
          ))}

          <div className="cart-checkout">
            <div>
              <p>SUBTOTAL</p>
              <p>$ {totalAmount}</p>
            </div>
            <button onClick={() => alert(`Total amount is: $ ${totalAmount}`)}>
              CHECKOUT
            </button>
          </div>
        </div>
      </aside>
    );
  }
}

function ClosedCart(props) {
  return (
    <div className="close-cart">
      <span onClick={props.open} className="open-btn">
        <div className="cart-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="item-count">{props.totalQuantity}</span>
        </div>
      </span>
    </div>
  );
}

export default Cart;