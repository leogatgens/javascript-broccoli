jQuery(document).ready(function() {

	

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
            actionsManager.loadData(productsObject);
            actionsManager.CargarProductos();
		});