import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Downnav from "./Downnav";

export default function Getpro() {
    var ab = localStorage.getItem("search")
    var navi = useNavigate();

    var uri = 'http://localhost:1000/'
    const [data, setdata] = useState([])
    function getdata() {
        console.log(ab)
        axios.post(uri + 'getpro2',{ search: ab }).then((succ) => {
            console.log(succ)
            setdata(succ.data);
        })
    }
    useEffect(() => {
        getdata();
    }, [ab])

    function pro(x) {
        // console.log(x)
        navi("/product?id=" + x._id)
    }
    return (
        <>
            <Navbar />
            <Downnav />


            <div className=' '>
                &nbsp;
                <div className="col-md-12">
                    {data.map((row) => (


                        <div className='col-lg-2 col-md-3 col-sm-3 col-xs-6  box ' onClick={() => pro(row)} style={{ backgroundSize: 'cover', height: 265, paddingTop:0 }} key={row._id}>
                            <div className="col-lg-12 text-center ">
                                <img src={row.Image} className="img-responsive "  style={{ backgroundSize: 'contain', height: 160, padding: 10 }}/>
                                <p>{row.Sname}</p>
                                <p>Rs:{row.Price}</p>

                            </div>
                            <div className="text-center">

                                <button className=" btn btn-success">view detail</button>
                            </div>




                        </div>







                    ))}
                </div>
            </div>


        </>
    )
}
