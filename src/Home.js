import Navbar from "./Navbar";
// import Footer from "./Footer";
import About from "./About";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer2 from "./footer2";
import { useEffect, useState } from "react";
import { FaBeer, FaHome, FaCaretRight, FaChevronDown, FaDashcube, FaWpforms, } from 'react-icons/fa';
import Img1 from './img/ear1.jpg';
import Img2 from './img/ear2.jpg';
import Img3 from './img/head2.jpg';
import Img4 from './img/head3.jpg';
import Img5 from './img/phone1.jpg';
import Img6 from './img/lap2.jpg';

import Img8 from './img/drown.jpg'
import Img9 from './img/charger1.jpg';
import Img10 from './img/camera1.jpg'
import Img11 from './img/lap1.jpg'
import Img12 from './img/phone2.jpg'
import Img13 from './img/headphone1.jpg'
import Img23 from './img/wash5.webp'


import Img7 from './img/slide2.0.webp'
import banner from './img/banner-5.png'
import slider1 from './img/bannera5.gif';
import slider2 from './img/bannera.jpg';
import slider3 from './img/bannera6.gif';
import slider4 from './img/bannera2.jpg';
import slider5 from './img/bannera3.jpg';


import banner2 from './img/Banner3.jpg';
import banner1 from './img/Banner2.jpg';
import Downnav from "./Downnav";
import { easing } from "jquery";
import Aos from "aos";








// AOS.init({durataion:2000});

export default function Home() {
    useEffect (()=>{
        AOS.refreshHard();

        AOS.init({durataion:2000,easing:"ease-in"});
    },[])
  

    return (
        <div>

            <Navbar />
            <Downnav/>

                <div className="carousel slide" id="mycaro" data-ride="carousel" data-interval='2500'>
                    <ul className="carousel-indicators">
                        <li className="active" data-slide-to="0" data-target="#mycaro"></li>
                        <li data-slide-to="1" data-target="#mycaro"></li>
                        <li data-slide-to="2" data-target="#mycaro"></li>
                        <li data-slide-to="3" data-target="#mycaro"></li>
                        <li data-slide-to="4" data-target="#mycaro"></li>

                    </ul>



                    <div className="carousel-inner">
                        <div className="item active">
                            {/* <div className="block">
                            </div> */}
                            <img src={slider3} className="img-responsive img3" />
                        </div>

                        <div className="item">
                            <img src={slider2} className="img-responsive img3" />
                        </div>

                        <div className="item">
                            <img src={slider5} className="img-responsive img3 " />
                        </div>
                        <div className="item">
                            <img src={slider4} className="img-responsive img3" />
                        </div>
                        <div className="item">
                            <img src={slider1} className="img-responsive img3" />

                        </div>
                        <a href="#mycaro" className="right carousel-control " data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                        </a>
                        <a href="#mycaro" className="left carousel-control " data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                        </a>
                    </div>
                </div>

                {/* first postion */}
                <div className="col-lg-12" >
                    <br />
                    <div  data-aos="fade-right">
                        <Link to="./checking">  <button className="btn btn-success btn-sm pull-right"><span className=""> </span>View</button></Link>
                        <span className="glyphicon glyphicon-flash ic2"></span> <span className="tex">Flash-sale</span>
                    </div>
                    <br />
                      <div className="col-lg-2 col-md-3 col-sm-3 col-xs-6">
                      <Link to="./Earphone">    <div className="col-lg-12 box text-center" data-aos="fade-down">    
                        {/* ./detail */}
                          <img src={Img1}  className="img-responsive" />
                               <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                          
                            <h4>Earphone</h4>

                            <span>Rs:500</span>


                        </div>
                        </Link>

                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-3 col-xs-6" data-aos="fade-up">
                         <Link to="./Headphoneuser">    <div className="col-lg-12 box text-center">
                         <img src={Img3} className="img-responsive" />
                           <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star "></span>
                          
                            <h4>Headphones</h4>

                            <span>Rs:999</span>

                        </div></Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-3 col-xs-6" data-aos="fade-down">
                    <Link to="./Laptop">   <div className="col-lg-12 box text-center">
                            <img src={Img6} className="img-responsive"/>
                               <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                          
                            <h4>Avita</h4>

                            <span>Rs:676</span>
                        </div>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-3 col-xs-6" data-aos="fade-up">
                    <Link to="./Mobile"> <div className="col-lg-12 box text-center">
                            <img src={Img12} className="img-responsive" />
                               <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                          
                            <h4>Samsung</h4>

                            <span>Rs:9999</span>
                        </div>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-3 col-xs-6" data-aos="fade-down">
                    <Link to="./Laptop"> <div className="col-lg-12 box text-center">
                            <img src={Img11} className="img-responsive" />
                               <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star "></span>
                            <span className="glyphicon glyphicon-star "></span>
                          
                            <h4>Dell</h4>

                            <span>Rs:24999</span>
                        </div>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-3 col-xs-6" data-aos="fade-up">
                    <Link to="./charger">    <div className="col-lg-12 box text-center">
                            <img src={Img9} className="img-responsive" />
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <h4>charger</h4>
                          
                            <span>Rs:236</span>

                        </div>
                        </Link>
                    </div>
                    {/* new 2nd */}
                    <div className="col-lg-2 col-md-3 col-sm-3 col-xs-6" data-aos="fade-up">
                    <Link to="./Headphoneuser">   <div className="col-lg-12 box text-center">
                            <img src={Img13} className="img-responsive" />
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                          
                            <h4>Headphone</h4>

                            <span>Rs:676</span>
                        </div>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-3 col-xs-6">

                       <Link to="./charger">  <div className="col-lg-12 box text-center" data-aos="fade-up">
                            <img src={Img9} className="img-responsive" />
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                          

                            <h4>Charger</h4>
                            <span>Rs:276</span>
                        </div>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-3 col-xs-6" data-aos="fade-up">
                    <Link to="./Camerauser">   <div className="col-lg-12 box text-center">
                            <img src={Img10} className="img-responsive" id="change" />


                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                          
                            <h4>Camera</h4>

                            <span>Rs:999</span>
                        </div>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-3 col-xs-6">
                    <Link to="./Laptop">     <div className="col-lg-12 box text-center" data-aos="fade-up">
                            <img src={Img11} className="img-responsive" />
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                          
                            <h4>Headphone</h4>

                            <span>Rs:43000</span>
                        </div>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-3 col-xs-6">
                    <Link to="./Mobile">       <div className="col-lg-12 box text-center" data-aos="fade-up">
                            <img src={Img12} className="img-responsive" />
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                          
                            <h4>Samsung</h4>

                            <span>Rs:7999</span>
                        </div>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-3 col-xs-6">
                    <Link to="./Headphoneuser">      <div className="col-lg-12 box text-center" data-aos="fade-up">
                            <img src={Img3} className="img-responsive" />
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                          
                            <h4>Headphone</h4>

                            <span>Rs:676</span>
                        </div>
                        </Link>

                    </div>

                    {/* 2nd start */}

                    <div className="col-lg-12" data-aos="fade-up">
                        <img src={banner} className="img-responsive" />
                        <br />


                    </div>


                    <div>
                        <Link to="./checking">  <button className="btn btn-success btn-sm pull-right" data-aos="fade-right"><span className="glyphicon  cl"> </span> view</button></Link>
                        <span className="glyphicon glyphicon-fire fi" data-aos="fade-right"></span>   <span className="tex " data-aos="fade-right">Special-offers</span>
                    </div>
                    <br />


                    <div className="col-lg-2 col-md-3 col-sm-3 col-xs-6">
                    <Link to="./Headphoneuser">     <div className="col-lg-12 box text-center" data-aos="fade-up" >

                            <img src={Img1} className="img-responsive" />   <span className="glyphicon glyphicon-star y "></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                          
                            <h4>Earphone</h4>

                            <span>Rs:644</span>
                        </div>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-3 col-xs-6" >
                    <Link to="./Headphoneuser">     <div className="col-lg-12 box text-center" data-aos="fade-down">
                            <img src={Img3} className="img-responsive" />
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star "></span>
                          
                            <h4>Headphone</h4>

                            <span>Rs:676</span>
                        </div>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-3 col-xs-6">
                    <Link to="./Headphoneuser">    <div className="col-lg-12 box text-center" data-aos="fade-up">
                            <img src={Img4} className="img-responsive" />
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star "></span>
                          
                            <h4>Headphone</h4>

                            <span>Rs:676</span>
                        </div>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-3 col-xs-6">
                    <Link to="./Headphoneuser">      <div className="col-lg-12 box text-center" data-aos="fade-down">
                            <img src={Img5} className="img-responsive" />
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                          
                            <h4>Samsung gg</h4>

                            <span>Rs:9666</span>
                        </div>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-3 col-xs-6">
                    <Link to="./Headphoneuser">        <div className="col-lg-12 box text-center" data-aos="fade-up">
                            <img src={Img2} className="img-responsive" />
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                          
                            <h4>Headphone</h4>

                            <span>Rs:676</span>
                        </div>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-3 col-xs-6">
                    <Link to="./Headphoneuser">      <div className="col-lg-12 box text-center" data-aos="fade-down">
                            <img src={Img6} className="img-responsive" />
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                          
                            <h4>Apple Laptop</h4>

                            <span>Rs:166676</span>
                        </div>
</Link>
                    </div>




{/* third start */}

                    <div className="col-lg-2 col-md-3 col-sm-3 col-xs-6">
                    <Link to="./Headphoneuser">   <div className="col-lg-12 box text-center" data-aos="fade-up">
                            <img src={Img2} className="img-responsive" />
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                          
                            <h4>Earphone</h4>

                            <span>Rs:676</span>
                        </div>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-3 col-xs-6">
                    <Link to="./Charger">      <div className="col-lg-12 box text-center"  data-aos="fade-up">
                            <img src={Img9} className="img-responsive" />
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                          
                            <h4>Charger</h4>

                            <span>Rs:676</span>
                        </div>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-3 col-xs-6"  data-aos="fade-up">
                    <Link to="./Camerauser">      <div className="col-lg-12 box text-center">
                            <img src={Img10} className="img-responsive" id="change" />


                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                          
                            <h4>Camera</h4>

                            <span>Rs:699</span>
                        </div>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-3 col-xs-6"  data-aos="fade-up">
                    <Link to="./Laptop">     <div className="col-lg-12 box text-center">
                            <img src={Img11} className="img-responsive" />
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                          
                            <h4>Avita</h4>

                            <span>Rs:19999</span>
                        </div>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-3 col-xs-6"  data-aos="fade-up">
                    <Link to="./Mobile">     <div className="col-lg-12 box text-center">
                            <img src={Img12} className="img-responsive" />
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                          
                            <h4>Samsung</h4>

                            <span>Rs:9999</span>
                        </div>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-3 col-xs-6"  data-aos="fade-up">
                    <Link to="./Headphoneuser">      <div className="col-lg-12 box text-center">
                            <img src={Img13} className="img-responsive" />
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                            <span className="glyphicon glyphicon-star y"></span>
                          
                            <h4>Headphone</h4>

                            <span>Rs:676</span>
                        </div>
                        </Link>

                    </div>


                    <div className="col-lg-6" data-aos="flip-right">
                        <br />
                        <span className="glyphicon glyphicon-briefcase ic3"></span><span className="tex">Best-deals</span>
                        <img src={banner1} className="img-responsive" />

<br/>
                    </div>
                    <div className="col-lg-6  " data-aos="zoom-in-up">
                        <br />
                        <br />
                        <br />
                        <img src={banner2} className="img-responsive" />

                    </div>
                    



                </div>


                <Footer2 />

                {/* {/* <img src="../images/bulb off.jpg" alt="" id="mgs"> */}

{/* 

                <div data-aos="fade-up"
>
</div>
 */}



            </div>
        
    )

}
