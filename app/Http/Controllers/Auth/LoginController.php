<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class LoginController extends Controller
{
    public function __construct()
    {
        $this->middleware(['guest']);
    }
    //
    public function index()
    {
        return view('auth.login');
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required|string'
        ]);

        if (!auth()->attempt($request->only('email', 'password'), $request->remember)) {
            return back()->with('status', __('Invalid credentials'));
        }

        // $user = User::where('email', $request->email)->first();
        // $token = $user->createToken('myapptoken')->plainTextToken;
        // Cookie::queue('SANCTUM-TOKEN', $token, 5, '/', 'localhost', false, false);

        return redirect()->route('home');
    }
}
