import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor(){
        super();
        this.state = {
            products:[
                {
                        price:9999,
                        title:'Mobile Phone',
                        qty:1,
                        img:'https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80',
                        id:1
                    },
                    {
                        price:999,
                        title:'Watch',
                        qty:3,
                        img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
                        id:2
                    },
                    {
                        price:99999,
                        title:'Laptop',
                        qty:5,
                        img:'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                        id:3
                    }
            ]
        }
            
    }
    handleIncreaseQuantity = (product) => { 
        
        const { products } = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;

        this.setState({
            products
        });

    }
    handleDecreaseQuantity = (product) => {
       
        const { products } = this.state;
        const index = products.indexOf(product);

        if( products[index].qty ===0 ){
            return;
        }

        products[index].qty -= 1;

        this.setState({
            products
        });
    }

    handleDeleteProduct = (id) => {
        const { products } = this.state;
        const items = products.filter((item)=> item.id !== id);// [{}] will pass the array whose item id is not = to the product id
        this.setState({
            products:items
        });
    }

    getCartCount = () => {
      const {products} = this.state

      let count = 0;

      products.forEach((product) => {
        count += product.qty;
      });

      return count;
    }    

    getCartTotal = () => {
      const {products} = this.state;

      let cartTotal = 0;

      products.map( (product) => {
        cartTotal += product.qty * product.price;
      });

      return cartTotal;
    }

  render () {
    const {products} = this.state;
    return (
      <div className="App">
        <h1>Cart</h1>
        {/* count dynamic in navbar componenet */}
        <Navbar count = {this.getCartCount()}/> 
        <Cart 
        products = {products}
          onIncreaseQuantity = { this.handleIncreaseQuantity }
          onDecreaseQuantity = { this.handleDecreaseQuantity }
          onDeleteProduct = {this.handleDeleteProduct}
        />

        <div style={ { padding:10,fontSize:20 } }>Total : {this.getCartTotal()}</div>
      </div>
      );
  }
}

export default App;
