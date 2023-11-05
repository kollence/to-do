<?php

use App\Http\Controllers\Api\AuthApiController;
use App\Http\Controllers\Api\TodoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/register', [AuthApiController::class, 'register']);
Route::post('/login', [AuthApiController::class, 'login']);

//Protected
Route::group(['middleware'=>'auth:sanctum'], function () {

    Route::post('/logout', [AuthApiController::class, 'logout']);

    Route::get('/user', function(Request $request){
        return ['data' => [
            'user' => $request->user(),
            'token' => $request->bearerToken()
        ]];
    });

    Route::apiResource('todos', TodoController::class);
});