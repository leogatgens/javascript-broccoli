// JavaScript Document

var actionsManager = (function actionsEFFI(){
	'use strict';

	var $index = null;
	var $acerca  = null;
	var $botonimagen = null;

	var productsHTML = '';
	var MAX_PRODUCTS = 12;
	var current_page = 1;
	var publicAPI = {  
		init : init,
		loadData : loadData
	};
	var productsObject = null;
	var showCategories  = null;


	function handleClickIndex(e){
		window.location = "index.html";
	}
	
	function handleClickAcerca(e){
		window.location = "acerca-de.html";	
	}

	function EventoMouserOver(e) {
        this.style.cursor =  "pointer";
    }
	function init(params){

		$index = $(params.index); 
		$acerca = $(params.acerca); 
		$botonimagen = $(params.botonCategoria);

		$index.bind('click',handleClickIndex);
		$acerca.bind('click',handleClickAcerca);
		
		$botonimagen.bind('click',MostraCategorias);
		$botonimagen.bind('mouseover',EventoMouserOver);
		
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
		 showCategories = true;


	

	}	

function MostraCategorias(argument) {
	alert('dhkdhkjhdkjhd');
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
}

	
	
	

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


	function loadData(data){
		//Objeton Json con información de los productos a desplegar
		productsObject = data;
	}
	
	return publicAPI;
})();