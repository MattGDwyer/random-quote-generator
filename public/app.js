let tweetQuote;
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
      tweetQuote = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent('"' + quoteData.content + '" ' + quoteData.author)}`;
      console.log(tweetQuote);
      $('#tweet-quote').attr('href', `${tweetQuote}`);
    }
  });
}

getQuote();

$(function(){

});