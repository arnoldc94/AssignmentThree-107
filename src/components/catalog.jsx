import React, { Component } from 'react';
import"./catalog.css";
import Item from "./item.jsx";
import ItemService from "../services/itemService.js";


class Catalog extends Component {
    state = { 
        catalog: [],
    };

    render() { 

    

        return ( 
            <div className="catalog">
                <div className="catHeader">
                   <h3>The Beach Bum Collection</h3> 
                </div>
                
                <h5>We have { this.state.catalog.length } products for you</h5>

                
                    { this.state.catalog.map( obj => <Item key={obj._id} data={obj}></Item> ) }
                
                
            </div>
            
         );
    }
    
    // best place to load data from server
    // executed after the initial render
    componentDidMount() {
        let service = new ItemService();
        let data = service.getCatalog();

       
        this.setState({ catalog: data});
    }
}
 
export default Catalog;