import React from "react";
import Card from './Card';
import { Row, Container } from "react-bootstrap";


export default function Main(props) {

    console.log(props.product)
    console.log(props.show)

    return (
        <div className="main">
            <div className='main-bg'></div>
            <Container className="products-container">
                <Row>
                    {props.products.map((product, i) =>
                    <Card key={i} product={product} />
                    )}
                </Row>
            </Container>
            {props.show && <button className="main-btn" onClick={props.handleClick}>More Products</button>}
        </div>
    )
}