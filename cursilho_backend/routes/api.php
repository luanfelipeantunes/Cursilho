<?php

use App\Http\Controllers\EventsController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


//Eventos
Route::group(['prefix' => 'events'], function(){
    Route::post('/', [EventsController::class, 'store']);
    Route::get('/', [EventsController::class, 'index']);
    Route::delete('/{id}', [EventsController::class, 'destroy']);
    Route::patch('/{id}', [EventsController::class, 'update']);
    Route::get('/edit/{id}', [EventsController::class, 'edit']);
    Route::get('/show/{id}', [EventsController::class, 'show']);
});
