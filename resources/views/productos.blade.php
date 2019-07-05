@extends('layouts.app')


@section('productos-section')
    <div class="container">
        <p>Información sobre productos</p>

    @foreach($productos as $productos)
        <div>
        <p>{{ $productos->nmb_producto }}</p>
        <br>
        <p> Detalle: </p>
        <p>{{ $productos->detalle_producto }}</p>
        <label for="productosUpdate">Informacion a modificar</label>
        <input type="text" id='productoUpdate'>
        <br>
        <button id='btnProductosModificar' productoInfoId="{{$productos->id}}">Modificar</button>
        <button id='btnProductosEliminar' productoInfoId="{{$productos->id}}">Eliminar</button>
        <br>
        
        </div>
    @endforeach
</div>
@endsection


