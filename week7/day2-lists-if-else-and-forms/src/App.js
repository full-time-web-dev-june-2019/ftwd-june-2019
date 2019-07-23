import React from 'react';
import logo from './logo.svg';
import './App.css';

import MovieCard from './components/moviecard/MovieCard.js';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      movies : [
        { title: "Jurassic Park", director: "Steven Spielberg" , img:"https://images-na.ssl-images-amazon.com/images/I/91rQiQbPFkL._SY445_.jpg" },
        { title: "Sharknado", director: "Anthony C. Ferrante", img: "https://upload.wikimedia.org/wikipedia/en/9/93/Sharknado_poster.jpg" },
        { title: "Titanic", director: "James Cameron", img: "https://upload.wikimedia.org/wikipedia/en/1/19/Titanic_%28Official_Film_Poster%29.png" },
        {title: "True Romance", director: "Tony Scott", img: "https://images-na.ssl-images-amazon.com/images/I/81flHafm-sL._SY445_.jpg"},
        {title: "Point Break", director:"Kathryn Bigelow", img: "https://resizing.flixster.com/5li51qxdNk1iJA9smH1AYyAqgdU=/206x305/v1.bTsxMTI5MDkzMztqOzE4MjIwOzEyMDA7MTM5NTsxODYw"}
      ]
    }
  }

  // this is not how we are normall going to get our data, typically we will make an api call first and grab the stuff
  // and put all the data in our state, but here we're just hardcoding it into the state instead

  deleteMovie = (indexOfMovie) =>{
  
    let clone = [...this.state.movies];
    // let clone = this.state.movies.slice()
    // either one of these will successfully clone the array

    clone.splice(indexOfMovie, 1);

    this.setState({movies: clone})
  }


  showMovies = () => {
    return(
      this.state.movies.map((eachMovie, i)=>{
        return(

          <MovieCard
           key={i}
           theTitle = {eachMovie.title} 
           theDirector = {eachMovie.director}
           theImage = {eachMovie.img} 
           deleteTheMovie = {()=>{this.deleteMovie(i)}}
           />

          )
      })
    )

  }

  render(){
            return (
              <div className="card-list">

                {/* <button onClick ={  ()=>{  this.deleteMovie(2)  }  }>Delete 3rd movie</button> */}
                {/* this is the dumb example of me hard coding in a button that deletes the 3rd movie */}

              {this.showMovies()}

            
          
            </div>
          );
  }
}

export default App;
