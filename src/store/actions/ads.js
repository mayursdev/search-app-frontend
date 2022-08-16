import axios from "axios";

export const fetchAdsAsyncPending = () => {
  return {
    type: "FETCH_ADS_ASYNC_PENDING",
  };
};

export const fetchAdsAsyncFulfilled = (ads) => {
  return {
    type: "FETCH_ADS_ASYNC_FULFILLED",
    payload: ads,
  };
};

export const fetchAdsAsyncRejected = (error) => {
  return {
    type: "FETCH_ADS_ASYNC_REJECTED",
    payload: error,
  };
};

export const fetchAdsAsync = (searchTerm) => {
  return async (dispatch) => {
    dispatch(fetchAdsAsyncPending());
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(data);
      dispatch(fetchAdsAsyncFulfilled(data));
    } catch (error) {
      dispatch(fetchAdsAsyncRejected(error.message));
    }
  };
};
