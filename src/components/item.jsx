import React, { Component } from 'react';
import QuantityPicker from './quantityPicker';
import { FaShoppingCart } from "react-icons/fa";

import "./item.css";



class Item extends Component {
    state = { quantity: 1 }
    render() { 
        return ( 
            <div className="item">
                
                <img src={"/images/" + this.props.data.image} alt="Product" />

                <h5>{ this.props.data.title }</h5>

                <QuantityPicker className="quantityPicker" onChange ={this.handleQuantityChange}></QuantityPicker>
                <div className="flexContain">
                    <div className="priceContain">
                        <label className="price"><span>Price: </span>${ this.props.data.price.toFixed(2) }</label>
                        <label className="total"><span>Total: </span>${ this.props.data.price.toFixed(2) }</label>
                    </div>
                    
                    <div className="btnContainer">
                        <i className="checkOut"><FaShoppingCart/></i>  
                    </div>
                </div>
                
            </div>
         );
    }
    
}
 
export default Item;