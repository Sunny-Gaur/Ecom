import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';








export default function Register() {

    var uri = 'http://localhost:6500/';
     function formsub(e) {
    e.preventDefault();
    var data = new FormData(e.currentTarget);
    var name = data.get('firstname');
    var lasname = data.get('lastname');
    var userid = data.get('userid');
    var password = data.get('password');
    var email = data.get('email');
    var cont = data.get('contact');

    // console.log(nam);
    // console.log(lasnam);
    // console.log(email);
    // console.log(cont);

    e.target.reset();

     e.target.firstname.focus();
    
    var regobj = {
        Firstname: name,
        Lastname: lasname,
        Password: password,
        Userid: userid,
        Email: email,
        Contact: cont

     }
     axios.post(uri +'uregister',regobj).then((succ)=> {
        if(succ.data == 'hogya') {
            alert('process done yeah')
            axios.post(uri+'ulocalregister',regobj).then((succ)=>{
                console.log(succ.data._id);
                localStorage.setItem('Useridlocal',succ.data._id);
            })


        }
        // else  if (succ.data)
        // console.log('hogya')
     }).catch((err) => {
        console.log(err);
        alert('error not registered')
        // res.send(err)
    })

     
}


    return (
        <div className='cont1reg'>
            <Navbar />

            <h1>Register</h1>
            <div className='col-lg-4 col-lg-offset-4 col-xs-12 col-xs-offset-0 bg'>
                <div className='well bg'>
                    <h1 className=''>SIGN UP</h1>
                <form onSubmit={formsub}>
                    <div className='form-group'>
                        <input type={'text'} name='firstname' placeholder='YOUR FIRST NAME' className='form-control'></input>
                    </div>
                    <div className='form-group'>
                        <input type={'text'} name='lastname' placeholder='YOUR LAST NAME' className='form-control'></input>
                    </div>
                    <div className='form-group'>
                        <input type={'email'} name='email' placeholder='YOUR EMAIL' className='form-control'></input>
                    </div>
                    <div className='form-group'>
                        <input type={'email'} name='userid' placeholder='Your User Id' className='form-control'></input>
                    </div>
                    <div className='form-group'>
                        <input type={'password'} name='password' placeholder='Create Password' className='form-control'></input>
                    </div>
                    <div className='form-group'>
                        <input type={'contact'} name='contact' placeholder='YOUR CONATCT NO.' className='form-control'></input>
                    </div>
                    <div className='form-group'>
                        <input type={'submit'} className="btn btn-primary btn-right" value={'SIGN UP'}></input>
                    </div>
                    <div className='form-group'>
                        <p>Already have an account? <Link to='/Login'>Log in</Link></p>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}



// import Navbar from './Navbar';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";



// export default function Login() {

//     var uri = 'http://localhost:6500/';
//     var navi = useNavigate();

//     function loginform(e) {
//         e.preventDefault();
//         var data = new FormData(e.currentTarget);
//         var id = data.get('name');
//         var pass = data.get('password');

//         // console.log(id);
//         // console.log(pass);

//         // var obj = {Id:id,Password:pass};
//         // console.log(obj)


        

//      var udat=({
//         ID: id,
//         PASSWORD: pass
//      })
        

//         axios.post(uri + "ulogin", udat
            
//         ).then((succ) => {
//             if (succ.data) {
//                 alert("khata haiga bai tera");
//                 console.log(succ.data._id);
//                 navi('/');
//                 localStorage.setItem('Useridlocal',succ.data._id);
//             }else{
//                 alert('hai ni bai tera khata sorry')
                
//             }
//             // console.log('yeahhh');
//             // console.log(succ.data);
//         })


//         e.target.reset();

//         e.target.name.focus();
//     }
//     return (
//         <div className='cont1'>
//             <Navbar />

//             <h1>Login</h1>

//             <div className='col-lg-4 col-lg-offset-4 col-xs-12 col-xs-offset-0 bg'>
//                 {/* <div className='well bg'> */}
//                 <h1>SIGN IN</h1>
//                 <form onSubmit={loginform}>
//                     <div className='form-group'>
//                         <input type={'text'} name='name' placeholder='USER ID' className='form-control'></input>
//                     </div>
//                     <div className='form-group'>
//                         <input type={'text'} name='password' placeholder='PASSSWORD' className='form-control'></input>
//                     </div>
//                     <div className='form-group'>
//                         <input type={'submit'} className="btn btn-primary" value={'SIGN IN'} ></input>
//                     </div>
//                     <div className='form-group'>
//                         <p>New to Zomato?<Link to='/Register'> Sign Up</Link></p>
//                     </div>
//                 </form >
//                 {/* </div> */}
//             </div>
//         </div >
//     )
// }