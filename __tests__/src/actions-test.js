import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../../src/actions';
import * as types from '../../src/constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('data service', () => {
  let httpClientMock;
  let store;
  beforeEach(() => {
    httpClientMock = {
      getCategories: jest.fn(() => Promise.resolve())
    };

    store = mockStore({});
  });

  test('async task, success', () => {
    httpClientMock.getCategories = jest.fn(() => Promise.resolve({
      data: [{ dummy: "mock"}]
    }));

    const expectedActions = [
      { type: types.FETCHING_DATA },
      { type: types.FETCHING_DATA_SUCCESS, data: [{ dummy: "mock"}] }
    ];

    return store
      .dispatch(actions.fetchProducts(httpClientMock))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  test('async task, fail', () => {
      httpClientMock.getCategories = jest.fn(() => Promise.reject());
      
      const expectedActions = [
        { type: types.FETCHING_DATA },
        { type: types.FETCHING_DATA_FAILURE}
      ];
  
      return store
        .dispatch(actions.fetchProducts(httpClientMock))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
  })
});
