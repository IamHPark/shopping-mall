import React from "react";
import { useParams } from "react-router-dom";

export default function Detail(props) {
    let {id} = useParams();
    let product = props.products.find( x => x.id == id)
    console.log(product)

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                <h4 className="pt-5">{product.title}</h4>
                <p>{product.content}</p>
                <p>{product.price}</p>
                <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}