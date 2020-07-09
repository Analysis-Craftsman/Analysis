function() {
  var referrer = {{Referrer}};
  var pattern = new RegExp('[\\?&]blogId=([^&#]*)');
  var query = referrer.match(pattern);
  var keyword = query[1].replace( /\+/gi, "%20");
  var result = decodeURI(keyword);
    
  return result;
}
