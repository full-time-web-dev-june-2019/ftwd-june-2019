
$(document).ready(function() {
    


    let button1 = $(".cool-button").eq(0);

    let button3 = $(".cool-button").eq(2);

    let button2 = $(".cool-button").eq(1);




    button1.click(function(){
        console.log('button 1 clicked');
        $('.wolf-pic').prop('src', 'wolf.jpg');  
    })

    button3.click(function(){
        console.log('button 3 clicked');
        $('.wolf-pic').prop('src', 'wolf-professional.jpg');
    })

    button2.click(function(){
        // let itsAlreadyBlue =  $('.heading').hasClass('big-blue');

        // if(itsAlreadyBlue){
        //     $('.heading').removeClass('big-blue');
        // } else{
        //     $('.heading').addClass('big-blue');
        // }

        $('.heading').toggleClass('big-blue');

        // $('.heading').fadeToggle(1000);

    })



    let input1 = $('.input1');

    input1.change(function(){
        console.log("changing");
        let currentValue = input1.val();
        let theh3 = $(".heading")
        theh3.text(currentValue);
    });















  });