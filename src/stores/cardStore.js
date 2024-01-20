import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";


const CHANGE_EVENT = "change";
let _cards = [];
let _selectedCard = null;


class CardStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getCards() {
        return _cards;
    }

    deleteCard(id) {
        const index = _cards.findIndex(card => card.id === id);
    
        if (index !== -1) {
          if(_selectedCard && _selectedCard.id===id) {
            _selectedCard=null;
          }
          _cards.splice(index, 1);
          this.emitChange();
        }
    }

    getSelectedCard() {
        return _selectedCard;
    }

    changeSelectedCard(newCard) {
        _selectedCard = newCard;
        this.emitChange();
    }
}

const store = new CardStore();


dispatcher.register((action) => {
    switch (action.actionTypes) {
        case actionTypes.GET_CARDS:
            _cards = action.cards;
            store.emitChange();
            break;
        // case actionTypes.DELETE_CARD:
        //     store.deleteCard(action.id);
        //     break;
        // case actionTypes.CHANGE_SELECTED_CARD:
        //     store.changeSelectedCard(action.newCard);
        //     break;
        // case actionTypes.GET_SELECTED_CARD:
        //     store.getSelectedCard();
        //     break;
        default:
    }
});

export default store;
