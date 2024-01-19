import React, { Component } from 'react';
import './App.scss';
import ProductList from './Components/ProductList';
import ProductDescription from './Components/ProductDescription';



export type ProductObjectType = {
  id:number,
  title:string,
  description:string,
  price:number,
  images:string[]
};


interface ComponentState {
  loading: Boolean;
  selectedCardId:number|null;
}



class App extends Component<{},ComponentState>{

  myMap: Map<number, ProductObjectType> = new Map();


  state = {
    loading:true,
    selectedCardId:null,
  };


  


  componentDidMount() {     // instead of useEffect 
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const jsonData = await response.json();
      this.myMap = new Map(jsonData.products.map((item: ProductObjectType) => [item.id, item]));

      this.setState({
        loading: false,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  changeSelectedCard = (cardId: number) => {
    this.setState({
      selectedCardId: cardId,
    },()=>console.log(this.state.selectedCardId));
  };




  getSelectedCardData=()=>this.state.selectedCardId;


  render() {
    const { loading } = this.state;
    return (
      <div className="App">
        {loading ? (
          <p>Loading.....</p>
        ) : (
          <div className='AppStyle'>
            <ProductList 
              changeSelectedCard={this.changeSelectedCard} 
              myMap={this.myMap}
            />
            <ProductDescription  
              getSelectedCardData={this.getSelectedCardData} 
              myMap={this.myMap}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
