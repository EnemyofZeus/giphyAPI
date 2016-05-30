$(document).ready(function(){
  var key = "api_key=dc6zaTOxFJmzC";

  function getGiphy(query){
    $('.gifList').empty();
    $.ajax({
      method:'GET',
      url: "http://api.giphy.com/v1/gifs/search?q=" + query +"&"+key
    }).then(function(response){
      for(var i = 0; i<response.data.length; i++){
        $('.gifList').append($('<img>', {id:response.data[i].id,src:response.data[i].images.downsized.url}));
      }
    })
  }
  //$('#theDiv').prepend($('<img>',{id:'theImg',src:'theImg.png'}))
  function queryParse(query){
    query = query.replace(/ /g, '+');

    return query.toLowerCase();
  }


  $("#subButton").click(function(){
    var query = queryParse($('#inputText').val());
    getGiphy(query);
  })
  //http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC
})
