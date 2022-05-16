@extends('layouts.app')

@section('content')
    <div class="flex">
        <form action="{{route('Register')}}" method="post" class="p-3 shrink">
            @csrf
            <div class="m-2">
                <label for="name" class="sr-only">Name</label>
                <input type="text" name="name" id="name" class="border-2" placeholder="Your Name">
            </div>
            <div class="m-2">
                <label for="email" class="sr-only">Mail Address</label>
                <input type="email" class="border-2" name="email" id="email" placeholder="Your email">
            </div>
            <div class="m-2">
                <input type="password" class="border-2" name="password" id="password" placeholder="Your Password">
            </div>
            <div class="m-2">
                <input type="password" class="border-2" name="password_confirmation" id="password_confirmation" placeholder="Retype Your Password">
            </div>
            <div class="m-2 grid justify-items-end">
                <button type="submit" class="border-2 px-3">Register</button>
            </div>
        </form>
    </div>
@endsection