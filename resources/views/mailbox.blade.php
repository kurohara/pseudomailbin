@extends('layouts.app')

@section('title', __('Mailbox'))
@section('content')
    <div class="">
        <form action="" method="post" class="w-full">
            <select name="mailbox" id="mailbox">
                <option value="1">mymailbox</option>
                <option value="2">mymailbox2</option>
            </select>
        </form>
        <div class="messagelist">
            <table class="">
                <thead class="w-full">
                    <tr>
                        <td>Subject</td>
                        <td>datetime</td>
                    </tr>
                </thead>
                <tbody class="w-full">
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="message">
            <div class="messageheader">

            </div>
            <div class="messagebody">

            </div>
        </div>
    </div>
@endsection