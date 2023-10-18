import axios from "axios";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Downnav from "./Downnav";
export default function Earphone() {
    var uri = "http://localhost:1000/";
    var hh = localStorage.getItem("useridlocal");
    console.log(hh);
    const[man,setdatas] =useState()
// if(hh!="")
//     setdatas(hh);
// }

    var navi = useNavigate();

        const [data2, setdata2] = useState([]);
    function getdata() {
        if(hh){
                    axios.get(uri + "audio2").then((succ) => {
            setdata2(succ.data);
        })
    }else{     
         var k=1;
        alert("login first")
        
    }

    
    }

    useEffect(() => {
        getdata();
    }, [])

    function pro(x) {
        // console.log(x)
        navi("/product?id=" + x._id)
    }
    return (
        <>
            <Navbar />
            <Downnav />
            <>
            {hh ? (
                <>
                    
                </>

            ):(
                <>
                <h>OOps you not login </h>
                <button className="btn-success">success</button>

                </>

            )}



            <div className=''>
                {/* &nbsp; */}
                <div className="col-md-12">
            
                    {data2.map((row) => (
                        <div className='col-lg-2 col-md-3 col-sm-3 col-xs-6  box ' onClick={() => pro(row)} style={{ backgroundSize: 'cover', height: 260, paddingTop: 0 }} key={row._id}>
                            <div className="col-lg-12 text-center">
                                <img src={row.Image} className="img-responsive" style={{ backgroundSize: 'contain', height: 160, padding: 10 }} />
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






        </>
    )
}

