import Navbar from "./Navbar";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


export default function Admin() {
    var navi = useNavigate();

    var uri = 'http://localhost:1000/'
    function subform(e){
        e.preventDefault();
        var data = new FormData(e.currentTarget);
        var id = data.get("name");
        var pass = data.get("password");

        var udat = { ID: id, PASSWORD: pass }
        // console.log(logindata);

        axios.post(uri + "Admin", udat).then((succ) => {
            if (succ.data) {
                alert("login Successful")
                console.log(succ.data._id);
            //    var data= localStorage.setItem("")
            localStorage.setItem("Admin",succ.data._id);

                // alert(succ.data.id);
                navi("/Adminpannel")
              
            } else {
                alert("not login");
            }
        })
        e.target.reset();
        e.target.name.focus();

       
    }
    return (
        <div>
        <Navbar/>
      
            <div className="container bgs"> 
            <div className="container-fluid bg-info text-center">
            

            <h2 className="">@Admin..</h2>
        </div>
                <div className=" up col-lg-4 col-lg-offset-4 my">
                    <div className="wall">
                        <form onSubmit={subform}>
                        <div className="container1">
                            <h3 className="text-center">
                            <img src="main.png" className="img-responsive imgss"/>
                            </h3>
                        </div>
                            <div className="form-group">
                                <input type={'Text'} name="name" className="form-control"  placeholder="ID" />
                            </div>
                            <div className="form-group">
                                <input type={'password'} name="password" className="form-control" placeholder="password" />
                            </div>
                            <div className="form-group">
                               <input type={'submit'} name="submit" className="btn btn-info" value={"Login"} />
                           
                            </div>
                            
                        </form>
                    </div>















                </div>
            </div>
        </div>

    )


}