import axios from "axios";
// import { useState } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Downnav from "./Downnav";
import Navbar from "./Navbar";



export default function Mobile(){
    var uri = "http://localhost:1000/"

    var navi = useNavigate();

    const [data, setdata] = useState([]);
    function getdata() {
        axios.get(uri + "Mobile").then((succ) => {
            console.log(succ.data)
            setdata(succ.data);
        })
    }

    useEffect(() => {
        getdata();
    }, [])

    function pro(x){
        // console.log(x)
        navi("/product?id="+x._id)
    }
    

    return(
        <>
        <Navbar/>
        <Downnav/>
        
               <div className=' container5 '>
                &nbsp;
                <div className="col-lg-12 col-md-12 col-xs-12">
                
                {data.map((row) => (
                    

                    <div className='col-lg-2 col-md-3 col-sm-3 col-xs-6  box ' onClick={()=>pro(row)} style={{ backgroundSize: 'cover', height: 260,paddingTop:0}} key={row._id}>
                        <div className="col-lg-12 text-center">
                            <img src={row.Image} className="img-responsive"  style={{ backgroundSize: 'contain', height: 160, padding:10}}/>
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