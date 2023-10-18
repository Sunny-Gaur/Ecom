import { Link } from "react-router-dom";
import bnr from "./img/Banner-top-1.jpg";

export default function Nav2() {
    return (
        <>
            {/* <img src={bnr} className="img-responsive  fixed2 z" /> */}
            <nav className="navbar navbar-default bgi navbar-fixed-top  ">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="navbar-brand">
                            <span className="glyphicon glyphicon-user"></span>
                        </div>
                    </div>



                    <div class="collapse navbar-collapse " id="myNavbar">
                        <ul className="nav navbar-nav nv">
                            <li className="hv"><a>Admin-Site</a></li>
                            <li><Link to="/"><a>Home</a></Link></li>

                        </ul>

                        <ul className="nav navbar-nav navbar-right nv">
                        <li><Link to="/Addproduct"><a>Add-Product</a></Link></li>
                        <li><Link to="/Adminpannel"><a>Show/Del</a></Link></li>


                           <li><Link to="/About2"><a>About</a></Link></li>


                            {/* <li className="hv"><Link to="/login">Logout</Link></li> */}
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <div className="space col-lg-12"></div> */}
        </>
    )
}