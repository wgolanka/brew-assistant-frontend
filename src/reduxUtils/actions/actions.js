import axios from "axios";
import { userTeas, teas } from "../actionsType/actionsType";
import { API } from "../../api/API";

const startFetchLogin = () => {
    return {
        type: teas.START_FETCH_TEAS,
        loading: true
    };
};

const setFetchTeas = (fetchedTeas) => {
    return {
        type: teas.SET_FETCH_TEAS,
        payload: {
            teas: fetchedTeas,
            loading: false
        }
    };
};

const startSubmitTeas = () => {
    return {
        type: teas.START_SUBMIT_TEA,
        loading: true
    }
};

const startFetchUserTeas = () => {
    return {
        type: userTeas.START_FETCH_USER_TEAS,
        loading: true
    }
};

const setFetchUserTeas = (fetchedTeas) => {
    return {
        type: teas.SET_FETCH_USER_TEAS,
        payload: {
            teas: fetchedTeas,
            loading: false
        }
    };
};

export const actionFetchTeas = () => (dispatch) => {
    dispatch(startFetchLogin());

    axios.get(API.GET_TEAS)
        .then((response) => {
            const teas = response.data.map((data) => {
                const { id, name, originCountry, author, description, caffeineContent, imageLink } = data;
                return {
                    id,
                    name,
                    originCountry,
                    author,
                    description,
                    caffeineContent,
                    imageLink
                }
            });

            dispatch(setFetchTeas(teas));
        })
        .catch((e) => {
            console.log('e', e);
        });
};

export const actionFetchUserTeas = (userId) => (dispatch) => {
    dispatch(startFetchUserTeas());
    const getUrl = API.GET_USER_TEAS + userId;
    console.log('action user id', userId);
    console.log('action whole url with id', getUrl);
    if(userId !== 'init userId'){

        axios.get(getUrl)
            .then((response) => {
                const teas = response.data.map((data) => {
                    const { id, name, originCountry, author, description, caffeineContent, imageLink } = data;
                    return {
                        id,
                        name,
                        originCountry,
                        author,
                        description,
                        caffeineContent,
                        imageLink
                    }
                });

                dispatch(setFetchUserTeas(teas));
            })
            .catch((e) => {
                console.log('e', e);
            });
    }

};


export const actionSubmitTea = (newTea) => (dispatch) => {
    dispatch(startSubmitTeas());

    console.log('newTea', newTea);

    const { name, originCountry, caffeineContent, description, imageLink } = newTea;

    axios.post(API.POST_TEA, null, {
        params: {
            name,
            originCountry,
            caffeineContent,
            description,
            imageLink
        }
    }).then(
        function (response) {
            console.log(' Submit tea response ' + response.status);
        }
    );

};

