import React, { useEffect, useState } from 'react'

import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import { useParams } from 'react-router-dom';
import { getPro } from '../service/allapi';
import Sidebar from '../components/Sidebar';

function Viewprofile() {
  //state to store user data
  const [user,setUser]=useState({})

  const {id}=useParams()

  const getUser=async()=>{
    const {data}=await getPro(id)
    setUser(setUser(data))

  }

  useEffect(()=>{

  },[])
  return (
    <div>
  <Sidebar/>

    <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                  <MDBBtn outline color="dark" style={{height: '36px', overflow: 'visible'}}>
                    Edit profile
                  </MDBBtn>
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <MDBTypography tag="h5">Andy Horwitz</MDBTypography>
                  <MDBCardText>New York</MDBCardText>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5">253</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Photos</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">1026</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">478</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Following</MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText className="font-italic mb-1">Web Developer</MDBCardText>
                    <MDBCardText className="font-italic mb-1">Lives in New York</MDBCardText>
                    <MDBCardText className="font-italic mb-0">Photographer</MDBCardText>
                  </div>
                </div>
            
            
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
    </div>
  )
}

export default Viewprofile