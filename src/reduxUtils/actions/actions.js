import { teas } from "../actionsType/actionsType";
import axios from "axios";
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
    return{
        type: teas.START_SUBMIT_TEA,
        loading: true
    }
};


export const actionFetchTeas = () => (dispatch) => {
    dispatch(startFetchLogin());

    axios.get(API.GET_TEAS)
        .then((response) => {
            console.log('response', response.data);
            const teas = response.data.map((elem) => {
                return {
                    id: elem.id,
                    name: elem.name,
                    originCountry: elem.originCountry,
                    author: elem.author,
                    description: elem.description,
                    caffeineContent: elem.caffeineContent,
                    imageLink: elem.imageLink
                }
            });

            console.log('teas', teas);
            dispatch(setFetchTeas(teas));
        })
        .catch((e) => {
           console.log('e', e);
        });
};


export const actionSubmitTea = (newTea) => (dispatch) => {
    dispatch(startSubmitTeas());

    console.log('newTea', newTea);

    const { formBrewName, formBrewOriginCountry, formCaffeineContent, formBrewDescription, formBrewImglink } = newTea;

    // axios.post(API.POST_TEA, {
    //     name: formBrewName,
    //     originCountry: formBrewOriginCountry,
    //     caffeineContent: formCaffeineContent,
    //     description: formBrewDescription,
    //     imageLink: formBrewImglink
    // }).then(
    //     function (response) {
    //         console.log(' Submit tea response ' +response.status)
    //     }
    // );

};

