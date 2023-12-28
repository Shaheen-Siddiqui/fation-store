import { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareMinus,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

//internal imports
import "./Cart.css";
import "../../pages/Home/Home.css";
import "../Authentication/authentication.css";
import { empatyCart } from "../../assets";
import { productContext } from "../../hooks/context/productsContext";

export const Cart = () => {
  const {
    cart,
    setProductDispatch,
    priceOfProductsWithQuantity,
    totalPrice,
  } = useContext(productContext);

  
  return (
    <div>
      <center>
        <h1>Products In My Cart {`(${cart.length})`}</h1>
      </center>
      {!cart.length ? (
        <div className="cart-case">
          <img
            className="emapty-cart-img"
            src={empatyCart}
            alt="emapty cart message"
          />
          <center>
            <Link to="/product-listing">
              <button className="button">
                <span>Shop Now!! </span>
              </button>
            </Link>
          </center>
        </div>
      ) : (
        <section className="cart-page-detail-case">
          <div className="single-card-wrap">
            {cart.map((item) => {
              const {
                category,
                price,
                imageUrl,
                qty,
                _id,
              } = item;
              return (
                <div className="single-card" key={_id}>
                  <img
                    src={imageUrl}
                    alt="new bedsheets new designs"
                    className="single-card-img"
                  />
                  <div className="card-rightside">
                    <h2 className="card-heading">{category}</h2>
                    <div className="product-price">
                      <h2>₹ {price}</h2>
                    </div>
                    <div className="product-quantity">
                      <p>Quantity:</p>
                      <button
                        className={
                          qty <= 1 ? "not-alowed" : "qty-logo not-alowed-btn"
                        }
                        disabled={qty <= 1}
                        onClick={() => {
                          setProductDispatch({
                            type: "DECREMENT_ITEM",
                            payload: _id,
                          });
                          toast.error("Quantity Decreased", {
                            className: "toast-styling",
                          });
                        }}
                      >
                        <FontAwesomeIcon icon={faSquareMinus} size="xl" />
                      </button>
                      <h4>{qty}</h4>
                      <button className="not-alowed-btn">
                        <FontAwesomeIcon
                          icon={faSquarePlus}
                          size="xl"
                          className="qty-logo"
                          onClick={() => {
                            setProductDispatch({
                              type: "INCREMENT_ITEM",
                              payload: _id,
                            });
                            toast.success("Quantity Increased", {
                              className: "toast-styling",
                            });
                          }}
                        />
                      </button>
                    </div>

                    <button
                      className="card-btn remove-card-btn"
                      onClick={() =>
                        setProductDispatch({
                          type: "REMOVE_FROM_CART",
                          payload: _id,
                        })
                      }
                    >
                      Remove From Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="card-price-detail">
            
            <h2 className="price-details">Price details</h2>
            <div className="price-string-number">
              <div className="price-strings">
                <p>Price [{`${cart.length}`} items]</p>
                <p>Delivery Chaeges</p>
              </div>
              <div className="price-numbers">
                <p>₹ {priceOfProductsWithQuantity}</p>
                <p>As per conversation</p>
              </div>
            </div>
            <div className="total-amount-case">
              <h2>Total Amount</h2>
              <h2>
                ₹{totalPrice}
              </h2>
            </div>
            <p className="discount-price">
              you will save ₹ 0 on this order
            </p>
            <Link to="/checkout">
              <button className="login-btns checkout-btn">Checkout</button>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export { Cart as default };
