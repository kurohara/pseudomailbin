@extends('layouts.app')

@section('title', __('Settings'))
@section('content')
    <div class="block mr-6">
        <div id="serversettings"></div>
        <div id="mailboxsettings"></div>
    </div>
    <script src="{{asset('js/settings.js')}}"></script>
@endsection