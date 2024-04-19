<?php

use App\Http\Controllers\EventsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Symfony\Component\HttpKernel\DependencyInjection\RegisterControllerArgumentLocatorsPass;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\ForgotPasswordController;

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
Route::group(['prefix' => 'events'], function(){
    Route::post('/', [EventsController::class, 'store']);
    Route::get('/', [EventsController::class, 'index']) -> name('events.index');
    Route::delete('/{id}', [EventsController::class, 'destroy']);
    Route::patch('/{id}', [EventsController::class, 'update']);
    Route::get('/{id}', [EventsController::class, 'edit']);
    Route::get('/show/{id}', [EventsController::class, 'show']);
});


//Users
Route::group(['prefix' => 'users'], function() {
    Route::get('/register', [RegisterController::class, 'create']);
    Route::post('/register', [RegisterController::class, 'store']);
    Route::post('/logout', [LogoutController::class, 'destroy'])
        ->middleware('auth');
    Route::post('/forgot-password', [ForgotPasswordController::class, 'store']);
    Route::post('/forgot-password/{token}', [ForgotPasswordController::class, 'reset']);
});
