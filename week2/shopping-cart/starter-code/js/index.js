window.onload = function(){
  var calculatePriceButton = document.getElementsByClassName('calc-total')[0];
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }





  function deleteItem(theEventObject){
     theEventObject.currentTarget.parentElement.parentElement.remove();
  }

  function createNewItem(){
    let newRow = document.createElement('div');
    newRow.classList = "row";

    let newName = document.getElementById('newName').value;
    let newPrice = document.getElementById('newPrice').value;

    let priceWithDec = parseFloat(Math.round(newPrice * 100) / 100).toFixed(2);

    newRow.innerHTML = `
    <div class="product-name">
      <span>
       ${newName}
      </span>
    </div>

    <div class="product-price">
      $<span>
        ${priceWithDec}
      </span>
    </div>

    <div class="product-quantity">
      <label for="blah">QTY</label>
      <input id="blah" type="number">
    </div>

    <div class="product-total">
      $<span>
        0.00
      </span>
    </div>

    <div>
      <button class="btn btn-delete">Delete</button>
    </div>
    `



    let theContainer = document.getElementsByClassName('product-rows-container')[0];
    theContainer.appendChild(newRow);

     document.getElementById('newName').value = "";
     document.getElementById('newPrice').value = "";


    //  deleteButtons = document.getElementsByClassName('btn-delete');
    //  for(var i = 0; i<deleteButtons.length ; i++){
    //   deleteButtons[i].onclick = deleteItem;
    // }
    // easy option with a tiny memory leak

    document.querySelector('.row:last-child .btn-delete').onclick = deleteItem;
    // better option with no memory leak
  }



  


  function getTotalPrice(){

    let theRows = document.getElementsByClassName('row');
    let arrayOfRows = [...theRows];

    let total = 0;

    arrayOfRows.forEach((oneRow, ind)=>{
      let thePrice = document.querySelector(`.row:nth-child(${ind+1}) .product-price > span`).innerHTML

      let theQuantity = document.querySelector(`.row:nth-child(${ind+1}) .product-quantity > input`).value;

      let totalPriceForThisSingleProduct = Number(thePrice) * Number(theQuantity);
  
      let priceWithTwoDecimals = parseFloat(Math.round(totalPriceForThisSingleProduct * 100) / 100).toFixed(2);
     
      let theSpanToEdit = document.querySelector(`.row:nth-child(${ind+1}) .product-total > span`);

      theSpanToEdit.innerHTML = priceWithTwoDecimals;

      total += Number(priceWithTwoDecimals);

    })

    let newTotal = parseFloat(Math.round(total * 100) / 100).toFixed(2);
    document.getElementById('real-actual-total').innerHTML = newTotal;
  }



















};
