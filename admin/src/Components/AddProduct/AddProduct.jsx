import React, {useState} from 'react'
import './addProduct.css'
import upload from '../../assets/upload.jpg'


const AddProduct = () => {
  const [image, setImage] = useState(false)
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "heels",
    price: "", 
   
  })

  const imgHandler = (e) => {
    setImage(e.target.files[0])
  }
  const changeHandler = (e) =>{
    setProductDetails({...productDetails, [e.target.name] : e.target.value})
  }

  const addProduct = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails

    let formData = new FormData()
    formData.append('product', image)

    await fetch('http://localhost:2020/upload', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body:formData,
    }).then((resp) => resp.json()).then((data)=>{responseData=data})

  console.log('Image URL:', responseData.image_url)

    if(responseData.success){
      product.image = responseData.image_url
      console.log(product)
      await fetch('http://localhost:2020/api/addproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      }).then((resp) => resp.json()).then((data) =>{
        data.success ? alert('Product Added'):alert('Failed')
      })
    
    }
  }
  return (
    <div className='add-product'>
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input value= {productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input value={productDetails.price} onChange={changeHandler} type="text" name='price' placeholder='Type here' />
        </div>
        <div className="addproduct-itemfield">
          <p>Product Category</p>
          <select value={productDetails.category} onChange={changeHandler} name="category" className="add-product-selector">
            <option value="heels">Heels</option>
            <option value="boots">Boots</option>
            <option value="ballets">Ballets</option>
          </select>
        </div>
        <label htmlFor="file-input">
          <img src={image ? URL.createObjectURL(image) : upload} className='upload-img'  />
        </label>
        <input onChange={imgHandler} type="file" name = 'image' id='file-input' hidden />
      </div>
      <button onClick = {() => {addProduct()}}className="addproduct-btn">ADD</button>
    </div>
  )
}

export default AddProduct