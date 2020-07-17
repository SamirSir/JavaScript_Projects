
// finction that demonstrate the slideUp/slideDown of panel
$(function(){
	$(".tab-panels .tabs li").on("click", function(){
		
		var mainTab = $(this).closest(".tab-panels");

		$(mainTab).find(".tabs li.active").removeClass("active");
		$(this).addClass("active");
		var panelId = $(this).attr("rel");
		var panel = $("#"+panelId);

		$(mainTab).find('.panel.active').slideUp(300, function(){
			$(this).removeClass('active');
			$(panel).slideDown(300, function(){
				$(this).addClass("active");
			});
		});
		
	});
});   