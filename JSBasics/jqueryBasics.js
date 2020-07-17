// list demo through the vehicle


//  find, remove, is.. etc function demo

$(function(){
	$('li[id="land-vehicle"] ol li').on("click", function(){
		if($(this).is('.special') || $(this).is(".bike")){
			$(this).addClass("awesome");
		}
		else{
			$(this).addClass("special");
		}
	});
});

// $(function(){
// 	$('li[id="land-vehicle"]').on("click", function(){
// 		console.log($(this));
// 		if($(this).is('.special')){
// 			alert("Good Choice");
// 		}
// 		else{
// 			alert("Not Bad");
// 		}
// 	});
// }); 

// color toggle logic same

// $(function(){
// 	$('li').on("click", function(){
// 		$(this).siblings().css({'background':'lightgrey', color: 'black'});
// 		$(this).css({background: 'white', color:'red'});
// 	});
// });





// button paragraph relation demo

$(function(){
	$("[name='par-button']").on("mouseenter", toggle);	
	$("[name='par-button']").on("mouseleave", toggle);	

});
function toggle(){
	var parId = $(this).attr("data-p"); 
	$("#"+parId).slideToggle(400);
}



// Showing and Hideing Parts :
// .show(); .hide(); .toggle(); .delay();
// .slideUp(); .slideDown(); .slideToggle();
// .fadeIn(); .fadeOut(); . fadeToggle();
// .css({color: 'red', 'font-weight': bold; fontSize: 40px;});

// the number inside the parenthesis determines the time to take the action


$(function(){
	$("#panel4").css({opacity: 0.2});
	$("#panel3").css({opacity:'0.5'});

	// $("#panel4").css({fontSize: '40px', color: 'red', 'font-weight': 'bold' });
});






// Jquery for versioin 2

$(function(){
	$("#jqueryV2 [name='panel-button']").on("click", function(){
		var panelId = $(this).attr("data-panelId");
		$("#"+panelId).toggle();
	});
});







// jquery for version 1 

// $(function(){
// 	$("#jqueryV1 #btn1").on("click", function(){
// 		$("p").html("<h3>This time is very important for the life changing moment</h3>");
// 		$("#panel1 .panel-heading").html("<h1>New heading</h1>");
// 		$("#panel1 .panel-body").html("New Panel of this content");
// 		$("#btn1").html("Button1<sub>(hide)</sub>");	
// 	});
// });

$(function(){
	$("#jqueryV1 #btn1").on("mouseenter", function(){
		$("#jqueryV1 #panel1").fadeOut(400);
	});
	$("#jqueryV1 #btn1").on("mouseleave", function(){
		$("#jqueryV1 #panel1").fadeIn(400);
	});
	$("#jqueryV1 #btn2").on("mouseenter", function(){
		$("#jqueryV1 #panel2").fadeOut(400);
	});
	$("#jqueryV1 #btn2").on("mouseleave", function(){
		$("#jqueryV1 #panel2").fadeIn(400);
	});
	$("#jqueryV1 #btn3").on("mouseenter", function(){
		$("#jqueryV1 #panel3").fadeOut(400);
	});
	$("#jqueryV1 #btn3").on("mouseleave", function(){
		$("#jqueryV1 #panel3").fadeIn(400);
	});
	$("#jqueryV1 #btn4").on("mouseenter", function(){
		$("#jqueryV1 #panel4").fadeOut(400);
	});
	$("#jqueryV1 #btn4").on("mouseleave", function(){
		$("#jqueryV1 #panel4").fadeIn(400);
	});

});