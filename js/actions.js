// JavaScript Document

var actionsManager = (function actionsEFFI(){
	'use strict';
	var productsHTML = '';
	var MAX_PRODUCTS = 12;
	var current_page = 1;
	var publicAPI = {  init : init};
	var $index = null;
	var $acerca  = null;


	function handleClickIndex(e){
		window.location = "index.html";
	}
	
	function handleClickAcerca(e){
		window.location = "acerca-de.html";	
	}

	function init(params){

	 $index = $(params.index); 
	 $acerca = $(params.acerca); 

	$index.bind('click',handleClickIndex);
	$acerca.bind('click',handleClickAcerca);


	
	
	//Objeton Json con información de los productos a desplegar
	var productsObject = {
		"products": [
			{ "imgURL":"images/canastas/canasta_1.jpg" , "name":"Canasta tipo 1", "price":"8000" }, 
			{ "imgURL":"images/canastas/canasta_2.jpg" , "name":"Canasta tipo 2", "price":"9500" }, 
			{ "imgURL":"images/canastas/canasta_3.jpg" , "name":"Canasta tipo 3", "price":"12000" },
			{ "imgURL":"images/canastas/canasta_4.jpg" , "name":"Canasta tipo 4", "price":"7500" }, 
			{ "imgURL":"images/canastas/canasta_5.jpg" , "name":"Canasta tipo 5", "price":"12000" },
			{ "imgURL":"images/canastas/canasta_6.jpg" , "name":"Canasta tipo 6", "price":"16000" },
			{ "imgURL":"images/canastas/canasta_7.jpg" , "name":"Canasta tipo 7", "price":"8000" },
			{ "imgURL":"images/canastas/canasta_2.jpg" , "name":"Canasta tipo 8", "price":"5000" },
			{ "imgURL":"images/canastas/canasta_5.jpg" , "name":"Canasta tipo 9", "price":"18000" }
		]
		};
	
	//Este for recorre todo lo que hay en el objeto y lo va sumando a una variable string para luego agregarse en products_wraper
	for(var i=0; i < productsObject.products.length; i++)
	{
		productsHTML += '<div class="product">';
        productsHTML +=	'<img src="' + productsObject.products[i].imgURL + '" />';
		productsHTML +=	'<h3 class="product_name">' + productsObject.products[i].name + '</h3>';
		productsHTML += '<h4 class="product_price">Precio: <span>&#8353; ' + productsObject.products[i].price + '</span></h4>';
		productsHTML += '<div class="addToCart_btn"></div>';
		productsHTML += '</div>';
	}
	
	//Se agrega el html con los productos al div contenedor
	$('#products_wraper').html(productsHTML);
		
	current_page = getCurrentPage();
	var showCategories = true;


	}	

	function function_name(argument) {
			$("#categorie_btn img").click( function(e){
			if(showCategories)
			{
				$("#categories_menu").hide();
				showCategories = false;
			}
			else
			{
				$("#categories_menu").show();
				showCategories = true;
			}
		});
	}
	
	
	$("#categorie_btn img").mouseover(function(e) {
        this.style.cursor = "pointer";
    });
	
	function handleMenu()
	{
		switch(current_page)
		{
			case "index.html" :
							$("#inicio").css("background-image", "url(images/inicio_over.png)");
							break;
							
			case "acerca-de.html" :
							$("#acerca").css("background-image", "url(images/acerca_over.png)");
							break;
			
		}	
	}
	
	
	
	function getCurrentPage() {
		var loc = window.location;
		var pathName = loc.pathname.substring(loc.pathname.lastIndexOf('/') + 1,loc.href.length);
		return pathName;
	}
	
	return publicAPI;
})();