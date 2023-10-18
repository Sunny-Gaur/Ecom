import axios from "axios";
import { useEffect, useState } from "react";
import App from "./App";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function Submit() {
    var navi = useNavigate();

    var uri = "http://localhost:1000/";
    const [data, setdata] = useState([]);

    var user = localStorage.getItem('useridlocal')
    function sun() {
        // console.log(user);
        var obj = {
            User: user
        }
        axios.post(uri + "go", obj).then((succ) => {
            console.log(succ);
            setdata(succ.data);

        })
    }


    useEffect(() => {
        sun();
    }, [user])

    function placeorder(x) {
        alert("succfully order placed");
        navi("/")
        var obj2 = {
            PID: x.PId,
            PNAME: x.Pname,
            PIMAGE: x.Pimage,
            Pprice: x.Pprice,
            UID: x.UID,
            Qty: x.Qty
        }
        // console.table(obj2)
        axios.post(uri + 'getorder', obj2).then((succ) => {
            console.table(succ.data)
            var ar = succ.data
            if (ar == '') {
                console.log('first order')
                axios.post(uri + 'placeorder', obj2).then((succ) => {
                    alert(succ.data)
                })
                axios.post(uri + 'rmvcart', obj2).then((succ) => {
                    if (succ.data == 'deleted') {
                        console.log('deleted from cart')

                    }
                })
                // return false;
                // setnocart(false)
            } else {
                console.log("second order")
                for (var count = 0; count < ar.length; count++) {
                    // if (ar[count].orderno != 0) {
                    console.log("order not equal to zero,,greater than zero")
                    axios.post(uri + "placeorder", obj2).then((succ) => {
                        if (succ.data == "added") {
                            // alert("order has been placed")
                            return false;
                        }
                        // navi("/");
                    })

                    axios.post(uri + 'rmvcart', obj2).then((succ) => {
                        if (succ.data == 'deleted') {
                            console.log('deleted from cart')

                        }
                    })
                    // }
                }
                return false;
            }
        })


    }









    return (
        <>
            <Navbar />
            {/* {data.map((row) => ( */}
            <div className="col-lg-12 text-center bgim">

                <h1 className="glyphicon glyphicon-user nn"><span >Sunshine.com</span></h1>
            </div>

            {data.map((row) => (
                <>

                    <div className="col-lg-12 hh ">
                        <span className="pull-right"><u>invoice no:-</u>{row._id}</span>

                        <br />                <br />



                        <div className="col-lg-12">
                        </div>

                       

                        <div className="col-lg-3 col-xs-3 col-sm-3  col-md-3">
                            <div className="col-lg-12 bdr box ">
                                <img src={row.Imgs} className="img-responsive" style={{ backgroundSize: 'contain', height: 220, padding: 10 }} />
                            </div>
                        </div>

                        <div className="col-lg-4 col-lg-offset-1 col-xs-3 col-sm-3 col-md-3 bg-info bdr box">
                            <div className="col-lg-12 ">
                                <div className="text-center"> <h3>user Detail</h3></div>
                                <div className='df2'>
                                    <span>
                                        <p>Name</p>
                                        <p>State</p>
                                        <p>City</p>
                                        <p>Pin</p>
                                        <p>House</p>
                                        <p>Address</p>
                                        <p>Road</p>
                                        <p>Phone</p>
                                        <p>Alt-ph</p>

                                    </span>
                                    <span>
                                        <p>{row.Name}</p>
                                        <p>{row.State}</p>
                                        <p>{row.City}</p>
                                        <p>{row.Pin}</p>
                                        <p>{row.House}</p>
                                        <p>{row.Address}</p>
                                        <p>{row.Road}</p>
                                        <p>{row.Phone}</p>
                                        <p>{row.Phone2}</p>
                                    </span>
                                </div>



                            </div>
                        </div>
                        {/* <div className="col-lg-1 col-xs-1 col-md-1 col-sm-1"></div> */}


                        <div className="col-lg-3 col-lg-offset-1 col-sm-offser-1 col-md-offset-1 col-md-4 col-xs-4 col-sm-4 bg-info bdr box ">
                            <div className="col-lg-12">
                                <div className="text-center"> Product</div>
                                <div className='df2'>
                                    <span>


                                        <p>Product-Name</p>


                                        <p>Qty</p>
                                        <p>Price</p>

                                        <p>Discount</p>
                                        <p>Off</p>
                                        <p>Total</p>
                                        <p>Saved</p>

                                    </span>
                                    <span>
                                        {/* <p>{row._id}</p> */}

                                        <p>{row.Pcat}</p>
                                        <p>{row.Qty}</p>
                                        <p>{row.Pprice * row.Qty}</p>

                                        <p>{row.Poff}</p>
                                        <strike>{row.Pstrike}</strike>
                                        <p>{row.Ptotal *  row.Qty}</p>
                                        <p>{row.Psave}</p>
                                        
                                    </span>
                                </div>

                                {/* </div> */}
                            </div>
                            </div>



                            {/* </div> */}



                            {/* <button className="btn-success pull-right btm col-lg-2 pl" onClick={placeorder}>Place Order</button> */}

                        </div>
                        {/* </div> */}
                        <button className="btn-success pull-right bb" onClick={placeorder}>Place Order</button>
                        <br />

                    </>

            ))}



                </>
            )
}