import React, { useState, useEffect ,Component} from "react";
import cardStore from "../stores/cardStore";
import { ProductObjectType } from "../App";
import ListCard from './ListCard'; 
import './ProductList.scss'
import { getCards } from "../actions/cardActions";




interface MyComponentState {
  cards : ProductObjectType[]
}



class ProductList extends Component<{},MyComponentState>{
  
    // state={
    //   cards:cardStore.getCards(),
    // }


    // componentDidMount() {
    //   cardStore.addChangeListener(this.onChange);
    //   if (cardStore.getCards().length === 0) {
    //     getCards();
    //   }
    // }
  
    // componentWillUnmount() {
    //   cardStore.removeChangeListener(this.onChange);
    // }
  
    // onChange = () => {
    //   this.setState({
    //     cards: cardStore.getCards(),
    //   });
    // };

    render() {
        const cards:ProductObjectType[]=cardStore.getCards()!;
        return (
            <div className='containerStyle'>
              {cards.map((item:ProductObjectType)=>
                <ListCard key={item.id}productDetails={item}/>
              )}
            </div>
        );
      }
}

export default ProductList;

