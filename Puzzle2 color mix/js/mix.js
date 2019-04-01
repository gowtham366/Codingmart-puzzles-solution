$(document).ready(function(){
	var t1water=$("#t1water");
	var t2water=$("#t2water");
	var t3water=$("#t3water");
	var cwater=$("#cwater");
	var tap1=$("#tap1");
	var tap2=$("#tap2");
	var tap3=$("#tap3");
	var flow1=$("#flow1");
	var flow2=$("#flow2");
	var flow3=$("#flow3");
	var t1flow=true;
	var t2flow=true;
	var t3flow=true;
	var rg=['201','0','0'];
	//var rval=200,gval=100,bval=200;
	
	setInterval(function(){
		if(!t1flow)
		{
			t1water.css('margin-top',"+=5");
			t1water.css('height',"-=5");
			cwater.css('height','+=0.5');
			cwater.css('margin-top','-=0.5');
			rg[0]=parseInt(rg[0])+1;
			//alert(rg[0]);
			var tmp="rgb("+rg+")";
			//alert(tmp);
			cwater.css('background-color',tmp);
		/*	var hi=parseInt(water.css('margin-top'));
			if(hi==280)
			{
				t1flow=true;
			} */

		}//t1flow

		if(!t2flow)
		{
			t2water.css('margin-top',"+=5");
			t2water.css('height',"-=5");
			cwater.css('height','+=0.5');
			cwater.css('margin-top','-=0.5');
			rg[1]=parseInt(rg[1])+5;
			var tmp="rgb("+rg+")";
			//alert(tmp);
			cwater.css('background-color',tmp);
			//var gval=cwater.css('background-color');

		}//t2flow

		if(!t3flow)
		{
			t3water.css('margin-top',"+=5");
			t3water.css('height',"-=5");
			cwater.css('height','+=0.5');
			cwater.css('margin-top','-=0.5');
			rg[2]=parseInt(rg[2])+5;
			var tmp="rgb("+rg+")";
			//alert(tmp);
			cwater.css('background-color',tmp);
			//var rval=cwater.css('background-color');
		}//t3flow

		tap1.click(function(){
		if(t1flow==true)
		{
			t1flow=false;
			flow1.show();
			//var t1m=(t1water.css('margin-top'))+5;
			//var t1h=(t1water.css('height'))-5;
			//alert(rval);     
		}
		else
		{
			t1flow=true;
			flow1.hide();	
		}

	});//tap1

	tap2.click(function(){
		if(t2flow==true)
		{
			t2flow=false;
			flow2.show();
		}
		else
		{
			t2flow=true;
			flow2.hide();	
		}

	});//tap2

	tap3.click(function(){
		if(t3flow==true)
		{
			t3flow=false;
			flow3.show();
		}
		else
		{
			t3flow=true;
			flow3.hide();	
		}

	});//tap1

	},1000);//setinterval


 /*	$("#b1").click(function(){
		var box=$("#box").val();
		var cc="rgb("+box+",0,0)";
		//alert(cc);
		flow1.css('background-color',cc);
	});//b1
	*/

});//document