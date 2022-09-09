import React from "react";
import Card from './Card';
import { Row, Container } from "react-bootstrap";
import axios from "axios";


export default function Main(props) {

    return (
        <div className="main">
            <div className='main-bg'></div>
            <Container>
                <Row>
                    {props.products.map((product, i) =>
                    <Card key={i} product={product} />
                    )}
                </Row>
            </Container>
        </div>
    )
}