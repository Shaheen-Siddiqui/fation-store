import "./PlaceOrderModal.css";
import "../Header/Header.css";
import { Link } from "react-router-dom";

export const PlaceOrderModal = () => {
  return (
    <div className="modal-case">
      <h1 className="order-place-message">
        Thank you for your order! Your order has been successfully placed <span>🥳🎉🎊 </span>
      </h1>
      <Link to="/">
      <button className="modal-close">
        <span>Go Back </span>
      </button>
      </Link>
    </div>
  );
};
