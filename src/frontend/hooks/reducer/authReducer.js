export const authReducer = (authState, { type, payload }) => {

  switch (type) {
    case "USER_VELIDATED":
      return {
        ...authState,
        user: payload.user,
        token: payload.token,
      };
    
    case "USER_LOGOUT":
      return {
        ...authState,
        user: {},
        token: "",
      };

    default:
      throw new Error(`invelid action type ${type} check authReducer`);
  }
};
