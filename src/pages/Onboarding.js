import { Link } from "react-router-dom"
import React from 'react'
import './Onboarding.css'
import Illustration from "../assets/img/shop.jpg"

function Onboarding() {
    return (
        <div className="onboardingDiv">
            <div className="imgContainer">
                <img alt="shop cartoon" src={Illustration}></img>
            </div>
            <div className="getStarted">
                <h2>Huge sales and happy customers</h2>
                <p>Find the best products from popular shops right now!</p>
                <Link to={"/home"}><button id='getStartedButton'>Get Started</button></Link>
            </div>
        </div>
    )
}

export default Onboarding