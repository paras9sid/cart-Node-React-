import React from "react";
import CartItem from "./CartItem";


const Cart = (props) => {
   
    const {products} = props;
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
                        onIncreaseQuantity = {props.onIncreaseQuantity }
                        onDecreaseQuantity = {props.onDecreaseQuantity }
                        onDeleteProduct = {props.onDeleteProduct}
                    />
                    )
                })
            }
            
           
        </div>
    );
}


        
export default Cart;