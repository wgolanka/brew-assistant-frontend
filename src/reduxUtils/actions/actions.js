import { teas } from "../actionsType/actionsType";
import axios from "axios";
import { api } from "../../api/api";

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

export const actionFetchTeas = () => (dispatch) => {
    dispatch(startFetchLogin());

    axios.get(api.TEAS)
        .then((response) => {
            console.log('response', response.data);
            const teas = response.data.map((elem) => {
                return {
                    id: elem.id,
                    name: elem.name,
                    originCountry: elem.originCountry,
                    author: elem.author,
                    description: elem.description,
                    hasCaffeine: elem.hasCaffeine
                }
            });

            console.log('teas', teas);
            dispatch(setFetchTeas(teas));
        })
        .catch((e) => {
           console.log('e', e);
        });
};

