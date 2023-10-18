import axios from "axios";
import { useEffect, useState } from "react"
import Entery from "./Enteryform";
import { db } from './firebase';
import Navbar from "./Navbar";
import Nav2 from "./Nav2";

export default function Addproduct() {
    var uri = "http://localhost:1000/"
    const [prog, setprog] = useState(0)
    function subform(e) {
        e.preventDefault();
        setprog(1)
        var data = new FormData(e.currentTarget);
        var sname = data.get("sname");

        var name = data.get("name");
        var detail = data.get("detail");
        var strike = data.get("strike");
        var off = data.get("off");
        var dfs = data.get("dfs");
        var ds = data.get("ds");
        var dth = data.get("dth");
        var dfo = data.get("dfo");
        var type = data.get("type");
        var delivery = data.get("delivery");
        var save = data.get("save");
        var total = data.get("total");
        var qnt = data.get("qnt");
        var more = data.get("more");
        var star = data.get("star");
        var categories = data.get("categories");
        var subcategories = data.get("subcategories");




        var price = Number(data.get("price"));
        var img = data.get("img")

        var ref = db.ref();
        const metadata = {
            contentType: img.type
        }
        ref.child(img.name).put(img, metadata).then(snapshot => snapshot.ref.getDownloadURL()).then(url => {
            console.log(url)
            var pro = {
                Sname: sname,
                Name: name,
                Price: price,
                Strike: strike,
                Off: off,
                Detail: detail,
                Dfs: dfs,
                Ds: ds,
                Dth: dth,
                Dfo: dfo,
                Image: url,
                Type: type,
                Delivery: delivery,
                Save: save,
                Total: total,
                Qnt: qnt,
                More: more,
                Star: star,
                Categories: categories.toLowerCase(),
                Subcategories: subcategories,
            }
            axios.post(uri + "addproduct", pro).then((succ) => {
                if (succ.data == "added heare") {
                    alert("added")
                    // getdata();
                    setprog(0);
                } else {
                    alert("cant add data")
                }
            })
        })
    }




   
    return (
        <>
            <>
            <Nav2/>
            <br/>
            <br/>

            

                {/* <Navbar/> */}
                <div className="bgimg">
                {/* <h1 className="text-center">Add products<button data-toggle="collapse" data-target="#Add">Add</button></h1> */}
                <div className="father">
                    <div className="col-xs-4 col-md-5 bg-info" id="Add">
                        <form onSubmit={subform} encType="multipart/form-data">
                            <Entery />
                            {(prog == 0) ? (
                                <div className="form-group">
                                    <input type={'submit'} className="btn btn-success" />
                                </div>
                            ) : (
                                <h4>Adding</h4>
                            )}
                        </form>
                    </div>
                </div>
                </div>

               

            </>


        </>

    )
}