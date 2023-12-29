import { createContext, useReducer } from "react";
import { productReducer } from "../reducer/ProductReducer";

//------------//
export const productContext = createContext();
export const ProductContextProvider = ({ children }) => {
  const [productState, setProductDispatch] = useReducer(productReducer, {
    cart: [],
  });
  const { cart } = productState;

  const priceOfProductsWithQuantity = cart.reduce(
    (acc, { price, qty }) => (acc = acc + Number(price)) * qty,
    0
  );

  const totalPrice = priceOfProductsWithQuantity;

  const productsName = cart.map((value) => value);

  const isAddedIntoCart = (productItem) =>
    cart.find((item) => item._id === productItem._id);

 

  return (
    <productContext.Provider
      value={{
        cart,
        setProductDispatch,
        isAddedIntoCart,
        priceOfProductsWithQuantity,
        totalPrice,
        productsName,
      }}
    >
      {children}
    </productContext.Provider>
  );
};
