import { teas } from '../actionsType/actionsType';
import { updateObject } from "../../utility/utility";

const INITIAL_STATE = {
    teas: [
        {
            name: 'init name',
            originCountry: 'init country',
            id: 'init id',
            author: {
                name: 'init author name'
            },
            description: 'init description',
            hasCaffeine: 'init has caffeine'
        }
    ],
    error: '',
    loading: false,
};

const startFetchTeas = (state, action) => {
    const { loading } = action;

    return updateObject(state, {
        loading
    });
};

const setFetchTeas = (state, action) => {
  const { teas, loading } = action.payload;

    return updateObject(state, {
        teas,
        loading,
    });
};

const teasReducer = (state = INITIAL_STATE, action = {}) => {
    const payload = {
        [teas.START_FETCH_TEAS]: startFetchTeas,
        [teas.SET_FETCH_TEAS]: setFetchTeas,
    };

    return (payload[action.type] || (() => state))(state, action);
};

export default teasReducer;