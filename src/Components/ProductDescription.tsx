import React, { Component } from 'react';
import { ProductObjectType } from '../App';
import './ProductDescription.scss'
import cardStore from "../stores/cardStore";





class ProductDescription extends Component<{}> {


  render() {
    let curCard:ProductObjectType=cardStore.getSelectedCard();
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