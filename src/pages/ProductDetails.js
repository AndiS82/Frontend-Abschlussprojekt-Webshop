import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import ratingStar from "../assets/img/Star.png"
import * as CiIcons from "react-icons/ci";
import { Link } from "react-router-dom";
// import * as MdIcons from "react-icons/md";
// import { Link } from "react-router-dom";
// import ShoppingCartContext from '../context/shoppingCartContext';

function ProductDetails() {
    const params = useParams();
    const [arrayData, setArrayData] = useState([]);
    const [count, setCount] = useState(0);
    const stock = arrayData.stock;

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${params.id}`)
            .then((response) => response.json())
            .then((arrayData) => {
                setArrayData(arrayData)
                console.log(arrayData)
            })
    }, [params.id])
    return (
        <div className='productDetailsDiv'>
            <Link to={"/home"}><CiIcons.CiSquareChevLeft /></Link>
            <div className='detailsContainer'>
                <img className='mainPic' src={arrayData.thumbnail} alt={arrayData.title}></img>
                <div className='buttonContainer'>
                    <div className='oben'>
                        <p>{arrayData.title}</p>
                        <div className='anzahl'>
                            <button onClick={() => { setCount(count > 0 ? count - 1 : count) }}>-</button>
                            <p>{count}</p>
                            <button onClick={() => { setCount(count < stock ? count + 1 : count) }}>+</button>
                        </div>
                    </div>
                    <div className='starWithPrice'>
                        <img id='starStyle' src={ratingStar} alt="star"></img>
                        <p>{arrayData.rating}</p>
                    </div>
                    <div className='unten'>
                        <p id="stock">{stock} pieces in stock</p>
                        <p id="priceCard">${arrayData.price}</p>
                    </div>
                </div>
                <div id="descriptionStyle">
                    <h3 className='descriptionH'>Description</h3>
                    <p className='descriptionP'>{arrayData.description}</p>
                </div>
            </div>
        </div>
    )

}

export default ProductDetails;