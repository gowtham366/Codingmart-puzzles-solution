$(document).ready(function(){
var player=true;
	var dice=$(".dice");
	var mpoint=0,zpoint=0,point=0;
	var man=$('#man');
	var zombi=$('#zombi');
	
	dice.click(function(){
		if(player==true)
		{
			move(man);
			player=false;
		}
		else
		{
			move(zombi);
			player=true;
		}
		$('#num').text(point);
	});
	function move(name)
	{
		var move=parseInt(name.css('left'));
			point=roll();
			if(name==man)
			{
				trn="Zombi's turn!!!";
			 source="img/man.png";
			 dest="img/man.gif";
			mpoint+=point;	
			console.log("mpoint :"+mpoint);
			}
			else
			{
				trn="Your turn!!!";
			source="img/zombi.png";
			 dest="img/zombi.gif";
			zpoint+=point;	
			console.log("zpoint :"+zpoint);
			}
			move+=20*point;
			var str=String(name);
			//alert(name);
			
			name.attr("src",dest);
			console.log(name.attr('src'));
			
			name.animate({left : move},3000,function(){
				name.attr("src",source);
				$(".turn").text(trn);
			
			});
			
			chck();
			
	}
	function roll()
	{
		var point=Math.floor(Math.random()*6+1);
		return point;
	}
	var panel=$(".panel");
	function chck()
	{	

		console.log("man offset :"+panel.offset().left);
		if(zpoint>mpoint)
		{

		   console.log(man.offset().left);
			var re=$('#ovr');
			re.show(500);
			dice.hide(600);
			re.click(function(){
				location.reload();
			});
			
		}
		if(parseInt(man.css('left'))>=800){
			$('#own').show(500);
			$('#own').click(function(){
				location.reload();	
			});
		}
	}
});