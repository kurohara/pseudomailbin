@extends('layouts.app')

@section('title', __('Mailbox'))
@section('content')
    <div class="w-full block h-screen">
        <form action="" method="post" class="w-full">
            <select name="mailbox" id="mailbox" class="w-full">
                <option value="1">mymailbox</option>
                <option value="2">mymailbox2</option>
            </select>
        </form>
        <div class="messagelist w-full block h-2/6 overflow-y-hidden">
            <table class="w-full border-2 block h-full">
                <thead class="w-full border-2 block whitespace-nowrap">
                    <tr class="w-full block">
                        <th class="inline-block w-1/12 text-left"><input type="checkbox" name="" id=""></th>
                        <th class="inline-block w-4/12 text-left">Subject</td>
                        <th class="inline-block w-4/12 text-left">From</td>
                        <th class="inline-block w-3/12 text-left">datetime</td>
                    </tr>
                </thead>
                <tbody class="w-full block h-5/6 overflow-y-scroll whitespace-nowrap border-2">
                    @for ($i=0;$i<100;$i++)
                    <tr class="block w-full">
                        <td class="inline-block w-1/12 text-left"><input type="checkbox" name="" id=""></td>
                        <td class="inline-block w-4/12 text-left">test</td>
                        <td class="inline-block w-4/12 text-left">test@test</td>
                        <td class="inline-block w-3/12 text-left">2022/05/01 00:00:00</td>
                    </tr>
                    @endfor
                </tbody>
            </table>
        </div>
        <div>
            <form action="" method="post">
                <label for="actionselect">{{__('select action')}}</label>
                <select name="actionselect" id="actionselect">
                    <option value="none">{{__('Nothing')}}</option>
                    <option value="delete">{{__('Delete')}}</option>
                </select>
            </form>
        </div>
        <div class="message block h-2/6 border-2 mt-2 rounded-md">
            <div class="messageheader border-b-2">
                Subject: test
            </div>
            <div class="messagefrom border-b-2">
                From: test@test
            </div>
            <div class="messageto border-b-2">
                To: test@test
            </div>
            <div class="messagedatetime">
                2022/05/01 00:00:00
            </div>
            <div class="messagebody block h-3/6 overflow-y-scroll border-t-2 border-b-2">
                <pre>
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
                </pre>
            </div>
        </div>
    </div>
@endsection