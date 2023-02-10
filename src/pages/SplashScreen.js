import React, { useState } from 'react'
import Icon from "../assets/img/E-Shop_Icon.svg"
import ShopVector from "../assets/img/E-Shop_Vector.svg"
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./SplashScreen.css"


function SplashScreen() {
    const [goToOnboarding, setGoToOnboarding] = useState(false);

    setTimeout(function () {
        setGoToOnboarding(true);
    }, 3000)

    if (goToOnboarding === false) {
        return (
            <>
                <Link to={"/onboarding"}>
                    <div id='onboarding'>
                        <img alt="" src={Icon}></img><br />
                    </div>
                </Link>
            </>
        )
    } else {
        return <Navigate to="/onboarding" />
    }
}

export default SplashScreen;