import React, { useEffect, useState } from "react";
import { FaBeer, FaHome, FaCaretRight, FaChevronDown, FaDashcube, FaWpforms, } from 'react-icons/fa';
import { Link } from "react-router-dom";

export default function Adminbar(){
    const [show, setshow] = useState(false);

    // console.log();
    useEffect(() => {
        if (window.innerWidth > 768) {
            setshow(true);
        }
    }, [])
    
    return(
        <>
              <div className="pad-0 " >
            <div className=" col-lg-2 col-md-3 col-xs-12 pad-0 left_col" id="sidebar-menu" style={{ display: show ? ('block') : ('none') }}>
                <div className="col-lg-12 col-xs-12 pad-0 pad-2 bgi">
                    <div className="">
                        <ul className="list-group ">
                            <li className="list-group-item text-center">
                                <a data-toggle="collapse" data-target="#home">
                                    <FaDashcube /><h3>Data Manupulate</h3><FaChevronDown />
                                </a>
                                <ul className="collapse pad-0" id="home">
                                <Link to="/Addproduct">  <li className="list-group-item"><a>Add items</a></li></Link>

                                    <li className="list-group-item"><a>Delete items</a></li>
                                    <li className="list-group-item"><a>Update items</a></li>
                                   


                                </ul>
                            </li>
                            <li className="list-group-item text-center">
                                <a className="col" data-toggle="collapse" data-target="#form">
                                    <FaWpforms /> Data control
                                </a>
                                <ul className="list-group collapse pad-0" id="form">
                                    <li className="list-group-item"><a>New Arival</a></li>
                                    <li className="list-group-item"><a>Advanced Components</a></li>
                                    <li className="list-group-item"><a>changes</a></li>
                                    <li className="list-group-item"><a>private</a></li>
                                    <li className="list-group-item"><a>new data</a></li>
                                    <li className="list-group-item"><a>settings</a></li>
                                </ul>


                            </li>
                            <li className="list-group-item text-center">
                                <a className="col" data-toggle="collapse" data-target="#form2">
                                    <FaWpforms />  All Link
                                </a>
                                <ul className="list-group collapse" id="form2">
                                    <li className="list-group-item"><a>Home</a></li>
                                    <li className="list-group-item"><a>Aboutus</a></li>
                                    <li className="list-group-item"><a>view</a></li>
                                    <li className="list-group-item"><a>Form Wizard</a></li>
                                    <li className="list-group-item"><a>Form Upload</a></li>
                                    <li className="list-group-item"><a>Form Buttons</a></li>
                                </ul>


                            </li>
                        </ul>
                    </div>

                </div>

            
            </div>
        </div>
        
        </>
    )
}