import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AddToReduxCart, IncrementCounter } from '../store/action/action.js';

class ShoppingCart extends Component {

    constructor() {
        super();
        this.state = {
            grandTotal: 0
        }
    }

    componentDidMount() {
        console.log(this.props.cartItems);
        this.calculateGrandTotal();
    }


    removeItem(i) {
        //console.log(this.props.cartItems);
        this.props.cartItems.splice(i, 1);
        var value = this.props.counterValue - 1;
        this.props.IncCounter(value);
        this.calculateGrandTotal();
        console.log(this.props.cartItems);
    }

    plusItem(i) {

    }


    minusItem(i)  {

    }

    calculateGrandTotal() {
        const { grandTotal } = this.state;

        var gt = 0;
        for (var i = 0 ; i < this.props.cartItems.length ; i++) {
            //console.log('Hi')
            gt = gt + parseInt(this.props.cartItems[i].total_price);
        }
        this.setState({grandTotal : gt});
    }

    render() {
        const { grandTotal } = this.state;
        return (
            <div style={{ textAlign: "center" }}>
                <nav className="navbar navbar-expand-lg d-flex justify-content-start" style={{ textAlign: 'center', float: 'none', display: 'inline-block', backgroundColor: '#007BFF' }}>

                    <Link to="/">
                        <button type="button" className="btn btn-success" style={{ float: "left" }}>Go Back</button>
                    </Link>

                </nav>

                <br />
                <h2>CART</h2>
                <br />

                <div className="container">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Item</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Unit Price</th>
                                    <th scope="col">Total Price</th>
                                    <th scope="col"> </th>
                                </tr>
                            </thead>
                            {this.props.cartItems.map((val, ind) => {
                                return (
                                    <tbody key={ind}>
                                        <tr>
                                            <th scope="row" style={{ verticalAlign: 'middle' }}>{ind + 1}</th>
                                            <td style={{ verticalAlign: 'middle' }}><img src={val.imageURL} style={{ width: '80px', height: '80px' }} alt="product image" /></td>
                                            <td style={{ verticalAlign: 'middle' }}>{val.name}</td>
                                            <td style={{ verticalAlign: 'middle' }}>
                                                <button type="button" style={{ marginRight: '5px', width: '40px' }} className="btn btn-light"><b>-</b></button>
                                                {val.quantity}
                                                <button type="button" style={{ marginLeft: '5px', width: '40px' }} className="btn btn-light"><b>+</b></button>
                                            </td>
                                            <td style={{ verticalAlign: 'middle' }}>${val.price}</td>
                                            <td style={{ verticalAlign: 'middle' }}>${val.total_price}</td>
                                            <td style={{ verticalAlign: 'middle' }}><button type="button" onClick={() => this.removeItem(ind)} className="btn btn-primary">Remove</button></td>
                                        </tr>
                                    </tbody>
                                );
                            })}
                        </table>
                    </div>



                </div>

                <br /><br /><br />
                <nav className="navbar navbar-expand-lg fixed-bottom" style={{ textAlign: 'center', float: 'none', display: 'inline-block', backgroundColor: '#FFFFFF', borderTop: 'solid 1px black' }}>
                    <h4>Grand Total : ${grandTotal}</h4>
                </nav>

            </div>
        );
    }
}

function mapStateToProp(state) {
    return ({
        // jb class me data mangwana hota hy store se
        cartItems: state.root.reduxCart,
        counterValue: state.root.reduxCartCounter
    })
}

function mapDispatchToProp(dispatch) {
    return ({
        // jb class se data store me bhejna hota hai
        addItem: (data) => { dispatch(AddToReduxCart(data)) },
        IncCounter: (i) => { dispatch(IncrementCounter(i)) }
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(ShoppingCart);