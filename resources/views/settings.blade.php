@extends('layouts.app')

@section('title', __('Settings'))
@section('content')
    {{-- <h1 class="pl-3 border-b-2 mb-3">{{__('Settings')}}</h1> --}}
    <div>
        <form action="{{route('settings')}}" method="post">
            <div class="float m-2 mx-3">
                <label for="serveraddress" class="w-96">{{__('Server address')}}</label>
                <input type="text" name="serveraddress" id="serveraddress" readonly class="border-blue-500 rounded-lg border-2 right-0">
            </div>
            <div class="float m-2 mx-3">
                <label for="" class="w-24">{{__('Server port')}}</label>
                <input type="text" name="serverport" id="serverport" readonly class="border-blue-500 rounded-lg border-2">
            </div>
            <div class="border-2 rounded-lg border-blue-600 m-3">
                <div class="flex">
                    <select name="mailboxes" id="mailboxes" class="p-2 mb-2">
                        <option value="1">mymbox</option>
                    </select>
                    <label for="addmailbox"><x-css-add class="pt-2 mt-2 w-6"/></label>
                    <input type="checkbox" name="addmailbox" id="addmailbox" class="peer hidden">
                    <div class="hidden fixed peer-checked:visible">
                        <input type="text" name="newmailbox" id="newmailbox">
                        <button>{{__('Cancel')}}</button>
                        <button>{{__('Create')}}</button>
                    </div>
                </div>
                <div class="flex">
                    <div>
                        <div class="float">
                            <label for="userid">{{__('User ID')}}</label>
                            <input type="text" name="userid" id="userid" readonly class="border-blue-500 rounded-lg border-2">
                        </div>
                        <div class="float">
                            <label for="password">{{__('Password')}}</label>
                            <input type="text" name="password" id="password" readonly class="border-blue-500 rounded-lg border-2">
                        </div>
        
                    </div>
                    <div class="">
                        <button type="button" class="w-6 border-2 bg-blue-300 rounded-lg"><x-rpg-cycle class="bg-inherit"/></button>
                    </div>
                </div>
            </div>
        </form>
    </div>
@endsection