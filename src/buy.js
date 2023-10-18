import axios from "axios";
import Navbar from "./Navbar"
import { useEffect, useState, useNavigate } from "react";
import { Link } from "react-router-dom";

export default function Buy() {
    var uri = "http://localhost:1000/";
    var user = localStorage.getItem('useridlocal')


    var userid = localStorage.getItem('useridlocal');
    console.log(userid);
    const [data, setdata] = useState([]);
    const [data21, setdata21] = useState('');
    const [data22, setdata22] = useState('');
    const [data23, setdata23] = useState('');
    const [data24, setdata24] = useState('');
    const [data25, setdata25] = useState('');
    const [data26, setdata26] = useState('');
    const [House, sethouse] = useState('');
    const [Address, setaddress] = useState('');
    const [Road, setroad] = useState('');
    // // first end hare

    // const[Road,setUName]= useState([]);
    const [beta, setdatac] = useState('');
    const [data2, setdata2] = useState([]);
    const [Qty, setqty] = useState('');
    const [Pcat, setpcat] = useState('');
    const [Pstrike, setstrike] = useState('');
    const [PPrice, setprice] = useState('');
    const [Psave, setsave] = useState('');
    const [Poff, setoff] = useState('');
    const [Ptotal, settotal] = useState('');
    const [Img, setImg] = useState('');
    const [my, setdatas] = useState('');


   
    function Send(e) {
        e.preventDefault();
        var data = new FormData(e.currentTarget);
        var name = data.get("name");
        var phone = data.get("phone");
        var phone2 = data.get("phone2");
        var city = data.get("city");
        var house = data.get("house");
        var address = data.get("address");
        var road = data.get("road");
        var pin = data.get("pin");
        var state = data.get("state");



        var address = data.get("address");
        var regobj = {
            User:userid,
            Name: name,
            Phone: phone,
            Phone2: phone2,
            Pin: pin,
            State: state,
            City: city,
            House: house,
            Address: address,
            Road: road,

        }

        
            axios.post(uri + "submited", regobj).then((succ) => {
                console.log(succ.data);
                alert("succfulley send data");
                // setdatas(succ.data.Name);
                console.log("names");
             
            

            if(succ!=""){
                alert("done")
                axios.post(uri + "usr", { userid: user }).then((succ) => {
                    setdata(succ.data);
                    console.log(succ.data)
                    var ar = succ.data;
                    ar.forEach((abc)=>{
                        console.log(abc.Qty);
                                    setqty(abc.Qty);
                                    //  setqty(succ.data.Qty)
                    setpcat(abc.PCat)
                     setstrike(abc.PStrike)
                    setprice(abc.PPrice)
                     setoff(abc.Poff)
                    setsave(abc.PSave)
                    settotal(abc.PTotal)
                    setImg(abc.PImage)
        
        
                    })
                   
                })
                axios.post(uri + "chr", { userid: user }).then((succ) => {
                    // console.log(succ);
                    console.log("done");
                    
                    setdata2(succ.data);
                    var sun = succ.data;
                    sun.forEach((sun)=>{
                        console.log(sun.Name);
                        console.log(sun.User);
        
        
                        setdata21(sun.Name);
                        setdata22(sun.Phone);
                        setdata23(sun.Phone2);
                        setdata24(sun.Pin);
                        setdata25(sun.State);
                        setdata26(sun.City);
                        sethouse(sun.House);
                        setaddress(sun.Address);
                        setroad(sun.Road);
                        setdatas(sun.User);
                        console.log(sun.User);
        
                    })
                  
                })
        
        
            }
        })


           
    }

   
           

    function placeorder1() {
        var Objj = {
            Name: data21,
            Phone: data22,
            Phone2: data23,
            Pin: data24,
            State: data25,
            City: data26,
            House: House,
            Address: Address,
            Road: Road,
            bb:my,
            Imgs:Img,


        }
        var objj2 = {
            Qty: Qty,
            Pcat: Pcat,
            Pstrike: Pstrike,
            Psave: Psave,
            Poff: Poff,
            Ptotal: Ptotal,
            Pprice: PPrice,
        }
        Object.assign(Objj, objj2);
        console.log(Objj)

        axios.post(uri + "hare", Objj).then((succ) => {
            console.log("hii");
            setdatac(succ);
            console.log(succ.data);

        })
    }



    return (
        <>
            {/* {data2.map((row) => ( */}
            <div>
                <Navbar />
                <div className="container2 col-lg-12 bgs">
                    <div className="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2 my">
                        <div className="">
                            <form onSubmit={Send}>
                                <div className="text-center col-lg-12 pad-10">
                                    <img src="main.png" className="imgs" />
                                </div>
                                <div className="form-group ">
                                    <input type={'Text'} name="name" className="form-control abs" placeholder="Full Name" />
                                </div>
                                <div className="form-group">
                                    <input type={'number'} name="phone" className="form-control abs" placeholder="Phone number" />
                                </div>
                                <div className="form-group">
                                    <input type={'number'} name="phone2" className="form-control abs" placeholder="Alt " />
                                </div>
                                <div className="form-group">
                                    <input type={'number'} name="pin" className="form-control abs" placeholder="Pincode" required />
                                </div>
                                <div className="form-group">
                                    <input type={'text'} name="state" className="form-control abs" placeholder="State " />
                                </div>
                                <div className="form-group">
                                    <input type={'text'} name="city" className="form-control abs" placeholder="City " />
                                </div>
                                <div className="form-group">
                                    <input type={'text'} name="address" className="form-control abs" placeholder="address" />
                                </div>
                                <div className="form-group">
                                    <input type={'text'} name="house" className="form-control abs" placeholder='House No,Bulding' />
                                </div>
                                <div className="form-group">
                                    <input type={'text'} name="road" className="form-control abs" placeholder='Road Name,Area,Colony' />
                                </div>

                                <div className="form-group text-center">
                                    {/* <input type={'submit'} name="name" className="btn btn-default mg btc" onClick={() => placeorder(row)} value={"Place Order"} /> */}
                               <input type={'submit'} name="submit" className="btn btn-default mg btc"  value={"Submit"}  />

                                <input type={'reset'} name="name" className="btn btn-dark btc" value={"Reset"} />&nbsp;&nbsp;
                             <br/> 
                            

                                </div>
                            </form>
                         
                        
                        </div>

                    </div>
            <div className="col-lg-3">
                              <Link to="/submited"> <button className="btn mg btc" onClick={placeorder1}>conform details  <span className="glyphicon glyphicon-forward"></span></button></Link>
                              </div>
                </div>
            </div>
            {/* ))} */}
        </>
    )
}