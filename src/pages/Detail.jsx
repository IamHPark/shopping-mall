import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";
import './Detail.css'

export default function Detail(props) {
    let {id} = useParams();
    let product = props.products.find( x => x.id == id)
    console.log(product)
    const dispatch = useDispatch();
    const navigate = use();

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">

                    <img src={process.env.PUBLIC_URL+`/img/shoes${product.id}.jpg`} width="100%" />
                </div>
                <div className="col-md-6 product-detail">
                    <div>
                        <h4>{product.title}</h4>
                        <p>{product.content}</p>
                        <p>CAD ${product.price}</p>
                        <button className="btn btn-danger" onClick={() => {
                            dispatch(addItem({id: product.id, name: product.title, count: 1 }))
                            navigate('/cart')
                        }}>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    )
}