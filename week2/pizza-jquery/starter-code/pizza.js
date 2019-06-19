// Write your Pizza Builder JavaScript in this file.
let pizza = {
    basePrice: 10,
    ingr: {
        'pepperonni': {price: 1},
        'mushrooms': {price: 1},
        'green peppers': {price: 1},
        'white sauce': {price: 3},
        'gluten-free crust': {price: 5}
    }    
}
$(document).ready(function(){



    $('.btn-green-peppers').click(function(){
        $('.green-pepper').toggle(1000);
        if('green peppers' in pizza.ingr){
            delete pizza.ingr['green peppers'];
            console.log(pizza);
        } else{
            pizza.ingr['green peppers'] = {price: 1}
            console.log(pizza);
        }
    })

    $('.btn-mushrooms').click(function(){
        $('.mushroom').toggle(1000);
        if('mushrooms' in pizza.ingr){
            delete pizza.ingr['mushrooms'];
            console.log(pizza);
        } else{
            pizza.ingr['mushrooms'] = {price: 1}
            console.log(pizza);
        }
    })

    $('.btn-pepperonni').click(function(){
        $('.pep').toggle(1000);
        if('pepperonni' in pizza.ingr){
            delete pizza.ingr['pepperonni'];
            console.log(pizza);
        } else{
            pizza.ingr['pepperonni'] = {price: 1}
            console.log(pizza);
        }
    })

    $('.btn-sauce').click(function(){
        $('.sauce').toggleClass('sauce-white');
        if('white sauce' in pizza.ingr){
            delete pizza.ingr['white sauce'];
            console.log(pizza);
        } else{
            pizza.ingr['white sauce'] = {price: 3}
            console.log(pizza);
        }
    })


    $('.btn-crust').click(function(){
        $('.crust').toggleClass('crust-gluten-free');
        if('gluten-free crust' in pizza.ingr){
            delete pizza.ingr['gluten-free crust'];
            console.log(pizza);
        } else{
            pizza.ingr['gluten-free crust'] = {price: 5}
            console.log(pizza);
        }
    })


    $('.btn').click(function(){
        $(this).toggleClass('active');
        // inside a click function $(this) is the thing that just got clicked
        buildPriceList();
    })



    function buildPriceList(){
        let theList = $('#the-price-list');
        theList.empty();
    
        let totalPrice = pizza.basePrice;
    
        for(let ingredient in pizza.ingr){
            let newThing = $('<li></li>');
            newThing.text(`$${pizza.ingr[ingredient].price} ${ingredient}`)
            theList.append(newThing);
            totalPrice += pizza.ingr[ingredient].price;
        }
        $('#the-total').text('$'+totalPrice)
    }
























})//end document ready


