import React, { Component } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

export default class AddMovie extends Component {
  state={
    show:false,
    newName:"",
    newImage:"",
    newdate:"",
    newrate:3,
    newcategory:""
  }
  handleShow=()=>this.setState({show:true})
  handleClose=()=>this.setState({show:false})
  handleSublmit=(e)=>{
    e.preventDefault();

  }
  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
        Add Movie
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie info</Modal.Title>
        </Modal.Header>
        <Modal.Body>  
          <Form.Control value={this.state.newName} placeholder='Movie name'type='text' onChange={(e)=>this.setState({newName:e.target.value})}/>
          <Form.Control value={this.state.newImage} placeholder='Movie cover'type='url'  onChange={(e)=>this.setState({newImage:e.target.value})}/>
          <Form.Control value={this.state.newrate} placeholder='Movie rating'type='number'  onChange={(e)=>this.setState({newrate:e.target.value})}/>
          <Form.Control value={this.state.newdate} placeholder='Movie date'type='text'  onChange={(e)=>this.setState({newdate:e.target.value})}/>
          <Form.Select style={{marginTop:'1em'}} aria-label="Default select example" 
               onChange={(e)=>this.setState({newcategory:e.target.value})}>
      <option value="Sci Fi">Sci Fi</option>
      <option value="Kids">Kids</option>
      <option value="Comedy">Comedy</option>
 

    </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    )
  }
}
