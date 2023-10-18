export default function Entery(){
    return(
        <>
        

        <div className="col-lg-12">
        <div className="col-lg-12 text-center"><h1>Add Product</h1></div>
             <div className="form-group col-lg-4">
                            <input type={"text"} placeholder="enter sample-name" name="sname"
                                className="form-control" />
                                
                        </div>
                        <div className="form-group  col-lg-4">
                            <input type={"text"} placeholder="enter price" name="price"
                                className="form-control" />
                        </div>
                        <div className="form-group col-lg-4 ">
                            <input type={"text"} placeholder="enter strike-value" name="strike"
                                className="form-control" />
                        </div>
                         
                        <div className="form-group  col-lg-4">
                            <input type={"text"} placeholder="save-amount" name="save" className="form-control" />
                        </div>
                        <div className="form-group  col-lg-4">
                            <input type={"text"} placeholder="Type of product" name="type" className="form-control" />
                        </div>
                        <div className="form-group  col-lg-4">
                            <input type={"text"} placeholder="Categories" name="categories" className="form-control" />
                        </div>
                        <div className="form-group col-lg-4">
                            <input type={"text"} placeholder="enter off-price" name="off"
                                className="form-control" />
                        </div>
                        <div className="form-group col-lg-4">
                            <input type={"text"} placeholder="enter Qnt" name="qnt"
                                className="form-control" />
                        </div>
                        <div className="form-group col-lg-4">
                            <input type={"text"} placeholder="delivery Charges" name="delivery" className="form-control" />
                        </div>
                        <div className="form-group col-lg-4">
                            <input type={"text"} placeholder="Total" name="total" className="form-control" />
                        </div>
                        
                        <div className="form-group col-lg-4">
                            <input type={"text"} placeholder="Subcategories" name="subcategories" className="form-control" />
                        </div>
                        <div className="form-group col-lg-4">
                            <input type={"text"} placeholder="Star" name="star" className="form-control" />
                        </div>
                        {/*  */}
                        <div className="form-group col-lg-6">
                            <input type={"text"} placeholder="enter full name" name="name"
                                className="form-control" />
                        </div>
                        {/*  price*/}
                        {/* strike value */}
                     
                        {/* Offers */}
                       
                        {/* Detais*/}
                        <div className="form-group col-lg-6">
                            <input type={"text"} placeholder="enter detail-zero" name="detail"
                                className="form-control" />
                        </div>

                        <div className="form-group col-lg-6">
                            <input type={"text"} placeholder="detail-first" name="dfs"
                                className="form-control" />
                        </div>
                        <div className="form-group col-lg-6">
                            <input type={"text"} placeholder="detail-second" name="ds"
                                className="form-control" />
                        </div>
                    


                        <div className="form-group col-lg-6">
                            <input type={"text"} placeholder="detail-third" name="dth"
                                className="form-control" />
                        </div>
                        <div className="form-group col-lg-6">
                            <input type={"text"} placeholder="detail-forth" name="dfo" className="form-control" />
                        </div>

                     
                      
                        <div className="form-group">
                            <input type={"text"} placeholder="More" name="more" className="form-control" />
                        </div>
                     




                        <div className="form-group">
                            <input type={"file"} name="img" className="form-control"
                                accept="image/jpg.image/jpeg.image/png" />
                        </div>
                        </div>

        </>
    )
}