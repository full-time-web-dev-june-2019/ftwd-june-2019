import React from 'react';

function education(props) {
  const myEducation = [
    {
        schoolName:"Ironhack",
        city: "Miami",
        country:"US",
        degree:"Full-Stack Web Developer",
        schoolStarted:"2017",
        schoolEnded:"2017"
    },
    {
        schoolName:"University of Cool Things",
        city: "Paris",
        country:"France",
        degree:"MS of Cool Things",
        schoolStarted:"2015",
        schoolEnded:"2017"
    },
    {
        schoolName:"University of Chill Vibe",
        city: "Berlin",
        country:"Germany",
        degree:"BS of Super Science",
        schoolStarted:"2012",
        schoolEnded:"2015"
    }
  ]

  const sendHome = () =>{
    props.history.push('/');
    // this is how you programmatically redirect inside a function
  }


  return (
    <div>
      <h2>Education:</h2>
      {myEducation.map((eachSchool, index) => {
        return (
          <div key={index}>
            <h3>{eachSchool.schoolName}</h3>
            <p>{eachSchool.city}, {eachSchool.country}</p>
            <h4>{eachSchool.degree}</h4>
            <p>{eachSchool.schoolStarted} - {eachSchool.schoolEnded}</p>
          </div>
          )
        })}
        <button onClick = {sendHome} >Redirect To Home </button>
    </div>
  )
}

export default education;