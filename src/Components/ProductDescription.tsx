import React, { Component } from 'react';
import { ProductObjectType } from '../App';
import './ProductDescription.scss'

interface CardPropsType {
  getSelectedCardData: () => (number|null);
  myMap: Map<number, ProductObjectType>;
}


interface MyComponentState {
   curCard:number|null;
}



class ProductDescription extends Component<CardPropsType,MyComponentState> {


  // state={
  //   // cardObj:{}
  //   curCard:null,
  // }


  // componentDidMount() {
  //   this.updateObjectData();
  // }

  // componentDidUpdate(prevProps: Readonly<CardPropsType>, prevState: Readonly<MyComponentState>, snapshot?: any): void {
    
  // }

  // updateObjectData() {
  //   let objectData:ProductObjectType =this.props.getSelectedCardData();

  //   this.setState({
  //     cardObj: objectData,
  //   });
  // }



  render() {
    let curCard:number|null= this.props.getSelectedCardData();
    if(curCard==null)
    {
      return <p>Nothing here</p>
    }
    let cardData:ProductObjectType=this.props.myMap.get(curCard)!;
    return (
      <>
        <p>{cardData.title}</p>
        <img className='imageStyle' src={cardData.images[0]} alt={cardData.title}/>
      </>
    );
  }
}

export default ProductDescription;