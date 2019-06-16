import { userTeas } from '../actionsType/actionsType';
import { updateObject } from "../../utility/utility";

const INITIAL_STATE = {
    teas: [
        {
            name: 'init name',
            originCountry: 'init country',
            id: 'init id',
            author: {
                id: 'init author id',
                name: 'init author name',
                surname: 'init surname'
            },
            description: 'init description',
            caffeineContent: 'init 0.0',
            imageLink: 'https://bit.ly/31eaNeG'
        }
    ],
    error: '',
    loading: false,
};

const startFetchUserTeas = (state, action) => {
    const { loading } = action;

    return updateObject(state, {
        loading
    });
};

const setFetchUserTeas = (state, action) => {
    const { userTeas, loading } = action.payload;

    return updateObject(state, {
        userTeas,
        loading,
    });
};

const userTeasReducer = (state = INITIAL_STATE, action = {}) => {
    const payload = {
        [userTeas.START_FETCH_USER_TEAS]: startFetchUserTeas,
        [userTeas.SET_FETCH_USER_TEAS]: setFetchUserTeas,
    };

    return (payload[action.type] || (() => state))(state, action);
};

export default userTeasReducer;