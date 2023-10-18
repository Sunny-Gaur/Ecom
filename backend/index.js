const express =require('express');

const app = express();

const methodOverride = require('method-override');

const bodyParser = require('body-parser');

const mongodb = require('mongodb');

const MongoClient = require('mongodb').MongoClient;

const cors = require('cors');
const { default: axios } = require('axios');
app.use(cors())
app.use(bodyParser.json())
var user;
var admin;
var addproduct;
var login;
var register;
var camera;
var headphone;
var localregister;
var addcart;
var order;
var userdata;
var all;
const connectionString="mongodb+srv://admin:admin@cluster0.ygqvhfq.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(connectionString,function(err, succ){
    if(err) throw err;
    console.log('Data-base connected');
    
    var db = succ.db('mydata');
    user = db.collection('user');
    admin = db.collection('Admin');
    login = db.collection('Login');
    register = db.collection('Register');
    img= db.collection('img');
    addcart= db.collection('Addtocart');
    addproduct=db.collection('Addproduct');
    camera=db.collection("Camera");
    headphone=db.collection("Headphone");
    order=db.collection("Order");
    userdata=db.collection("Userdata");
    all= db.collection("All");
    sun = db.collection("New");



    // yah wala
    localregister=db.collection("Localregister"); 

})

app.post("/addproduct",((req,res)=>{
addproduct.insertOne(req.body).then((succ)=>{
    res.send("added heare");
})
}))
 
// detail page of earphone 
app.post("/getonepro",(req,res)=>{
    var idd = new mongodb.ObjectId(req.body.prod);
    // console.log(idd)
    addproduct.find({_id:idd}).toArray().then((succ)=>{
        // console.log(succ)
        res.send(succ);
    })
 })

app.post("/delet",(req,res)=>{
    var idd2 = new mongodb.ObjectId(req.body.id);

    addproduct.deleteOne({_id:idd2}).then((succ)=>{
        // console.log("data deleted")
        res.send("delete")

    })
})

// carts 



app.post("/delet2",(req,res)=>{
    var idd3 = new mongodb.ObjectId(req.body.id);

    addcart.deleteOne({_id:idd3}).then((succ)=>{
        // console.log("data deleted")
        res.send("delete")

    })
})

//  headphone page code
 app.post("/headphones",(req,res)=>{
    console.log(req.body)
    headphone.insertOne({
        Sname:req.body.Sname,
        Name:req.body.Name,
        Price:req.body.Price,
        Strike:req.body.Strike,
        Off:req.body.Off,
        Image:req.body.Image,
        Detail:req.body.Detail,
        Dfs:req.body.Dfs,
        Ds:req.body.Ds,
        Dth:req.body.Dth,
        Dfo:req.body.Dfo,
        Save:req.body.Save,
        Delivery:req.body.Delivery,
        Total:req.body.Total,
        Type:req.body.Type,
        Qnt:req.body.Qnt,
        More:req.body.More,
        Star:req.body.Star,
        Categories:req.body.Categories,

        Subcategories:req.body.Subcategories,

    }).then((succ)=>{
        res.send("added heare")
    })
    
 })


// userdata
app.post("/submited",((req,res)=>{
    console.log(req.body);
    userdata.insertOne(req.body).then((succ)=>{
        res.send(succ);
    })

}))



app.post("/chr",(req,res)=>{
    userdata.find({User:req.body.userid}).toArray().then((succ)=>{
        console.log(succ);
        res.send(succ)


    })
})

// app.post("")
 


// app.post("/vbn",((req,res=>{})))
app.post("/usr",(req,res)=>{
    addcart.find({UID:req.body.userid}).toArray().then((succ)=>{
        console.log(succ);
        res.send(succ)


    })
})

app.post("/geting",((req,res)=>{
    console.log(req.body);
    
}))

app.post("/hare",((req,res)=>{
sun.insertOne(req.body).then((succ)=>{
    res.send(succ);
    
    console.log(succ);
})
    
}))


// app.post("/done",((req,res)=>{
//     sun.findOne()
// }))


// app.get("/feching",((req,res)=>{
//     console.log(req.body);
//     addcart.find({UId:req.body.userid}).toArray().then((succ)=>{
//         console.log(succ);
//         res.send(succ);
//         console.log("thie");
//         // console.log(succ.PImage);
//     })

// }))

app.post("/all",(req,res)=>{
    console.log(req.body);
    all.insertOne(req.body).then((succ)=>{
        res.send(succ);
    })

})




// app.post("/newss",(req,res)=>{
//     // console.log(req.body.userid)
//     addcart.find({UID:req.body.userid}).toArray().then((succ)=>{
//         console.log(succ);
//         res.send(succ);
//     })
    
// })









//  app.get("/getimg4",(req,res)=>{
//     headphone.find().toArray().then((succ)=>{
//         res.send(succ);
//     })
//  })
 
//  detail page of headphone
// app.post("/details",(req,res)=>{
//     var my = new mongodb.ObjectId(req.body.prod);
//     console.log(my)
//     headphone.find({_id:my}).toArray().then((succ)=>{
//         console.log(succ)
//         console.log("true")
//         res.send(succ)
//     })
//  })
 app.get("/getimg2",(req,res)=>{
    addproduct.find().toArray().then((succ)=>{
        res.send(succ);
    })
 })
        //  camera page code
app.post("/camera",(req,res)=>{
    console.log(req.body)
    camera.insertOne({
        Sname:req.body.Sname,
        Name:req.body.Name,
        Price:req.body.Price,
        Strike:req.body.Strike,
        Off:req.body.Off,
        Image:req.body.Image,
        Detail:req.body.Detail,
        Dfs:req.body.Dfs,
        Ds:req.body.Ds,
        Dth:req.body.Dth,
        Dfo:req.body.Dfo,
        Save:req.body.Save,
        Delivery:req.body.Delivery,
        Total:req.body.Total,
        Type:req.body.Type,
        Qnt:req.body.Qnt,
        More:req.body.More,
        Star:req.body.Star


     

    }).then((succ)=>{
        res.send("added heare")
    })
    
 })
 app.get("/getimg3",(req,res)=>{
    camera.find().toArray().then((succ)=>{
        res.send(succ);
    })
 })
//       // detail page of camera
// app.post("/cameradetail",(req,res)=>{
//     var cam= new mongodb.ObjectId(req.body.prod);
//     console.log(cam)
//     camera.find({_id:cam}).toArray().then((succ)=>{
//         // console.log(succ)
//         console.log("true")
//         res.send(succ)
//     })
//  })
 
 app.post('/getpro2',(req,res)=>{
    // console.log(req.body)
    addproduct.find({Categories:req.body.search}).toArray().then((succ)=>{
        console.log(succ)
        res.send(succ)
    })
 })

// app.post("/getprice"((req,res)=>{
//     addproduct.find({
//         Price:1999,
//         Categories:earphone

//     })
// }))

app.get("/audio2",((req,res)=>{
    addproduct.find({
        Categories:'earphone'
    }).toArray().then((succ)=>{
        res.send(succ)
    console.log(succ);  
    })
}))
app.get("/Mouse",((req,res)=>{
    addproduct.find({
        Categories:'mouse'
    }).toArray().then((succ)=>{
        res.send(succ)
    console.log(succ);  
    })
}))
app.get("/Keyboard",((req,res)=>{
    addproduct.find({
        Categories:'keyboard'
    }).toArray().then((succ)=>{
        res.send(succ)
    console.log(succ);  
    })
}))
app.get("/Laptop",((req,res)=>{
    addproduct.find({
        Categories:'laptop'
    }).toArray().then((succ)=>{
        res.send(succ)
    console.log(succ);  
    })
}))

app.get("/camera",((req,res)=>{
    addproduct.find({
        Categories:'camera'
    }).toArray().then((succ)=>{
        res.send(succ)
    console.log(succ);  
    })
}))

app.get("/headphone",((req,res)=>{
    addproduct.find({
        Categories:'headphone'
    }).toArray().then((succ)=>{
        res.send(succ)
        console.log(succ);
    })

}))
 

app.get("/wash",((req,res)=>{
    addproduct.find({
        Categories:"washing machine"
    }).toArray().then((succ)=>{
    res.send(succ)
    console.log(succ)
})
}))

app.get("/tv",((req,res)=>{
    addproduct.find({
        Categories:"tv"
    }).toArray().then((succ)=>{
    res.send(succ)
    console.log(succ)
})
}))
app.get("/Mobile",((req,res)=>{
    addproduct.find({
        Categories:"mobile"
    }).toArray().then((succ)=>{
    res.send(succ)
    console.log(succ)
})
}))

app.get("/Watch",((req,res)=>{
    addproduct.find({
        Categories:"watch"
    }).toArray().then((succ)=>{
    res.send(succ)
    console.log(succ)
})
}))
app.get("/Watch2",((req,res)=>{
    addproduct.find({
        Categories:"watch for women"
    }).toArray().then((succ)=>{
    res.send(succ)
    console.log(succ)
})
}))




app.post("/Admin",(req,res)=>{
    admin.findOne({
        Name:req.body.ID,
        Password:req.body.PASSWORD,
        
    }).then((succ)=>{
        console.log(succ);
        // console.log();
        // console.log("name hare")
        res.send(succ);
    })
})

// yeh likhna
app.post("/login",(req,res)=>{
    register.findOne({
        Userid:req.body.ID,
        Password:req.body.PASSWORD,
        
    }).then((succ)=>{
        console.log(succ);
        // console.log();
        // console.log("name hare")
        res.send(succ);
    })
})

// cart
app.post("/incqty",(req,res)=>{
    var idd = new mongodb.ObjectId(req.body._id)
    console.log(idd);
    addcart.updateOne({
        _id:idd
    },{
        $inc:{
            Qty:1
        }
    }).then((succ)=>{
        res.send(succ)
    })
})

app.post("/decqty",(req,res)=>{
    var idd = new mongodb.ObjectId(req.body._id)
    console.log(idd);
    addcart.updateOne({
        _id:idd
    },{
        $inc:{
            Qty:-1
        }
    }).then((succ)=>{
        res.send(succ)
    })
})
// app.post("/adduser",(req,res)=>{
//     register.insertOne(req.body).then((succ)=>{
//         console.log("added")
//         res.send("added")
//     })
// })
// register
app.post("/register",(req,res)=>{
    // console.log(req.body)
    register.insertOne({
        Name:req.body.Name,
        Lname:req.body.Lname,
        Gender:req.body.Gender,
        Userid:req.body.Userid,
        Email:req.body.Email,
        Password:req.body.Password,

        Contact:req.body.Contact,
        Address:req.body.Address


    }).then((succ)=>{
        // console.log(succ)
        res.send("added")

    })
 })


app.post("/getuser1",(req,res)=>{
    console.log(req.body)
    var idd = new mongodb.ObjectId(req.body.user)
    console.log(idd)
    register.findOne({_id:idd}).then((succ)=>{
    res.send(succ)
    })
})

//addtocart
//631f5db60ef4ce71718e67b4
app.post("/addcart",(req,res)=>{
    console.log(req.body)
    addcart.insertOne(req.body).then((succ)=>{
        res.send("added to cart")
        // res.send("added to cart")        
    })
})

app.post("/newss",(req,res)=>{
    // console.log(req.body.userid)
    addcart.find({UID:req.body.userid}).toArray().then((succ)=>{
        console.log(succ);
        res.send(succ);
    })
    
})

//getting pro from cart
app.post("/getcart",(req,res)=>{
    console.log(req.body)
    addcart.findOne({PID:req.body.PID}).then((succ)=>{
        console.log(succ)
        res.send(succ)
    })
})

//  yeh wala likna hai
 app.post("/ulocalregister",(req,res)=>{
    register.findOne({Userid:req.body.Userid}).then((succ)=>{
        res.send(succ);
        // console.log(succ);
    })

 })
    // console.log(req.body)
//     localregister.insertOne({
//         Name:req.body.Name,
//         Lname:req.body.Lname,
//         Gender:req.body.Gender,
//         Userid:req.body.Userid,
//         Email:req.body.Email,
//         Password:req.body.Password,


//         Contact:req.body.Contact,
//         Address:req.body.Address


//     }).then((succ)=>{
//         // res.send("added")
//         res.send(succ)

//     })
//  })



app.get("/getnm",(req,res)=>{
    register.find().toArray().then((succ)=>{
        res.send(succ);
    })

})



app.post("/go",(req,res)=>{
    sun.find(
        {bb:req.body.User}).toArray().then((succ)=>{
        res.send(succ);
        console.log(succ);
        console.log("good");
    })
})



 app.listen(1000,(req,res)=>{
    console.log("server started")
 })



// checking
app.post("/addimg",(req,res)=>{
    // console.log(req.body);
    img.insertOne({
            URL:req.body.URL
    })
})

app.get("/getimg",(req,res)=>{
    img.find().toArray().then((succ)=>{
            // console.log(succ)
            res.send(succ)
    })
})

// //  place order
app.post('/rmvcart',(req,res)=>{
    console.log(req.body.PID);
    addcart.deleteOne({
            PId:req.body.PID
    }).then((succ)=>{
            res.send('deleted')
    })
})

app.post("/getorder",(req,res)=>{
    console.log(req.body)
    order.find().toArray().then((succ)=>{
            res.send(succ)
            console.log(succ)
    })
})

app.post("/placeorder",(req,res)=>{
    // console.log(req.body)
    order.insertOne(req.body).then((succ)=>{
            res.send("added")
    })
})
// app.post("/addcart",(req,res)=>{
//     console.log(req.body);
//     addcart.insertOne({
//         Name:req.body.Name,
//         Price:req.body.Price,
//         Id:req.body.Id
    

//     }).then((succ)=>{
//             // res.send("added")
//             res.send(succ)
// })
// })













//  app.get("/Sun", (req,res)=>{
//     user.insertOne({
//         Name:"Sunny",
//         Email:"sunny@gmil.com",
//         password:456789

//     }).then((succ)=>{
//         res.send(succ);
//     }).catch((err)=>{
//         res.send(err);
//     })
//  })

// app.post("/adddoct",(req,res)=>{
//     Doc.findOne({
//         Demail:req.body.Email,
//         Dpassword:req.body.Password,
        
//     }).then((succ)=>{
//         console.log(succ);
//         console.log("done")
//         res.send("Mached");
//     })
// })


//  app.get("/",(req,res)=>{
//     res.send("hello world")
//  })
//  app.get('/About',(req,res)=>{
//     res.send("welcome to about");
//  })


//  app.get("/Fet",(req,res)=>{
//     user.find().toArray().then((succ)=>{
//         res.send(succ);
//     })
//  })

//  app.get("/Fet1",(req,res)=>{
//     user.findOne({
//         Email:"sunny@gamil.com",
//     }).then((succ)=>{
//         if(succ){
//             res.send("ok")
//         }
//         else{
//             res.send("wrong Email")
//         }
       
//     })
//  })


// app.post("/addcart",(req,res)=>{
//     console(req.body);
    
// })

// app.post("/finding",(req,res)=>{
//     order.findOne({

//     })
// })