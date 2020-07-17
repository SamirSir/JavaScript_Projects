



// while loop in js
// while loop runs until the condition is true

// var times = 0;

// while(times<1){
// 	console.log("I tried",times,  "times");
// 	times ++;
// }



// loop to check the  ascii character form the digit
// for (var i=33; i<=133; i++){
// 	console.log(i+ " : "+String.fromCharCode(i));
// }


// function that converts string having upper case into lower case:

// function lower_to(name){
// 	console.log(name);
// 	var n = name.length;
// 	var ch ="";
// 	var str ="";
// 	for (var i=0; i<n; i++) {
// 		if (name.charCodeAt(i)>=65 && name.charCodeAt(i)<=90) {
// 			ch = String.fromCharCode(name.charCodeAt(i)+32);
// 		}	
// 		else{
// 			ch = String.fromCharCode(name.charCodeAt(i));
// 		}
// 		str += ch; 
// 	}
// 	console.log(str);
// }

// var name = prompt("Enter your name ?");
// lower_to(name);


// function that converts string having lower case into upper case:

// function upper_to(name){
// 	console.log(name);
// 	var n = name.length;
// 	var ch = "";
// 	var str = "";
// 	for(var i=0; i<n; i++){
// 		if(name.charCodeAt(i)>=97 & name.charCodeAt(i)<=122){
// 			ch = String.fromCharCode(name.charCodeAt(i)-32)
// 		}
// 		else{
// 			ch = String.fromCharCode(name.charCodeAt(i));
// 		}
// 		str += ch;
// 	}
// 	console.log(str);
// }

// var nam = prompt("Enter your name ?");
// upper_to(nam);


// Basics of prompt and confirmation  box
// 	var name = prompt("What is your name? ");
// 	if (name == ""){
// 		alert("Please supply some name.");
// 	}
// 	else if (name == "samir")
// 		alert("You are going to rock... someday");
	
// 	else
// 		alert("Hello"+name);
// }

// reaction();