import React from "react";


class CartItem extends React.Component {
    // adding state components -- js object to store particular item
    // define a constructor
    //always call super(); first before calling 'this' keyword in constructor--otherwise error occurs
    //using below made constrcut call in below divs
    constructor() {
        super();
        this.state = {
            price:9999,
            title:'Mobile Phone',
            qty:1,
            img:''
        }
    }

    increaseQuantity = () => {
        console.log('this',this.state);
    }
    render () {
        // destructring used -- object destructing used
        const { price,title,qty} = this.state;
        return (
            <div className = "cart-item">
                <div className="left-block">

                    {/* passing styles object in image tag writtenbelow */}
                    <img style={styles.image}/>

                </div>
                <div className="right-block">
                    {/* passing styles like fintcolor etc as object inside */}
                    {/* as inline jsx-css -- must be nested */}
                {/* <div style={ { fontSize:25 } }>{this.state.title}</div>
                <div style={ { color:'#777' } }>Rs.{this.state.price}</div>
                <div style={ { color:'#777' } }>Qty: {this.state.qty}</div> */}

                {/* USING DESCTRUCRING METHOD- to avoid decalring this.state in every div lie above*/}
                <div style={ { fontSize:25 } }>{title}</div>
                <div style={ { color:'#777' } }>Rs.{price}</div>
                <div style={ { color:'#777' } }>Qty: {qty}</div>


                <div className="cart-item-actions">
                    {/* Buttons */}
                    {/* flaticon.com for icons */}
                    <img 
                        alt = "increase" className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                        onClick = {this.increaseQuantity}
                    />
                    <img 
                        alt = "decrease" className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                    />
                    <img
                        alt = "delete" className="action-icons"
                        src="https://cdn-icons.flaticon.com/png/512/3405/premium/3405244.png?token=exp=1659084438~hmac=d0af61c5b012171b996e546ef598e5c2" 
                    />
                </div>
                </div>
            </div>
                       
        )
    }
}

// cant style directly in jsx -- objects needs to be made for styling
//no need to add px after measurement jsx takes it automatically
//also use comma at te end instead of semicolon in css
//camel case has to be used in jsx--css definition
const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;