const initialState = {
  user: null,
  authenticated: false,
  transactions: [],
  campaigns: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };

    case "SET_AUTHENTICATED":
      return { ...state, authenticated: action.payload };

    case "SET_TRANSACTIONS":
      return { ...state, transactions: action.payload };

    case "SET_CAMPAIGNS":
      return {...state, campaigns: action.payload };

    default:
      return state;
  }
};
