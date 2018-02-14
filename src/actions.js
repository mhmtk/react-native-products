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
    return httpClient.getCategories()
      .then((categories) => {
        dispatch(getDataSuccess(categories.data))
      }, (reason) => {
        dispatch(getDataFailure())
      });
  };
};
