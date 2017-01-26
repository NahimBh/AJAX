$(document).ready(function(){ 
    
$(function(){
 
    var api_key = "58f8fe741b03b0ae4c9a2ed080e94041";
    var id= window.location.hash.substr(1);
    console.log(id);
    
    // FONCTION QUI AFFICHE LE LISTING
    var renderMovies = function(movies){
        $("#listing").html("");
        
        for(var i = 0; i < movies.results.length; i++)
            {
                var movie = movies.results[i];
                $("<div>").attr("class","movie movie"+i).appendTo("#listing");
                    $("<div>").attr("class","movie-image movie-image"+i).appendTo(".movie"+i);
                        $("<a>").attr("href","details.html#"+movie.id).html("<img src='http://image.tmdb.org/t/p/w185/"+movie.poster_path+"' alt='poster'>").appendTo(".movie-image"+i);
                    $("<div>").attr("class","movie-info movie-info"+i).appendTo(".movie"+i);
                        $("<a>").attr("href","details.html#"+movie.id).attr("class","movie-title").text(movie.title).appendTo(".movie-info"+i);
                        //$("<p>").text(movie.genres).attr("class","movie-genres").appendTo(".movie-info"+i);
                        $("<hr>").appendTo(".movie-info"+i);
                        $("<p>").text(movie.overview).attr("class","movie-synopsis").appendTo(".movie-info"+i);
                        $("<p>").text("Note: "+movie.vote_average).attr("class","movie-note").appendTo(".movie-info"+i);
                        $("<a>").attr("href","details.html#"+movie.id).attr("class","more-info").text("Plus d'informations").appendTo(".movie-info"+i);
            }
    };
    
    // FILMS AFFICHE AU CHARGEMENT
    $.get("http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&language=fr&api_key=" +api_key,             function(results){
        renderMovies(results);
    });
    
        // BOUTON RECHERCHER
        $("#search").change(function(){
           var search = $(this).val();
                    $.get("http://api.themoviedb.org/3/search/movie?query=" + search + "&language=fr&api_key=" +api_key, function(results){
                    renderMovies(results);
                    });	
        });
    
    // SELECTION DES FILMS PAR GENRE
        $(".byPopulaire").click(function(){
            
             $.get("http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&language=fr&api_key=" +api_key, function(results){
           renderMovies(results);
            });

        });
    
        $(".byCinema").click(function(){
            
            $.get("http://api.themoviedb.org/3/movie/now_playing?language=fr&api_key=" + api_key, function(results) {
            renderMovies(results);
            });
            
        });
        
        $(".byDrame").click(function(){
            
             $.get("http://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&language=fr&api_key=" +api_key, function(results){
           renderMovies(results);
            });
            
        });
    
        $(".byAventure").click(function(){
            
             $.get("http://api.themoviedb.org/3/discover/movie?with_genres=12&sort_by=vote_average.desc&vote_count.gte=10&language=fr&api_key=" +api_key, function(results){
           renderMovies(results);
            });
            
        });
    
        $(".byAnimation").click(function(){
            
             $.get("http://api.themoviedb.org/3/discover/movie?with_genres=16&sort_by=vote_average.desc&vote_count.gte=10&language=fr&api_key=" +api_key, function(results){
           renderMovies(results);
            });
            
        });
    
        $(".byComedie").click(function(){
            
             $.get("http://api.themoviedb.org/3/discover/movie?with_genres=35&sort_by=vote_average.desc&vote_count.gte=10&language=fr&api_key=" +api_key, function(results){
           renderMovies(results);
            });
            
        });
    
        $(".byFantastique").click(function(){
            
             $.get("http://api.themoviedb.org/3/discover/movie?with_genres=14&sort_by=vote_average.desc&vote_count.gte=10&language=fr&api_key=" +api_key, function(results){
           renderMovies(results);
            });
            
        });
    
        $(".byRomance").click(function(){
            
             $.get("http://api.themoviedb.org/3/discover/movie?with_genres=10749&sort_by=vote_average.desc&vote_count.gte=10&language=fr&api_key=" +api_key, function(results){
           renderMovies(results);
            });
            
        });
    
        $(".byAction").click(function(){
            
             $.get("http://api.themoviedb.org/3/discover/movie?with_genres=28&sort_by=vote_average.desc&vote_count.gte=10&language=fr&api_key=" +api_key, function(results){
           renderMovies(results);
            });
            
        });
    
        $(".byWestern").click(function(){
            
             $.get("http://api.themoviedb.org/3/discover/movie?with_genres=37&sort_by=vote_average.desc&vote_count.gte=10&language=fr&api_key=" +api_key, function(results){
           renderMovies(results);
            });
            
        });
    
});
    
});