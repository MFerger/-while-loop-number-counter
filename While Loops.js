//The while loop continues as long as the condition evaluates to true. When it evaluates to false, the loop stops.

// set count variable to a number
var count = 0;

// create while loop stating the condition is true if the count is less than 3
var loop = function(){
	while(count < 3){
		console.log("I'm looping!");
		//adding +1 until the condition is false
		count++;        
	}
};
loop();
