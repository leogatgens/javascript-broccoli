// JavaScript Document

var actionsManager = (function actionsEFFI(){
	'use strict';

	var $index = null;
	var $acerca  = null;
	var $paginaProductos = null;


	var $botonCategoria = null;
	var $categoriaMenu = null;



	var productsHTML = '';
	var MAX_PRODUCTS = 12;
	var current_page = 1;
	
	var productsObject = null;
	var showCategories  = null;


	function handleClickIndex(e){
		window.location = "index.html";
	}
	
	function handleClickAcerca(e){
		window.location = "acerca-de.html";	
	}

	function handleClickProductos(e){
		window.location = "productos.html";	

	}



	function EventoMouserOver(e) {
        this.style.cursor =  "pointer";
    }

	function init(params){
		//botones menu principal
		$index = $(params.index); 
		$acerca = $(params.acerca); 
		$paginaProductos = $(params.productos); 
		//otros controles
		$botonCategoria = $(params.botonCategoria);
		$categoriaMenu =  $(params.menuCategoria);
	
		//Se raliza bind de los eventos del menu
		$index.bind('click',handleClickIndex);
		$acerca.bind('click',handleClickAcerca);
		$paginaProductos.bind('click',handleClickProductos);

		$botonCategoria.bind('click',MostraCategorias);
		$botonCategoria.bind('mouseover',EventoMouserOver);
		
	
			
		//current_page = getCurrentPage();
		showCategories = true;


	

	}	

	function MostraCategorias(argument) {		
		if(showCategories)
			{
				$categoriaMenu.hide();
				showCategories = false;
			}
			else
			{
				$categoriaMenu.show();
				showCategories = true;
			}
	}

	
	
	

	/*function handleMenu(){
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
	*/

	
	function getCurrentPage() {
		var loc = window.location;
		var pathName = loc.pathname.substring(loc.pathname.lastIndexOf('/') + 1,loc.href.length);
		return pathName;
	}


	function loadData(data){
		//Objeton Json con información de los productos a desplegar
		productsObject = data;
	}
	
	function pintarProductos() {
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
	}


	var publicAPI = {  
		init : init,
		loadData : loadData,
		CargarProductos : pintarProductos
	};
	return publicAPI;
})();