//function definition
function display(){//only the selected year is visible
	//document.getElementById("year2018").innerHTML="Oops!";
	var year=document.getElementById("select_year").value;
	for (var i=2018;i<=2020;i++){
		if (i==year)
			document.getElementById("div_"+i).style.display="block";
		else
			document.getElementById("div_"+i).style.display="none";
	}
}
function image_object (name,quantity,current_index){
	this.name=name;
	this.quantity=quantity;
	this.current_index=current_index;
}

//execution
display();

var image_set=new Array();//this is a global variable
image_set[0]=new image_object("wcci2018",8,0);
image_set[1]=new image_object("icpr2018",8,0);
image_set[2]=new image_object("dsp2018",3,0);

for (var i=0;i<image_set.length;i++){
	(function(i){//need a closure

	//add click event to previous and next buttons
	document.getElementById(image_set[i].name+"_previous").onclick=function(){
		if (image_set[i].current_index>0)
			image_set[i].current_index--;
		document.getElementById("img_"+image_set[i].name).src=image_set[i].name+"_"+image_set[i].current_index+".jpg";
	}	
	document.getElementById(image_set[i].name+"_next").onclick=function(){
		if (image_set[i].current_index<image_set[i].quantity-1)
			image_set[i].current_index++;
		document.getElementById("img_"+image_set[i].name).src=image_set[i].name+"_"+image_set[i].current_index+".jpg";
	}
	
	})(i);
}









