/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

// function turnHoursToMinutes(arrayOfMovies){
//     return arrayOfMovies.map((theMovieObject)=>{
//       let formattedMovie = {...theMovieObject};
//       let totalMinutes;
//       if(theMovieObject.duration.indexOf('h') > -1 && theMovieObject.duration.indexOf('min') > -1){
//       let timeArray = theMovieObject.duration.split('h');
//       timeArray[0] = parseInt(timeArray[0]);
//       timeArray[1] = parseInt(timeArray[1]);
//       totalMinutes = (timeArray[0]*60 + timeArray[1])
//       } else if (theMovieObject.duration.indexOf('h') > -1){
//         let numberOfHours = parseInt(theMovieObject.duration);
//         totalMinutes = (numberOfHours * 60)
//       } else {
//           totalMinutes = parseInt(theMovieObject.duration)
//       }
//       formattedMovie.duration = totalMinutes;
//       return formattedMovie;
//     });
//   }

  function timeStringToMin(timeString){
    let totalMinutes;
    if(timeString.indexOf('h') > -1 && timeString.indexOf('min') > -1){
    let timeArray = timeString.split('h');
    timeArray[0] = parseInt(timeArray[0]);
    timeArray[1] = parseInt(timeArray[1]);
     totalMinutes = (timeArray[0]*60 + timeArray[1])
    } else if (timeString.indexOf('h') > -1){
      let numberOfHours = parseInt(timeString);
       totalMinutes = (numberOfHours * 60)
    } else {
        totalMinutes = parseInt(timeString)
    }
    return totalMinutes;
  }

function turnHoursToMinutes(arrayOfMovies){
    return arrayOfMovies.map((theMovieObject)=>{
      let formattedMovie = {...theMovieObject};
      formattedMovie.duration = timeStringToMin(theMovieObject.duration);
      return formattedMovie;
    });
  }


// Get the average of all rates with 2 decimals 
function ratesAverage(arrayOfMovies){
    let total =  arrayOfMovies.reduce((a,b)=>{
        return a + Number(b.rate);
    },0)
    return Number((total / arrayOfMovies.length).toFixed(2));
  }


// Get the average of Drama Movies

function dramaMoviesRate(arrayOfMovies){
    
    let onlyDramas = arrayOfMovies.filter((eachSingleMovie)=>{
        return eachSingleMovie.genre.includes('Drama');
    })
    
    if(onlyDramas.length === 0){return undefined};
    return ratesAverage(onlyDramas);
  }


// Order by time duration, in growing order

function orderByDuration(arrayOfMovies){
    let formatted = [...arrayOfMovies];
    if(typeof formatted[0].duration === 'string'){
     formatted = turnHoursToMinutes(formatted);
    }
    return formatted.sort((a,b)=>{
      if(a.duration < b.duration){
        return -1;
      } else if(b.duration < a.duration) {
        return 1;
      }else {
        if(a.title < b.title){
          return -1
        } else if (b.title < a.title){
          return 1
        } else {
        return 0;
        }
      }
    })
  }


// How many movies did STEVEN SPIELBERG

function howManyMovies(arrayOfMovies){
    if(arrayOfMovies.length ===0){return undefined};
    let specialMovies = arrayOfMovies.filter(eachMovie=>{ 
    return eachMovie.genre.includes('Drama') && eachMovie.director === "Steven Spielberg"
        })
    return `Steven Spielberg directed ${specialMovies.length} drama movies!`
  }


// Order by title and print the first 20 titles
function orderAlphabetically(arrayOfMovies){
    let alphabetical = arrayOfMovies.sort((a,b)=>{
      if(a.title < b.title){
        return -1
      } else if (b.title < a.title){
        return 1;
      } else {
        return 0;
      }
    })
    let first20 = alphabetical.slice(0,20);
    return first20.map((eachMovieObject)=>{
      return eachMovieObject.title;
    })
  }


// Best yearly rate average

function bestYearAvg(arrayOfMovies){
    if(arrayOfMovies.length===0){return undefined}

    let newObj = {};
  
    arrayOfMovies.forEach((eachMovieObject)=>{
     if(!newObj[eachMovieObject.year]){
       newObj[eachMovieObject.year] = {num: 1,totalRate: Number(eachMovieObject.rate)};
     } else{
        newObj[eachMovieObject.year].num +=1
         newObj[eachMovieObject.year].totalRate  += Number(eachMovieObject.rate)
     }
    })
  
    let greatest = {year: '', num: 0};
  
    for(let eachKey in newObj){
      if(newObj[eachKey].totalRate /newObj[eachKey].num > greatest.num){
        greatest.num = newObj[eachKey].totalRate /newObj[eachKey].num
        greatest.year = eachKey;
      } 
    }

    return `The best year was ${greatest.year} with an average rate of ${greatest.num}`
  }
