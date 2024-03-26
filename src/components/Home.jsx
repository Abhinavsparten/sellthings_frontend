import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { getAll } from '../service/allapi';
import Sidebar from './Sidebar';

function Home() {

  //state to store all sellitems
  const[allItems,setAllitems]=useState([])

  //create a state to store search data
  const[searchKey,setSearchKey]=useState("") 

   //define a function to call api
   const getitemCall=async()=>{
    const response=await getAll(searchKey)
    setAllitems(response.data);

 }
 useEffect(()=>{
  getitemCall()
 
},[searchKey])

  return (
    
    <div>
      <Sidebar/>
          <Form  className="d-flex mt-5 ms-5" style={{width:"250px"}}>
            <Form.Control onChange={e=>setSearchKey((e.target.value).trim())}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary" >Search</Button>
          </Form>
      

<Row>
{
        allItems.map(i=>(
        
          
          <Col sm={12}  md={6} lg={4} xl={3}>
          <Link to={`viewrest/${i.id}`} style={{textDecoration:'none'}}>
      <Card id='d1' className='p-3 m-5'
      style={{ width: '18rem', height: '24rem'}}>
        <Card.Title className='mt-4 text-center'>
          <strong>{i.itemname}</strong></Card.Title>
      <Card.Img className='w-100'
       variant="top" src={i.image} />
      <Card.Body>
        
        <Card.Text>
        {i.discription}
        </Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
        </Card>
        </Link>
        </Col>
         ))
        }  
      
    </Row>

      
     
        
    </div>
  )
}

export default Home