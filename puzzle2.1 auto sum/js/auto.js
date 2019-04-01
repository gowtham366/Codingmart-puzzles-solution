$(document).ready(function(){
	var tmp,res=0,count=0,f1=0,f2=0,f3=0,f4=0;
	alert("Fill the total first!!!");
		$("#total").blur(function(){
			var total=$("#total").val();
			
			$("#f1").focus(function(){
						count++;
						console.log(count);
					});

					$("#f2").focus(function(){
						count++;
						console.log(count);
					});

					$("#f3").focus(function(){
						count++;
						console.log(count);
					});

					$("#f4").focus(function(){
						count++;
						console.log(count);
					});
			setInterval(function(){
				if(total!=""){

					if(count==3){
						f1=$("#f1").val();
						if(f1!="") 
							f1=parseInt(f1);
						else{
							f1=0;
							tmp="f1";
						}
						f2=$("#f2").val();
						if(f2!="")
							f2=parseInt(f2);
						else{
							f2=0;
							tmp="f2";
						}
						f3=$("#f3").val();
						if(f3!="")
							f3=parseInt(f3);
						else{
							f3=0;
							tmp="f3";
						}
						f4=$("#f4").val();
							if(f4!="")
							f4=parseInt(f4);
						else{
							f4=0;
							tmp="f4";
						}
						var t=parseInt(total);
						res=t-(f1+f2+f3+f4);
						$("#"+tmp).val(res);
						//alert(f1+" "+" "+f2+" "+f3+" "+f4+" "+res);
						count--;
					}
				}
				//alert(total);		
				else{
					total=$("#total").val();
					count=0;
				}

			},2000);//interval

		});
		
});//document