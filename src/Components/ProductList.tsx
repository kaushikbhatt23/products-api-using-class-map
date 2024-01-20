import React, {Component} from "react";
import cardStore from "../stores/cardStore";
import { ProductObjectType } from "../App";
import ListCard from './ListCard'; 
import './ProductList.scss'


interface MyComponentState {
   cards:ProductObjectType[]
}




class ProductList extends Component<{},MyComponentState>{
    state={
      cards:cardStore.getCards(),
    };

    onChange = () => {
      this.setState({
        cards: cardStore.getCards(),
      });
    };

    componentDidMount() {
      cardStore.addChangeListener(this.onChange);
    }


    componentWillUnmount() {
      cardStore.removeChangeListener(this.onChange);
    };



    render() {
        const {cards}=this.state;
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

