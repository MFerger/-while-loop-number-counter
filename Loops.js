//while - loops through a block of code while a specified condition is true
//for - loops through a block of code a number of times
//do/while - also loops through a block of code while a specified condition is true
//for/in - loops through the properties of an object

//---------------------------------------------------------------------------------------------------------------------------
//The while loop continues as long as the condition evaluates to true. When it evaluates to false, the loop stops.
var condition = true;
while(condition)
{
    console.log("While loops are great!");
    condition = false;
}

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

//---------------------------------------------------------------------------------------------------------------------------
//The for loop continues through a block of code for a set amount of times.
for (statement 1; statement 2; statement 3) {
    code block to be executed
}
//Statement 1 is executed before the loop (the code block) starts.
//Statement 2 defines the condition for running the loop (the code block).
//Statement 3 is executed each time after the loop (the code block) has been executed.

//example
for (var counter = 1; counter < 11; counter++) {
	console.log(counter);
}

//---------------------------------------------------------------------------------------------------------------------------
//For looping at least once, use a do loop. Run the code once and then go back to a while loop and continue if its true.
do {
    code block to be executed
}
while (condition);

//example
//set a condition to true outside of the function
var otherVar = true;
var getToDaChoppa = function(){
  do {
      console.log("This will work because it is " + otherVar +  ".");
      //set it false once it executed 
      otherVar = false;
  } while(otherVar);
};
getToDaChoppa();

//---------------------------------------------------------------------------------------------------------------------------
//For-in loops 
