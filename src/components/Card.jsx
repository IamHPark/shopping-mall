import React from "react";
import { Col } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

export default function Card (props) {

    let navigate = useNavigate();

    const goDetail = (id) => {
        navigate(`/detail/${id}`);
    }

    return (
        <Col lg={4} md={6} onClick={() => goDetail(props.product.id)}>
            <img src={process.env.PUBLIC_URL+`/shoes${props.product.id}.jpeg`} className="products"/>
            <h2>{props.product.title}</h2>
            <h4>{props.product.price}</h4>
            <p>{props.product.content}</p>
        </Col>
    )
};