import React, { useEffect, useState } from "react";
import { FaBeer, FaHome, FaCaretRight, FaChevronDown, FaDashcube, FaWpforms, } from 'react-icons/fa';

export default function About() {

    const [show, setshow] = useState(false);

    // console.log();
    useEffect(() => {
        if (window.innerWidth > 768) {
            setshow(true);
        }
    }, [])


    return (
        <div className="pad-0 " >
            <div className=" col-lg-2 col-md-3 col-xs-12 pad-0 left_col" id="sidebar-menu" style={{ display: show ? ('block') : ('none') }}>
                {/* {window.innerWidth < 768 && (<button onClick={() => setshow(false)} className="btn pull-right clo">x</button>)} */}


                {/* {<div className="navbar navbar-brand white"> */}
                {/* <span>Electrom</span> */}
                {/* </div> */}
                {/* <!-- sidebar menu --> */}
                <div className="col-lg-12 col-xs-12 pad-0 pad-2 bgi">
                    <div className="">
                        <ul className="list-group ">
                            <li className="list-group-item text-center">
                                <a data-toggle="collapse" data-target="#home">
                                    <FaDashcube /><h3>All-Categories</h3><FaChevronDown />
                                </a>
                                <ul className="collapse pad-0" id="home">
                                    <li className="list-group-item"><a>New Arrivals</a></li>
                                    <li className="list-group-item"><a>Top 100 Best Seller</a></li>
                                    <li className="list-group-item"><a>Tv & Video</a></li>
                                    <li className="list-group-item"><a>Headphones</a></li>
                                    <li className="list-group-item"><a>cell phones & Accesories</a></li>


                                </ul>
                            </li>
                            <li className="list-group-item text-center">
                                <a className="col" data-toggle="collapse" data-target="#form">
                                    <FaWpforms /> Forms
                                </a>
                                <ul className="list-group collapse pad-0" id="form">
                                    <li className="list-group-item"><a>General Form</a></li>
                                    <li className="list-group-item"><a>Advanced Components</a></li>
                                    <li className="list-group-item"><a>Form Validation</a></li>
                                    <li className="list-group-item"><a>Form Wizard</a></li>
                                    <li className="list-group-item"><a>Form Upload</a></li>
                                    <li className="list-group-item"><a>Form Buttons</a></li>
                                </ul>


                            </li>
                            <li className="list-group-item text-center">
                                <a className="col" data-toggle="collapse" data-target="#form2">
                                    <FaWpforms />  Forms
                                </a>
                                <ul className="list-group collapse" id="form2">
                                    <li className="list-group-item"><a>General Form</a></li>
                                    <li className="list-group-item"><a>Advanced Components</a></li>
                                    <li className="list-group-item"><a>Form Validation</a></li>
                                    <li className="list-group-item"><a>Form Wizard</a></li>
                                    <li className="list-group-item"><a>Form Upload</a></li>
                                    <li className="list-group-item"><a>Form Buttons</a></li>
                                </ul>


                            </li>
                        </ul>
                    </div>

                </div>

                {/* <!-- /sidebar menu -->
            </div>
            <div className="col-lg-12 right_col">
                {/* <!-- top navigation --> */}
                {/* <div className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" class="navbar-toggle" onClick={() => setshow(true)}>
                                <span class="icon-bar">name</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>
                    </div>
                </div>  */}
                {/* <!-- /top navigation --> */}

                {/* <!-- page content --> */}
                {/* <div className="" role="main">
                    {/* <!-- top tiles --> */}
                {/* <div className="row tile_count">
                        <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                            <span className="count_top"><i className="fa fa-user"></i> Total Users</span>
                            <div className="count">2500</div>
                            <span className="count_bottom"><i className="green">4% </i> From last Week</span>
                        </div>
                        <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                            <span className="count_top"><i className="fa fa-clock-o"></i> Average Time</span>
                            <div className="count">123.50</div>
                            <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>3% </i> From last Week</span>
                        </div>
                        <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                            <span className="count_top"><i className="fa fa-user"></i> Total Males</span>
                            <div className="count green">2,500</div>
                            <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>34% </i> From last Week</span>
                        </div>
                        <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                            <span className="count_top"><i className="fa fa-user"></i> Total Females</span>
                            <div className="count">4,567</div>
                            <span className="count_bottom"><i className="red"><i className="fa fa-sort-desc"></i>12% </i> From last Week</span>
                        </div>
                        <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                            <span className="count_top"><i className="fa fa-user"></i> Total Collections</span>
                            <div className="count">2,315</div>
                            <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>34% </i> From last Week</span>
                        </div>
                        <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                            <span className="count_top"><i className="fa fa-user"></i> Total Connections</span>
                            <div className="count">7,325</div>
                            <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>34% </i> From last Week</span>
                        </div>
                    </div> */}
                {/* <!-- /top tiles --> */}

                {/* </div> */}
            </div>
        </div>
    )
}


















