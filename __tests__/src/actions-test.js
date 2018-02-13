import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../../src/actions/';
import * as types from '../../src/constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('authentication service', () => {
  let httpClientMock;
  let store;
  beforeEach(() => {
    httpClientMock = {
      getPeople: jest.fn(() => Promise.resolve())
    };

    store = mockStore({});
  });
  
});

