import React, { Component } from 'react';
import { ProductObjectType } from '../App';
import ListCard from './ListCard'; 
import './ProductList.scss'



interface ProductDescriptionProps {
    changeSelectedCard: (cardId: number) => void
    myMap: Map<number, ProductObjectType>;
}

class ProductList extends Component<ProductDescriptionProps, {}> {
    render() {
        const { myMap } = this.props; 
        return (
          <div className='containerStyle'>
            {Array.from(myMap.entries()).map(([productId, productDetails]) => (
              <ListCard
                key={productId}
                productDetails={productDetails}
                changeSelectedCard={this.props.changeSelectedCard}
              />
            ))}
          </div>
        );
      }
}

export default ProductList;
