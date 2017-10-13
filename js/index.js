$(window).on('load',function(){
		//隔行变色
		$('table tr:nth-child(odd) ').css('background','#fff');

		//解决input type=radio 取消选中
		$(':radio').attr('tag',0);
		$(':radio').attr('checked',false);
		$(':radio').click(function(){
			var nn = 0;  // 记录全选是否被选中
			if($('#allSelect').attr('tag')==1)
				nn = 1;

			if($(this).attr('tag') == 1){
				$(this).attr('checked',false);
				$(this).attr('tag',0);
			}else{
				$(this).attr('tag',1);
			}
			var allS = $('.select');
			allS.each(function(index){
				if((allS.eq(index).attr('tag')==0) && nn==1) {
					$('#allSelect').attr('checked',false);
					$('#allSelect').attr('tag',0);
				}
			});
		})

		//点击全选就全选中
		$('#allSelect').click(function(){
			if($(this).attr('checked')){    //当它被选中时
				$(':radio').attr('checked',true);
				$(':radio').attr('tag',1);
			} 
		});

		//鼠标放上有大图标
		$('table img').mouseover(function(e){
			var srcImg = $(this).attr('src');
			console.log(srcImg);
			$('#imgTop').attr('src',srcImg)
			$('#imgTop').css({
								'display':'block',
								'top':e.pageY+'px',
								'left':e.pageX+'px',
							});
		});
		$('table img').mouseout(function(){
			$('#imgTop').css('display','none');
		});


		//删除
		$('button').click(function(){
			var trList = $('table tr input:checked');//获取选中的
			console.log(trList)
			trList.each(function(index){
				$(trList.eq(index)).parent().parent().remove();
				
				
			})
		})
		
	})