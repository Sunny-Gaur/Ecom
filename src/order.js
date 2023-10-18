import axios from "axios";
import { data } from "jquery";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


import Navbar from "./Navbar";

export default function Onrpro() {



    var uri = "http://localhost:1000/";
    var navi = useNavigate();

    // check end

    const [data2, setdata2] = useState([]);
    function getdata() {
        axios.get(uri + "getimgs").then((succ) => {
            // console.log(succ.data)
            setdata2(succ.data);
        })
    }

    useEffect(() => {
        getdata();
    }, [])

    function pro(x) {
        // console.log(x)
        navi("/order?id=" + x._id)
    }






    var pid = new URLSearchParams(window.location.search).get("id");
    // console.log(pid)

    var PID = { prod: pid }

    const [data1, setdata1] = useState([]);
    function getonepro() {
        if (pid) {
            axios.post(uri + "getonepro", PID).then((succ) => {
                // console.log(succ.data)
                setdata1(succ.data)
            })
        }
    }
    useEffect(() => {
        getonepro();
    }, [pid])
    console.log(data1)
    return (
        <>
            <Navbar />
            <div className="col-lg-12 ">
                <br />
            </div>




            <div className="container container5">
            
                {data1.map((row) => (
                    <>

                        <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                            <br /> <br /> <br />
                            <div className="col-lg-3  col-md-2 col-sm-2 col-xs-5">
                                <img src={row.Image} className="img-responsive" />

                            </div>


                            <div className="col-lg-4 ">

                                <p className="bigtxt "> {row.Name}     </p>
                                <h3>Special price</h3>
                                <span className="df">


                                    <h4>Rs:{row.Price}</h4>&nbsp;&nbsp;&nbsp;&nbsp;

                                    <h5><strike>Rs:{row.Strike}</strike></h5>&nbsp;&nbsp;
                                    <h5>{row.Off}</h5>
                                </span>

                                <button className='btn-danger box'> Remove</button>
                            </div>
                            {/* <div className='col-lg-7 '>
                <button className='btn btn-warning pull-right'>Place Order</button>


            </div> */}
                            <div className='col-lg-3 col-lg-offset-2 bg-danger'>
                                <div className='col-lg-12 bg-danger text-center'>
                                    <p>PRICE DETAILS</p>
                                    <div className='df2'>
                                        <span>
                                            <p>Price</p>
                                            <p>Discount</p>
                                            <p>Delivery Charges</p>
                                            <p>Total Amount</p>
                                        </span>
                                        <span>
                                            <p>Rs:{row.Price}</p>
                                            <p>{row.Off}</p>
                                            <p>{row.Delivery}</p>
                                            <p>{row.Total}</p>
                                        </span>
                                    </div>
                                </div>
                                <span className='text-success'>You will save Rs:{row.Save}on this order</span>
                            </div>

                        </div>
                        <div className='col-lg-12 '>
                        <Link to="/buy"> <button className='btn btn-warning pull-right box'>Place Orderss</button></Link>
            <br/>
                            <br />
                            <hr />



                        </div>




                    </>
                ))}
            </div>
        </>
    )
}
