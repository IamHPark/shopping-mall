import React from "react";
import { Col } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import './Card.css'

export default function Card (props) {

    let navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/detail/${id}`);
    }

    return (
        <Col className="product" lg={4} xs={6} onClick={() => handleClick(props.product.id)}>
            <div className="product-img">
                <img src={process.env.PUBLIC_URL+`/img/shoes${props.product.id}.jpg`} className="products"/>
            </div>
            <h3>{props.product.title}</h3>
            <h6>CAD ${props.product.price}</h6>
            <h6>{props.product.content}</h6>
        </Col>
    )
};