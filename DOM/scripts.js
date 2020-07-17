





// javascript events:

// Some events:
// click, mouseenter, mouseleave, mousemove, mouseup, mousedown, keydown, keyup, focus, blur, etc

// knowledge
// var picClass = this.attributes["class"].value;
// var picClass = this.attributes.class.value;


// events for addition in div2

var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var sum = document.getElementById("sum");

num1.addEventListener("input", add);
num2.addEventListener("input", add);

function add(){
	var n1 = parseFloat(num1.value)||0;
	var n2 = parseFloat(num2.value)||0;
	
	sum.innerHTML ="Sum: "+(n1+ n2);
}
function focus(node){
	console.log("focus event triggred at", node);
}



// demo

// var num1 = document.getElementById("num1");
// // var num1 = document.getElementsByName("number1")[0];

// num1.addEventListener("click", 
// 	function(){
// 		console.log("click event triggred");
// 	});
// num1.addEventListener("focus", 
// 	function(){
// 		console.log("focus event triggred");
// });


// num1.addEventListener("blur", 
// 	function(){
// 		console.log("blur event triggered.");
// 	}
// );
// num1.addEventListener("mouseDown", function(){
// 	console.log("mouseDown event triggered");
// });



// event always seeks for the specific single node 
// var intro = document.getElementsByTagName('div');
// for(var i=0; i<intro.length; i++){
// 	intro[i].addEventListener("click", click);
// }

// function click(argument) {
// 	console.log("Click event triggred!");
// }


// image/paragraph/.. hide and show action using DOM concept


// camera.addEventListener("mouseenter", function(){
// 	if(camerapic.className == "hide"){
// 		camerapic.classList = "";
// 	}
// });
// camera.addEventListener("mouseleave", function(){
// 	if(camerapic.className == ""){
// 		camerapic.classList = "hide";
// 	}
// });



// not a DRY code:

// var car = document.getElementById("car");
// var camera = document.getElementById("camera");
// var carpic = document.getElementById("car-pic");
// var camerapic = document.getElementById("camera-pic");

// car.addEventListener("click", function(){
// 	if (carpic.className == "hide"){
// 		carpic.className = "";
// 	}
// 	else{
// 		carpic.className = "hide";
// 	}
// });

// camera.addEventListener("click", function(){
// 	if(camerapic.className == "hide"){
// 		camerapic.classList = "";
// 	}
// 	else{
// 		camerapic.className = "hide";
// 	}
// });


// my best js event
// optimized code: DRY code
// manual code removal; DRY concept /optimal code

var car = document.getElementById("car");
var camera = document.getElementById("camera");

car.addEventListener("click", piclink);
camera.addEventListener("click", piclink);

function piclink(){
	var picId = this.attributes["data-img"].value;
	var pic = document.getElementById(picId);
	var images = document.querySelectorAll("img");

	for (var i=0; i<images.length; i++){
		if (images[i] == pic){
			if(pic["attributes"]["class"].value == "hide"){
				pic.className = "";
			}
			else{
				pic.classList = "hide";
			}
		}
		else{
			images[i].className = "hide";
		}
	}
	
}


// list implementation for above display-hide  car/camera sode
// not worked

// paragraph
// image/text/... appear and disappear  

// var apple = document.getElementById("apple");
// var ban = document.getElementById("banana");

// apple.addEventListener("click", togglePrgph);
// ban.addEventListener("mouseleave", togglePrgph);
// ban.addEventListener("mouseenter", togglePrgph);	

// function togglePrgph(){
// 	var pId = this.attributes["data-p"].value;
// 	var prgph = document.getElementById(pId);
// 	if (prgph.className == "hide"){
// 		prgph.className ="";
// 	}
// 	else{
// 		prgph.classList ="hide";
// 	}
// }



// paragraph hide-show demo

var title = document.getElementsByName("jsEvent");
var paragraph = document.getElementById("paragraph");
title[0].addEventListener("click", function(){
	if(paragraph.className == "hide"){
		title[0].innerHTML = '<a href="#">Javascript Events </a> (hide paragraph)';
		paragraph.className	= "";
	}
	else{
		paragraph.className = "hide";
		title[0].innerHTML = '<a href="#">Javascript Events </a> (show paragraph)';
	}
});


// 	Problem statement: 
//  I have the span for naming the fruit and input tag for inputting the name
//	Now, I have to make input tag appear when i click the value in span tag
//	And the text typed in the input tag is displayed in the span tag after some js Event(mouse event) 


// Manual method for each task: 
//  Not DRY code: 
// Method 1:

// var name1 = document.getElementById("apple");
// var name1Inp = document.getElementById("apple-inp")
// name1.addEventListener("click", function(){
// 		name1Inp.className = "";
// 		name1.className = "hide";
// });

// name1Inp.addEventListener("mouseleave", function(){
// 	name1.innerHTML = name1Inp.value;
// 	name1Inp.className = "hide";
// 	name1.className = "";
// });


// Dry code as far of my ability: 
// Method 2:
// fetching data from each span :  
var fruits = document.getElementsByName("fruits");

// fetching list from each input tag
var fruitInp = document.getElementsByName("fruit-input");

for(var i=0; i<fruits.length; i++){
	// adding click event on each span/ fruit name : 
	fruits[i].addEventListener("click",to_input);
	// setting renaming function as typed in input box
	fruitInp[i].addEventListener("blur",to_text);
}

function to_input(){
	var fruitInpId =this.attributes["data-input"].value;
	var fruitInp = document.getElementById(fruitInpId);
	fruitInp.className = "";
	this.className = "hide";
	fruitInp.focus();
	fruitInp.setSelectionRange(0, fruitInp.value.length);
}
function to_text(){
	var fruitId = this.attributes["data-span"].value;
	var fruit = document.getElementById(fruitId);
	fruit.innerHTML = this.value;
	fruit.className = "";
	this.className = "hide";
}


// Method 3 => Sports 
// generally this method is effective

var sports = document.querySelectorAll("ol#sports li");
for (var i=0; i<sports.length; i++){
	var sportName = sports[i].querySelector("span");
	var editSportName = sports[i].querySelector("input");

	sportName.addEventListener("click", display_input);
	editSportName.addEventListener("blur", changeSportName);
	editSportName.addEventListener("keypress", enter);
}

function display_input(){
	this.parentElement.className = "edit";
	this.parentElement.children[1].focus();
	this.parentElement.children[1].setSelectionRange(0, this.parentElement.children[0].innerText.length);
}
function changeSportName(){
	this.parentElement.children[0].innerHTML = this.value;
	this.parentElement.className = "";
}
function enter(event){ 
	if (event.which == 13){
		changeSportName.call(this);
	} 
}


// Method 4
// method from  youtube similar to above
var cultural_heritages = document.getElementById("culturalHeritages");
var heritages = cultural_heritages.querySelectorAll("li");
var cul_inputs = cultural_heritages.querySelectorAll("input");

for(var i=0; i<heritages.length; i++){
	heritages[i].addEventListener("click", editCHName);
	cul_inputs[i].addEventListener("blur", updateCHName);
	cul_inputs[i].addEventListener("keypress", CHKeypress);
}

function editCHName(){
	this.className = "edit"; 
	var inp = this.querySelector("input");
	inp.focus();
	inp.setSelectionRange(0, inp.value.length);
} 
function updateCHName(){
	this.previousElementSibling.innerHTML = this.value;
	this.parentElement.className = "";
}
function CHKeypress(event){
	if (event.which == 13 ){
		updateCHName.call(this);
	}
}
