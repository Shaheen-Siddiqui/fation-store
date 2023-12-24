import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */
import { image1, image3, image5, image6 } from "../frontend/assets";
export const categories = [
  {
    _id: uuid(),
    categoryName: "preteens Waistcoat",
    categoryImage: 'https://imagescdn.planetfashion.in/img/app/product/6/682463-7205600.jpg?auto=format&w=494.40000000000003',
    description:
      "dressing tables are designed to be both functional and aesthetically pleasing, with a range of styles to suit different tastes.",
  },
  {
    _id: uuid(),
    categoryName: "preteens Kurta",
    categoryImage: 'https://images.meesho.com/images/products/166329149/zjh69_512.webp',
    description:
      "variety of sofas with contemporary designs and superior quality materials that are designed to be both stylish and comfortable",
  },
  {
    _id: uuid(),
    categoryName: "Waistcoat",
    categoryImage: 'https://img.fruugo.com/product/4/60/846796604_max.jpg',
    description:
      " wide range of beds in different sizes and designs to suit every need and taste, providing comfort, durability, and style",
  },
  {
    _id: uuid(),
    categoryName: "young adult's Kurta",
    categoryImage: 'https://desiethnicity.com/cdn/shop/products/803a_53044751311_o_733x.jpg?v=1691904339',
    description:
      "Luxury furniture sets are premium quality furniture pieces that are designed with high-quality materials and intricate detailing to provide a sophisticated and elegant look to any living space.",
  },
];
