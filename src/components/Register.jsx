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
import { registerUser } from '../service/allapi';

function Register() {
  //state to store api response erroe message
  const [errorMsg,setErrorMsg]=useState("")

  const [post, setpost] = useState(true);

    //create an object to store datas from input
    const [userData, setUser] = useState({
      fname: "",
      email: "",
      psw: ""
  
    })
      //object for useNavigate
  const navigate=useNavigate()
     // a function to update userdata when user enter the input in html
  const userDetails = (e) => {
    //prevent the event
    e.preventDefault()
    //access value to update in userData
    const { value } = e.target
    //access key to update in userData
    const key = e.target.name
    //update the data with existing data
    setUser({ ...userData, [key]: value })

  }
  console.log(userData);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { fname, email, psw} = userData
    if (fname == "") {
      toast.error('fname requierd')
    }
    else if (email == "") {
      toast.error('email requierd')
    }
    else if (psw == "") {
      toast.error('password requierd')
    }
   
    else {
     
      //api call
      const response = await registerUser(userData)
      if(response.status==200){
        setpost(true)
    
        if(response.data.message === "Registration Successfull"){
          toast.success(response.data.message);
          setTimeout(()=> {
            navigate('/')
          }, 1500);
         
        }else{
          setpost(true)
          toast.error(response.data.message);
        }

      //reset all states datas
      setUser({
        uname: "",
        email: email,
        psw: ""
     
      })
      // toast.success('RegisterSuccessfully')

        
      }else{
        setpost(true)
        toast.error(response.data.message)
      }
    }
  }
   //prevent for login
   useEffect(()=>{
    if(localStorage.getItem('email')){
      navigate('/')
    }
  },[navigate])
  return (
    <div>
      <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff' }}>
          <MDBContainer fluid>

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol col='12'>

    <MDBCard className='bg-white p-4 my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
      <MDBCardBody className='p-5 w-100 d-flex flex-column'>

        <h2 className="fw-bold mb-2 text-center">Sign in</h2>
        <p className="text-white-50 mb-3">Please enter your login and password!</p>
        <MDBInput required onChange={userDetails} name='fname' wrapperClass='mb-4 w-100'  placeholder='Full Name' id='formControlLg' type='text' size="lg"/>
        <MDBInput required onChange={userDetails} name='email' wrapperClass='mb-4 w-100' placeholder='Email address' id='formControlLg' type='email' size="lg"/>
        <MDBInput required onChange={userDetails} name='psw' wrapperClass='mb-4 w-100' placeholder='Password' id='formControlLg' type='password' size="lg"/>

        <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

        <button size='lg' className='btn btn-primary  p-2 text-center  ' style={{borderRadius:'5px'}} onClick={handleSubmit}>
          Register
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

export default Register