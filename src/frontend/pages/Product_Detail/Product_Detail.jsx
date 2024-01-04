import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { filterContext } from "../../hooks/context/filterContext";
import { faRightToBracket, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom'

import "./Product_Detail.css"; // Ensure you have a Product_Detail.css file
import { productContext } from "../../hooks/context/productsContext";




const Product_Detail = () => {
  const [currentImage, setCurrentImage] = useState(null);
  const { filterOnlyGifts } = useContext(filterContext);
  const {isAddedIntoCart, setProductDispatch}=useContext(productContext)
  const { productId } = useParams();
  const findProduct = filterOnlyGifts.find((item) => item?._id === productId);

  const currentCrousel = findProduct?.crouselImage.find(
    (_, index) => index === currentImage
  );

  return (
    <div className="detail-product-page">
      <div className="detail-product-container">
        <div className="detail-product-image-section">
          <img
            src={currentCrousel || findProduct?.imageUrl}
            alt="Selected Product"
            className="detail-product-image"
          />
        </div>
        <div className="detail-product-details-section">
          <div className="detail-product-details">
            <h1>{findProduct?.title.toUpperCase()}</h1> <br />
            <h2 className="price">Price: {findProduct?.price}</h2>
            {/* Size Selection */}
            <div className="selection-group">
              <h2>Available Size:</h2>
              <div className="size-options">
                {findProduct?.smallSize.map((size, index) => (
                  <button key={index} className="size-option">
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="selection-group">
              <h3>Color Available:</h3>
              <div className="size-options">
                {findProduct?.availableColor.map((color, index) => (
                  <button key={index} style={{ backgroundColor: `${color}` }}>
                    {color}
                  </button>
                ))}
              </div>
            </div>
            {/* Image Selection */}
            <div className="selection-group">
              <h3>Choose Color:</h3>
              <div className="image-options">
                {findProduct?.crouselImage.map((image, index) => {
                  return (
                    <img
                      key={index}
                      src={image}
                      alt="scroll crousel"
                      className="image-thumbnail"
                      onClick={() => setCurrentImage(index)}
                    />
                  );
                })}
              </div>
            </div>
            
            <div >
              {isAddedIntoCart(findProduct) ? (
                <Link to="/cart">
                  <button className="add-to-cart">
                    <FontAwesomeIcon icon={faRightToBracket} /> Go to cart
                  </button>
                </Link>
              ) : (
                <button className="add-to-cart"
                  onClick={() =>
                    setProductDispatch({
                      type: "ADD_TO_CART",
                      payload: findProduct,
                    })
                  }
                >
                  <FontAwesomeIcon icon={faCartPlus} /> add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_Detail;
