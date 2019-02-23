// JavaScript Document 最新消息
	$(function(){
		//mobile classLink
		var $clone = $('ul.classLink').clone().removeClass('classLink'),
			  $current_txt = $('ul.classLink').find('.current').text();
		var $flag = true;
		$('ul.classLink').after('<div class="m_classLink"><a class="main"><b></b><i class="fa fa-angle-down"></i></a></div>');
		$('.m_classLink').append($clone).end().find('a.main b').text($current_txt);
		$('.m_classLink').find('a.main').on("click",function(){
			if($flag){
				$(this).next('ul').stop().slideDown(200);
				$(this).find('i').removeClass('fa fa-angle-down').addClass('fa fa-angle-up');
				$flag = false;
			}
			else{
				$(this).next('ul').stop().slideUp(200);
				$(this).find('i').removeClass('fa fa-angle-up').addClass('fa fa-angle-down');
				$flag = true;
			}
		})
	});


// JavaScript Document 廠商查詢
	$(function(){
		//mobile classLink
		var $clone = $('ul.classLink02').clone().removeClass('classLink02'),
			  $current_txt = $('ul.classLink02').find('.current02').text();
		var $flag = true;
		$('ul.classLink02').after('<div class="m_classLink02"><a class="main02"><b></b><i class="fa fa-angle-down"></i></a></div>');
		$('.m_classLink02').append($clone).end().find('a.main02 b').text($current_txt);
		$('.m_classLink02').find('a.main02').on("click",function(){
			if($flag){
				$(this).next('ul').stop().slideDown(200);
				$(this).find('i').removeClass('fa fa-angle-down').addClass('fa fa-angle-up');
				$flag = false;
			}
			else{
				$(this).next('ul').stop().slideUp(200);
				$(this).find('i').removeClass('fa fa-angle-up').addClass('fa fa-angle-down');
				$flag = true;
			}
		})
	});

// JavaScript Document 媒體中心
	$(function(){
		//mobile classLink
		var $clone = $('ul.classLink03').clone().removeClass('classLink03'),
			  $current_txt = $('ul.classLink03').find('.current03').text();
		var $flag = true;
		$('ul.classLink03').after('<div class="m_classLink03"><a class="main03"><b></b><i class="fa fa-angle-down"></i></a></div>');
		$('.m_classLink03').append($clone).end().find('a.main03 b').text($current_txt);
		$('.m_classLink03').find('a.main03').on("click",function(){
			if($flag){
				$(this).next('ul').stop().slideDown(200);
				$(this).find('i').removeClass('fa fa-angle-down').addClass('fa fa-angle-up');
				$flag = false;
			}
			else{
				$(this).next('ul').stop().slideUp(200);
				$(this).find('i').removeClass('fa fa-angle-up').addClass('fa fa-angle-down');
				$flag = true;
			}
		})
	});


// JavaScript Document 展覽資訊
	$(function(){
		//mobile classLink
		var $clone = $('ul.classLink04').clone().removeClass('classLink04'),
			  $current_txt = $('ul.classLink04').find('.current04').text();
		var $flag = true;
		$('ul.classLink04').after('<div class="m_classLink04"><a class="main04"><b></b><i class="fa fa-angle-down"></i></a></div>');
		$('.m_classLink04').append($clone).end().find('a.main04 b').text($current_txt);
		$('.m_classLink04').find('a.main04').on("click",function(){
			if($flag){
				$(this).next('ul').stop().slideDown(200);
				$(this).find('i').removeClass('fa fa-angle-down').addClass('fa fa-angle-up');
				$flag = false;
			}
			else{
				$(this).next('ul').stop().slideUp(200);
				$(this).find('i').removeClass('fa fa-angle-up').addClass('fa fa-angle-down');
				$flag = true;
			}
		})
	});