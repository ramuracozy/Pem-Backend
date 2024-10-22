<?php

use App\Http\Controllers\AnimalsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

# Metode get
Route::get('/animals',[AnimalsController::class, 'index']);

# Metode post
Route::post('/animals',[AnimalsController::class, 'store']);

# Metode put
Route::put('/animals/{id}',[AnimalsController::class, 'update']);

# Metode delete
Route::delete('/animals/{id}',[AnimalsController::class, 'delete']);
