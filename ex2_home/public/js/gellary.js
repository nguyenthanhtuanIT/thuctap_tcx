$(document).ready(function() {
	$("#img-small1").mousemove(function(){
		$("#img-hover1").addClass("show-hover");
	});
	$("#img-small1").mouseout(function(){
		$("#img-hover1").removeClass("show-hover");
	});

	$("#img-small2").mousemove(function(){
		$("#img-hover2").addClass("show-hover");
	});
	$("#img-small2").mouseout(function(){
		$("#img-hover2").removeClass("show-hover");
	});

	$("#img-small3").mousemove(function(){
		$("#img-hover3").addClass("show-hover");
	});
	$("#img-small3").mouseout(function(){
		$("#img-hover3").removeClass("show-hover");
	});

	$("#img-small4").mousemove(function(){
		$("#img-hover4").addClass("show-hover");
	});
	$("#img-small4").mouseout(function(){
		$("#img-hover4").removeClass("show-hover");
	});
});