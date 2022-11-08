import React, { useState } from 'react'
import { getAuth } from 'firebase/auth';
import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import Sidebar from '../../common/sidebar'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../../firebase';


const AddProduct = () => {
  const auth = getAuth();
  const storage = getStorage();

  const [input_name, setInput_name] = useState("");
  const [input_price, setInput_price] = useState("");
  const [input_description, setInput_description] = useState("");
  const [input_category, setInput_category] = useState("");
  const [input_quantity, setInput_quantity] = useState("");
  const [input_image, setInput_image] = useState("");
  const [input_image_name, setInput_image_name] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // *TODO*: validate the inputs
    let validate_inputs = true;

    if(validate_inputs){
      let imageName = new Date().getTime();
      let imageType = ".jpeg";
      setInput_image_name(""); //do not remove this

      try {

        switch(input_image.type){
          case "image/jpg":
            imageType = ".jpg"
          case "image/png":
            imageType = ".png"
          case "image/gif":
            imageType = ".gif"
          default:
            imageType = ".jpeg"
        }
        
        setLoading(true);
        const imageFullName = imageName+imageType;
        const storageRef = ref(storage, `/images/${imageFullName}`);
        let imageUploaded = await uploadBytes(storageRef, input_image);

        let dataAdded = await addDoc(collection(db, "products"), {
          category: input_category,
          image: imageFullName,
          p: "Rs.",
          price: input_price,
          title: input_name,
          description: input_description,
          quantity: input_quantity
        });

        if(imageUploaded && dataAdded){
          setLoading(false);
          alert("New product added successfully");
          window.location.reload();
        } else {
          setLoading(false);
          alert("Error occoured while adding new product");
        }

      } catch (error) {
        setLoading(false);
        console.log(error)
      }

    } else {
      alert("Please check your inputs");
    }
    

  }

  const handleFileInput = (e) => {
    setInput_image_name(e.target.value);
    setInput_image(e.target.files[0]);
  };

  return (
    <React.Fragment>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Sidebar />
          <form onSubmit={handleSubmit} style={{ "paddingLeft": "350px", "paddingTop": "50px" }}>
            {/* <h3 style={{ "paddingLeft": "100px", "paddingTop": "40px", "color": "green" }}>Add New Product</h3> */}
            <h3 style={{ "padding-left": "50px", "padding-top": "20px", "color": "#28a745","backgroundColor":"","width":"450px","font-size":"40px"}}>Add New Product</h3>
            <div className="form-group row py-2" >

              <label htmlFor="Product Name" className="col-sm-2 col-form-label text-dark">Product Name</label>
              <div className="col-sm-6">
                <input type="text" className="form-control" id="name" placeholder="Product Name" value={input_name} onChange={(e) => { setInput_name(e.target.value) }} />
              </div>
            </div>

            <div className="form-group row py-2" >

              <label htmlFor="Product Price" className="col-sm-2 col-form-label text-dark">Product Price</label>
              <div className="col-sm-6">
                <input type="text" className="form-control" id="price" placeholder="Product Price" value={input_price} onChange={(e) => { setInput_price(e.target.value) }} />
              </div>
            </div>

            <div className="form-group row py-2" >

              <label htmlFor="Product Category" className="col-sm-2 col-form-label text-dark">Product Category</label>
              <div className="col-sm-6">
                <select id="category" value={input_category} onChange={(e) => { setInput_category(e.target.value) }}>
                  <option value="">Select Category</option>
                  <option value="cinnamon">Cinnamon Sticks</option>
                  <option value="cinnamon">Cinnamon Powder</option>
                  <option value="cinnamon">Cinnamon Premium Bbox</option>
                  <option value="cinnamon">Cinnamon Leaf Oil</option>
                  <option value="cinnamon">Cinnamon Bark Oil</option>
                  <option value="pepper">White Pepper Seeds</option>
                  <option value="pepper">White Pepper Powder</option>
                  <option value="pepper">Black Pepper Seeds</option>
                  <option value="pepper">Black Pepper Powder</option>
                  <option value="organic_products">Organic Products(Cinnamon)</option>
                  <option value="organic_products">Organic Products(Pepper)</option>
                </select>
              </div>
            </div>

            <div className="form-group row py-2" >

              <label htmlFor="ProductQuantity" className="col-sm-2 col-form-label text-dark">Product Quantity</label>
              <div className="col-sm-6">
                <input type="number" className="form-control" id="quantity" placeholder="Product Quantity" value={input_quantity} onChange={(e) => { setInput_quantity(e.target.value) }} />
              </div>
            </div>

            <div className="form-group row py-2" >

              <label htmlFor="Product Description" className="col-sm-2 col-form-label text-dark">Product Description</label>
              <div className="col-sm-6">
                <input type="text" className="form-control" id="description" placeholder="Product Description" value={input_description} onChange={(e) => { setInput_description(e.target.value) }} />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="ProductImage" className="col-sm-2 col-form-label text-dark">Product Image</label>
              <div className="col-sm-6">
                <input type="file" className="form-control" id="image" placeholder="Product Image" value={input_image_name} onChange={handleFileInput} />
              </div>
            </div><br/>

            <div >
              <button className="btn btn-success px-5 ml-10" type="submit" style={{"width":"450px"}}>Save</button>
            </div>

          </form>
        </div>
      )}
    </React.Fragment>
  )
}

export default AddProduct