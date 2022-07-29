import React from "react";
import CartItem from "./CartItem";


class Cart extends React.Component {
    constructor(){
        super();
        this.state = {
            products:[
                {
                        price:9999,
                        title:'Mobile Phone',
                        qty:1,
                        img:'',
                        id:1
                    },
                    {
                        price:999,
                        title:'Watch',
                        qty:3,
                        img:'',
                        id:2
                    },
                    {
                        price:99999,
                        title:'Laptop',
                        qty:5,
                        img:'',
                        id:3
                    }
            ]
        }
            
    }

   render(){
    const {products} = this.state;
    //rendering a list/arr
    // const arr = [1,2,3,4,5];
    return (
        <div className="cart">
             {/* rendering list/arr
            {arr} / */}
            {/* using PROPS -- passing them below after CartItem */}
            {/* <CartItem qty={1} price = {999} title ={'Watch'} img={''}/> */}
            {   products.map((product) => {
                    return (
                    <CartItem // can pass anything isnside below like product and kley fields
                        product = { product } 
                        key = { product.id }
                        //eg more to pass ->> below 
                        // func = { () => {
                        //     console.log('function passed as example');
                        // }}
                        // isLoggedIn= {false}
                        // jsx = {<h1>Test</h1>}
                        // comp = {<CartItem/>}

                    />
                    )
                })
            }
            
           
        </div>
    );
   }
}

        
export default Cart;