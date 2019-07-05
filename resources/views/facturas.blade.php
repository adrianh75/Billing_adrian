@extends('layouts.app')

@section('factura-section')

    <div class="container">

    <h1>Información sobre facturas</h1>

    @foreach($facturas as $factura)
        <div>
        <h2>Detalle de la factura:</h2>
        <p>{{$factura->det_factura}}</p>
        <h2>Codigo de factura:</h2>
        <p>{{$factura->cod_factura}}</p>
        <br>
        <h2>Ingrese la modificación:</h2>
            <input type="text" id="inpModificacionFactura">
        <br>
        <br>
        <button id="btnModificarFactura" facturaIdBtnMod="{{$factura->id_factura}}">Modificar Factura</button>
        <button id="btnEliminarFactura" facturaIdBtnEli="{{$factura->id_factura}}">Elimiinar Factura</button>
        <br>
        <br>
        </div>

    @endforeach

    </div>

@endsection