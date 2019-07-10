window.onload = function(){



    document.getElementById('theButton').onclick = ()=>{

        let countryToSearchFor = document.getElementById('theInput').value;

        

        axios.get('https://restcountries.eu/rest/v2/name/'+countryToSearchFor)
        .then((result)=>{
            let theCap = result.data[0].capital;
            let theName = result.data[0].name;

            document.getElementById('countryName').innerHTML = theName;
            document.getElementById('countryCapital').innerHTML = theCap;

            document.getElementById('theInput').value = "";
        })
        .catch((err)=>{
            console.log(err);
        })

    }


    document.getElementById('char-btn').onclick = ()=>{

        let list = document.getElementById('list-of-chars')
        console.log(list)
        
        axios.get('https://ih-crud-api.herokuapp.com/characters')
        .then((response)=>{

            list.innerHTML = "";
            
            response.data.forEach((eachOne)=>{

                let newChar = document.createElement('div');
                newChar.innerHTML = `
               <h3> ${eachOne.name} </h3>
               <h6> ${eachOne.occupation} </h6>
               <p> ---------------------------- </p> 
                `

                list.appendChild(newChar);
                
            })

        })
        .catch((err)=>{
            console.log(err);
        })

    }






document.getElementById('add-new-btn').onclick = ()=>{

    let name = document.getElementById('new-name').value;
    let occupation = document.getElementById('new-occupation').value;
    let weapon = document.getElementById('new-weapon').value;

    let debt = document.getElementById('new-debt').checked;

    axios.post('https://ih-crud-api.herokuapp.com/characters', {
        name: name,
        occupation: occupation,
        weapon: weapon,
        debt: debt
    })
    .then(()=>{
        console.log('yay')
        
        document.getElementById('new-name').value = "";
        document.getElementById('new-occupation').value = "";
        document.getElementById('new-weapon').value = "";

        document.getElementById('new-debt').checked = false;
        


    })
    .catch((err)=>{

        console.log(err);
    })

    
}









}