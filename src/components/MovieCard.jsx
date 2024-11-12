import React from 'react'
import { Button } from 'react-bootstrap'
import { AiFillLike } from "react-icons/ai";
import SarRating from './SarRating';
const MovieCard = ({el,del,like}) => {
  return (

       <div className="card" >
        <h3 style={{textAlign:"center",marginLeft:'-20px'}}>{el.name} </h3>
        <img src={el.image} alt=""  className='image' />
        <SarRating rating={el.rating}/>
        <p>{el.date}</p>
        <p>{el.category}</p>
       <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
       <Button onClick={()=>like(el)} variant="danger " style={{width:'150px',margin:'3px'}}> <AiFillLike /></Button>{' '}
      <Button onClick={()=>del(el.id)} variant="secondary"style={{width:'150px',margin:'3px'}}>Delete</Button>{' '}
      <Button variant="outline-dark"style={{width:'150px',margin:'3px'}}>Edit</Button>{' '}
       </div>
       </div>
     
   
  )
}

export default MovieCard
