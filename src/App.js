import './App.css';
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Register from './Register';
import About2 from './about2';
import Detail from './detail';
import Buy from './buy';
import Services from './Services';
import AddCart from './AddCart';
import Form2 from './Form2';
import Order from './order';
import Downnav from './Downnav';
// import Headphone from './Headphone';
import Headphoneuser from './Headphoneuser';
// import Headdetail from './Headdetail';
import Tv from './Tv';

// admin
import Admin from './Admin';
import Addproduct from './Addproduct';
// import Addproduct2 from './Addproduct2';

import Adminpannel from './Adminpannel';
import Adminbar from './Adminbar';
import Checking from './checking';
import Camerau from './Camerauser';
import Entery from './Enteryform';
import Earphone from './Earphone';
import Washing from './Washing';
import Mobile from './Mobile';
import Main from './Main';
import Mouse from './Mouse';
import Keyboard from './Keyboard';
import Watch from './Wach';
import Watch2 from './Wach2';
import Submit from './Submited';


import BGI from './BGI';


// import Adminnav from '/Adminnav'
import Nav2 from './Nav2';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Navbar";
import Laptop from './Laptop';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap';
import Onrpro from './onrpro';
import Getpro from './getpro';
// import Orderes from "/order2";



function App() {
  return (
    <div>
   
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Admin" element={<Admin/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/detail" element={<Detail/>}/>
          <Route path="/buy" element={<Buy/>}/>
          <Route path="/about2" element={<About2/>}/>
          <Route path="/AddCart" element={<AddCart/>}/>
          <Route path="/Services" element={<Services/>}/>
          <Route path="/getpro" element={<Getpro/>}/>
          <Route path="/Form2" element={<Form2/>}/>
          <Route path="/Addproduct" element={<Addproduct/>}/>
          <Route path="/BGI" element={<BGI/>}/>
          <Route path="/Submited" element={<Submit/>}/>
          {/* <Route path="/Addproduct2" element={<Addproduct2/>}/> */}
          <Route path="/Adminpannel" element={<Adminpannel/>}/>
          {/* <Route path="/Adminnav" element={<Adminnav/>}/> */}
          <Route path='/Nav2' element={<Nav2/>}/>
          <Route path='/Adminbar' element={<Adminbar/>}/>
          <Route path='/checking' element={<Checking/>}/>
          <Route path='/product' element={<Onrpro/>}/>
          <Route path='/order' element={<Order/>}/>
          {/* <Route path='/order2' element={<Orderes/>}/> */}
          <Route path="/Camerauser" element={<Camerau/>}/>
          <Route path="/Tv" element={<Tv/>}/>
          <Route path="/Mobile" element={<Mobile/>}/>
          <Route path="/Laptop" element={<Laptop/>}/>
          <Route path="/Keyboard" element={<Keyboard/>}/>
          <Route path="/Watch" element={<Watch/>}/>
          <Route path="/Watch2" element={<Watch2/>}/>
          <Route path="/Mouse" element={<Mouse/>}/>
          <Route path='/Main' element={<Main/>}/>
          <Route path='/Downnav' element={<Downnav/>}/>
          <Route path='/Headphoneuser' element={<Headphoneuser/>}/>
          <Route path='/Enteryform' element={<Entery/>}/>
          <Route path='/Earphone' element={<Earphone/>}/>
          <Route path='/Washing' element={<Washing/>}/>
        </Routes>
      </Router>
     

    </div>
  )
}

export default App;
