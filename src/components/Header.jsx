import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div >

     
     <Navbar expand="lg" className="bg-body-tertiary ">
      <Container fluid>
        
        
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
     <img id='d2' style={{
       height:'50px',
       width:'50px',
       borderRadius:'40px'
     }}
       alt=""
       src="https://i.postimg.cc/Pr0b6GsQ/images-3.jpg"
       width="30"
       height="30"
       className="d-inline-block align-top"
     />{' '}
           <strong style={{color:'black'}} className='fs-3 ms-3'>Find Best</strong>
          </Nav>
          <Navbar.Brand href="#">Login</Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary" >Search</Button>
          </Form>
       
      </Container>
    </Navbar>
    
    </div>
  )
}

export default Header