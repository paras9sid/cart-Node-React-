import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

import {
  doc,
  set,
  addDoc,
  setDoc,
  collection,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  where,
  orderBy,
  // doc,
} from "firebase/firestore";
import { db } from "./index";
import { async } from '@firebase/util';
import { app } from 'firebase-admin';

class App extends React.Component {
  constructor(){
        super();
        this.state = {
          products:[],
          loading : true
        }
  }

  //function to change  -- with new version updated code
  async componentDidMount() {
  //this is a realtime listener if you change anything in firebase ui will automatically updated 
    const q = query(
      collection(db, "products"),
      where("price", ">", 0),
      orderBy("price")
    );
    const unsub = await onSnapshot(q, (querySnapshot) => {
      const getProducts = [];
      querySnapshot.forEach((doc) => {
        const product = doc.data();
        product.id = doc.id;
        getProducts.push(product);
      });
    //  console.log(getProducts);
      this.setState({ 
      products: getProducts,
      loading: false 
      });
    });
  }
    

  handleIncreaseQuantity = async(product) => { 
      
      const { products } = this.state;
      const index = products.indexOf(product);
      const docRef = doc(collection(db, "products"), products[index].id);
      await updateDoc(docRef, {
        qty: products[index].qty + 1,
      });
  };
  
  handleDecreaseQuantity = async(product) => {
      
      const { products } = this.state;
      const index = products.indexOf(product);

      if( products[index].qty ===0 ){
        const docRef = doc(collection(db, "products"), products[index].id);
        await updateDoc(docRef, {
          qty: products[index].qty - 1,
        });
      }
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

      if(product.qty > 0){
        cartTotal += product.qty * product.price;
      }    
      return '';
    });

    return cartTotal;
  }

  addProduct = async(product) => {

    const { products } = this.state;
    const docRef = doc(collection(db, "products"));
     // Add a new document in collection "products"
    // docRef.set({
    //   img: '',
    //   price: 12000,
    //   qty: 1,
    //   title: "Washing Machine"
    // })
    //   .then(() => {
    //     console.log("Document successfully written!");
    //   })
    //   .catch((error) => {
    //     console.error("Error writing document: ", error);
    //   });

  }
  render () {
    const {products,loading} = this.state;
    return (
      <div className="App">
        <h1>Cart</h1>
        {/* count dynamic in navbar componenet */}
        <Navbar count = {this.getCartCount()}/> 
        <button onClick={this.addProduct} style={ { padding:10,fontSize:20 } }>Add a product</button>
        <Cart 
          products = {products}
          onIncreaseQuantity = { this.handleIncreaseQuantity }
          onDecreaseQuantity = { this.handleDecreaseQuantity }
          onDeleteProduct = {this.handleDeleteProduct}

        />
        {loading && <h1>Loading Products...</h1>}

        <div style={ { padding:10,fontSize:20 } }>Total : {this.getCartTotal()}</div>
      </div>
      );
  }
}
export default App;
