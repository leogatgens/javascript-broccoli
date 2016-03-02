// JavaScript Document
window.onload=function()
{
	var myColors = new Array({'nombre':'Azul Real','color':'#00579e'},{'nombre':'Azul Medianoche','color':'#0b0837'}, {'nombre':'Morado Oscuro','color':'#280526'},{'nombre':'Agua Marino','color':'#31b09f'},{'nombre':'Rojo Oscuro','color':'#3e2125'}, {'nombre':'Lavanda','color':'#4c3279'},{'nombre':'Celeste Mediterraneo','color':'#5294a5'});
	var currentColor = 0;
	
	for(i=0;i<myColors.length;i++)
	{
		$("#color_line").append( "<div id='color0" + i + "'></div><h3 id='h_color"+ i + "'></h3>");
		$("#color0" + i).css("width", "25px");
		$("#color0" + i).css("height", "25px");
		$("#color0" + i).css("float", "left");
		$("#color0" + i).css("margin-top","5px");
		$("#color0" + i).css("background-color",myColors[i].color);
		$("#color0" + i).hover(function() {
			/*currentId = this.id;
			currentNumber = parseInt(currentId.slice(5));*/
            $(this).animate({
				width: "35px", height: "35px", marginTop: "0px"
			  }, 100 );
			//$("#content h2").html(myColors[currentNumber].nombre);
        });
		$("#color0" + i).mouseout(function() {
            $(this).animate({
				width: "25px", height: "25px", marginTop: "5px"
			  }, 100);
        });
		$("#color0" + i).click(function() {
			currentId = this.id;
			currentNumber = parseInt(currentId.slice(5));
			currentColor = currentNumber;
			$("#content h2").html(myColors[currentNumber].nombre);
        });
		
		
	}
	

}