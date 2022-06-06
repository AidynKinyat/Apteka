import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import {auth, createUserWithEmailAndPassword, database, doc, setDoc} from "../firebaseconfig";

const RegisterPage = () => {
    let NavigateTo = useNavigate();
    const [userdata, setuserdata] = useState({
        username: '',
        email: '',
        pass: ''
    });

    const {username, email, pass} = userdata;
    const onChangeData = (e) => {
        setuserdata({...userdata, [e.target.name]: e.target.value})
    }
    async function createUser(username,email,pass){
        const authorize = await createUserWithEmailAndPassword(auth, email, pass);
        await setDoc(doc(database, 'Clients', authorize.user.uid),
            {username:username,email:email,password:pass, id:authorize.user.uid,banned:false})

    }
    const onSubmitForm = async () => {
        if (!username || !email || !pass) {
            alert("Fill the fields!");
        }
        try {
            createUser(username,email,pass)
            setuserdata({username: '', email: '', pass: ''})
            NavigateTo('/login');
        } catch (err) {
            alert(err);
        }

    }
    return (
        <div className={"loginBackground"}>
            <center>
                <div className="osnov2">
                    <br/>
                    <h1>
                        <center>Welcome to our online-apteka</center>
                    </h1>
                    <br/>
                    <center><h1>Sign Up</h1></center>
                    <center>
                        <div className="fud">
                            <div className="fud-1">

                                    <label className="label"><span>Full name: </span><input type="text"
                                                                                            onChange={onChangeData}
                                                                                            id="fullName"
                                                                                            placeholder="Full name"
                                                                                            name={'username'}
                                                                                            value={username}
                                                                                            required/></label>
                                    <label className="label"><span>Email: </span><input type="email" id="email"
                                                                                        name={'email'} value={email}
                                                                                        onChange={onChangeData}
                                                                                        placeholder="Email address"
                                                                                        required/></label>
                                    <label className="label"><span>Password: </span><input type="password"
                                                                                           id="password"
                                                                                           name={'pass'}
                                                                                           value={pass}
                                                                                           onChange={onChangeData}
                                                                                           placeholder="Password"
                                                                                           required/></label>
                                    <label className="label"><span>Confirm password: </span><input
                                        type="password" id="confirmPassword" placeholder="Confirm password"
                                        required/></label>


                                    <div style={{width: "100%"}}>
                                        <button onClick={onSubmitForm} id="btn">Sign Up</button>
                                        <Link to={'/login'}>
                                            <button>Sign In</button>
                                        </Link>
                                    </div>

                            </div>
                        </div>
                    </center>
                </div>
            </center>
        </div>
    );
};

export default RegisterPage;