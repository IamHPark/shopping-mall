import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";
import './Detail.css'

export default function Detail(props) {
    let {id} = useParams();
    let product = props.products.find( x => x.id == id)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        let viewed = JSON.parse(localStorage.getItem('viewed'))
        viewed.push(id)
        viewed = new Set(viewed)
        viewed = Array.from(viewed);
        // if (viewed.findIndex( item => item === id) < 0 ) {
        //     viewed.push(id)
        // }
        localStorage.setItem('viewed', JSON.stringify(viewed))
    }, [])


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