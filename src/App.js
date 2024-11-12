import React, { Component } from 'react'
import "./App.css";
import { STATICMOVIESDATA } from './MoviesDatat';
import Entete from './components/Entete';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './components/AddMovie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
export default class App extends Component {
  state={movies:STATICMOVIESDATA,
    lickedMovies:[],
    searchvalue:"",
  }

handlesearch=(ktiba)=>{
  this.setState({searchvalue:ktiba})
}
handlelike=(movies)=>{
  let verification=this.state.lickedMovies.find(el=>el.id===movies.id)
  verification? alert('you already have this movie in your watch list'):
  this.setState({lickedMovies:[...this.state.lickedMovies,movies]})

}

  handledelete=(clickedid)=>this.setState({
    movies:this.state.movies.filter((el)=>el.id !==clickedid)
  })
  handledislike=(clickedid)=>this.setState({
    lickedMovies:this.state.lickedMovies.filter((el)=>el.id !==clickedid)
  })
  render() {
    return (
      <div  className="App">
      <BrowserRouter>
      <Entete handlesearch={this.handlesearch} lickedMovies={this.state.lickedMovies} dislike={this.handledislike} recherche={this.state.searchvalue}/>
      <Routes>
      <Route path='/'  element={ <MovieList movies={this.state.movies} del={this.handledelete} like={this.handlelike} recherche={this.state.searchvalue} />}></Route>
       <Route path='/AddedMovies' element={<AddMovie/>}></Route> 
      </Routes>
       
        
        </BrowserRouter>
      </div>
    )
  }
}