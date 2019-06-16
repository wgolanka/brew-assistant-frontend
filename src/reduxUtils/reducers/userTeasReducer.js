import { userTeas } from '../actionsType/actionsType';
import { updateObject } from "../../utility/utility";

const INITIAL_STATE = {
    userTeas: [
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
    const { loading } = action.payload;
    console.log('action payload userTeas', action.payload);
    console.log('state teas:', state.userTeas);
    return updateObject(state, {
        userTeas: action.payload.teas,
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