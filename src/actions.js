import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './constants';

export function getData() {
  return {
    type: FETCHING_DATA
  }
}

export function getDataSuccess(data) {
return {
    type: FETCHING_DATA_SUCCESS,
    data
  }
}

export function getDataFailure() {
  return {
    type: FETCHING_DATA_FAILURE
  }
}

export function fetchProducts(httpClient) {
  return (dispatch) => {
    dispatch(getData());
    return httpClient.getProducts()
      .then((data) => {
        dispatch(getDataSuccess(data))
      }, (reason) => {
        dispatch(getDataFailure())
      });
  };
};
