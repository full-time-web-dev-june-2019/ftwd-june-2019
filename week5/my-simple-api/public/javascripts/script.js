document.addEventListener('DOMContentLoaded', () => {


  function getAllTheAnimalsAndPutThemOnThePage(){

    let list = document.getElementById('animal-list');

    axios.get('http://localhost:3000/animals')
    .then((response)=>{

      let arrayOfStuff = response.data.reverse();
      list.innerHTML = "";

      arrayOfStuff.forEach((theAnimal)=>{

        let newDiv = document.createElement('div');

        newDiv.innerHTML = `
        <h4> ${theAnimal.name} </h4>
        <h6> ${theAnimal.type} </h6>
        <p> Good Boy/Girl Rating: ${theAnimal.goodBoy} </p>
        `
        list.appendChild(newDiv);
      })

     
      
    })
    .catch((err)=>{
      console.log(err)
    })

  }


  setTimeout(getAllTheAnimalsAndPutThemOnThePage,7000)





  let animalButton = document.getElementById('new-animal-button');

  animalButton.onclick = ()=>{

    let name = document.getElementById('name')
    let type = document.getElementById('type')
    let good = document.getElementById('good')

    let goodBoyRating = Number(good.value)

    axios.post('http://localhost:3000/animals', {name: name.value , type: type.value, goodBoy: goodBoyRating})
    .then((res)=>{

        getAllTheAnimalsAndPutThemOnThePage();

    })
    .catch((err)=>{
      console.log(err)
    })



    name.value = "";
    type.value = "";
    good.value = ""; 

   
  }










}, false);
