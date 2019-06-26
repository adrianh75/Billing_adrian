<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class productoscontrolador extends Controller
{
   public function mostrarproductos(){
       $productos= DB::select('SELECT * from productos');
       return view('productos', ['productos'=>$productos]);
   }


   public function updateProducto(Request $request){

    DB::table('productos')
        ->where('id', $request->id)
        ->update(['detalle_producto' => $request->text]);
    return 200;
}
}
