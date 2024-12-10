<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route student
Route::get('/student', [StudentController::class, 'index'])->middleware('auth:sanctum');
Route::post('/student', [StudentController::class, 'store'])->middleware('auth:sanctum');
Route::put('/student/{id}', [StudentController::class, 'update'])->middleware('auth:sanctum');
Route::delete('/student/{id}', [StudentController::class, 'destroy'])->middleware('auth:sanctum');
Route::get('/student/{id}', [StudentController::class, 'show'])->middleware('auth:sanctum');

// Route Register dan Login
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);