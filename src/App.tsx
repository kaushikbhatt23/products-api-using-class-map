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
  loading: boolean;
  error: string | null;
}




class App extends Component<{},MyComponentState>{

  state={
    loading: cardStore.getLoading(),
    error: cardStore.getError(),
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
      loading: cardStore.getLoading(),
      error: cardStore.getError(),
    });
  };

  render() {
    const {loading}=this.state;
    return (
      <div className="App">
        {loading? (
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
