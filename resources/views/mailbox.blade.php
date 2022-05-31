@extends('layouts.app')

@section('title', __('Mailbox'))
@section('content')
    <div class="w-full block h-screen">
        <div id="selectmbox"></div>
        <div id="messagelist"></div>
        <div id="message"></div>
        <div id="mailbox"></div>
    </div>
    <script src="{{asset('js/mailbox.js')}}"></script>
@endsection