import React from 'react';
import Navbar from "./js/Navbar";
import {Link} from "react-router-dom";
import mainimg from './img/photovmedeu.jpg'
import medecines from "./img/medicines.jpg"
import vitamins from "./img/vitamins.jpg"
import momandbaby from "./img/momanababy.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faVk,faFacebook,faInstagram} from '@fortawesome/free-brands-svg-icons'

const HomePage = () => {

    return (

        <div>

            <Navbar/>
            <div className="header2">

                <div className="osnov">
                    <img className="ImageMe1" src={mainimg} id="imgmin"/>
                        <h1>
                            <center>Hello everyone!!</center>
                        </h1>
                        <p>
                            <br/>
                                Welcome to our online pharmacy website. Here you can find the medicine you are
                                interested in. In our catalog there are all kinds of medicines, such as general
                                medicines, mom and baby, vitamins and sports drugs. We have such a function as online
                                maps, where you can find the most popular pharmacy in Almaty.<br/>
                                Most pharmacies with which we cooperate work around the clock. If you have any questions
                                or difficulties, you can write directly through the Whats App.<br/>
                        </p>
                        <br/>
                            <br/>
                                <p>You can see the rest of the information by following the navigation above.</p>

                                <div className="box">
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faInstagram} />
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faVk} />

                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faFacebook} /></div>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    style={{display: "inline-block",width: "1000px",height: "300px", marginLeft: "160px",paddingTop: "50px"}}>
                                    <table style={{width: "1000px"}}>
                                        <thead>
                                        <tr>
                                            <td style={{border: "10px solid white"}}><p align="center"> MEDICINES </p> <Link
                                                to={"/medecines"}> <img src={medecines}
                                                                        className="ph" width="300" height="300"/>
                                            </Link></td>
                                            <td style={{border: "10px solid white"}}><p align="center"> MOM AND BABY</p> <Link
                                                to={'/momandbaby'}> <img src={momandbaby}
                                                                         className="ph" width="300" height="300"/>
                                            </Link></td>
                                            <td style={{border: "10px solid white"}}><p align="center"> VITAMINS </p> <Link
                                                to={'/vitamines'}> <img src={vitamins} className="ph"
                                                                        width="300" height="300"/> </Link></td>
                                        </tr>
                                        </thead>

                                    </table>
                                </div>
                                <br/><br/><br/><br/><br/><br/><br/>

                </div>
        </div>
            </div>
    );
};

export default HomePage;