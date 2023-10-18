import axios from "axios";
import Navbar from "./Navbar";
import { useEffect, useState, useNavigate } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Main() {
    var uri = "http://localhost:1000/";
    // var navi = useNavigate();

        

    var userid = localStorage.getItem('useridlocal');
    console.log(userid)





    // useEffect(()=>{
    //     if(userid!=""){
    //         navi("/Login");
    //         alert(userid);
    //     }

    // })


    const [data2, setdata2] = useState([]);
    function getdata() {
        axios.post(uri + "newss", { userid: userid }).then((succ) => {
            // console.log(succ.data)
            setdata2(succ.data);
        })
    }

    useEffect(() => {
        getdata();
    }, [userid])

    function incre(x) {
        console.log(x)
        axios.post(uri + "incqty", x).then((succ) => {
            console.log(succ.data)
            getdata();
        })

    }
    function decre(x) {
        console.log(x)

        axios.post(uri + "decqty", x).then((succ) => {
            console.log(succ.data)
            getdata();
        })

    }

// if (confirm=="confirm"){
//     confirm("yes")
    
// }


    function del(x) {
        console.log(x.id)
        axios.post(uri + "delet2", { id: x._id }).then((succ) => {
            console.log(succ.data);
            if (succ.data == "delete") {
                alert("data deleted")
                // confirm("yes")
                getdata();
            }
        })
    }
    // checking
    // function placeorder(x) {
    //     // console.log(x)
    //     var obj2 = {
    //         PID: x.PId,
    //         PNAME: x.Pname,
    //         PIMAGE: x.Pimage,
    //         Pprice: x.Pprice,
    //         UID: x.UID,
    //         Qty: x.Qty
    //     }
    //     // console.table(obj2)
    //     axios.post(uri + 'getorder', obj2).then((succ) => {
    //         console.table(succ.data)
    //         var ar = succ.data
    //         if (ar == '') {
    //             console.log('first order')
    //             axios.post(uri + 'placeorder', obj2).then((succ) => {
    //                 alert(succ.data)
    //             })
    //             axios.post(uri + 'rmvcart', obj2).then((succ) => {
    //                 if (succ.data == 'deleted') {
    //                     console.log('deleted from cart')
    //                     getdata()
    //                 }
    //             })
    //             // setnocart(false)
    //         } else {
    //             console.log("second order")
    //             for (var count = 0; count < ar.length; count++) {
    //                 // if (ar[count].orderno != 0) {
    //                 console.log("order not equal to zero,,greater than zero")
    //                 axios.post(uri + "placeorder", obj2).then((succ) => {
    //                     if (succ.data == "added") {
    //                         // alert("order has been placed")
    //                     }
    //                     // navi("/");
    //                 })
    //                 axios.post(uri + 'rmvcart', obj2).then((succ) => {
    //                     if (succ.data == 'deleted') {
    //                         console.log('deleted from cart')
    //                         getdata()
    //                     }
    //                 })
    //             }
    //             return false;
    //         }
    //     })


    // }


    return (
        <>
            <Navbar />
            <div className="col-lg-12 ">
                <br />
            </div>




            <div className="container container5">

                {data2.map((row) => (
                    <>

                        <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                            <br /> <br /> <br />
                            <div className="col-lg-3  col-md-2 col-sm-2 col-xs-5">
                                <img src={row.PImage} className="img-responsive " style={{ backgroundSize: 'contain', height: 268, padding: 10 }} />

                            </div>


                            <div className="col-lg-4 ">

                                <p className="bigtxt "> {row.PName}     </p>
                                <h3>Special price</h3>
                                <span className="df">


                                    <h4>Rs:{row.PPrice * row.Qty}</h4>&nbsp;&nbsp;&nbsp;&nbsp;

                                    <h5><strike>Rs:{row.PStrike}</strike></h5>&nbsp;&nbsp;
                                    <h5>{row.Poff}</h5>
                                </span>

                            </div>

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
                                            <p>Rs:{row.PPrice * row.Qty}</p>
                                            <p>{row.Poff}</p>
                                            <p>{row.PDel}</p>
                                            <p>{row.PTotal * row.Qty}</p>
                                        </span>
                                    </div>
                                </div>
                                <span className='text-success'>You will save Rs:{row.PSave}on this order</span>
                            </div>

                        </div>
                        <div className="col-lg-12">
                        <div className="col-lg-3 text-center">
                      
                            {(row.Qty == 1) ? (
                                <>
                                <button onClick={() => decre(row)} className="btn btn-danger" disabled >-</button>
                                </>

                            ) : (
                                <button onClick={() => decre(row)} className="btn btn-danger">-</button>
                            )}
                            <button className="btn btn-default" disabled>{row.Qty}</button>
                            <button onClick={() => incre(row)} className="btn btn-success">+</button>
                            {/* <br /><br /><br /> */}
                            </div>
                            <button className='btn-danger box glyphicon glyphicon-trash text-center' onClick={()=>del(row)}></button>
                            {/* <br /><br /><br /> */}

                            {/* <button className='btn btn-warning pull-right box' onClick={() => placeorder(row)}>Order Now</button> */}
                         <Link to="/buy">  <button className='btn btn-warning pull-right box'>Order Now</button></Link>

                            <br />
                            <br />
                            <hr />



                        </div>




                    </>
                ))}
            </div>










        </>
    )
}

