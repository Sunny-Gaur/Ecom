import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
export default function Register() {
var uri='http://localhost:1000/';
  var navi = useNavigate();

function send(e){
    e.preventDefault();
    var data = new FormData(e.currentTarget);
    var name = data.get("name");
    var lname = data.get("lname");
    var gender = data.get("gender");

    var userid = data.get("userid");
    var email = data.get("email");

    var address = data.get("address");
    var contact = data.get("contact");
    var password = data.get("password");
     var regobj= {
        Name:name,
        LastName:lname,
        Password:password,
        Userid:userid,
        Email:email,
        Contact:contact,
        Address:address,
        Gender:gender
     }

    //  }
    // //  localStorage.setItem("show",data.get(name));
    //  axios.post(uri+"ulocalregister",regobj).then((succ)=>{
    //     //console.log(succ);
    //     if(succ.data==""){
    //         console.log("no user of this email")
    //         axios.post(uri+"register",regobj).then((succ)=>{
    //             if(succ.data=="added"){
    //                 alert("done");
    //                 console.log(succ.body);
    //                 // alert(succ.Name);
    //                 navi("/");
    //                 axios.post(uri+"ulocalregister",regobj).then((succ)=>{
    //                     console.log(succ.data._id);
    //                     localStorage.setItem("useridlocal",succ.data._id);
    //                 })
    //             }

    //         })
    //     }else{
    //         alert("already register");
    //         // alert(succ.Name);

         
    //     }
      
    //  })
     e.target.reset();
     e.target.name.focus();
     
    }

 
    

    return (
        <div>
            <Navbar />
            <div className="container2 col-lg-12 bgs">
                <div className="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2 my">
                    <div className="">
                        <form onSubmit={send}>
                            <div className="text-center col-lg-12 pad-10">
                                <img src="main.png" className="imgs" />
                            </div>
                            <div className="form-group ">
                                <input type={'Text'} name="name" className="form-control abs" placeholder="First-Name" />
                            </div>
                            <div className="form-group">
                                <input type={'Text'} name="lname" className="form-control abs" placeholder="Last-Name" />
                            </div>
                             <div className="form-group">
                                <input type={'email'} name="email" className="form-control abs" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type={'text'} name="gender" className="form-control abs" placeholder="gender" />
                            </div>
                           
                            <div className="form-group">
                                <input type={'text'} name="pin" className="form-control abs" placeholder="pin code"/>
                            </div>
                            <div className="form-group">
                                <input type={'text'} name="mark" className="form-control abs" placeholder="Land Mark"/>
                            </div>
                           
                            <div className="form-group">
                                <input type={'text'} name="address" className="form-control abs" placeholder="Delivered address" />
                            </div>
                         
                            <div className="form-group">
                                <input type={'text'} name="address" className="form-control abs" placeholder="Alt Address" />
                            </div>
                            <div className="form-group">
                                <input type={'number'} name="contact" className="form-control abs" placeholder="Contact:no" />
                            </div>
                            <div className="form-group">
                                <input type={'number'} name="contact2" className="form-control abs" placeholder="Alt Contactno" />
                            </div>
                            <div className="form-group text-center">
                                <input type={'submit'} name="name" className="btn btn-default mg btc" value={"Place Order"} />
                                <input type={'submit'} name="name" className="btn btn-dark btc" value={"Reset"} />

                            </div>
                        </form>
                    </div>















                </div>
            </div>
        </div>
    )
}
