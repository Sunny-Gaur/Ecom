import axios from "axios";
import { useEffect, useId, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bnr from "./img/Banner-top-1.jpg";

export default function Navbar() {
    var navi = useNavigate();
    var userid = localStorage.getItem('useridlocal');
    // console.log(userid)
    
    var dark = localStorage.getItem("Nameofuser");


    const [id, setid] = useState(false);
    function logout() {
        alert("logout");
        // alert(usernames);
        localStorage.removeItem("useridlocal");
        localStorage.removeItem("Nameofuser");


        navi("/")
        // localStorage.removeItem("show");

        setid(false)
    }
    useEffect(() => {
        if (userid) {
            setid(true)
        }
    }, [userid])

    function subcat(e) {
        e.preventDefault();
        var d = new FormData(e.currentTarget);
        var search = d.get('search').toLowerCase();
        // console.log(search)
        if (search) {
            navi("/getpro");
            localStorage.setItem("search", search);
        } else {
            alert("please search something");
            
            }
    }

    function cart(){
        if(userid){
            navi("/Main");
        }else{
            alert("Please login first")
        }
    }

    return (
        <>
            <img src={bnr} className="img-responsive  fixed z" />

            <nav className="navbar navbar-default bgi navbar-fixed-top topp ">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="navbar-brand">
                            <span className="glyphicon glyphicon-user re"></span>&nbsp;&nbsp;
                            <span className="re">Sunshine</span>
                            
                        </div>
                        <form  className=" nav navbar-nav-left pull-right  ts"  onSubmit={subcat} id="small">
                                <li className="ts">
                              <a>   <input type={"text"} name='search' placeholder="search hare"  className="gh"/>
                                  <button type={"submit"}><span>search</span> </button></a>
                                    </li>
                            </form>
                          
                    </div>
                    

                    <div class="collapse navbar-collapse " id="myNavbar">
                        <ul className="nav navbar-nav nv">
                            <li className="hv"><Link to="/">Home</Link></li>
                            {/* <li className="hv"><Link to="/">Services</Link></li> */}
                            <li className="hv"><Link to="/about2">AboutUs</Link></li>
                          
                            
                        </ul>
                        <ul className="nav navbar-nav navbar-right nv">
                            <form className="navbar-form navbar-left invi" onSubmit={subcat}>
                                <div className="form-group">
                                    <input type={"text"} name='search' className="form-control bdrinvir" placeholder="Search" id="biger"/>
                                </div>
                                <button type={"submit"} className="btn btn-default glyphicon glyphicon-search  bdrinvir2   newp " id="sech"></button>
                            </form>
                            
                            
                            {userid ? (

                                <>
                                    <li onClick={cart}><Link to=""><span className="glyphicon glyphicon-shopping-cart"></span></Link></li>
                                    <li onClick={logout}><Link to="">Logout</Link></li>
                                    <li ><a className="glyphicon glyphicon-user">&nbsp;<span className="ggh">{dark}</span></a></li>
                                </>


                            ) : (
                                <>
                                    <li className="hv"><Link to="/Register">Register</Link></li>
                                    <li className="hv"><Link to="/login">Login</Link></li>
                                </>
                            )}


                            {/* <li className="hv"><Link to="/Admin">Admin</Link></li> */}
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="space col-lg-12"></div>
        </>
    )

}