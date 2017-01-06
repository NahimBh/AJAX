$(function(){
    var api_key = "58f8fe741b03b0ae4c9a2ed080e94041";
    var renderMovies = function(movies){
        $("#list").html("");
        
        for(var i=0; i<movies.results.length; i++){
            var movie = movies.results[i];
            $("<li>").text(movie.title).appendTo("#list");
        }
    };
    
    $("#search").change(function(){
        var search = $(this).val();
    
    $.get("http://api.themoviedb.org/3/search/movie?query=" + search + "&api_key=" + api_key, function(results){
        renderMovies(results);
        });
    });
});