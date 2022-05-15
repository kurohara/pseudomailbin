<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="{{ asset('css/App.css') }}" rel="stylesheet">
    <title>Document</title>
</head>
<body>
    <div class="container">
        <header>
            <!-- -->
            <div class="sm:w-24 w-12"><x-fluentui-mail-inbox-all-24 /></div>
            <label for="hamburger">
                <x-radix-hamburger-menu class="sm:invisible w-8" />
            </label>
            <div>
                <input type="checkbox" name="" id="hamburger" class="peer hidden"/>
                <ul class="invisible peer-checked:visible sm:visible border-2 rounded-b">
                    <li>About</li>
                    <li>Register</li>
                    <li>Logout</li>
                    <li>Login</li>
                    <li>Settings</li>
                    <li>MailBox</li>
                </ul>
            </div>
            <!-- -->
            
        </header>
    </div>
</body>
</html>