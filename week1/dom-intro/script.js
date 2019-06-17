
let theButton = document.getElementById('add-item-button');
let theList = document.getElementById('item-list');

let theInput1 = document.getElementById("what-to-add1");
let theInput2 = document.getElementById("what-to-add2");

theButton.onclick = function(){
    let newThingToAdd1 = theInput1.value;
    let newThingToAdd2 = theInput2.value;

    let newListItem = document.createElement('li');
    newListItem.innerText = Number(newThingToAdd1) + Number(newThingToAdd2);
    theList.appendChild(newListItem);

    theInput.value = "";
    // let secondThing = document.querySelector("#item-list li:nth-child(2)");
    // theList.insertBefore(newListItem, secondThing);
}

let colorButtons = document.getElementsByClassName('color-button');
let arr = [...colorButtons];

arr.forEach((eachButton)=>{
    eachButton.onclick = function(e){
        if(e.currentTarget.classList == "big-blue"){
            e.currentTarget.classList = ""

        } else {
            arr.forEach((eachOne)=>{
                eachOne.classList=""
            })
            e.currentTarget.classList = "big-blue"
        }
    }
})