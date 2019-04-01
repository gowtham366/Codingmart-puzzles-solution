$("document").ready(function(){
	var f1=$("#f1");
	var f2=$("#f2");
	var f1arr=[];
	//var f2arr=[];
	f1.click(function(){
		var val=parseInt($("#firstform").val());
		f1arr.push(val);
		$("#f1data").append(val+"<br><br>");
		console.log(f1arr);	
		//alert(val);
	});//f1

	f2.click(function(){
		var val=parseInt($("#secondform").val());
		$("#f2data").append(val+"<br><br>");
		for (var i = 0; i < f1arr.length; i++) {
			var tmp=f1arr[i]+val;
			if(tmp>=100)
			{
				$("#ans").append(val+"+"+f1arr[i]+"="+tmp+"<br><br>");
			}
		}
	});//f2
	//alert(typeof arr);

});