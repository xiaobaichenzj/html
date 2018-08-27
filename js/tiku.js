setInterval(function(){
				num++;
//				console.log(num);
				if(num>2) {
					num=0;
				}
				if(num==0){
					
					$('.t_change').children().eq(0).text('1/3')
					$('.authorize-wrapper').animate({'left':'15px'})	
				}else{
					$('.t_change').children().eq(0).text(num+1+'/3')
					$('.authorize-wrapper').animate({'left':-726*num})
				}
			},1000)
			
			$('.center li').hover(function(){
				$(this).children('.box-hover').show()
				$(this).children('.center-box').css('border-color','darkgray');
				
			},function(){
				$(this).children('.box-hover').hide()
				$(this).children('.center-box').css('border-color','#f0f0f0');
			})
			
			$('.hide li').hover(function(){
				if($(this).index()!=2){
					$(this).children('.menu-hide').show()
					$(this).children('.menu').children().eq(1).removeClass('label');
				}
				
//				$(this).siblings().children('.menu').children('.label').attr('class','label');
			},function(){
				if($(this).index()!=2){
					$(this).children('.menu-hide').hide();
					$(this).children('.menu').children().eq(1).addClass('label');
				}
				
//				$('.hide li').children('.menu').children('.label').attr('class','label');
			})