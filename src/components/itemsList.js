import React, { Component } from 'react';
import Items from '../json/items.json';

class ItemsList extends Component {

    constructor() {
        super();
        this.state = {
            products: Items.items
        }
    }

    componentDidMount() {
        const { products } = this.state;

        var obj = {
            name: "Item 4",
            price: "500",
            availability: "In Stock",
            imageURL: "4"
        }
        products.push(obj)
        console.log(products)
    }

    addData() {
        const { products } = this.state;
        var obj = {
            name: "Item 5",
            price: "500",
            availability: "In Stock",
            imageURL: "5"
        }
        products.push(obj)
        console.log(products)
    }

    render() {
        return (
            <div>
                Hi
                <button onClick={() => this.addData()}>add</button>
            </div>
        );
    }
}

export default ItemsList;