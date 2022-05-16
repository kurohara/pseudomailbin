@extends('layouts.app')

@section('content')
    <div class="flex">
        <form action="{{route('login')}}" method="post" class="p-3 shrink">
            @csrf
            <div class="m-2">
                <label for="email" class="sr-only">E-Mail Address</label>
                <input type="email" class="border-2 w-96" name="email" id="email" placeholder="Mail Address">
            </div>
            <div class="m-2">
                <label for="password" class="sr-only">Password</label>
                <input type="password" class="border-2 w-96" name="email" id="password" placeholder="Your Password">
            </div>
            <div class="m-2 grid justify-items-end">
                <button type="submit" class="border-2 px-3">Login</button>
            </div>
        </form>
    </div>
@endsection