import React from "react";


const CartItem = (props) => { // conversion of calss into arrow functions
//     // adding state components -- js object to store particular item
//     // define a constructor
//     //always call super(); first before calling 'this' keyword in constructor--otherwise error occurs
//     //using below made constrcut call in below divs
//     constructor() {
//         super();
//         //passing this list in cart to make lists of products--commenting here
//         // this.state = {
//         //     price:9999,
//         //     title:'Mobile Phone',
//         //     qty:1,
//         //     img:''
//         // }
//         // this.testing();
//     }

//     // testing () {
//     //     const promise = new Promise((resolve,reject) => {
//     //         setTimeout(()=>{
//     //             resolve('done');
//     //         },5000);
//     //     });

//     //     promise.then(()=>{
//     //         //setState acts like a synchronous call beofre react version 17
//     //         //now its asynchronous in new version avbove 17
//     //         // this.setState({qty:100});
//     //         // this.setState({qty:this.state.qty + 10});
//     //         // this.setState({qty:this.state.qty + 10});
//     //         // this.setState({qty:this.state.qty + 10});

//     //         // console.log('state',this.state);
            
//     //     });
//     // }

//     increaseQuantity = () => {
//         // this.state.qty += 1; // will increase the quantity in console not on browser
//         // console.log('this',this.state);

//         // //setState form 1
//         // this.setState({
//         //     qty: this.state.qty + 1 // shallow merging with this.state function written above
//         //     // will only touch the qty as awritten above not oter fields.

//         // }, () =>{} //nested callback func in 1st form);

//         //if we want to increase quantity directly by 3 or thrice at one go
//         //calling above function thrice --lets checck it will do the work or not
//         // this.setState({
//         //     qty: this.state.qty + 1 // shallow merging with this.state function written above
//         //     // will only touch the qty as awritten above not oter fields.

//         // });
//         // this.setState({
//         //     qty: this.state.qty + 1 // shallow merging with this.state function written above
//         //     // will only touch the qty as awritten above not oter fields.

//         // });
//         // this.setState({
//         //     // qty: this.state.qty + 1 // shallow merging with this.state function written above
//         //     // will only touch the qty as awritten above not oter fields.
//         //     // only increasing qty + in the last state call will increase the qty -eg below
//         //     qty: this.state.qty + 3 // qty now will increase by 3 in every click
//         // });

//         //above function not working , its icnreasing by one only --
//         //METHOD = BATCHING ie react renders above function as 1 time only no matter how may times its repeated , it starts from 1 only
//         // All calls will merge into 1 state call = renderrd once



//         //setState 2nd form -- using arrown function -- if previous State requires use this form
//         //this state called thrice qty increasing but rendering only once in console
//         // this.setState((prevState) => {
//         //     return{
//         //     qty:prevState.qty +1
//         //     }
//         // });
//         // this.setState((prevState) => {
//         //     return{
//         //     qty:prevState.qty +1
//         //     }
//         // });
//         // this.setState((prevState) => {
//         //     return{
//         //     qty:prevState.qty +1
//         //     }
//         // });

//             //increasing qty and redering at once=--calling another callback fun in first call func

//         this.setState((prevState) => {
//             return{
//             qty:prevState.qty +1
//             }
//         },()=>{ //nested callback func
//             console.log('this.state',this.state);
//         });
//    }

//    deacreaseQuantity = () => {
//     const { qty } = this.state;
//     if( qty ===0 ){
//         return;
//     }
//     this.setState((prevState) => {
//         return{
//         qty:prevState.qty -1
//         }
//     });

//    }
    // render () { // not needed in arrow function declared 
        
        // destructring used -- object destructing used
        // console.log('render'); // to check rendering times when we call function above - icrease or decrease
        //using props fields and properties by destructuring method
        const { price,title,qty} = props.product; //this is removed

        const {
            product,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct 
        } = props; // this is removed

        // const { price,title,qty} = this.state;
        return (
            <div className = "cart-item">
                {/* {this.props.jsx} commneted when this is removed from above */}
                <div className="left-block">

                    {/* passing styles object in image tag writtenbelow */}
                    <img style={styles.image} src={product.img}/>

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
                        onClick = { () =>  onIncreaseQuantity(product) }
                    />
                    <img 
                        alt = "decrease" className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                        onClick={ () => onDecreaseQuantity(product)}
                    />
                    <img
                        alt = "delete" className="action-icons"
                        src="https://cdn-icons.flaticon.com/png/512/3405/premium/3405244.png?token=exp=1659265056~hmac=b018f315c915cb83f1cd55791e859b6c" 
                        onClick={ () => onDeleteProduct(product.id)}

                    />
                </div>
                </div>
            </div>
                       
        )
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