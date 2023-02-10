import filterButton from "../assets/img/Vector.svg"

import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.js";

function Navbar() {
    return (
        <div className="navBarBox">
            <SearchBar placeholder="Enter product name" />
            <Link to={"/productlist"}> <button className='navbarButton'><img id="filterImg" alt="scales" src={filterButton}></img></button></Link>
            {/* <Link to={"/shoppingcart"}  >{<MdIcons.MdShoppingCart />}</Link> */}
        </div>
    )
}

export default Navbar