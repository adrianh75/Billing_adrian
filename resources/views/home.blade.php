@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    You are logged in!
                </div>
            </div>
        </div>
    </div>
</div>

<div>
    <nav class="navbar navbar-dark bg-light">
        <a class="btn btn-outline-primary my-2 my-sm-0" href="usuarios">Usuarios</a>
        <a class="btn btn-outline-primary my-2 my-sm-0" href="productos">Productos</a>
        <a class="btn btn-outline-primary my-2 my-sm-0" href="facturas">Facturas</a>
        </nav>
    
</div>
@endsection

