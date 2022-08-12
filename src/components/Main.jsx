import React from "react";
import { useState } from 'react';
import Card from './Card';
import { Row, Container } from "react-bootstrap";
import data from '../data';

export default function Main(props) {
    // const [products, setProducts] = useState(data);

    return (
        <>
            <div className='main-bg'></div>
            <Container>
            <Row>
                {props.products.map((product, i) =>
                <Card key={i} product={product} />
                )}
            </Row>
            </Container>
        </>
    )
}