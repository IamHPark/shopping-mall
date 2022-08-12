import React from "react";
import { Col } from 'react-bootstrap'

export default function Card (props) {

    console.log("Card", props.product)
    return (
        <Col>
            <img src={process.env.PUBLIC_URL+`/shoes${props.product.id}.jpeg`} className="products"/>
            <h2>{props.product.title}</h2>
            <h4>{props.product.price}</h4>
            <p>{props.product.content}</p>
        </Col>
    )
};