			var num = 0;
			$('header ul li').mouseenter(function(){
				$(this).css({'border':'1px solid #00bc9b','border-width':'0px 0px 2px 0px'});
				$(this).siblings().css({'border':'1px solid white','border-width':'0px 0px 2px 0px'});
				$(this).siblings().children('a').css({'color':'#333'});
				$(this).children('a').css({'color':'#00bc9b'});
			})
			$('header ul li').mouseleave(function(){
				$(this).children('a').css({'color':'#333'});
			})