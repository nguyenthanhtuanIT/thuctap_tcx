$(document).ready(function() {
	$(window).bind('scroll',function(){
		var pos = window.scrollY;
		 if(pos < 550 ){
			$("#l-home").addClass("active-itemmenu");
		}else{
			$("#l-home").removeClass("active-itemmenu");
		}
		if(pos >= 550 && pos < 850){
			$("#l-features").addClass("active-itemmenu");
		}else{
			$("#l-features").removeClass("active-itemmenu");
		}
		if(pos >= 850 && pos < 1250){
			$("#l-gallery").addClass("active-itemmenu");
		}else{
			$("#l-gallery").removeClass("active-itemmenu");
		}
		if(pos >= 1250 && pos < 1850){
			$("#l-video").addClass("active-itemmenu");
		}else{
			$("#l-video").removeClass("active-itemmenu");
		}
		if(pos >= 1250 && pos < 1850){
			$("#l-video").addClass("active-itemmenu");
		}else{
			$("#l-video").removeClass("active-itemmenu");
		}
		if(pos >= 1850 && pos < 2400){
			$("#l-prices").addClass("active-itemmenu");
		}else{
			$("#l-prices").removeClass("active-itemmenu");
		}
		if(pos >= 2400 && pos < 2720){
			$("#l-testi").addClass("active-itemmenu");
		}else{
			$("#l-testi").removeClass("active-itemmenu");
		}
		if(pos >= 2720 && pos < 2850){
			$("#l-download").addClass("active-itemmenu");
		}else{
			$("#l-download").removeClass("active-itemmenu");
		}
		if(pos >= 2850){
			$("#l-contact").addClass("active-itemmenu");
		}else{
			$("#l-contact").removeClass("active-itemmenu");
		}
	});
});