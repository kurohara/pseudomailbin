<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use Illuminate\Support\Facades\Hash;

use Laravel\Sanctum\NewAccessToken;

class AuthController extends Controller
{
    //
    public function register(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|confirmed',
        ]);

        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password']),
        ]);

        $token = $this->plainTextToken($user->createToken('myapptoken'));

        $response = [
            'user' => $user,
            'token' => $token,
        ];

        return response($response, 201);
    }

    public function login(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        // check email
        $user = User::where('email', $fields['email'])->first();
        // check password
        if (!$user || !Hash::check($fields['password'], $user->password)) {
            return response([
                'message' => 'Bad Credentials.',
            ], 401);
        }

        $token = $this->plainTextToken($user->createToken('myapptoken'));

        $response = [
            'user' => $user,
            'token' => $token,
        ];

        return response($response, 201);
    }

    private function plainTextToken(NewAccessToken $newtoken)
    {
        return $newtoken->plainTextToken;
    }

    public function logout(Request $request)
    {
        auth()->user()->tokens[0]->delete();

        return [
            'message' => 'Logged out'
        ];
    }
}
