import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";

//internal imports
import "./Home.css";
import "../../components/Header/Header.css";
import { Footer } from "../../components/Footer/Footer";
import {
  godregBrand,
  hometownBrand,
  nilKamal,
  woodenStreetBrand,
  sliderImages,
} from "../../assets";
import { filterContext } from "../../hooks/context/filterContext";

export const Home = () => {
  const [_, setImageNum] = useState(1);
  const { categoriesData, setfilterDispatch } = useContext(filterContext);

  useEffect(() => {
    setfilterDispatch({ type: "RESET_ALL_FILTER" });
  }, [setfilterDispatch]);

  return (
    <>
      <div className="hero-img-case">
        <SimpleImageSlider
          width={"100%"}
          height={390}
          images={sliderImages}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          onStartSlide={(index, length) => {
            setImageNum(index);
          }}
          autoPlayDelay={2}
        />
      </div>
      <center>
        <Link to="/product-listing">
          <button className="button">
            <span>Shop Now!! </span>
          </button>
        </Link>
      </center>

      {/*  */}
      <h1 className="category-desc">Top Categories of the year</h1>
      <div className="home-categories">
        {categoriesData.map(({ categoryImage, categoryName }, index) => {
          return (
            <figure key={index}
            >
              <img
                className="uniq-img"
                src={categoryImage}
                alt={categoryName}
              />
              <h2>{categoryName}</h2>
            </figure>
          );
        })}
      </div>
      {/*  */}

      <h1 className="category-desc brand-desc">Top Brands</h1>
      <div className="brands-case">
        <img src={godregBrand} alt="" className="unique-brands" />
        <img src={hometownBrand} alt="" className="unique-brands" />
        <img src={nilKamal} alt="" className="unique-brands" />
        <img src={woodenStreetBrand} alt="" className="unique-brands" />
      </div>
      <Footer />
    </>
  );
};

export { Home as default };
