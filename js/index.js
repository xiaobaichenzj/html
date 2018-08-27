/*
* @Author: Administrator
* @Date:   2018-06-26 23:49:28
* @Last Modified by:   江少
* @Last Modified time: 2018-06-27 23:16:18
*/
		$('.ft-item1').hover(function() {
			$('.img-tip').css('display', 'block');
		}, function() {
			$('.img-tip').css('display', 'none');
		});
		// 侧边栏
		$(window).scroll(function(event) {
			if($(window).scrollTop()>250){
				$('.home-mod-nav').css('display', 'block');
			}else{
				$('.home-mod-nav').css('display', 'none');
			}
			
			if ($(window).scrollTop()>=$('#con4').offset().top-55) {
				$('.home-mod-nav .hmn-item').eq(3).addClass('current-tip4')
				$('.home-mod-nav .hmn-item').eq(3).siblings('.hmn-item').removeClass('current-tip1 current-tip2 current-tip3')
			}else if($(window).scrollTop()>=$('#con3').offset().top-55) {
				$('.home-mod-nav .hmn-item').eq(2).addClass('current-tip3')
				$('.home-mod-nav .hmn-item').eq(2).siblings('.hmn-item').removeClass('current-tip1 current-tip2 current-tip4')
			}else if($(window).scrollTop()>=$('#con2').offset().top-55) {
				$('.home-mod-nav .hmn-item').eq(1).addClass('current-tip2')
				$('.home-mod-nav .hmn-item').eq(1).siblings('.hmn-item').removeClass('current-tip1 current-tip3 current-tip4')
			}else if($(window).scrollTop()>=$('#con1').offset().top-55) {
				$('.home-mod-nav .hmn-item').eq(0).addClass('current-tip1')
				$('.home-mod-nav .hmn-item').eq(0).siblings('.hmn-item').removeClass('current-tip2 current-tip3 current-tip4')
			}else{
				$('.home-mod-nav .hmn-item').removeClass('current-tip');
			}	
		});

		$('.home-mod-nav a').eq(0).click(function(event) {
			$('html,body').animate({'scrollTop':$('#con1').offset().top-$('nav').height()}, 1000)
		});$('.home-mod-nav .hmn-item').eq(1).click(function(event) {
			$('html,body').animate({'scrollTop':$('#con2').offset().top-$('nav').height()}, 1000)
		});$('.home-mod-nav .hmn-item').eq(2).click(function(event) {
			$('html,body').animate({'scrollTop':$('#con3').offset().top-$('nav').height()}, 1000)
		});$('.home-mod-nav .hmn-item').eq(3).click(function(event) {
			$('html,body').animate({'scrollTop':$('#con4').offset().top-$('nav').height()}, 1000)
		});
		// 轮播图
		var index = 0;
		var botIndex = 0;
		var timer;
		var border_width = $(window).width();
		function go(){
			index++;
			botIndex = index;
			if(botIndex == 6)botIndex = 0;
			if(botIndex == 7)botIndex = 1;
			
			$('#buttons').children().removeClass('current')
			$('#buttons').children().eq(botIndex).addClass('current');

			if(index == 7){
				$('#wrap').css('left', 0)
				index = 1
			}
			$('#wrap').stop().animate({left: -border_width*index}, 1000)
		}

		function prep(){
			if(index == 0){
				index = 6;
				$('#wrap').css('left', -border_width*6)
			}
				
			$('#wrap').stop().animate({left: -border_width*(--index)}, 1000)

			botIndex = index;
			if(botIndex == 6)botIndex = 0;
			if(botIndex == 7)botIndex = 1;
			
			$('#buttons').children().removeClass('current')
			$('#buttons').children().eq(botIndex).addClass('current');
		}

		timer = setInterval("go()",2000);

		$('#container').mouseover(function(event) {
			clearInterval(timer)
		})

		$('#container').mouseleave(function(event) {
			timer = setInterval("go()",2000);
		})
		
		$('#right').click(function(event) {
			clearInterval(timer)
			setTimeout("go()",100)
		});

		$('#left').click(function(event) {
			clearInterval(timer)
			setTimeout("prep()",100)
		});

		$('#buttons li').click(function() {
			$('#buttons').children().removeClass('current')
			$('#buttons').children().eq($(this).index()).addClass('current')

			index = $(this).index()
			$('#wrap').stop().animate({left: -border_width*index}, 100)
		});
$(function(){
	// 获取屏幕宽度并设置li
	$('#wrap').children('li').css('width', 
		$(window).width());
	
	// 设置图片margin-left
	$('#wrap').children('li').children('img').css('margin-left',
	 ($(window).width()-960)/2);

	$('#wrap').children('li').eq(0).css('background',
		 '#1577e4');
	
	$('#wrap').children('li').eq(1).css('background',
		 '#25215e');

	$('#wrap').children('li').eq(2).css('background',
		 '#475059');

	$('#wrap').children('li').eq(3).css('background',
		 '#f9cd30');

	$('#wrap').children('li').eq(4).css('background',
		 '#87c8fe');

	$('#wrap').children('li').eq(5).css('background',
		 '#fefbc4');

	$('#wrap').children('li').eq(6).css('background',
		 '#1577e4');
})