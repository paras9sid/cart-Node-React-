import React from "react";


class CartItem extends React.Component {
    render () {
        return (
            <div>
            <div className = "cart-item">
                <div className="left-block">

                    {/* passing styles object in image tag writtenbelow */}
                    <img style={styles.image}/>

                </div>
                <div className="right-block">
                    {/* passing styles like fintcolor etc as object inside */}
                    {/* as inline jsx-css -- must be nested */}
                <div style={ { fontSize:25 } }>Phone</div>
                <div style={ { color:'#777' } }>Rs.9999</div>
                <div style={ { color:'#777' } }>Qty: 1</div>

                <div className="cart-item-actions">
                    {/* Buttons */}
                </div>
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