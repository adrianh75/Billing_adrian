<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class usuariocontrolador extends Controller
{
   public function mostrarusuarios(){
       $users= DB::select('SELECT * from users');
       return view('vista_usuarios', ['users'=>$users]);
   }


   public function borrarusuario(Request $request){
    DB::select('DELETE FROM users WHERE id='.$request->id.'');
    
    return 200;
  }
}
