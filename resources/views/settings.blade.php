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

            var serveraddress = ''
            var serverport = ''
            var data = {current: '', map: {}}
            var setDataFunc = {f: (value) => {} }
            const setDataCB = (setfunc) => {
                setDataFunc = setfunc
            }
            const refreshCredentialCB = (finishfunc) => {
                // simulate rest api call
                setTimeout(() => {
                    prevuid = data.current ? data.map[data.current].userID : 'test'
                    prevpwd = data.current ? data.map[data.current].password : 'abc'
                    newdata = {...data}
                    newdata.map[data.current] = {
                        userID: prevuid + 'test',
                        password: prevpwd + 'abc'
                    }
                    finishfunc()
                    setDataFunc(newdata)
                }, 100)
            }
            const addMailBoxCB = () => {

            }
            const deleteMailBoxCB = () => {

            }
            const selectCB = () => {
                console.log('select')
            }

            myGlobal('showServerSettings')("serversettings", serveraddress, serverport)
            myGlobal('showMailBoxSettings')("mailboxsettings", setDataCB, refreshCredentialCB, addMailBoxCB, deleteMailBoxCB, selectCB)
            //
            // simulate initial data fetch
            setTimeout(() => {
                data = {
                    current: 'mymbox',
                    map: {
                        'mymbox': {
                            userID: 'test',
                            password: 'abc'
                        }
                    }
                }
                setDataFunc(data)
            }, 100)
        })();
    </script>
@endsection