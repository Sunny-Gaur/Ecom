import axios from "axios";
import { data } from "jquery";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import App from "./App";
import Downnav from "./Downnav";
import Navbar from "./Navbar";

export default function Onrpro() {

    var uri = "http://localhost:1000/";
    var navi = useNavigate();

    var user = localStorage.getItem('useridlocal')
    console.log(user)

   


    const [nm, setnm] = useState('')
    const [em, setem] = useState('');
    const [cot, setcot] = useState('')
    const [id, setid] = useState('')
    function getuser() {
        var user1 = { user: user }
        axios.post(uri + 'getuser1', user1).then((succ) => {
            // console.log(succ.data)
            setem(succ.data.Email)
            setcot(succ.data.Contact)
            setnm(succ.data.Name)
            setid(succ.data._id)
        })
    }
    // console.log(nm,em,cot)
    useEffect(() => {
        getuser()
    }, [user])


    function pro(x) {
        if (!user) {
            alert("please login first")
            navi('/login')
        }
        else {
            console.log(x)
            var alldata = {
                UName: nm,
                UEmail: em,
                UCot: cot,
                UID: id
            }
            var pro = {
                PID: x._id,
                PName: x.Name,
                PImage: x.Image,
                PPrice: x.Price,
                Qty: 1,
                PCat: x.Categories,
                PStrike:x.Strike,
                PDetail:x.Detail,
                PDfs:x.Dfs,
                PDs:x.Ds,
                PDth:x.Dth,
                PDfo:x.Dfo,
                PDel:x.Delivery,
                PMore:x.More,
                PSave:x.Save,
                PStart:x.Star,
                PTotal:x.Total,
                Poff:x.Off
                


            }
            Object.assign(alldata, pro);
            console.log(alldata)
            // console.log(pro);

            axios.post(uri + "newss", { userid: user }).then((succ) => {
                console.log(succ.data)
                if (succ.data == '') {
                    alert("adding to cart")
                    axios.post(uri + "addcart", alldata).then((succ) => {
                        if (succ.data == "added to cart") {
                            alert("added")
                            navi("/Main");

                        }
                    })
                } else {
                    console.log("cart ch data hai")
                    var ar = succ.data;
                    // console.log(ar)
                    for (var i = 0; i < ar.length; i++) {
                        if (ar[i].PID == pro.PID) {
                            console.log('pro hai')
                            alert("already added")
                            navi("/Main");
                            return false;
                        }
                    }
                    for (var i = 0; i < ar.length; i++) {
                        if (ar[i].PID != pro.PID) {
                            console.log('pro nhi hai')
                            alert(" adding to cart")
                            axios.post(uri + "addcart", alldata).then((succ) => {
                                if (succ.data == "added to cart") {
                                    alert("added")
                                }
                            })
                            return false;
                        }
                    }
                }
            })
        }


        // navi("/order?id="+x._id)
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




    return (
        <>
            <Navbar />

            <div className="col-lg-12 ">
                <br />
            </div>
            <div className="container container5">
                {data1.map((row) => (
                    <>
                        <div className='col-xs-12 col-sm-4 box bdr '>
                            <div className="col-lg-12 text-center">
                                <img src={row.Image} className="img-responsive"  style={{ backgroundSize: 'contain', height: 268, padding: 10 }}/>
                                <p>{row.Sname}</p>
                                <p><span>Rs:</span>{row.Price}</p>

                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-8' data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="100"
     data-aos-duration="3000"
     data-aos-offset="0">
                            <div className="col-lg-12">
                                <p className="bigtxt ">{row.Name}</p>
                                <h3>Special Price</h3>
                                <span>Rs:{row.Price}&nbsp;&nbsp;&nbsp;&nbsp;</span><span><strike>{row.Strike}</strike></span>&nbsp;&nbsp;<span>{row.Off}off</span><br />

                                <h3>Available Offer</h3>

                                <p> <span className="glyphicon glyphicon-tags text-success"></span>&nbsp;{row.Detail}</p>
                                <p> <span className="glyphicon glyphicon-tags text-success"></span>&nbsp;{row.Dfs}</p>
                                <p> <span className="glyphicon glyphicon-tags text-success"></span>&nbsp;{row.Ds}</p>
                                <p> <span className="glyphicon glyphicon-tags text-success"></span>&nbsp;{row.Dth}</p>
                                <p> <span className="glyphicon glyphicon-tags text-success"></span>&nbsp;{row.Dfo}</p>
                               {/* <button>+</button> <button>&nbsp;{row.Qnt}</button>&nbsp;<button>-</button> */}
                            

                                 <button className=" btn-info" onClick={() => pro(row)}>Add to cart</button>
                           

                            </div>
                            &nbsp;
                            <br />
                        </div>



                    </>
                ))}
                {/* <button className="btn-success">Some More related items</button> */}

            </div>
        </>
    )
}
