import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

//internal imports
import '../Cart/Cart.css';
import './Checkout.css';
import { productContext } from '../../hooks/context/productsContext';
import { PlaceOrderModal } from '../../components/Modal/PlaceOrderModal';

export const Checkout = () => {
  const { cart, priceOfProductsWithQuantity, totalPrice, productsName } =
    useContext(productContext);

  const [modalBox, setModalBox] = useState(false);
  let arr = [];
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
                arr.push('item: ', title, 'quantity: ', qty),
                (
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
                )
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
            <a
              href={`https://wa.me/${9354460572}? text= ${arr.map(
                (item) => item
              )} price : ${totalPrice}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="place-order-btn">
                <img
                  src="https://img.freepik.com/premium-vector/whatsapp-icon-3d-rendering_578229-154.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703289600&semt=ais"
                  alt="WhatsApp Logo"
                />
                <span>Chat on WhatsApp</span>
              </button>
            </a>
          </div>
        </div>
      </div>
      {modalBox && <PlaceOrderModal />}
    </>
  );
};

export { Checkout as default };
