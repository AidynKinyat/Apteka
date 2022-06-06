import React, {useEffect, useState} from 'react';

const Korzina = ({products,setOrders,Key}) => {
    function getLocalstorage(){
        return JSON.parse(localStorage.getItem(Key)) || [];
    }

    function BuyProduct() {
        localStorage.setItem(Key, JSON.stringify([]))
        setOrders(null);
    }
let total=0;
    function removeProduct(id) {
    let arr=products;
    //
        arr[id].count--;
        arr[id].total=arr[id].total-arr[id].price;
        if(arr[id].count===0){
            arr.splice(id, 1);
        }
        setOrders(arr);
        localStorage.setItem(Key, JSON.stringify(arr));

    }

    return (
        <div>
            <div className="container ">
                <div className="row ">
                    <div>
                        <div className="goods_box" id="goods">

                            <div className="table-responsive ">
                                <table className="goods table mt-3" id="table1">
                                    <thead>
                                    <tr className="table-primary ">
                                        <th data-type="number">№</th>
                                        <th data-type="string">Name</th>
                                        <th data-type="string">Quantity</th>
                                        <th data-type="number">Price, &#x20b8;</th>
                                        <th></th>

                                    </tr>
                                    </thead>
                                    <tbody className="list" id={'orders'}>
                                    {products.map((product,i)=>{
                                        total=total+Number(product.total);
                                        return(
                                        <tr  key={i} className="table-primary align-middle">
                                            <td data-type="number">{i+1}</td>
                                            <td data-type="string">{product.name}</td>
                                            <td data-type="number">{product.count}</td>
                                            <td data-type="number">{product.price} &#x20b8;</td>


                                            <td><button onClick={()=>{removeProduct(i)}} className={'btn btn-danger'}>X</button></td>
                                        </tr>
                                    )})}
                                    </tbody>
                                </table>
                            </div>
                            <div style={{fontSize: "2em", color: "red"}} className="price_title">Total: <span className="price_result">{total} &#x20b8;</span><br/>
                                <button className={'btn btn-outline-primary'} onClick={BuyProduct}>Buy</button>
                        </div>
                    </div>
                    {/*<div className="col-xs-12 col-xxl-7">*/}
                    {/*    <div className="price_box">*/}
                    {/*        <div className="menu">*/}
                    {/*            */}
                    {/*            </div>*/}
                    {/*        </div>*/}

                    {/*    </div>*/}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Korzina;