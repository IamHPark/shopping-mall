import React from "react";
import { Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import './Cart.css'

export default function Cart() {

    const stock = useSelector( state => state.stock)
    console.log(stock)

    return (
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
                {stock.map((item, i) =>
                    <tr>
                        <td>{i+1}</td>
                        <td>{item.name}</td>
                        <td>{item.count}</td>
                        <td><button>+</button></td>
                    </tr>
                )}
            </tbody>
        </Table>
      </Container>
    )
}