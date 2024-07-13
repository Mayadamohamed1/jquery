$(".icon").click(() =>{
    $(".open").css("left","0");

});
$(".close").click(() =>{
    $(".open").css("left","-260px");
});

$('#slider .toggle').click(function(){
    $(this).next().slideToggle(500);
    $('.inner').not($(this).next()).slideUp(500);
});
$('textarea').keyup(function() {
    let myLength = $(this).val().length;
$("#chars").text(100-myLength <=0 ? "your available character finished": 100-myLength

)
})