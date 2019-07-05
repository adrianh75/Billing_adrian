@extends('layouts.app')

@section('usuarios-section')

<h1>Información sobre los usuarios</h1>

    @foreach($users as $user)
        <div>
        <h2>Nombre del Usuario</h2>
        <p>{{ $user->name }}</p>
        <h2>Email de usuario</h2>
        <p>{{$user->email}}</p>

        <h2>Igrese la modificación que desea aplicar:</h2>
        <input type="text"id="inpModUsuarioNombre">
        <br>
        <button id="btnModificarUsuario" UsuarioId="{{ $user->id }}">Modificar</button>
        <button class='btnborrarusuario' UsuarioId="{{ $user->id }}">Eliminar</button>
        
        </div>
    @endforeach

@endsection
