@extends('layouts.app')
@section('title', __('Register'))
@section('content')
    <div class="flex">
        <form action="{{route('register')}}" method="post" class="p-3 shrink">
            @csrf
            <div class="m-2">
                <label for="name" class="sr-only">Name</label>
                <input type="text" name="name" id="name" placeholder="{{ __('Your Name') }}"
                class="border-2 w-96 @error('name') border-red-500 @enderror">
                @error('name')
                    <div class="text-red-500 mt-2 text-sm">
                        {{$message}}
                    </div>
                @enderror
            </div>
            <div class="m-2">
                <label for="email" class="sr-only">Mail Address</label>
                <input type="email" id="email" placeholder="{{ __('Your email') }}" name="email"
                class="border-2 w-96 @error('email') border-red-500 @enderror">
                @error('email')
                    <div class="text-red-500 mt-2 text-sm">
                        {{$message}}
                    </div>
                @enderror
            </div>
            <div class="m-2">
                <label for="password" class="sr-only">Password</label>
                <input type="password" name="password" id="password" placeholder="{{ __('Your Password') }}"
                class="border-2 w-96 @error('password') border-red-500 @enderror">
                @error('password')
                    <div class="text-red-500 mt-2 text-sm">
                        {{$message}}
                    </div>
                @enderror
            </div>
            <div class="m-2">
                <label for="password_confirmation" class="sr-only">Password Confirmation</label>
                <input type="password" name="password_confirmation" id="password_confirmation" placeholder="{{ __('Retype Your Password')}}"
                class="border-2 w-96 @error('password_confirmation') border-red-500 @enderror">
                @error('password_confirmation')
                    <div class="text-red-500 mt-2 text-sm">
                        {{$message}}
                    </div>
                @enderror
            </div>
            <div class="m-2 grid justify-items-end">
                <button type="submit" class="border-2 px-3 rounded-lg border-blue-900">{{ __('Register')}}</button>
            </div>
        </form>
    </div>
@endsection