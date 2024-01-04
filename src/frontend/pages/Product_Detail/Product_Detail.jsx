import React, { useState } from 'react';
import './Product_Detail.css'; // Ensure you have a Product_Detail.css file

const Product_Detail = () => {
  const [selectedSize, setSelectedSize] = useState('Medium'); // Default selected size
  const [selectedImage, setSelectedImage] = useState(''); // No image selected by default

  // Placeholder array for image thumbnails
  const imageThumbnails = [
    { src: 'https://images.thdstatic.com/productImages/1cdc5775-002e-44a4-8e0e-7b6f3f645c45/svn/oak-tileon-kitchen-prep-tables-aybszhd1734-64_600.jpg', alt: 'Image 1' },
    { src: 'https://images.thdstatic.com/productImages/1cdc5775-002e-44a4-8e0e-7b6f3f645c45/svn/oak-tileon-kitchen-prep-tables-aybszhd1734-64_600.jpg', alt: 'Image 2' },
    { src: 'https://images.thdstatic.com/productImages/1cdc5775-002e-44a4-8e0e-7b6f3f645c45/svn/oak-tileon-kitchen-prep-tables-aybszhd1734-64_600.jpg', alt: 'Image 3' },
    { src: 'https://images.thdstatic.com/productImages/1cdc5775-002e-44a4-8e0e-7b6f3f645c45/svn/oak-tileon-kitchen-prep-tables-aybszhd1734-64_600.jpg', alt: 'Image 4' }
  ];

  return (
    <div className="detail-product-page">
      <div className="detail-product-container">
        <div className="detail-product-image-section">
          <img src={'https://images.thdstatic.com/productImages/1cdc5775-002e-44a4-8e0e-7b6f3f645c45/svn/oak-tileon-kitchen-prep-tables-aybszhd1734-64_600.jpg' || 'default-image.jpg'} alt="Selected Product" className="detail-product-image"/>
        </div>
        <div className="detail-product-details-section">
          <div className="detail-product-details">
            <h1>Armchair HUNDESTED</h1> <br />
            <h2 className="price">$243.98</h2>
            
            {/* Size Selection */}
            <div className="selection-group">
              <h2>Available Small Size:</h2>
              <div className="size-options">
                {[ 18, 20 ,22, 24, 26, 28, 30,32].map(size => (
                  <button 
                    key={size}
                    className={`size-option ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="selection-group">
              <h2>Available Big Size:</h2>
              <div className="size-options">
                {[ 18, 20 ,22, 24, 26, 28, 30,32].map(size => (
                  <button 
                    key={size}
                    className={`size-option ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="selection-group">
              <h3>Color Available:</h3>
              <div className="size-options">
                {['red', 'pink', 'blue'].map(color => (
                  <button 
                    key={color}
                    style={{backgroundColor: `${color}`}}
                    onClick={() => setSelectedSize(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>


            {/* Image Selection */}
            <div className="selection-group">
              <h3>Select Color:</h3>
              <div className="image-options">
                {imageThumbnails.map((image, index) => (
                  <img 
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={`image-thumbnail ${selectedImage === image.src ? 'active' : ''}`}
                    onClick={() => setSelectedImage(image.src)}
                  />
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <button className="add-to-cart">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_Detail;
