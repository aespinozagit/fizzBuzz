$(document).ready(function(){

	fizzBuzz();

	

    function fizzBuzz() {
    	var number = prompt("Input number:");
        var n = parseInt(number);
        	for (var numb = 1; numb <= n; numb++) {
				if (numb % 15 === 0){
		 			$('ul').append('<li>FizzBuzz</li>');
        		}
    			else if (numb % 3 === 0){
        			$('ul').append('<li>Fizz</li>');
    			}
    			else if (numb % 5 === 0){
        			$('ul').append('<li>Buzz</li>');
    			}
    			else{
					$('ul').append('<li>' + numb + '</li>');
				}
			}
    	}
});