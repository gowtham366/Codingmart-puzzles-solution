$(document).ready(function(){
	var tmp=0,res=0,count=0,f1=0,f2=0,f3=0,f4=0;
		$("#total").blur(function(){
			var total=$("#total").val();
			$("#f1").focus(function(){
						f1=$("#f1").val();
						count++;
						
						console.log(count);
					});

					$("#f2").focus(function(){
						f2=$("#f2").val();
						count++;
						console.log(count);
					});

					$("#f3").focus(function(){
						f3=$("#f3").val();
						count++;
						console.log(count);
					});

					$("#f4").focus(function(){
						f4=$("#f4").val();
						count++;
						console.log(count);
					});
			setInterval(function(){
				if(total!=""){

					if(count==3){
						alert(count);
						count--;
					}
				}
				//alert(total);		
				else{
					total=$("#total").val();
				}

			},1000);//interval

		});
		
});//document