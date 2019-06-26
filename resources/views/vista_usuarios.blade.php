@extends('layouts.app')

@section('usuarios-section')

    <p>lisad de usuarios</p>

    @foreach($users as $user)
        <div>
        <p>{{ $user->name }}</p>
        <button class='btnborrarusuario' UsuarioId="{{ $user->id }}">ELIMINAR</button>
        </div>
    @endforeach

@endsection
