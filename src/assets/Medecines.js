import React from 'react';
import Navbar from "./js/Navbar";
import Babyproducts from "./js/Babyproducts";
import MedecineProducts from "./js/MedecineProducts";
import SearchProducts from "./js/SearchProducts";

const Medecines = () => {
    return (
        <div>
            <Navbar/>
            <div className="osnov">
                <center>
<SearchProducts/>
                </center>

                <br/><br/>
                <MedecineProducts/>
            </div>
        </div>
    );
};

export default Medecines;