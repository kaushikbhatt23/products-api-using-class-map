import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";


const CHANGE_EVENT = "change";
let _cards = [];
let _selectedCard = null;
let _loading = true;
let _error = null;


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


    getLoading() {
        return _loading;
    }


    getError() {
        return _error;
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
        case actionTypes.FETCH_DATA_PENDING:
            _loading = true;
            _error = null;
            store.emitChange();
            break;
        
        case actionTypes.FETCH_DATA_SUCCESS:
            _loading = false;
            _cards = action.payload;
            store.emitChange();
            break;
        
        case actionTypes.FETCH_DATA_FAILURE:
            _loading = false;
            _error = action.payload;
            store.emitChange();
            break;
        default:
    }
});

export default store;
