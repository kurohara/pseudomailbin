@extends('layouts.app')
@section('title', __('Login'))
@section('content')
    <div class="flex">
        @if (session('status'))
            <div class="bg-red-500 p4 rounded-lg mb-6 text-white text-center">
                {{session('status')}}
            </div>
        @endif
        <form action="{{route('login')}}" method="post" class="p-3 shrink">
            @csrf
            <div class="m-2">
                <label for="email" class="sr-only">{{__('E-Mail Address')}}</label>
                <input type="email" name="email" id="email" placeholder="{{__('Mail Address')}}"
                class="border-2 w-96 @error('email') border-red-500 @enderror">
                @error('email')
                    <div class="text-red-500 text-sm mt-2">
                        {{$message}}
                    </div>
                @enderror
            </div>
            <div class="m-2">
                <label for="password" class="sr-only">{{__('Password')}}</label>
                <input type="password" name="password" id="password" placeholder="{{__('Your Password')}}"
                class="border-2 w-96 @error('password') border-red-500 @enderror">
                @error('password')
                    <div class="text-red-500 mt-2 text-sm">
                        {{$message}}
                    </div>
                @enderror
            </div>
            <div class="m-2">
                <label for="remember" class="text-xs">{{__('Remember me')}}</label>
                <input type="checkbox" name="remember" id="remember" class="mr-2">
            </div>
            <div class="m-2 grid justify-items-end">
                <button type="submit" class="border-2 px-3 rounded-lg border-blue-900">{{__('Login')}}</button>
            </div>
        </form>
    </div>
@endsection