@extends('layouts.app')

@section('title', __('Settings'))
@section('content')
    {{-- <h1 class="pl-3 border-b-2 mb-3">{{__('Settings')}}</h1> --}}
    <div>
        <form action="{{route('settings')}}" method="post">
            <div class="m-3">
                <label for="serveraddress" class="inline-block">{{__('Server address')}}</label>
                <button class="float-right"><x-fluentui-clipboard-task-24-o class="w-6" /></button>
                <input type="text" name="serveraddress" id="serveraddress" readonly class="border-blue-500 rounded-lg border-2 w-64 float-right">
            </div>
            <div class="m-3">
                <label for="" class="inline-block">{{__('Server port')}}</label>
                <button class="float-right"><x-fluentui-clipboard-task-24-o class="w-6" /></button>
                <input type="text" name="serverport" id="serverport" readonly class="border-blue-500 rounded-lg border-2 w-64 float-right">
            </div>
            <div class="border-2 rounded-lg border-blue-600 m-3">
                <div class="">
                    <select name="mailboxes" id="mailboxes" class="inline-block w-4/5 p-2 m-3">
                        <option value="1">mymbox</option>
                    </select>
                    <label for="addmailbox"><x-css-add class="inline-block mt-2 w-6"/></label>
                    <input type="checkbox" name="addmailbox" id="addmailbox" class="peer hidden">
                    <div class="hidden fixed peer-checked:visible z-50">
                        <input type="text" name="newmailbox" id="newmailbox">
                        <button>{{__('Cancel')}}</button>
                        <button>{{__('Create')}}</button>
                    </div>
                </div>
                <div class="block w-full">
                    <div class="inline-block w-4/5">
                        <div class="inline-block w-full mb-3 mx-3">
                            <label for="userid" class="inline-block">{{__('User ID')}}</label>
                            <button class="float-right"><x-fluentui-clipboard-task-24-o class="w-6" /></button>
                            <input type="text" name="userid" id="userid" readonly class="border-blue-500 rounded-lg border-2 inline-block float-right w-64">
                        </div>
                        <div class="inline-block w-full mb-3 mx-3">
                            <label for="password" class="inline-block">{{__('Password')}}</label>
                            <button class="float-right"><x-fluentui-clipboard-task-24-o class="w-6" /></button>
                            <input type="text" name="password" id="password" readonly class="border-blue-500 rounded-lg border-2 inline-block float-right w-64">
                        </div>
                    </div>
                    <div class="inline-block w-1/6 align-top pb-3 px-3">
                        <button type="button" class="border-2 bg-blue-300 rounded-lg"><x-rpg-cycle class="bg-inherit w-6"/></button>
                    </div>
                </div>
            </div>
            <button type="submit" class="block float-right border-2 border-blue-300 rounded-md mx-3">{{__('Update')}}</button>
            {{-- <div id="serveraddressdiv" class="rotextcp"></div>
            <div id="serverportdiv" class="rotextcp"></div>
            <div id="usernamediv" class="rotextcp"></div>
            <div id="userpassworddiv" class="rotextcp"></div> --}}
        </form>
    </div>
    {{-- <script src="{{asset('js/settings.js')}}"></script> --}}
@endsection