import axios from "axios";
import { useEffect, useState } from "react"

import Nav2 from "./Nav2"
import Adminbar from "./Adminbar"
import Addproduct from "./Addproduct"
export default function Adminpannel(){
    var uri = "http://localhost:1000/"

    const [data2, setdata2] = useState([]);
    function getdata() {
        axios.get(uri + "getimg2").then((succ) => {
            console.log(succ.data)
            setdata2(succ.data);
        })
    }
    useEffect(() => {
        getdata();
    }, [])
    function del(x) {
        console.log(x.id)
        axios.post(uri + "delet", { id: x._id }).then((succ) => {
            console.log(succ.data);
            if (succ.data == "delete") {
                alert("data deleted")
                getdata();
            }
        })
    }
    return(
        <>
        <Nav2/>
       <br/>       <br/>

       <div className='col-lg-12 col-md-12 col-xs-12'>



{data2.map((row) => (
    <div className='col-md-3 col-lg-2  box' style={{ backgroundSize: 'cover', height: 280, paddingTop:0 }} key={row._id}>
        <div className="col-lg-12 text-center">
            <img src={row.Image} className="img-responsive"  style={{ backgroundSize: 'contain', height: 160, padding: 10 }}/>
            <p>{row.Sname}</p>
            <p>Rs:{row.Price}</p>
            <div className="text-center">
            <button className="bgr" onClick={() => del(row)}>Delete</button>
            </div>
        </div>
    </div>

))}

</div>



        
      

        </>
    )
}