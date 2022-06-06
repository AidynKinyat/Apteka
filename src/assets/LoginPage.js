import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import {auth, signInWithEmailAndPassword, database, doc, updateDoc, signOut} from "../firebaseconfig";
import {getDoc} from "firebase/firestore";

const LoginPage = () => {
    let NavigateTo = useNavigate();
    const [userdata, setuserdata] = useState({
        email: '',
        pass: ''
    });

    const {email, pass} = userdata;
    const onChangeData = (e) => {
        setuserdata({...userdata, [e.target.name]: e.target.value})
    }
    const onSubmitLoginForm = async () => {

        if (!email || !pass) {
            alert("Fill the fields!");
        }

        try {
            await signInWithEmailAndPassword(auth, email, pass);
            await  getDoc(doc(database,'Clients',auth.currentUser.uid)).then(
                async (data) => {
                    if (data.exists) {
                        if (data.data().banned) {
                            await signOut(auth);
                            alert("Banned by Administrator!")
                        }
                        else {
                            setuserdata({email: '',pass: ''})
                            NavigateTo('/');
                        }
                    }
                }
            );

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
      <center><h1>Login</h1></center>
      <center>
        <div className="fud">
          <div className="fud-1">

            <label className="label"><span>Email: </span><input type="email" id="email"
                                                                onChange={onChangeData}
                                                                name={'email'}
                                                                value={email}
                                                                required="required"/></label>
            <label className="label"><span>Password: </span><input type="password"
                                                                   id="password"
                                                                   onChange={onChangeData}

                                                                   required="required"
                                                                   name={'pass'}
                                                                   value={pass}
            /></label>

            <div style={{width: "100%"}}>
              <button onClick={onSubmitLoginForm}>Sign In</button>
              <Link to={'/register'}> <button>Sign Up</button></Link>
            </div>
          </div>
        </div>
      </center>
    </div>
  </center>
</div>
    );
};

export default LoginPage;