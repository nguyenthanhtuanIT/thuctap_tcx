
$(document).ready(function() {
	var numb=0;
	var start = $(".slide-img:first").attr("numb");//lay gia tri dau cua attr numb
	var end = $(".slide-img:last").attr("numb");//lay gia tri cuoi cung cua attr numb

	$(".slide-img").each(function() {
		if($(this).is(':visible')){
			numb = $(this).attr("numb");
		}
	});
	$("#next").click(function(){
		if(numb >= end){
			numb = 0;
		}else{
			numb ++;
		}
		$(".slide-img").hide();
		$(".slide-img").eq(numb).show();
		$(".list-item").removeClass("active");
		$(".list-item").eq(numb).addClass("active");
	});
	$("#prev").click(function(){
		if(numb <= start)
		{
			numb = end;
		}else{
			numb--;
		}
		$(".slide-img").hide();
		$(".slide-img").eq(numb).show();
		$(".list-item").removeClass("active");
		$(".list-item").eq(numb).addClass("active");
	});
	var count=0;
	$(".list-item").click(function(){
		count = $(this).attr("numb");
		$(".slide-img").hide();
		$(".slide-img").eq(count).show();
		$(".list-item").removeClass("active");
		$(".list-item").eq(count).addClass("active");
	});
	let off = $("#features").offset().top();
	alert(off);
});﻿