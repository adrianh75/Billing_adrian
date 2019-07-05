require('./bootstrap');


//Eliminar Usuario
(function () {
    var borrarusuario = {
        init: function () {
            this.addEvents();
        },

        addEvents: function () {
            document.addEventListener('click', function (event) {
                let target = event.target;
                if (target.matches('.btnborrarusuario')) {
                    var idUserDelete = target.getAttribute('UsuarioId');
                    $.ajax({
                        url: '/borrarusuario',
                        method: "POST",
                        data: {
                            id: idUserDelete,
                        },
                        success: function(response){
                            console.log('response', response);
                            if(response === '200') {
                                location.reload();
                            } else {
                                alert('Se dio un problema en la solicitud de eliminación de usuario');
                            }
                        }
                    });
                }
            });
        }
    }

    borrarusuario.init();
})();

//Modificar Usuario

(function () {
    var ModificarUsuario = {
        init: function () {
            this.addEvents();
        },

        addEvents: function () {
            document.addEventListener('click', function (event) {
            
                let target = event.target;
                if (target.matches('#btnModificarUsuario')) {

                    var idModificarUsuario = target.getAttribute('UsuarioId');
                    var inpModUsuario= this.cacheElements.$inpName.val();
                    $.ajax({
                        url: '/modificarusuario',
                        method: "POST",
                        data: {
                            id: idModificarUsuario, 
                            text: inpModUsuario,
                        },
                        success: function(response){
                            console.log('response', response);
                            if(response === '200') {
                                location.reload();
                            } else {
                                alert('Se dio un problema en la solicitud de eliminación de usuario');
                            }
                        }
                    });
                }
            }.bind(this));
        },

        cacheElements:{
            $inpName:$('#inpModUsuarioNombre')
        }

    }

    ModificarUsuario.init();
})();


//Eliminar Producto

(function () {
    var EliminarProducto = {
        init: function () {
            this.addEvents();
        },

        addEvents: function () {
            document.addEventListener('click', function (event) {
            
                let target = event.target;
                if (target.matches('#btnProductosEliminar')) {

                    var idProductoEliminar = target.getAttribute('productoinfoid');
                   
                    $.ajax({
                        url: '/EliminarProducto',
                        method: "POST",
                        data: {
                            id: idProductoEliminar, 
                       
                        },
                        success: function(response){
                            console.log('response', response);
                            if(response === '200') {
                                location.reload();
                            } else {
                                alert('Se dio un problema en la solicitud de eliminación del producto');
                            }
                        }
                    });
                }
            }.bind(this));
        },
    }

    EliminarProducto.init();
})();




//Modificar Producto

(function () {
    var ModificarProducto = {
        init: function () {
            this.addEvents();
        },

        addEvents: function () {
            document.addEventListener('click', function (event) {
            
                let target = event.target;
                if (target.matches('#btnProductosModificar')) {

                    var idProductoModificar = target.getAttribute('productoinfoid');
                    var txtInpDetalleProducto= this.cacheElements.$inpName.val();
                    $.ajax({
                        url: '/modificarProducto',
                        method: "POST",
                        data: {
                            id: idProductoModificar, 
                            text: txtInpDetalleProducto,
                        },
                        success: function(response){
                            console.log('response', response);
                            if(response === '200') {
                                location.reload();
                            } else {
                                alert('Se dio un problema en la solicitud en la modificacion del producto');
                            }
                        }
                    });
                }
            }.bind(this));
        },

        cacheElements:{
            $inpName:$('#txtInpDetalleProducto')
        }

    }

    ModificarProducto.init();
})();

//Eliminar Factura

(function () {
    var EliminarFactura = {
        init: function () {
            this.addEvents();
        },

        addEvents: function () {
            document.addEventListener('click', function (event) {
            
                let target = event.target;
                if (target.matches('#btnFacturasEliminar')) {

                    var idFacturaEliminar = target.getAttribute('productoinfoid');
                    var InpEliminarFactura= this.cacheElements.$inpName.val();
                    $.ajax({
                        url: '/EliminarFactura',
                        method: "POST",
                        data: {
                            id: idFacturaEliminar, 
                            text: InpEliminarFactura
                        },
                        success: function(response){
                            console.log('response', response);
                            if(response === '200') {
                                location.reload();
                            } else {
                                alert('Se dio un problema en la solicitud de eliminación de la factura');
                            }
                        }
                    });
                }
            }.bind(this));
        },

        cacheElements:{
            $inpName:$('#txtInpEliminarFactura')
        }

    }

    EliminarFactura.init();
})();


//Modificar Factura

(function () {
    var ModificarFactura = {
        init: function () {
            this.addEvents();
        },

        addEvents: function () {
            document.addEventListener('click', function (event) {
            
                let target = event.target;
                if (target.matches('#btnModificarFactura')) {

                    var idFacturaModificar = target.getAttribute('productoinfoid');
                    var txtInpDetallefactura= this.cacheElements.$inpName.val();
                    $.ajax({
                        url: '/modificarFactura',
                        method: "POST",
                        data: {
                            id: idFacturaModificar, 
                            text: txtInpDetallefactura,
                        },
                        success: function(response){
                            console.log('response', response);
                            if(response === '200') {
                                location.reload();
                            } else {
                                alert('Se dio un problema en la solicitud en la modificacion de la factura');
                            }
                        }
                    });
                }
            }.bind(this));
        },

        cacheElements:{
            $inpName:$('#txtInpDetallefactura')
        }

    }

    ModificarFactura.init();
})();