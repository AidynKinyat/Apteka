import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import logo from '../img/icon2.png';
import {auth, database, doc, getDoc, onAuthStateChanged, signOut} from "../../firebaseconfig";

const Navbar = () => {
    let NavigateTo = useNavigate();
    const [user,setuser]=useState('');
    const [state,setState]=useState(null);

    useEffect( ()=>{
        if(state){getDoc(doc(database,'Clients',auth.currentUser.uid)).then(
        (docs)=>{
            if(docs.exists){
                setuser(docs.data());
            }
        }
    );}
       onAuthStateChanged(auth,(state)=>{
            setState(state);
        })
    });


    async function LogOut() {
        await signOut(auth);
        NavigateTo('/');
    }

    return (
        <div style={{marginTop:10}}>
            <nav className="nav-bar2">
                <ul className="nav__list2" id="navButtons">
                    <img className="icon1" src={logo}/>
                        <li className="nav__link1"><Link to="/">HOME</Link></li>
                        <li className="nav__link1"><Link to="/medecines">MEDICINES</Link></li>
                        <li className="nav__link1"><Link to="/momandbaby">MOM AND BABY</Link></li>
                        <li className="nav__link1"><Link to="/vitamines">VITAMINS</Link></li>
                        <li className="nav__link1"><Link to="/map">MAP</Link></li>
                    {state?<><li className="nav__link1"><Link to={state.email==='admin@gmail.com'?'/admin':'/'}>{user.username}</Link></li><li className="nav__link1" ><Link to={'#'} onClick={LogOut}>LOGOUT</Link></li></>
                        :<><li className="nav__link1"><Link to="/login">LOGIN</Link></li></>}


                </ul>
            </nav>
        </div>
    );
};

export default Navbar;