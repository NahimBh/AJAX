$(function(){
    $.get("toload.html", function(result){
        $("#wrapper").html(result);    
        $("#wrapper").append(result);   
    });
    
    $.get("data.json", function(result){
        console.log(result);
    });
});