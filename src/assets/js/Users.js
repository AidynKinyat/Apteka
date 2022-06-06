import React, {useEffect, useState} from 'react';
import {
    auth,
    collection,
    createUserWithEmailAndPassword,
    database,
    doc,
    getDocs,
    setDoc, signInWithEmailAndPassword, updateDoc,
    updateEmail, updatePassword
} from "../../firebaseconfig";

import {getDoc} from "firebase/firestore";
const Users = () => {
    const [users,setUsers]=useState([]);
    const [input,setInput]=useState({
        name:'', email:'', pass:''    });
    const [UserSelected, setUserSelected]=useState('');
    const usersColl=collection(database,"Clients");

    const {name,email,pass}=input;
    useEffect( () => {
        const getUsers = async () => {
            const dataColl = await getDocs(usersColl);
            setUsers(dataColl.docs.map((user) => ({...user.data(), id: user.id})));
            getDoc(doc(database,'Clients',auth.currentUser.uid)).then(
                (data)=>{
                    if(data.exists){
                        setPrev(data.data());
                    }
                }
            );
        }

        getUsers();
    },[])

    const handleChange=(e)=>{setInput({...input,[e.target.name]:e.target.value})}
    const select=(user) =>{
       setUserSelected(user);
       setInput({
           name:user.username,
           email:user.email,
           pass:user.password
       })
    }
    const [prev,setPrev]=useState('');

    const update = async()=>{
        const result =await signInWithEmailAndPassword(auth, UserSelected.email, UserSelected.password);
       await updateDoc(doc(database,'Clients',auth.currentUser.uid),{
            username:input.name, email:input.email,
            password:input.pass});
        await updatePassword(result.user, input.password).then();
        await updateEmail(result.user, input.email).then()
        alert('Updated');

        setInput({pass: '',name: '',email: ''});
         signInWithEmailAndPassword(auth, prev.email, prev.password);

        window.location.reload();
    }

     const createUser= async (username,email,pass)=>{
        const authorize = await createUserWithEmailAndPassword(auth, email, pass);
        await setDoc(doc(database, 'Clients', authorize.user.uid),
            {username:username,email:email,password:pass, id:authorize.user.uid,banned:false})
        setInput({
            name:'',
            email:'',
            pass:''
        })
         await signInWithEmailAndPassword(auth, prev.email, prev.password);
        alert("User created!");
         window.location.reload();

    }

    const Ban = async()=> {
       await updateDoc(doc(database,'Clients',UserSelected.id),{banned:UserSelected.banned?false:true});
       window.location.reload();
    }

    return (
        <div>

            <div>

                <label className="label">
                    <span>Full name:</span>
                    <input
                           type="text" id="fullName"
                           required="required"
                           value={name}
                           name={'name'}
                           onChange={handleChange}
                           className="form-control"/></label>
                <label className="label"><span>Email: </span>
                    <input  type="email" id="email"
                           required="required"
                           value={email}
                           onChange={handleChange}
                           name={'email'}
                           className="form-control"/></label>
                <label  className="label">
                    <span>Password: </span>
                    <input  type="text" id="password"
                           required="required"
                           value={pass}
                           onChange={handleChange}
                           name={'pass'}
                           className="form-control"/></label>

            </div>
<br/>
            <button className="btn btn-info m-lg-1" onClick={()=>{createUser(name,email,pass)}} id={'createUser'}>Create</button>
            {UserSelected?<><button className="btn btn-info m-lg-1 "  onClick={update} id={'updateUser'}>Update</button>
                    <button className="btn btn-info m-lg-1" onClick={Ban} id={'ban'}>Ban/Active</button></>
                :''}
            <table id="usersList" style={{marginTop: "10px"}} className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Full name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user,index)=>{
                    return(
                    <tr key={index}>
                        <td className={"p-1"}> {index+1}</td>
                        <td className={"p-1"}> {user.username}{user.banned?<b>(Banned)</b>:''}</td>
                        <td className={"p-1"}> {user.email}</td>
                        <td className={"p-1"}>{user.password}</td>
                        <td className={"p-1"}><button className="btn btn-info" onClick={()=>{select(user)}}>Select</button>
                        </td>
                    </tr>
                )})}
                </tbody>



            </table>
        </div>
    );
};

export default Users;