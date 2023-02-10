import React, { useState } from 'react'
import Icon from "../assets/img/E-Shop_Icon.svg"
import ShopVector from "../assets/img/E-Shop_Vector.svg"
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";


function SplashScreen() {
    const [goToOnboarding, setGoToOnboarding] = useState(false);

    setTimeout(function () {
        setGoToOnboarding(true);
    }, 5000)

    if (goToOnboarding === false) {
        return (
            <>
                <Link to={"/onboarding"}>
                    <div>
                        <img alt="" src={Icon}></img><br />
                        <img alt="" src={ShopVector}></img>
                        <p>Your Shopping Solution</p>
                    </div>
                </Link>
            </>
        )
    } else {
        return <Navigate to="/onboarding" />
    }
}

export default SplashScreen;