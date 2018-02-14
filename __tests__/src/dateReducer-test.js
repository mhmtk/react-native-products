import dataReducer from '../../src/reducers/dataReducer'
import * as types from '../../src/constants'

const initialState = {
    data: [],
    isFetching: false,
    error: false
}
describe('dateReducer', () => {
    it('should return the initial state', () => {
        expect(dataReducer(undefined, {})).toEqual(
            {          
                data: [],
                isFetching: false,
                error: false
            }
        )
    })

    it('should handle FETCHING_DATA', () => {
        expect(dataReducer({}, {
            type: types.FETCHING_DATA
        })).toEqual({
            data: [],
            isFetching: true
        })

        expect(dataReducer({
            data: [{ dummy: "data" }]
        }, {
            type: types.FETCHING_DATA
        })).toEqual({
            data: [],
            isFetching: true
        })
    })

    it('should handle FETCHING_DATA_SUCCESS', () => {
        expect(dataReducer(initialState, {
            type: types.FETCHING_DATA_SUCCESS,
            data: [{ dummy: "data" }]
        })).toEqual({
            data: [{ dummy: "data" }],
            isFetching: false,
            error: false
        })

        expect(dataReducer({
            data: [{dummy: "data"}]
        }, {
            type: types.FETCHING_DATA_SUCCESS,
            data: [{ dummy2: "data2" }]
        })).toEqual({
            data: [{ dummy2: "data2" }],
            isFetching: false,
            error: false
        })
    })

    describe('it should handle FETCHING_DATA_FAILURE', () => {
        expect(dataReducer({}, {
            type: types.FETCHING_DATA_FAILURE
        })).toEqual({
            isFetching: false,
            error: true
        });

        expect(dataReducer({
            data: [{ dummy: "data" }],
            isFetching: false,
            error: false
        }, {
            type: types.FETCHING_DATA_FAILURE
        })).toEqual({
            data: [{ dummy: "data" }],
            isFetching: false,
            error: true
        });
    });
});
