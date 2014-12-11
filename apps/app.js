   $('#search-form').submit(function(event){
    event.preventDefault();
    var searchValue = $('#search').val();
    getRequest(searchValue);
      });

    function getRequest(searchValue){
    var params = {
      part: 'snippet',
      key: 'AIzaSyDoQ-SbIAaPYIuTQ0FfY-6lv5HvaXcy8w8',
      q: searchValue
    };

    url='https://www.googleapis.com/youtube/v3/search';
    $.getJSON(url, params, function(data) {
      console.log(data.items);
      showResults(data.items);
    });
  };

function showResults(results){
    var output = "";
      $.each(results, function (key, value){
        var thumbnails = value.snippet.thumbnails.medium.url;
        var title = value.snippet.title;
        var videoId = value.id.videoId;
        console.log(thumbnails);
        output += '<li><p>' + title + '</p><a class="thumb" href="https://www.youtube.com/watch?v=' + videoId + '"><img src=' + thumbnails + '></a></li>';
        console.log(output);

          $('#search-results').prepend(output);
    });
    };


