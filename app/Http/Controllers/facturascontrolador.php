<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class facturascontrolador extends Controller
{
   public function mostrarfacturas(){
       $facturas= DB::select('SELECT * from facturas');
       return view('facturas', ['facturas'=>$facturas]);
   }


   public function updateFactura(Request $request){

    DB::table('facturas')
        ->where('id_facturas', $request->id)
        ->update(['det_factura' => $request->text]);
    return 200;
}
}
