
const bittrex = require('./node_modules/node.bittrex.api');
const APIKEY = '8a6842e98ec248efa294884916c84ab7';
const APISECRET = '239c0d4546874f4dafd7a1f992a87d5f';

bittrex.options({
  'apikey' : APIKEY,
  'apisecret' : APISECRET,
  'stream' : false,
  'verbose' : false,
  'cleartext' : false
});

/**
 *  sendCustomRequest example
 */
bittrex.sendCustomRequest( 'https://bittrex.com/api/v1.1/public/getmarketsummary?market=btc-ltc', function( data ) {
  console.log( data );
}, true);

/**
 *  getmarkethistory example
 */
bittrex.getmarkethistory( { market : 'BTC-LTC' }, function( data ) {
  console.log( data.result );
});

/**
 *  getorderbook example
 */
/* bittrex.getorderbook( { market : 'BTC-PIVX', depth : 10, type : 'both' }, function( data ) {

    data.result.buy.forEach(function(dataset) { console.log(dataset); });
    data.result.sell.forEach(function(dataset) { console.log(dataset); });
}); */
