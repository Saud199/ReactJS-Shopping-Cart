import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddToReduxCart, IncrementCounter } from '../store/action/action.js';

class ShoppingCart extends Component {

    constructor() {
        super();
        this.state = {
            grandTotal: 0,
        }
    }

    componentDidMount() {
        this.calculateGrandTotal();
    }


    removeItem(i) {
        var noOfItemsToRemove = this.props.cartItems[i].quantity;
        this.props.cartItems.splice(i, 1);
        this.props.cartCheck.splice(i, 1);
        var value = this.props.counterValue - noOfItemsToRemove;
        this.props.IncCounter(value);
        this.calculateGrandTotal();
        toast.configure();
        toast.success("Removed from Cart !", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1900,
            hideProgressBar: true,
            pauseOnHover: false,
            draggable: true,
        });
    }

    plusItem(i) {
        this.props.cartItems[i].total_price = (++this.props.cartItems[i].quantity) * this.props.cartItems[i].price;
        var value = this.props.counterValue + 1;
        this.props.IncCounter(value);
        this.calculateGrandTotal();
    }


    minusItem(i) {
        if (this.props.cartItems[i].quantity > 1) {
            this.props.cartItems[i].total_price = (--this.props.cartItems[i].quantity) * this.props.cartItems[i].price;
            var value = this.props.counterValue - 1;
            this.props.IncCounter(value);
            this.calculateGrandTotal();
        }
    }

    calculateGrandTotal() {
        const { grandTotal } = this.state;

        var gt = 0;
        for (var i = 0; i < this.props.cartItems.length; i++) {
            gt = gt + parseInt(this.props.cartItems[i].total_price);
        }
        this.setState({ grandTotal: gt });
    }

    render() {
        const { grandTotal } = this.state;
        return (
            <div style={{ textAlign: "center" }}>

                <nav className="navbar navbar-expand-lg d-flex justify-content-start animate__animated animate__lightSpeedInRight" style={{ textAlign: 'center', float: 'none', display: 'inline-block', backgroundColor: '#007BFF' }}>

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
                                    <th scope="col" style={{ verticalAlign: 'middle' }}>#</th>
                                    <th scope="col" style={{ verticalAlign: 'middle' }}>Item</th>
                                    <th scope="col" style={{ verticalAlign: 'middle' }}>Name</th>
                                    <th scope="col" style={{ verticalAlign: 'middle' }}>Quantity</th>
                                    <th scope="col" style={{ verticalAlign: 'middle' }}>Unit Price</th>
                                    <th scope="col" style={{ verticalAlign: 'middle' }}>Total Price</th>
                                    <th scope="col"> </th>
                                </tr>
                            </thead>
                            {this.props.cartItems.map((val, ind) => {
                                return (
                                    <tbody key={ind} className="animate__animated animate__backInDown">
                                        <tr>
                                            <th scope="row" style={{ verticalAlign: 'middle' }}>{ind + 1}</th>
                                            <td style={{ verticalAlign: 'middle' }}><img src={val.imageURL} style={{ width: '80px', height: '80px' }} alt="product image" /></td>
                                            <td style={{ verticalAlign: 'middle' }}>{val.name}</td>
                                            <td style={{ verticalAlign: 'middle' }}>
                                                <button type="button" onClick={() => this.minusItem(ind)} style={{ marginRight: '5px', width: '40px' }} className="btn btn-light"><b>-</b></button>
                                                {val.quantity}
                                                <button type="button" onClick={() => this.plusItem(ind)} style={{ marginLeft: '5px', width: '40px' }} className="btn btn-light"><b>+</b></button>
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
                <nav className="navbar navbar-expand-lg fixed-bottom animate__animated animate__lightSpeedInLeft" style={{ textAlign: 'center', float: 'none', display: 'inline-block', backgroundColor: '#FFFFFF', borderTop: 'solid 1px black' }}>
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
        counterValue: state.root.reduxCartCounter,
        cartCheck: state.root.cartChecker
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
