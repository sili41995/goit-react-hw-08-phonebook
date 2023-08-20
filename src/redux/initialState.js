const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  auth: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
  },
};

export default initialState;
