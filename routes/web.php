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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/usuarios',function(){
    return view('vista_usuarios');
});

Route::get('/productos',function(){

    return view('productos');

});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/usuarios','usuariocontrolador@mostrarusuarios')->name('usuarios');

Route::post('/borrarusuario','usuariocontrolador@borrarusuario');

Route::get('/productos','productoscontrolador@mostrarproductos')->name('productos');

Route::post('/modificarProducto','productoscontrolador@updateProducto');