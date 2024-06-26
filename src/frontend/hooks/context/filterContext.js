import axios from "axios";
import { toast } from "react-toastify";

import { createContext, useReducer, useState, useEffect } from "react";
import { filterReducer } from "../reducer/filterReducer";
import { categories } from "../../../db/categories";

//---------//
export const filterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [productLoding, setProductsLoading] = useState(false);
  const [categoriesData] = useState(categories);
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchProducts = async () => {
      setProductsLoading(true)
      try {
        const response = await axios.get(
          "https://admin-panel-j1q2.onrender.com/product"
        );
        setProducts(response.data.map((item) => ({ ...item, qty: 1 })));
        setProductsLoading(false)

      } catch (error) {
        if (error.response && error.response.status === 404) {
          toast.error("No Product Found:");
        } else {
          toast.error("Error fetching products:");
        }
        console.log(error, "error");
      }
    };

    fetchProducts();
  }, []);

  const [filterState, setfilterDispatch] = useReducer(filterReducer, {
    filteredArray: [],
    sort: null,
    search: "",
    rating: "",
    sofa: false,
    beds: false,
    loading: false,
    luxurySets: false,
    dressingTables: false,
    showGifts: false,
  });
  const {
    sort,
    search,
    filteredArray,
    rating,
    beds,
    sofa,
    luxurySets,
    dressingTables,
    showGifts,
  } = filterState;

  let filterBySearch =
    search.length > 0
      ? products.filter(({ title }) =>
          title.toLowerCase().includes(search.toLowerCase())
        )
      : products;

  let filterProductByCategories =
    filteredArray.length > 0
      ? filterBySearch.filter(({ category }) =>
          filteredArray.some((item) => item === category)
        )
      : filterBySearch;

  let sortProductByPrice = sort
    ? filterProductByCategories.sort((a, b) =>
        sort === "high_to_low" ? b.price - a.price : a.price - b.price
      )
    : filterProductByCategories;

  let filterProductByRating = rating
    ? sortProductByPrice.filter((item) => item.rating >= rating)
    : sortProductByPrice;

  const filterOnlyGifts = showGifts
    ? filterProductByRating.filter(
        (item) => item.category === "Gifts for beloved"
      )
    : filterProductByRating;


  return (
    <filterContext.Provider
      value={{
        setfilterDispatch,
        search,
        rating,
        sort,
        beds,
        sofa,
        luxurySets,
        dressingTables,
        filterBySearch,
        productLoding,
        categoriesData,
        products,
        filteredArray,
        filterOnlyGifts,
      }}
    >
      {children}
    </filterContext.Provider>
  );
};
