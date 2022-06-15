@extends('layouts.app')

@section('title', 'About')
@section('content')
    <div class="p-10">
        Copyrights &copy; 2022 all rights reserved.
    </div>
    <div id="about"></div>
    <script src="{{asset('js/about.js')}}"></script>
@endsection