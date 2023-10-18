import Navbar from "./Navbar";
import Footer2 from "./footer2";
import slider1 from './img/about4.png';
import slider2 from './img/about1.png';//imp
import slider3 from './img/about2.0.jpg';
import Aboutm from './img/aboutm.png';
import Thank2 from './img/thank2.gif';
import Thank from './img/thank.webp';
// import slider2 from './img/bannera.jpg';
// import slider3 from './img/bannera6.gif';
// import slider4 from './img/bannera2.jpg';
// import slider5 from './img/bannera3.jpg';

import welcome from "./img/welcome.gif";



export default function About2() {
    return (
        <>
            <Navbar />
            <div className="col-lg-12">

                <div className="container-fluid  ch">
                    <div className="col-lg-12 text-center"> <h2 className="text-danger bg-danger">About Us</h2></div>



                    <div className="col-lg-3">
                        <img src={slider2} className="img-responsive" />
                    </div>
                    <div className="col-lg-9 tclr">
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laborum, aliquid odit enim alias velit reprehenderit mollitia odio ullam provident officia sequi fugit corrupti, quia iste consequatur debitis ratione quaerat deserunt necessitatibus minima soluta, ad est quis? Atque iure corrupti vitae delectus dolore ad temporibus molestiae suscipit unde ea odit optio, quaerat rerum doloremque repudiandae at praesentium corporis! Quis ipsum et quam quia aliquam?</p>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laborum, aliquid odit enim alias velit reprehenderit mollitia odio ullam provident officia sequi fugit corrupti, quia iste consequatur debitis ratione quaerat deserunt necessitatibus minima soluta, ad est quis? Atque iure corrupti vitae delectus dolore ad temporibus molestiae suscipit unde ea odit optio, quaerat rerum doloremque repudiandae at praesentium corporis! Quis ipsum et quam quia aliquam?</p>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laborum, aliquid odit enim alias velit reprehenderit mollitia odio ullam provident officia sequi fugit corrupti, quia iste consequatur debitis ratione quaerat deserunt necessitatibus minima soluta, ad est quis? Atque iure corrupti vitae delectus dolore ad temporibus molestiae suscipit unde ea odit optio, quaerat rerum doloremque repudiandae at praesentium corporis! Quis ipsum et quam quia aliquam?</p>

                    </div>


                    <div className="col-lg-12">
                        {/* <br /> <br /> */}
                        <div className="col-lg-9 tclr">
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laborum, aliquid odit enim alias velit reprehenderit mollitia odio ullam provident officia sequi fugit corrupti, quia iste consequatur debitis ratione quaerat deserunt necessitatibus minima soluta, ad est quis? Atque iure corrupti vitae delectus dolore ad temporibus molestiae suscipit unde ea odit optio, quaerat rerum doloremque repudiandae at praesentium corporis! Quis ipsum et quam quia aliquam?</p>

                        </div>
                        <div className="col-lg-3">
                            <img src={slider1} className="img-responsive" />
                        </div>


                    </div>
                    <div className="col-lg-3 ">
                    {/* <img src={welcome} className="img-responsive" /> */}
                                        <img src={Aboutm} className="img-responsive"/>
                    </div>
                    <div className="col-lg-6 tclr">
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laborum, aliquid odit enim alias velit reprehenderit mollitia odio ullam provident officia sequi fugit corrupti, quia iste consequatur debitis ratione quaerat deserunt necessitatibus minima soluta, ad est quis? Atque iure corrupti vitae delectus dolore ad temporibus molestiae suscipit unde ea odit optio, quaerat rerum doloremque repudiandae at praesentium corporis! Quis ipsum et quam quia aliquam?</p>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laborum, aliquid odit enim alias velit reprehenderit mollitia odio ullam provident officia sequi fugit corrupti, quia iste consequatur debitis ratione quaerat deserunt necessitatibus minima soluta, ad est quis? Atque iure corrupti vitae delectus dolore ad temporibus molestiae suscipit unde ea odit optio, quaerat rerum doloremque repudiandae at praesentium corporis! Quis ipsum et quam quia aliquam?</p>
                      

                    </div>

                   
                    <div className="col-lg-3 pull-right">
                    {/* <img src={welcome} className="img-responsive" /> */}
                                        <img src={Thank} className="img-responsive" />
                                        <div className=" text-center bg-primary">For reading </div>
                    </div>






                </div>





            </div>
            <Footer2 />
        </>
    )
}