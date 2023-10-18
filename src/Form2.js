import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { db } from './firebase';

export default function Form() {
        var uri = 'http://localhost:1000/'
        function handleform2(e) {
                e.preventDefault();
                var data = new FormData(e.currentTarget)
                var name = data.get("name");
                console.log(name)

                var ref = db.ref();
                const metadata = {
                        contentType: name.type
                }
                ref.child(name.name).put(name, metadata).then(snapshot => snapshot.ref.getDownloadURL()).then(url => {
                        console.log(url)
                        var imgdata = {
                                URL: url,
                        }

                        axios.post(uri + "addimg", imgdata).then((succ) => {
                                console.log(succ.data)
                        })
                })
        }

        const [data1, setdata1] = useState([]);
        function getdata() {
                axios.get(uri + "getimg").then((succ) => {
                        // console.log(succ.data)
                        setdata1(succ.data);
                        getdata();
                })
        }
        useEffect(() => {
                getdata();
        }, [])
        // console.log("data1")
        return (
                <>
                        <div className="col-xs-4">
                                <form className="form" onSubmit={handleform2}>
                                        <div className="form-group">
                                                <input type={'file'} name="name" className="form-control" required />
                                        </div>
                                        <div className="form-group">
                                                <input type={'submit'} className="btn btn-info" value={'Add image'} />
                                        </div>
                                </form>
                        </div>

                        <div className='col-xs-6'>
                                {data1.map((row) => (
                                        <div className='col-xs-4' key={row._id}>
                                                <img src={row.URL} className="img-responsive" />
                                        </div>
                                ))}
                        </div>
                </>
        )
}