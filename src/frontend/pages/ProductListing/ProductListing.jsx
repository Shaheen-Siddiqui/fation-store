import { useContext } from "react";
import {
  faStar,
  faCartPlus,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Audio } from "react-loader-spinner";
import { Link } from "react-router-dom";

//internal imports
import "./ProductListing.css";
import "../../components/Header/Header.css";
import "../Authentication/authentication.css";
import { filterContext } from "../../hooks/context/filterContext";
import { productContext } from "../../hooks/context/productsContext";
import { SideBar } from "../../components/SideBar/SideBar";

export const ProductListing = () => {
  const { search, filterOnlyGifts, filterBySearch, productLoding } =
    useContext(filterContext);

  const { isAddedIntoCart, setProductDispatch } = useContext(productContext);

  return (
    <div>
      <SideBar />

      <div className="all-products-page">
        {productLoding ? (
          <h1 style={{ marginLeft: "40rem" }}>
            <Audio
              height="80"
              width="80"
              radius="9"
              color="blue"
              ariaLabel="loading"
              wrapperClass
            />
            Loading...
          </h1>
        ) : (
          <>
            {!filterBySearch.length ? (
              <h1
                style={{ color: "gray" }}
              >{`Opps! nothing Matches Title: ${search}`}</h1>
            ) : (
              <>
                {filterOnlyGifts.map((item) => {
                  const { category, rating, price, title, imageUrl, _id } =
                    item;
                  return (
                    <div className="product" key={_id}>
                      {/* <Link to={`/product-detail/${_id}`}> */}
                      <img
                        className="product-img"
                        src={imageUrl}
                        alt="a new collections"
                      />
                      {/* </Link> */}

                      <div className="product-cantent">
                        <h2 className="product-name">{title}</h2>
                        <h2>price: {price} &nbsp;</h2>
                        <p className="product-category-name">{category} </p>
                        <div className="rating-stuff"></div>
                        <div className="cart-wishlist">
                          <div className="addtocart-btn">
                            {isAddedIntoCart(item) ? (
                              <Link to="/cart">
                                <button className="login-btns">
                                  <FontAwesomeIcon icon={faRightToBracket} /> Go
                                  to cart
                                </button>
                              </Link>
                            ) : (
                              <button
                                className="login-btns"
                                onClick={() =>
                                  setProductDispatch({
                                    type: "ADD_TO_CART",
                                    payload: item,
                                  })
                                }
                              >
                                <FontAwesomeIcon icon={faCartPlus} /> add to
                                cart
                              </button>
                            )}
                          </div>
                          <strong
                            style={{ fontSize: "1.6rem", color: "black" }}
                          >
                            <FontAwesomeIcon icon={faStar} />
                            <em>{rating}</em>
                          </strong>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export { ProductListing as default };
