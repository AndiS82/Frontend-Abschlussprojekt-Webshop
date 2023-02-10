import React, { useState, useEffect } from "react";
import * as CiIcons from "react-icons/ci";
import { Link } from "react-router-dom";

function SearchBar() {
    const [searchData, setSearchData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    useEffect(() => {
        fetch(`https://dummyjson.com/products`)
            .then((response) => response.json())
            .then((searchData) => {
                setSearchData(searchData.products)
            })
    }, [])
    const enteredInput = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const filteredArray = searchData.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        setFilteredData(filteredArray)
    };

    const clearButton = () => {
        setFilteredData([]);
        setWordEntered("");
    }

    return (
        < div className="search" >
            <div className="searchInput">
                <input type="text" placeholder="Enter product name" value={wordEntered} onInput={enteredInput} />
                <div className="searchIcon">
                    {filteredData.length === 0 ? (
                        <CiIcons.CiSearch />
                    ) : (
                        <CiIcons.CiSquareRemove id="clearButton" onClick={clearButton} />
                    )}
                </div>
            </div>
            {filteredData.length !== 0 && (
                <div className="searchResults">{filteredData.slice(0, 3).map((value,
                    index) => {
                    return (<Link key={index} className="searchItems" to={`/product/${value?.id}`} >
                        {console.log(value.title)}
                        <p>{value.title}</p>
                    </Link>);
                })}
                </div >
            )}
        </div >
    );
}

export default SearchBar;