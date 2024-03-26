import React, { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { SellItems } from '../service/allapi';
import Sidebar from './Sidebar';


function Sell() {

     //create a store to create preview image
  const [preview, setPreview] = useState("")
    //state to store api response erroe message
    const [errorMsg,setErrorMsg]=useState("")

    //create an object to store datas from input
    const [sellData, setUser] = useState({
      itemname: "",
      discription: "",
      email:"",
      price: "",
      contactno: ""
  
    })
          //state to hold image file
  const [Image, setImage] = useState('')
  //funtion to set the image 
  const setProfile = (e) => {
    setImage(e.target.files[0])
  }
  console.log(Image);
      //object for useNavigate
  const navigate=useNavigate()
     // a function to update userdata when user enter the input in html
  const sellingDetails = (e) => {
    //prevent the event
    e.preventDefault()
    //access value to update in userData
    const { value } = e.target
    //access key to update in userData
    const key = e.target.name
    //update the data with existing data
    setUser({ ...sellData, [key]: value })

  }
  console.log(sellData);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { itemname, discription,email,price,contactno} = sellData
    if (itemname == "") {
      toast.error('fname requierd')
    }
    else if (discription == "") {
      toast.error('discription requierd')
    }
    else if (email == "") {
      toast.error('email requierd')
    }
    else if (Image == "") {
      toast.error('Image requierd')
    }
    else if (price == "") {
      toast.error('price requierd')
    }   else if (contactno == "") {
      toast.error('Number requierd')
    }
   
    else {

        //headers data(the api contain file type data in body)
        const headerConfig = {
          "Content-Type": "multipart/form-data"
        }
  
        //body data
        const data = new FormData()
        data.append("user_profile", Image)
        data.append("itemname", itemname)
        data.append("discription", discription)
        data.append("email", email)
        data.append("price", price)
        data.append("contactno", contactno)
      
     
      //api call
      const response = await SellItems(data,headerConfig)
      console.log(response);
      if(response.status==200){
    

      //reset all states datas
      setUser({
        itemname: "",
        discription: "",
        email:"",
        price: "",
        contactno: ""
     
      })
      // toast.success('RegisterSuccessfully')

     
        
      }else{
        setErrorMsg(response.response.data)
      }
     alert(response.data.message)
     
      //redirection to home
      // navigate('login')
  

    }
  }
  useEffect(() => {
    if (Image) {
      setPreview(URL.createObjectURL(Image))
    }

  }, [Image])
  return (
    <div>
      <Sidebar/>
    <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff' }}>
        <MDBContainer fluid>

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
<MDBCol col='12'>

  <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
    <MDBCardBody className='p-5 w-100 d-flex flex-column'>

      <h2 className="fw-bold mb-2 text-center">Sell Items</h2>
      <p className="text-white-50 mb-3">Please enter your login and password!</p>
      <MDBInput required onChange={sellingDetails} wrapperClass='mb-4 w-100' placeholder='Item Name' name='itemname' id='formControlLg' type='text' size="lg"/>
      <MDBInput required onChange={sellingDetails} wrapperClass='mb-4 w-100' placeholder='Discription' name='discription' id='formControlLg' type='text' size="lg"/>
      <MDBInput required onChange={sellingDetails} wrapperClass='mb-4 w-100' placeholder='Email' name='email' id='formControlLg' type='email' size="lg"/>
      <label className='fs-5 ms-2'>Upload Image</label><br />
      <MDBInput required onChange={setProfile} wrapperClass='mb-4 w-100' placeholder='Image' id='formControlLg' name='itempic' type='file' size="lg"/>
      <MDBInput required onChange={sellingDetails} wrapperClass='mb-4 w-100' placeholder='Price' id='formControlLg' name='price' type='text' size="lg"/>
      <MDBInput required onChange={sellingDetails} wrapperClass='mb-4 w-100' placeholder='Contact No' id='formControlLg' name='contactno' type='text' size="lg"/>
   

      

      <button size='lg' className='btn btn-primary  p-2 text-center  ' style={{borderRadius:'5px'}} onClick={handleSubmit}>
          Post
        </button>

     

      <hr className="my-4" />


    </MDBCardBody>
  </MDBCard>

</MDBCol>
</MDBRow>

</MDBContainer>
  </div>
  <ToastContainer position="top-center" />
  </div>
  );
}

export default Sell;