<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>pseudomailbin</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
</head>
<body>
    <div class="sm:w-24 w-12"><x-fluentui-mail-inbox-all-24 /></div>
    <label for="hamburger">
        <x-radix-hamburger-menu class="sm:invisible w-8" />
    </label>
    <input type="checkbox" name="" id="hamburger" class="peer hidden"/>
    <nav class="hidden sm:flex border-2 p-2 peer-checked:flex justify-between mb-6 fixed sm:static z-[1000] bg-white">
        <ul class="items-center columns-1 sm:columns-6">
            <li class="p-0"><a href="{{route('about')}}">About</a></li>
            @guest
                <li class="p-0"><a href="{{route('register')}}">Register</a></li>
                <li class="p-0"><a href="{{route('login')}}">Login</a></li>
            @endguest
            @auth
                <li class="p-0">
                    <form action="{{route('logout')}}" method="post">
                        @csrf
                        <button type="submit" class="border-0">Logout</button>
                    </form>
                </li>
            @endauth
            <li class="p-0">Settings</li>
            <li class="p-0">MailBox</li>
        </ul>
    </nav>
    @yield('content')
</body>
</html>