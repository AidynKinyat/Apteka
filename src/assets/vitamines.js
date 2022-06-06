import React from 'react';
import SearchProducts from "./js/SearchProducts";

import VitamineProducts from "./js/VitamineProducts";
import Navbar from "./js/Navbar";

const Vitamines = () => {
    return (
        <div>
            <Navbar/>
            <div className="osnov">
                <center>
                    <SearchProducts/>
                </center>
                <br/><br/>
                <VitamineProducts/>
            </div>
        </div>
    );
};

export default Vitamines;