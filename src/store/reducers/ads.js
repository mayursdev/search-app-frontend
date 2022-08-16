const initialState = {
  loading: false,
  error: null,
  list: null,
};

const adsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "FETCH_ADS_ASYNC_PENDING":
      return { ...state, loading: true };

    case "FETCH_ADS_ASYNC_FULFILLED":
      return { ...state, loading: false, list: payload };

    case "FETCH_ADS_ASYNC_REJECTED":
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

export default adsReducer;
