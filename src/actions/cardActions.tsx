import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";
import data from "../db.json";
import { json } from "stream/consumers";





export function getCards() {
    dispatcher.dispatch({
        actionTypes: actionTypes.GET_CARDS,
        cards: data['products'],
        // cards: fetch('https://dummyjson.com/products')
        // .then(res=>res.json())
        // .then(res => res['products'])
    });
}



// export function deleteCard(cardId) {
//     dispatcher.dispatch({
//       type: actionTypes.DELETE_CARD,
//       id: cardId,
//     });
// }


// export function getSelectedCard(card) {
//   dispatcher.dispatch({
//     type: actionTypes.GET_SELECTED_CARD,
//     card,
//   });
// }



// export function changeSelectedCard(newCard) {
//   dispatcher.dispatch({
//     type: actionTypes.CHANGE_SELECTED_CARD,
//     newCard,
//   });
// }


