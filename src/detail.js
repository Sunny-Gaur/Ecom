import Navbar from "./Navbar"
import { Link, renderMatches } from "react-router-dom";
// import AddCart from "./AddCart";

import Img1 from './img/ear1.jpg';
import slider3 from './img/bannera3.jpg';
import { FaGreaterThanEqual } from "react-icons/fa";


export default function detail() {
    // function star(){
    //     color:green;
    // }




    return (
        <div>
            <Navbar />
            {/* <div className="father2"> */}

            <div className="col-lg-12">
            <br/>
                    <div className="col-lg-4 bdr ">
                    <span className="glyphicon glyphicon-heart bgc"></span>
                        <img src={Img1}  className="img-responsive" />
                        

                    </div>
                    {/* <br/><br/><br/><br/><br/><br/> */}
                    <div className="col-lg-8">
                    <p className="bigtxt "> Noise Buds Vs102 Plus with 36 Hovers playtime,Instacharge Enc,Quad Mic and HyperSync Bluetooth Headset (Jet white,True Wireless)     </p>
                      <h3>Special price</h3>
                      <span className="df">
                     
                       
                        <h4>Rs:1,199</h4>&nbsp;&nbsp;&nbsp;&nbsp;
                         <h5><strike>Rs:3999</strike></h5>&nbsp;&nbsp;
                         <h5>70% off</h5>
                         </span>
                         rating: <span className="glyphicon glyphicon-star wh"></span>
                        <span className="glyphicon glyphicon-star wh" ></span>
                        <span className="glyphicon glyphicon-star wh"></span>
                        <span className="glyphicon glyphicon-star wh"></span>
                        <span className="glyphicon glyphicon-star wh"></span>
                        <h4>Available offers</h4>
                       <p>  <span className="glyphicon glyphicon-tags text-success"></span>&nbsp; Bank offer 5% Cashback on Axis Bank Card</p>
                        <p><span className="glyphicon glyphicon-tags text-success"></span>&nbsp;  Special Price Get extra 70% off(price inclusive of cashback/coupon)</p>
                        <p> <span className="glyphicon glyphicon-tags text-success"></span>&nbsp; Partner Offer Buy this product and get upto rs:500 off on Mobiles </p>
                        <p><span className="glyphicon glyphicon-tags text-success"></span>&nbsp; Partner Offer Sign up for Pay Later</p>
                        <p><span className="glyphicon glyphicon-tags text-success"></span>&nbsp; 1 Year Warrenty From the Date Of Purchases</p>
                      


                    </div>
                    &nbsp;&nbsp;&nbsp;
                    
                    <Link to="/AddCart">  <button className="btn btn-info">Add to cart</button> </Link>

                
            
        </div>
        </div>
    )
}