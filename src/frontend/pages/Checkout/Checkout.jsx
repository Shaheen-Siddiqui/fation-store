import { useContext, useState } from "react";

//internal imports
import "../Cart/Cart.css";
import "./Checkout.css";
import { productContext } from "../../hooks/context/productsContext";
import { PlaceOrderModal } from "../../components/Modal/PlaceOrderModal";

export const Checkout = () => {
  const { cart, priceOfProductsWithQuantity, totalPrice, productsName } =
    useContext(productContext);

  const [modalBox, setModalBox] = useState(false);

  const userOrderPlaced = () => setModalBox(true);

  return (
    <>
      <div className="checkout-main-case">
        <div id="checkout-detail-case">
          <div className="total-amount-case">
            <h2>Item Name</h2>
            <h2>Quantity</h2>
          </div>

          <div id="checkout-item-box">
            {productsName.map(({ title, qty }, index) => {
              return (
                <div key={index}>
                  <div className="price-string-number">
                    <div className="price-strings">
                      <p>{title}</p>
                    </div>

                    <div className="price-numbers">
                      <p> {qty}</p>
                    </div>
                  </div>
                  <hr className="checkout-products-hr" />
                </div>
              );
            })}
          </div>

          <div className="total-amount-case">
            <h2>PRICE DETAIL:-</h2>
          </div>

          <div className="price-string-number">
            <div className="price-strings">
              <p>Price [{`${cart.length}`} items]</p>
              <p>Delivery Chaeges</p>
            </div>
            <div className="price-numbers">
              <p>₹ {priceOfProductsWithQuantity}</p>
              <p>As per Cnversation</p>
            </div>
          </div>

          <div className="total-amount-case">
            <h2>Total Amount</h2>
            <h2>₹ {totalPrice}</h2>
          </div>

          <div className="place-order-btncase">
            <button className="place-order-btn" onClick={userOrderPlaced}>
              Place &nbsp; Order
            </button>
          </div>
        </div>
      </div>
      {modalBox && <PlaceOrderModal />}
    </>
  );
};

export { Checkout as default };
