<?php

use App\Http\Controllers\EventsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Symfony\Component\HttpKernel\DependencyInjection\RegisterControllerArgumentLocatorsPass;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


//Events

Route::group(['prefix' => 'events'], function () {
    Route::get('/', [EventsController::class, 'index'])->name('events.index');
    Route::get('/show/{id}', [EventsController::class, 'show']);

    //Acessível apenas para usuários logados
    Route::middleware('auth:sanctum')->group(function () {
        Route::post('/', [EventsController::class, 'store']);
        Route::delete('/{id}', [EventsController::class, 'destroy']);
        Route::patch('/{id}', [EventsController::class, 'update']);
        Route::get('/{id}', [EventsController::class, 'edit']);
    });
});


//Users

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
    Route::get('/user', [UserController::class, 'getUser']);
});
