<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    // // Membuat fitur register
    // public function register(Request $request){
    //     // Menangkap inputan
    //     $input = [
    //         'name' => $request->nama,
    //         'email' => $request->email,
    //         'password' => Hash::make($request->password)
    //     ];

    //     // Menginput data ke table user
    //     $user = User::create($input);

    //     $data = [
    //         'message' => 'User is created succesfully'
    //     ];

    //     // Mengirim data ke JSON
    //     return response()->json($data, 200);
    // }

    public function register(Request $request) {
        // menangkap inputan
        $input = [
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ];

        // menginsert data ke tabel user
        $use = User::create($input);

        $data = [
            'message' => 'User berhasil dibuat'
        ];

        return response()->json($data, 200);
    }

    public function login(Request $request) {
        // Menangkap input user
        $input = [
            'email' => $request->email,
            'password' => $request->password
        ];

        // Mengambil data user (DB)
        $user = User::where('email', $input['email'])->first();

        // Membandingkan input user dengan data user (DB)
        $loginberhasil = (
            $input['email'] == $user->email
            &&
            Hash::check($input['password'], $user->password)
        );

        if ($loginberhasil) {
            // Membuat token
            $token = $user->createToken('auth_token');
            // $token = Auth::user()->createToken('auth_token');

            $data = [
                'message' => 'login berhasil',
                'token' => $token->plainTextToken
            ];

            // Mengembalikan response JSON
            return response()->json($data, 200);
        } else{
            $data = [
                'message' => 'Username atau password salah'
            ];
            return response()->json($data, 401);
        }
    }
}
