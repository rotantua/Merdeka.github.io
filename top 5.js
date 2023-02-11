$.getJSON("https://api.coinmarketcap.com/v2/ticker/?limit=5&sort=rank", function(data) {
  var table = $("#prices");
  $.each(data.data, function(key, value) {
    table.append("<tr><td>" + value.name + "</td><td>" + value.symbol + "</td><td>" + value.quotes.USD.price + "</td></tr>");
  });
});
