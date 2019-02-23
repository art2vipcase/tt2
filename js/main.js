// JavaScript Document
//手機主選單
$(document).ready(function(){
	$('#menu').slicknav();
});

//購物車
$(document).ready(function() {
	$('[id="left-menu"]').each(function(idx,obj){
		$(obj).sidr({
		  name: 'sidr-left',
		  side: 'left' // By default
		});
	});

    $('#left-menu2').sidr({
      name: 'sidr-left',
      side: 'left' // By default
    });

    $('#right-menu').sidr({
      name: 'sidr-right',
      side: 'right'
    });
});


//faq
$(function(){
		// 幫 div.qa_title 加上 hover 及 click 事件
		// 同時把兄弟元素 div.qa_content 隱藏起來
		$('#qaContent ul.accordionPart li div.qa_title').hover(function(){
			$(this).addClass('qa_title_on');
		}, function(){
			$(this).removeClass('qa_title_on');
		}).click(function(){
			// 當點到標題時，若答案是隱藏時則顯示它；反之則隱藏
			$(this).next('div.qa_content').slideToggle();
		}).siblings('div.qa_content').hide();
		// 全部展開
		$('#qaContent .qa_showall').click(function(){
			$('#qaContent ul.accordionPart li div.qa_content').slideDown();
			return false;
		});
		// 全部隱藏
		$('#qaContent .qa_hideall').click(function(){
			$('#qaContent ul.accordionPart li div.qa_content').slideUp();
			return false;
		});
		// 關閉
		$('#qaContent .close_qa').click(function(){
			$(this).parents('.qa_content').prev().click();
			return false;
		});
	});