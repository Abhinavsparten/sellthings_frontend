import React, { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { CreatePro } from '../service/allapi';
import Alert from 'react-bootstrap/Alert';
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
import Sidebar from '../components/Sidebar';

function CreateProfile() {

    //create a store to create preview image
   const [preview, setPreview] = useState("")
    //state to store api response erroe message
    const [errorMsg,setErrorMsg]=useState("")
      //object for useNavigate
  const navigate=useNavigate()

    //create an object to store datas from input
    const [profileData, setUser] = useState({
        fname: "",
        pno: "",
        email: "",
        house: "",
        pin: "",
        place: "",
        district: ""
  
    })
//state to hold image file
const [Image, setImage] = useState('')
//funtion to set the image 
const setProfile = (e) => {
  setImage(e.target.files[0])
}
console.log(Image);
// a function to update userdata when user enter the input in html
const profileDetails = (e) => {
  //prevent the event
  e.preventDefault()
  //access value to update in userData
  const { value } = e.target
  //access key to update in userData
  const key = e.target.name
  //update the data with existing data
  setUser({ ...profileData, [key]: value })

  }
  console.log(profileData);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { fname, pno, email,house,pin,place,district} = profileData
    if (fname == "") {
      toast.error('fname requierd')
    }
    else if (pno == "") {
      toast.error('pno requierd')
    }
    else if (email == "") {
      toast.error('email requierd')
    }
 
    else if (house == "") {
      toast.error('house requierd')
    }
    else if (pin == "") {
      toast.error('pin requierd')
    }
    else if (place == "") {
      toast.error('place requierd')
    }
    else if (district == "") {
      toast.error('district requierd')
    }
   
    else {

         //headers data(the api contain file type data in body)
         const headerConfig = {
          "Content-Type": "multipart/form-data"
        }
  
        //body data
        const data = new FormData()
        data.append("user_profile", Image)
        data.append("fname", fname)
        data.append("pno", pno)
        data.append("email", email)
        data.append("house", house)
        data.append("pin", pin)
        data.append("place", place)
        data.append("district", district)
        
     
      //api call
      const response = await CreatePro(data,headerConfig)
      console.log(response);
      if(response.status==200){
    

      //reset all states datas
      setUser({
        fname: "",
        pno: "",
        email: "",
        house: "",
        pin: "",
        place: "",
        district: ""

     
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

      <h2 className="fw-bold mb-2 text-center">Create Profile</h2>
      <p className="text-white-50 mb-3">Please enter your login and password!</p>
      <MDBInput required onChange={profileDetails} wrapperClass='mb-4 w-100' placeholder='Full Name' name='fname' id='formControlLg' type='text' size="lg"/>
      <MDBInput required onChange={profileDetails} wrapperClass='mb-4 w-100' placeholder='Phone no' name='pno' id='formControlLg' type='text' size="lg"/>
      <MDBInput required onChange={profileDetails} wrapperClass='mb-4 w-100' placeholder='Email' name='email' id='formControlLg' type='email' size="lg"/>
      <label className='fs-5 ms-2'>Choose Profile Pic</label><br />
      <MDBInput required onChange={setProfile} wrapperClass='mb-4 w-100' placeholder='Profile Pic'  id='formControlLg' type='file' size="lg"/>
      <MDBInput required onChange={profileDetails} wrapperClass='mb-4 w-100' placeholder='House Name' name='house' id='formControlLg' type='text' size="lg"/>
      <MDBInput required onChange={profileDetails} wrapperClass='mb-4 w-100' placeholder='Pin ' name='pin' id='formControlLg' type='text' size="lg"/>
      <MDBInput required onChange={profileDetails} wrapperClass='mb-4 w-100' placeholder='Place' name='place' id='formControlLg' type='text' size="lg"/>
      <MDBInput required onChange={profileDetails} wrapperClass='mb-4 w-100' placeholder='District' name='district' id='formControlLg' type='text' size="lg"/>

      

      <button size='lg' className='btn btn-primary  p-2 text-center  ' style={{borderRadius:'5px'}} onClick={handleSubmit}>
          Create
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
  )
}

export default CreateProfile