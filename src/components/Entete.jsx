import React, { Component } from 'react'
import { Button, Card, Container, Form, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
export default class Entete extends Component {
    state={
        show:false,
    }
    handleShow=()=>this.setState({show:true})
    handleClose=()=>this.setState({show:false})
  render() {
    return (
      <div>
         <Navbar  expand="lg" className='navbar'>
      <Container fluid>
        <Navbar.Brand href="#" style={{marginLeft:'8em',color:'white'}}>Netflixy</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
          </Nav>
          
          <Button variant="danger" onClick={this.handleShow}>
          <IoMdMenu />
      </Button>

      <Offcanvas bg='dark' data-bs-theme='dark' placement='end' show={this.state.show} onHide={this.handleClose}>
        <Offcanvas.Header  closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <Form className="d-flex">
            <Form.Control
            value={this.props.recherche}
            onChange={(e)=>this.props.handlesearch(e.target.value)}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="danger"><FaSearch />
            </Button>
          </Form>
          <Form.Select style={{marginTop:'1em'}} aria-label="Default select example">
      <option value="1">Sci Fi</option>
      <option value="2">Kids</option>
      <option value="3">Comedy</option>
    </Form.Select>

    <div style={{
      display:'flex',
      flexWrap:'wrap',
      justifyContent:'space-evenly'
    }}>
   <center><h2 style={{marginBottom:'2em',}}>Liked Movies</h2></center>  
      
      
 {this.props.lickedMovies.map((el)=>(

  <Card style={{height:'200px',width:'150px',marginTop:'3em' }}>
      <Card.Img variant="top" style={{height:'80px',margin:'3px'}} src={el.image}/>
      <Card.Body>
        <Card.Title style={{fontSize:'15px'}}>{el.name}</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <div style={{ display:'flex'}}>
        <Button style={{fontSize:'9px'}} variant="primary">Watch</Button>
        <Button onClick={()=>this.props.dislike(el.id)} style={{ fontSize:'9px',marginLeft:'2em'}} variant="outline-danger"><RxCross2 /></Button>
        </div>
      </Card.Body>
    </Card>
 ))};
 
    </div>
        </Offcanvas.Body>
      </Offcanvas>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    )
  }
}
