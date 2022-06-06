import React from 'react';
import Navbar from "./js/Navbar";
import Babyproducts from "./js/Babyproducts";
import SearchProducts from "./js/SearchProducts";

const Momandbaby = () => {
    return (
        <div>
            <Navbar/>
            <div className="osnov">
                <center>
                    <SearchProducts/>
                </center>
                <br/><br/>
                <Babyproducts/>
            </div>


        </div>
    );
};

export default Momandbaby;