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


//Modificar Detalle

(function () {
    var ModificarProducto = {
        init: function () {
            this.addEvents();
        },

        addEvents: function () {
            document.addEventListener('click', function (event) {
            
                let target = event.target;
                if (target.matches('.btnProductosModificar')) {

                    var idProductoModificar = target.getAttribute('productoinfoid');
                    var txtInpDetalleProducto= this.cacheElements.$inpName.val();
                    $.ajax({
                        url: '/modificarProducto',
                        method: "POST",
                        data: {
                            id: idProductoModificar, 
                            text: txtInpDetalleProducto
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
            $inpName:$('.productoUpdate')
        }

    }

    ModificarProducto.init();
})();
