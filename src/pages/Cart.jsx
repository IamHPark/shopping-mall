import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import './Cart.css'
import { increase, decrease } from "../store/cartSlice.js";
import { useNavigate } from "react-router-dom";

export default function Cart(props) {

    const cart = useSelector( state => state.cart)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const viewed = JSON.parse(localStorage.getItem('viewed'))
    const viewedList = viewed && viewed.map( (item, i) =>
        <div key={i} className="viewed-item">
            <p className="viewed-item-title">{props.products[parseInt(item)].title}</p>
            <img src={process.env.PUBLIC_URL+`/img/shoes${props.products[parseInt(item)].id}.jpg`} alt="" width={"300px"} height={"100%"}/>
        </div>
    )

    return (
        <div className="cart-container">
            <Container>
                <Table striped bordered hover className="cart" >
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Change</th>
                    </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, i) =>
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.count}</td>
                                <td>
                                    <button className="quantity" onClick={() => {
                                        dispatch(increase(item.id))
                                    }}>
                                    +
                                    </button>
                                    <button className="quantity" onClick={() => {
                                        dispatch(decrease(item.id))
                                    }}>
                                    -
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
            <div>
                <button className="cart-btn" onClick={() => {navigate('/products')}}>BACK</button>
                <button className="cart-btn">CHECK OUT</button>
            </div>
            <h3 className="viewed-title">Recently Viewed</h3>
            <div className="viewed">
                {viewedList}
            </div>
        </div>

    )
}