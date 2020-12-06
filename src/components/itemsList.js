import React, { Component } from 'react';
import Items from '../json/items.json';

class ItemsList extends Component {

    constructor() {
        super();
        this.state = {
            products: Items.items,
            searchText: ''
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

    onChange = e => {
        this.setState({ searchText: e.target.value })
    }

    render() {
        const { products } = this.state;
        return (
            <div>
                <nav className="navbar navbar-expand-lg fixed-top" style={{ textAlign: 'center', float: 'none', display: 'inline-block' , backgroundColor : '#007BFF'}}>
                    {/* <img src={Logo} className="card-img-top" style={{width: '300px' , height : '80px'}} alt="Logo" /> */}
                    <div style={{ float: "right" }}>
                        <i className="fa" style={{ fontSize: "34px" }}>&#xf07a;</i>
                        <span className='badge badge-warning' id='lblCartCount'> 0 </span>
                    </div>
                </nav>

                <br /><br /><br /><br />

                <div className="container">

                    <br />
                    <div className="row" style={{ textAlign: "center" }}>
                        <div className="col-sm-1">

                        </div>
                        <div className="col-sm-9">
                            <input type="text" placeholder="Search Products" onChange={this.onChange} className="form-control animate__animated animate__zoomInDown" style={{ margin: '2px' }} ></input>
                        </div>
                    </div>
                    <br />

                    <div className="row">
                        {
                            products.map((val, ind) => {
                                const { searchText } = this.state;

                                if (searchText !== "" && val.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
                                    return null;
                                }

                                return (
                                    <div className="card mx-2 my-2 shadow-lg p-3 mb-5 bg-white rounded" key={ind} style={{ width: '345px', alignItems: 'center' }}>

                                        {/* src={require('../images/colgate.jpg').default} */}
                                        <img src={val.imageURL} className="card-img-top" style={{ height: '240px', width: '240px' }} alt="product image" />
                                        <div className="card-body" style={{ backgroundColor: '#a6b0bf', width: '100%', textAlign: 'center' }}>
                                            <h5 className="card-title">{val.name}</h5>
                                            <p className="card-text">${val.price}</p>

                                            {(val.availability == 'In Stock') &&
                                                <div>
                                                    <p className="card-text" style={{ color: "green", fontWeight: 'bold' }}>{val.availability}</p>
                                                    <button type="button" style={{ width: '120px' }} className="btn btn-primary">Add to Cart</button>
                                                </div>}

                                            {(val.availability == 'Out of Stock') &&
                                                <p className="card-text" style={{ color: "red", fontWeight: 'bold' }}>{val.availability}</p>}

                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

            </div>
        );
    }
}

export default ItemsList;