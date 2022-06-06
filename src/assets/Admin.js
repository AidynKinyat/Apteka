import React, {useState} from 'react';
import {addDoc, auth, collection, database,doc, getDownloadURL, ref, storage, uploadBytes} from "../firebaseconfig";
import Users from "./js/Users";
import {Navigate, Outlet, Route} from "react-router-dom";

const Admin = () => {
    const [pData,setpData]=useState({pName:'', desc:'', price:''});
    const [image,setImage]=useState('');
    let url;
    async function uploadImage() {

        if(image){
            const imgRef=ref(storage,`Products/${pData.pName}/${image.name}`);
            const snap =await uploadBytes(imgRef,image);
            url=await getDownloadURL(ref(storage, snap.ref.fullPath));
        }
    }
    async function AddMedecineProducts() {
        await  uploadImage();
        await addDoc(collection(database,'Apteka','MedecineProducts','product'),
            {name:pData.pName,
                desc: pData.desc,
                price: pData.price,
                image:url || 'https://firebasestorage.googleapis.com/v0/b/second-now-333604.appspot.com/o/medicament.png?alt=media&token=e7bf36fc-0cdc-41d1-b339-5885768af07e'})

        setImage('');
        setpData({
            pName:'',
            desc:'',
            price:''});
        alert("Added!");
    }
    async function AddBabyProducts() {
        await  uploadImage();
        await addDoc(collection(database,'Apteka','BabyProducts','product'),
            {name:pData.pName,
                desc: pData.desc,
                price: pData.price,
                image:url || 'https://firebasestorage.googleapis.com/v0/b/second-now-333604.appspot.com/o/medicament.png?alt=media&token=e7bf36fc-0cdc-41d1-b339-5885768af07e'})

        setImage('');
        setpData({
            pName:'',
            desc:'',
            price:''});
        alert("Added!");
    }
    async function AddVitamineProducts() {
        await  uploadImage();
        await addDoc(collection(database,'Apteka','VitamineProducts','product'),
            {name:pData.pName,
                desc: pData.desc,
                price: pData.price,
                image:url || 'https://firebasestorage.googleapis.com/v0/b/second-now-333604.appspot.com/o/medicament.png?alt=media&token=e7bf36fc-0cdc-41d1-b339-5885768af07e'})

        setImage('');
        setpData({
            pName:'',
            desc:'',
            price:''});
        alert("Added!");
    }

    const {pName,desc,price}=pData;
    const onChangeData = (e) => {
        setpData({...pData, [e.target.name]: e.target.value})
    }

    return (
        <div style={{background:'white', padding:10,marginTop:10}}>


            <nav className="navbar navbar-light bg-light" style={{paddingLeft: "40px", paddingRight: "40px"}}>
                <a className="navbar-brand" href="#">
                    Admin panel
                </a>

            </nav>
            <div>

            <div className="container" style={{margin: 20, paddingBottom:50}}>

                <div>
                    <h5>Add Products</h5>
                    <label className="productlabel">
                        <span>Product Name: </span>
                        <input style={{ width: "80%" }}
                               type="text" id="fullName"
                               required="required"
                               value={pName}
                               name={'pName'}
                               onChange={onChangeData}
                               className="form-control"/>
                    </label>
                    <label className="productlabel">
                        <span>Product Description: </span>
                        <input style={{ width: "80%" }}
                               type="text" id="fullName"
                               required="required"
                               value={desc}
                               name={'desc'}
                               onChange={onChangeData}
                               className="form-control"/>
                    </label>
                    <label className="productlabel">
                        <span>Product Price: </span>
                        <input style={{ width: "80%" }}
                               type="number" id="fullName"
                               value={price}
                               name={'price'}
                               onChange={onChangeData}
                               required="required"
                               className="form-control"/>
                    </label>
                    <label className="productlabel">
                        <span>Product Icon: </span>
                        <input style={{ width: "80%" }}
                               type="file" id="fullName"
                               required="required"
                               onChange={(e)=>{setImage(e.target.files[0])}}
                               className="form-control"/>
                    </label>
                    <button className="btn btn-info m-lg-1" onClick={AddMedecineProducts} >Add to Medecine Products</button>
                    <button className="btn btn-info m-lg-1" onClick={AddBabyProducts}>Add to Baby Products</button>
                    <button className="btn btn-info" onClick={AddVitamineProducts}>Add to Vitamine Products</button>
                </div>
                <hr/>
                <h5 >Users</h5>
                <Users/>


            </div>
        </div>
        </div>

    );
};

export default Admin;