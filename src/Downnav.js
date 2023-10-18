
import { Link } from "react-router-dom";

export default function Downnav() {
    return (
        <>
            <div className="x">
                <div className="navbar navbar-inverse mnu">
                    <button type="button" className="navbar-toggle pull-left" data-toggle="collapse" data-target="#myNavbar2">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>


                    <div class="collapse navbar-collapse" id="myNavbar2">
                        <ul className="nav navbar-nav">
                            <li>
                                <a data-toggle="dropdown" href="">Laptops<span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <Link to="/Laptop" ><li>Laptops</li></Link>
                                    <Link to="/Mouse" ><li>Mouse</li></Link>
                                    <Link to="/Keyboard" ><li>keybord</li></Link>


                                </ul>
                            </li>
                            <li>
                                <a data-toggle="dropdown" href="">Mobile<span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <Link to="/Mobile" ><li>Mobile</li></Link>
                                </ul>
                            </li>

                            <li>
                                <a data-toggle="dropdown" href="">camera <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    {/* <li><a href="">cameras</a></li> */}
                                    <Link to="/Camerauser" > <li>Camera</li></Link>

                                </ul>
                            </li>
                            <li className="dropdown">
                                <a data-toggle="dropdown" href="">Audio <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li></li>
                                    <Link to="/Earphone" > <li>Bluetooth Headphones</li></Link>
                                </ul>

                            </li>


                            <li>
                                <a data-toggle="dropdown" href="">Headphones <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <Link to="/Headphoneuser" > <li>Headphones</li></Link>
                                </ul>
                            </li>
                            <li>

                                <a data-toggle="dropdown" href="">Tv<span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <Link to="/tv" ><li>Tv</li></Link>
                                </ul>
                            </li>


                            <li>

                                <a data-toggle="dropdown" href="">Washing Machine<span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <Link to="/Washing" ><li>washing machine</li></Link>
                                </ul>
                            </li>
                            <li>

                                <a data-toggle="dropdown" href="">Watch<span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <Link to="/Watch" ><li>Watch For men</li></Link>
                                    <Link to="/Watch2" ><li>Watch For Women</li></Link>

                                </ul>
                            </li>

                            {/* <li>
                                <a data-toggle="dropdown" href="">key/mouse<span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                  <Link to="/keybord" ><li>keybord</li></Link>
                                </ul>
                            </li> */}
                           

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}