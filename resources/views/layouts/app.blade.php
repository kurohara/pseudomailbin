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
    <script src="{{asset('js/index.js')}}"></script>
    <div class="sm:w-24 w-12"><x-fluentui-mail-inbox-all-24 /></div>
    <label for="hamburger">
        <x-radix-hamburger-menu class="sm:invisible w-8" />
    </label>
    <input type="checkbox" name="" id="hamburger" class="peer hidden"/>
    <nav class="hidden sm:flex border-2 p-2 peer-checked:flex justify-between mb-6 fixed sm:static z-[1000] bg-white">
        <ul class="items-center columns-1 sm:columns-6">
            <li class="p-0 hover:bg-blue-300"><a href="{{route('about')}}" class="bg-inherit">{{__('About')}}</a></li>
            @guest
                <li class="p-0 hover:bg-blue-300"><a href="{{route('register')}}" class="bg-inherit">{{__('Register')}}</a></li>
                <li class="p-0 hover:bg-blue-300"><a href="{{route('login')}}" class="bg-inherit">{{__('Login')}}</a></li>
            @endguest
            @auth
                <li class="p-0 hover:bg-blue-300">
                    <form action="{{route('logout')}}" method="post" class="bg-inherit" id="logoutform">
                        @csrf
                        <button type="submit" class="border-0 bg-inherit">{{__('Logout')}}</button>
                    </form>
                </li>
                <li class="p-0 hover:bg-blue-300"><a href="{{route('settings')}}" class="bg-inherit">{{__('Settings')}}</a></li>
                <li class="p-0 hover:bg-blue-300"><a href="{{route('mailbox')}}" class="bg-inherit">{{__('MailBox')}}</a></li>
            @endauth
        </ul>
    </nav>
    <script type="module">
        const logoutbutton = document.querySelector('#logoutformm button')
        const apitoken = window.sessionStorage.getItem('token')
        logoutbutton.onclick = async (e) => {
            e.preventDefault()
            const resp = await fetch('/api/logout', {
                method: 'post',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer ' + apitoken
                },
                credentials: 'include',
            })
            const respdata = await resp.json()
            window.location.reload()
        }
    </script>
    <h1 class="pl-3 border-b-2 mb-3">@yield('title')</h1>
    @yield('content')
</body>
</html>