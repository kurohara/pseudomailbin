@extends('layouts.app')

@section('title', __('Settings'))
@section('content')
    <div>
        <form action="{{route('settings')}}" method="post">
            <div id="serversettings"></div>
            <div id="mailboxsettings"></div>
            <button type="submit" class="invisible block float-right border-2 border-blue-300 rounded-md mx-3">{{__('Update')}}</button>
        </form>
    </div>
    <script src="{{asset('js/settings.js')}}"></script>
    <script>
        (async () => {
            const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

            myGlobal('showServerSettings')("serversettings", 'test.com', 8888)
            myGlobal('showMailBoxSettings')("mailboxsettings")
            //
        })();
    </script>
@endsection