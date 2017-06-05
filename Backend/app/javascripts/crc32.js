function IDGenerator() {
	 
		 this.length = 8;
		 this.timestamp = +new Date;
		 
		 var _getRandomInt = function( min, max ) {
			return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
		 }
		 
		 this.generate = function() {
			 var ts = this.timestamp.toString();
			 var parts = ts.split( "" ).reverse();
			 var id = "";
			 
			 for( var i = 0; i < this.length; ++i ) {
				var index = _getRandomInt( 0, parts.length - 1 );
				id += parts[index];	 
			 }
			 
			 return id;
		 }

		 
	 }
	 
var ALPHABET = 'KaushikBandyopadhyay8145644410BBYPB7799B';

var ID_LENGTH = 6;

var generate = function() {
  var rtn = '';
  var ran = Math.random();
  for (var i = 0; i < ID_LENGTH; i++) {
    rtn += ALPHABET.charAt(Math.floor(ran * ALPHABET.length));
    
  }
  return rtn;
}


////////////////////////////////////////////////////////////////


var UNIQUE_RETRIES = 9999;

var generateUnique = function(previous) {
  previous = previous || [];
  var retries = 0;
  var id;

  // Try to generate a unique ID,
  // i.e. one that isn't in the previous.
  while(!id && retries < UNIQUE_RETRIES) {
    id = generate();
    if(previous.indexOf(id) !== -1) {
      id = null;
      retries++;
    }
  }

  return id;
};