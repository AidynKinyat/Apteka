import React, {useEffect} from 'react';
import Navbar from "./js/Navbar";
import {Map, Placemark, YMaps} from "react-yandex-maps";

const Maps = () => {

    const mapData = {
        center: [43.199583, 76.880760],
        zoom: 10,
    };

    const coordinates = [
        [43.199583, 76.880760],
        [43.271654, 76.950154]
    ];

    return (

            <div>
            <div className="header2">
                    <Navbar/>
                    <div className="osnov">
                        <br/>

                            <center>
                                <h1>Pharmacies with which we cooperate</h1></center>

<div className="maps" id="maps"></div>



                    </div>

                </div>



            </div>



    );
};

export default Maps;