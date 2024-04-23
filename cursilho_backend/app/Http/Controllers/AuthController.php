<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required | min:4',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'message' => 'User registered!',
        ]);
    }

    public function login(Request $request){
        $request->validate([
            'email' => 'required',
            'password' => 'required | min:4',
        ]);

        if(!Auth::attempt($request->only('email', 'password'))){
            return response()->json(['message'=>'Unauthorized'], 401);
        }

        $user = Auth::user();
        $token = $request->user()->createToken('auth_token')->plainTextToken;

        return response()->json(['message' => 'Login sucessfull', 'token' => $token]);
    }

    public function logout(Request $request){
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Logout sucessfull'], 200);
    }
}
