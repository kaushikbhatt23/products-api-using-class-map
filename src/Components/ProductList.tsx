import React, { useState, useEffect ,Component} from "react";
import cardStore from "../stores/cardStore";
import { ProductObjectType } from "../App";
import ListCard from './ListCard'; 
import './ProductList.scss'
import { getCards } from "../actions/cardActions";







class ProductList extends Component<{}>{
  
    render() {
        const cards:ProductObjectType[]=cardStore.getCards()!;
        return (
            <div className='containerStyle'>
              {cards.map((item:ProductObjectType)=>
                <ListCard key={item.id} productDetails={item}/>
              )}
            </div>
        );
      }
}

export default ProductList;

