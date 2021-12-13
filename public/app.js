function getQuote() {
  return $.ajax({
    headers: {
      Accept: 'application/json'
    },
    url:
      'https://api.quotable.io/random',
    success: function (quoteData) {
      console.log('success');
      $('#text').text(quoteData.content);
      $('#author').text(quoteData.author);
    }
  });
}

getQuote();

$(function(){

});