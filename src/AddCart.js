import Img1 from './img/ear1.jpg';
import Navbar from './Navbar';
import { Link } from "react-router-dom";

export default function AddCart() {
    return (
        <>
            <Navbar />
            {/* <br/><br/> */}
            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                <br /> <br /> <br />
                <div className="col-lg-2  col-md-2 col-sm-2 col-xs-5">
                    <img src={Img1} className="img-responsive box" />

                </div>


                <div className="col-lg-5 ">

                    <p className="bigtxt "> Noise Buds Vs102 Plus with 36 Hovers playtime,Instacharge Enc,Quad Mic and HyperSync Bluetooth Headset (Jet white,True Wireless)     </p>
                    <h3>Special price</h3>
                    <span className="df">


                        <h4>Rs:1,199</h4>&nbsp;&nbsp;&nbsp;&nbsp;

                        <h5><strike>Rs:3999</strike></h5>&nbsp;&nbsp;
                        <h5>70% off</h5>
                    </span>
                    
                    <button className='btn-danger box'> Remove</button>
                </div>
                {/* <div className='col-lg-7 '>
                <button className='btn btn-warning pull-right'>Place Order</button>


            </div> */}
                <div className='col-lg-3 col-lg-offset-2 bg-danger'>
                    <div className='col-lg-12 bg-danger text-center'>
                        <p>PRICE DETAILS</p>
                    <div className='df2'>
                        <span>
                            <p>Price</p>
                            <p>Discount</p>
                            <p>Delivery Charges</p>
                            <p>Total Amount</p>
                        </span>
                        <span>
                            <p>Rs:1,199</p>
                            <p>-2798</p>
                            <p>Free</p>
                            <p>Rs:1,199</p>
                        </span>
                        </div>
                    </div>
                    <span className='text-success'>You will save Rs:2798 on this order</span>
                </div>

            </div>
            <div className='col-lg-12 '>
            <Link to="/buy"> <button className='btn btn-warning pull-right box'>Place Order</button> </Link>
            <br/>
            <hr/>
            


            </div>


        </>
    )
}