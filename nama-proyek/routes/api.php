<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->group(function () {
    // Rute API yang membutuhkan autentikasi

    // Contoh rute untuk mendapatkan data pengguna yang sudah terautentikasi
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    // Contoh rute untuk menyimpan data pengguna yang sudah terautentikasi
    Route::post('/user', function (Request $request) {
        // Logika untuk menyimpan data pengguna
    });
});

// Rute API tanpa autentikasi

// Contoh rute untuk mendapatkan data publik
Route::get('/public-data', function () {
    // Logika untuk mendapatkan data publik
});

// Contoh rute untuk menyimpan data publik
Route::post('/public-data', function (Request $request) {
    // Logika untuk menyimpan data publik
});


