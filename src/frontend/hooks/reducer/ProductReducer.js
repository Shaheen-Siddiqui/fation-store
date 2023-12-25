export const productReducer = (productState, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...productState,
        cart: [...productState.cart, payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...productState,
        cart: productState.cart.filter((item) => item._id !== payload),
      };

    case "INCREMENT_ITEM":
      const updatedCart = productState.cart.map((item) => {
        if (item._id === payload) {
          return {
            ...item,
            qty: item.qty + 1, // Incrementing qty by 1
          };
        }
        return item;
      });
      return {
        ...productState,
        cart: updatedCart,
      };

    case "DECREMENT_ITEM":
      return {
        ...productState,
        cart: productState.cart.map((item) => {
          if (item._id === payload && item.qty > 1) {
            return {
              ...item,
              qty: item.qty - 1, // Decreasing quantity by 1, ensuring it doesn't go below 1
            };
          }
          return item;
        }),
      };
    case "CART_FUNCTIONS":
      return {
        ...productState,
        cart: payload,
      };

  
    default:
      throw new Error(`invelid type ${type} check productReducer`);
  }
};
