import React, {useEffect, useState} from 'react';

import {collection, database, getDocs} from "../../firebaseconfig";
import Korzina from "./Korzina";

const MedecineProducts = () => {
    const Key='Medecine';

    const [products,setProducts]=useState([]);
    const productsColl=collection(database,"Apteka",'MedecineProducts','product');
    useEffect(()=>{
        const getProducts = async () => {
            const dataColl=await getDocs(productsColl);
            setProducts(dataColl.docs.map((user)=>({ ...user.data()})));

        }
        getProducts();
    },[])

    function getLocalstorage(){
        return JSON.parse(localStorage.getItem(Key)) || [];
    }
    const a=getLocalstorage();
    const [orders, setOrders]=useState(a);
    let counter=1;
    function setLocalstorage(product,counter){
        if(a.length!==0){
            for (let i = 0; i <a.length; i++) {
                if(a[i].name.includes(product.name)){
                    a[i].count++;
                    a[i].total=a[i].price*a[i].count;
                    localStorage.setItem(Key, JSON.stringify(a));
                    setOrders(a);
                    break;
                }
                else if(i===a.length-1) {
                    counter=0;
                    a.push({name: product.name||'', price:product.price,count:counter,total:product.price})
                    setOrders(a);
                    localStorage.setItem(Key, JSON.stringify(a));
                }
            }
        }
        else {
            a.push({name: product.name||'', price:product.price,count:counter,total:product.price})
            setOrders(a);
            localStorage.setItem(Key, JSON.stringify(a));
        }
    }
    function AddToBasket(products) {
        setLocalstorage(products,counter)

    }

    return (
        <div>
            <Korzina products={a}  setOrders={setOrders} Key={Key}/>
           <div className={"grid-container"} style={{backgroundColor: `#f2f2f2`}}>
               {products.length<=0?
                   <h5>Some technical problems, Please, wait or try to reload the page</h5>
                   :<>{products.map((product)=>{return(
                       <div className="grid-item text-break sub col text-center d-flex flex-column align-items-center justify-content-around">
                           <img className="img" src={product.image} style={{width:80,height:50}} alt=""/>
                           <p style={{fontSize:"2em", color: "red"}}> {product.price}₸</p>
                           <h3>{product.name}</h3>
                           <span style={{fontSize:"15px"}}>{product.desc}</span>
                           <button className="btn btn-success" onClick={()=>{AddToBasket(product)}}>+</button>
                       </div>
                   )})}</>}

           </div>





    </div>
    );
};

export default MedecineProducts;