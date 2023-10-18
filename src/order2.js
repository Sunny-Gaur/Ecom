import axios from "axios";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import Downnav from "./Downnav";
import About from "./About";
export default function order2() {
    var uri = "http://localhost:1000/";
    // var navi = useNavigate();

    const [data2, setdata2] = useState([]);
    function getdata() {
        axios.get(uri + "getcart").then((succ) => {
            // console.log(succ.data)
            setdata2(succ.data);
        })
    }

    useEffect(() => {
        getdata();
    }, [])

    

    return (
        <>
            <Navbar />
            <Downnav />


            <div className=' '>
                {/* &nbsp; */}
                <div className="col-lg-12">
                    <About />
                    <div className="">
                        {data2.map((row) => (


                            <div className='col-lg-2 col-md-3 col-sm-3 col-xs-6   box ' style={{ backgroundSize: 'cover', height: 300, padding: 43 }} key={row._id}>
                                <div className="col-lg-12 text-center ">
                                    <img src={row.Image} className="img-responsive " />
                                    <p>{row.Sname}</p>
                                    <p>Rs:{row.Price}</p>
                                </div>




                            </div>







                        ))}
                    </div>
                </div>
            </div>





        </>
    )
}

