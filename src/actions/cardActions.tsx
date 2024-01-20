import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";
import data from "../db.json";
import axios from 'axios';


export function getCards() {
    dispatcher.dispatch({ type: actionTypes.FETCH_DATA_PENDING });  

    // Make the API request 
    axios.get('https://dummyjson.com/products')
    .then(response=>{
        dispatcher.dispatch({
        actionTypes: actionTypes.FETCH_DATA_SUCCESS,
        payload: response.data.products,
    });
    })
    .catch(error => {
        dispatcher.dispatch({
        type: actionTypes.FETCH_DATA_FAILURE,
        payload: error.message,
    });
    });
}

