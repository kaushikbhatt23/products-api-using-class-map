import React, { Component } from 'react';
import { ProductObjectType } from '../App';
import './ProductDescription.scss'
import cardStore from "../stores/cardStore";



interface MyComponentState {
   selectedCard : ProductObjectType;
}



class ProductDescription extends Component<{},MyComponentState> {

  state = {
    selectedCard: cardStore.getSelectedCard(),
  };


  componentDidMount(): void {
    cardStore.addChangeListener(this.handleCardStoreChange);
  }

  componentWillUnmount(): void {
    cardStore.removeChangeListener(this.handleCardStoreChange);
  }

  handleCardStoreChange = (): void => {
    this.setState({
      selectedCard: cardStore.getSelectedCard(),
    });
  };


  render() {
    let curCard:ProductObjectType=cardStore.getSelectedCard();
    // console.log(curCard);
    if(curCard==null)
    {
      return <p>No card selected</p>
    }
    return (
      <>
        <p>{curCard.title}</p>
        <img className='imageStyle' src={curCard.images[0]} alt={curCard.title}/>
      </>
    );
  }
}

export default ProductDescription;