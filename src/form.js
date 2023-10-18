



export default function Form(){
    var uri='http://localhost:1000/'
    function handleform(e){
        e.preventDefault();
        var data = new FormData(e.currentTarget)
        var name = data.get("home");
        console.log(name)

        var ref=db.ref();

        const metadata ={
            contentType:name.type
        }
        ref.child(name.name).put(name,metadata).then(url=>{
            console.log(url)
            var imgdata={
                Name:name,
                URL:urlc
            }
        })
    }
    return(
    <>
            <div className="col-xs-4">
                <form className="form" onSubmit={handleform2}>
                    <div className="form-group">
                    <input type={'file'}name='name'className="form-control" required/>

                    </div>
                    <div className="form-group">
                    <input type={'submit'} className="btn btn-info" value={"Add image"}/>

                    </div>
                </form>
                </div>
            </>
        
    )
}