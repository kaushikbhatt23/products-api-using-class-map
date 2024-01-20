import React, { Component } from 'react';
import { ProductObjectType } from '../App';
import './ProductDescription.scss'
import cardStore from "../stores/cardStore";


interface MyComponentState{
  selectedCard:ProductObjectType
}


class ProductDescription extends Component<{},MyComponentState> {

  state={
    selectedCard : cardStore.getSelectedCard()
  }


  onChange = () => {
    this.setState({
      selectedCard : cardStore.getSelectedCard()
    });
  };


  componentDidMount(){
    cardStore.addChangeListener(this.onChange);
  }

  render() {
    let {selectedCard}=this.state;
    if(selectedCard==null)
    {
      return <p>No card selected</p>
    }
    return (
      <>
        <p>{selectedCard.title}</p>
        <img className='imageStyle' src={selectedCard.images[0]} alt={selectedCard.title}/>
      </>
    );
  }
}

export default ProductDescription;