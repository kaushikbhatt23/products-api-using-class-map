import React, { Component } from 'react';
import './ListCard.scss';
import { ProductObjectType } from '../App';
import cardStore from "../stores/cardStore";

interface CardProps {
  productDetails: ProductObjectType;
}

class Card extends Component<CardProps> {

  handleDelete = () => {
    const id = this.props.productDetails.id;
    cardStore.deleteCard(id); 
  };



  handleButtonClick = () => {
    const newCard :ProductObjectType=this.props.productDetails ;
    cardStore.changeSelectedCard(newCard);
  };


  render() {
    const { title, description } = this.props.productDetails;

    return (
      <div className='cardStyle'>
        <h3>{title}</h3>
        <hr className='lineStyle' />
        <p>{description}</p>
        <button onClick={this.handleDelete}>Delete</button>
        <button onClick={this.handleButtonClick}>Select</button>
      </div>
    );
  }
}

export default Card;
