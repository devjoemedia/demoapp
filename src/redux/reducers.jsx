const initialState = {
  user: null,
  authenticated: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };

    case "SET_AUTHENTICATED":
      return { ...state, authenticated: action.payload };

    default:
      return state;
  };
};