import React, { Component } from 'react';
import './App.scss';
import ProductList from './Components/ProductList';
import ProductDescription from './Components/ProductDescription';
import cardStore from './stores/cardStore'
import { getCards } from './actions/cardActions';



export type ProductObjectType = {
  id:number,
  title:string,
  description:string,
  price:number,
  images:string[]
};


interface MyComponentState {
  cards : ProductObjectType[]
}




class App extends Component<{},MyComponentState>{

  state={
    cards:cardStore.getCards(),
  }

  componentDidMount() {
    cardStore.addChangeListener(this.onChange);
    if (cardStore.getCards().length === 0) {
      getCards();
    }
  }

  componentWillUnmount() {
    cardStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState({
      cards: cardStore.getCards(),
    },()=>console.log(this.state.cards));
  };

  render() {
    return (
      <div className="App">
        {cardStore.getCards().length===0? (
          <p>Loading.....</p>
        ) : (
          <div className='AppStyle'>
            <ProductList/>
            <ProductDescription/>
          </div>
        )}
      </div>
    );
  }
}

export default App;
