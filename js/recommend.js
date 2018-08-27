/*
* @Author: admin
* @Date:   2018-06-28 15:37:58
* @Last Modified by:   admin
* @Last Modified time: 2018-06-28 15:56:10
*/
var index = 0;
		var botIndex = 0;
		var timer;
		var border_width = $(window).width();
		function go(){
			index++;
			botIndex = index;
			if(botIndex == 3)botIndex = 0;
			if(botIndex == 4)botIndex = 1;
			
			$('#buttons').children().removeClass('current')
			$('#buttons').children().eq(botIndex).addClass('current');

			if(index == 4){
				$('#wrap').css('left', 0)
				index = 1
			}
			$('#wrap').stop().animate({left: -border_width*index}, 1000)
		}

		function prep(){
			if(index == 0){
				index = 3;
				$('#wrap').css('left', -border_width*3)
			}
				
			$('#wrap').stop().animate({left: -border_width*(--index)}, 1000)

			botIndex = index;
			if(botIndex == 3)botIndex = 0;
			if(botIndex == 4)botIndex = 1;
			
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
		 '#fefbec');
	
	$('#wrap').children('li').eq(1).css('background',
		 '#7715ff');

	$('#wrap').children('li').eq(2).css('background',
		 '#1c2d61');

	$('#wrap').children('li').eq(3).css('background',
		 '#fefbec');
})
	$('.gotop').click(function(event) {
			$('html,body').stop().animate({'scrollTop':$('html').offset().top}, 1000)
		});
	$('.code-close').click(function(event) {
		$('.phone-code').css('display', 'none');
	});