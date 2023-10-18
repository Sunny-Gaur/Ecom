import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
export default function Register() {
    var uri = 'http://localhost:1000/';
    var navi = useNavigate();
    const [Nms, setnms] = useState();
    const [Nmsl, setnmsl] = useState();
    const [pass,setpass] = useState();
const [con,setcot]=useState();
    const [genderj, setgender] = useState();
    const [addressj, setaddress] = useState();

    function send(e) {
        e.preventDefault();
        var data = new FormData(e.currentTarget);
        var name = data.get("name");
        var lname = data.get("lname");
        var gender = data.get("gender");
        var address = data.get("address");
        
        var userid = data.get("userid");
        var email = data.get("email");


        var contact = data.get("contact");
        var password = data.get("password");

        var reg = /[A-Z a-z]/
        var sunh=/[A-Z a-z 1-n]/

        // for (var i= 0 ; i<= password.length;i++){
        //     if(i!=6){
        //         alert("six value")
        //         console.log(i);
        //     }else{
        //         alert(" six lentgth password is required");
        //         return false;
        //     }
        // }
       
        for (var i = 0; i <= name.length; i++) {
            if (reg.test(name[i])) {


                if (i == name.length) {
                    setnms(name);
                }

            }
            else {
                alert("please enter only alphabet in Name");
                e.target.name.focus();
                return (false);
            }
        }
        if(password.length>=6){
            // alert("six")
            setpass(password);
        }else{
            alert("The length of password must be six or greater");
            e.target.password.focus();
            return (false);
        }
        for (var j = 0; j <= lname.length; j++) {
            if (reg.test(lname[j])) {

              

                if (j == lname.length) {
                    setnmsl(lname);
                }
            }
            else {
                alert("enter only alphabet in LastName");
                e.target.lname.focus();

                return (false);
            }
        }
        if(contact.length==10){
            // alert("six")
            setcot(contact);
        }else{
            alert("The length of Contact must be 10 digit");
            e.target.contact.focus();
            return (false);
        }
        for (var k = 0; k <= gender.length; k++) {
            if (reg.test(gender[k])) {
                // alert("sahi enter kiya");
                // return false;

                if (k == gender.length) {
                    setgender(gender);

                }
            }
            else {
                alert("enter only alphabet in gender");
                e.target.gender.focus();
                return (false);
            }
        }
        for (var m = 0; m <= address.length; m++) {
            if (sunh.test(address[m])) {
                // alert("sahi enter kiya");
                // return false;

                if (m == address.length) {
                    setaddress(address);

                    // alert("true");

                    // return false;
                }
            }
            else {
                alert("enter alphabet only in Address");
                e.target.address.focus();

                return (false);
            }
        }





     
        //  localStorage.setItem("show",data.get(name));
        if (Nms!=""&& Nmsl!="" && addressj!="" && genderj!="" && pass!="") {
            var regobj = {
                Name: name,
                LastName: lname,
                Password: password,
                Userid: userid,
                Email: email,
                Contact: contact,
                Address: address,
                Gender: gender
            }
            axios.post(uri + "ulocalregister", regobj).then((succ) => {
                //console.log(succ);
                if (succ.data == "") {
                    console.log("no user of this email")
                    axios.post(uri + "register", regobj).then((succ) => {
                        if (succ.data == "added") {
                            // console.log(succ.body);
                            // alert(succ.Name);
                            navi("/Login");
                            axios.post(uri + "ulocalregister", regobj).then((succ) => {
                                // console.log(succ.data._id);
                                localStorage.setItem("useridlocal", succ.data._id);
                            })
                        }

                    })
                } else {
                    alert("already register");
                    // alert(succ.Name);


                }

            })
        }else{
            alert("something wrong");
        }
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
                                <input type={'Text'} name="name" className="form-control abs" placeholder="First-Name" required />
                            </div>
                            <div className="form-group">
                                <input type={'Text'} name="lname" className="form-control abs" placeholder="Last-Name" required />
                            </div>
                            <div className="form-group">
                                <input type={'text'} name="gender" className="form-control abs" placeholder="gender" required />
                            </div>
                            <div className="form-group">
                                <input type={'text'} name="userid" className="form-control abs" placeholder="Enter user id you want to create" required />
                            </div>
                            <div className="form-group">
                                <input type={'email'} name="email" className="form-control abs" placeholder="Email" required />
                            </div>

                            <div className="form-group">
                                <input type={'text'} name="address" className="form-control abs" placeholder="address" required />
                            </div>
                            <div className="form-group">
                                <input type={'text'} name="password" className="form-control abs" placeholder="password" required />
                            </div>
                            <div className="form-group">
                                <input type={'number'} name="contact" className="form-control abs" placeholder="contact:no" required />
                            </div>
                            <div className="form-group text-center">
                                <input type={'submit'} name="name" className="btn btn-default mg btc" value={"Register"} />
                                <input type={'submit'} name="name" className="btn btn-dark btc" value={"Reset"} />

                            </div>
                        </form>
                    </div>















                </div>
            </div>
        </div>
    )
}
