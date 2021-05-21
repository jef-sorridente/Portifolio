function bnt() {
    document.getElementById("divteste").animate([
        { transform: 'translateY(0px)' },
        { transform: 'translateX(-10%)' },
    ], {
        // timing options
        duration: 1000,
        iterations: 1,
        fill:"both"
        
    })
}
/*
$('.bnt').on('click', function(){
    if($('.divteste').height() == 30){
         $('.divteste').animate({"height" : "200px"}, 200);
    }else{
        $('.divteste').animate({"height" : "30px"}, 200);
    }
});
$('.bnt').on('click', function(){
    if($('.divteste').hasClass('pequena')){
         $('.divteste').animate({"height" : "200px"}, 200);
         $('.divteste').removeClass('pequena');
         $(this).attr('value', 'Diminuir');
    }else{
        $('.divteste').animate({"height" : "30px"}, 200);
        $('.divteste').addClass('pequena');
        $(this).attr('value', 'Aumentar');
    }
});*/