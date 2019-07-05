<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();

Route::get('/', function () {
    return view('welcome');
});

Route::get('/home',function(){
    return view('home');
});

//Rutas de servicio de Usuarios

Route::get('/usuarios','usuariocontrolador@mostrarusuarios')->name('vista_usuarios');

Route::post('/borrarusuario','usuariocontrolador@borrarusuario');

Route::post('/modificarusuario','usuariocontrolador@updateUsuario');

//Rutas de Servicio de los Productos
Route::get('/productos','productoscontrolador@mostrarproductos')->name('productos');

Route::post('/modificarProducto','productoscontrolador@updateProducto');

//Rutas de Servicio Facturas
Route::get('/facturas','facturascontrolador@mostrarfacturas')->name('facturas');

Route::post('/modificarFactura','facturascontrolador@updateFactura');
