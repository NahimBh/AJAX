$(function(){
 var id = window.location.hash.substr(1);

    $.get("https://api.themoviedb.org/3/movie/"+id+"?language=fr&api_key=58f8fe741b03b0ae4c9a2ed080e94041",function(movie){
        
      //Titre, Affiche du film et Synopsis
      $('.movie-title').html(movie.title);
      $('.movie-poster').attr("src","http://image.tmdb.org/t/p/w500/"+movie.poster_path);
      $('.movie-poster').attr("alt",movie.title);

      $('.movie-synopsis').html(movie.overview);

      //Infos du film
      $("<li>").text("Budget : "+movie.budget+" $").appendTo(".movie-infos");

      //Liste des genres
      var nbgenre=movie.genres.length;
      var genres="";

      for (i=0; i<nbgenre; i++) {
        genres=genres+movie.genres[i].name;
        if(i!=nbgenre-1){
          genres=genres+", ";
        }
      }
      $("<li>").text("Genres : "+genres).appendTo(".movie-infos");

      //Liste des Producteurs
      var nbprod=movie.production_companies.length;
      var producers="";

      for (i=0; i<nbprod; i++) {
        producers=producers+movie.production_companies[i].name;
        if(i!=nbprod-1){
          producers=producers+", ";
        }
      }
      $("<li>").text("Producteurs : "+producers).appendTo(".movie-infos");
      $("<li>").text("Langue originale : "+movie.original_language).appendTo(".movie-infos");
      $("<li>").text("Titre original : "+movie.original_title).appendTo(".movie-infos");
        $("<li>").text("Note : "+movie.vote_average).appendTo(".movie-infos");
        $("<li>").text("Date de sortie : "+movie.release_date).appendTo(".movie-infos");

        });
});