<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\Api\ServerSettingsController;
use App\Http\Controllers\Api\MailBoxSettingsController;

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

// Route::resource('messages', MessageController::class);
Route::group(['middleware' => ['auth:sanctum'] ], function () {
    Route::post('/messages', [MessageController::class, 'store']);
    Route::put('/messages/{id}', [MessageController::class, 'update']);
    Route::delete('/messages/{id}', [MessageController::class, 'destroy']);

    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/settings/server', [ServerSettingsController::class, 'index']);
    Route::get('/settings/mailboxes', [MailBoxSettingsController::class, 'index']);
    Route::post('/settings/mailboxes', [MailBoxSettingsController::class, 'store']);
    Route::delete('/settings/mailboxes/{id}', [MailBoxSettingsController::class, 'destroy']);
    Route::put('/settings/mailboxes/{id}', [MailBoxSettingsController::class, 'update']);

    Route::get('/messages', [MessageController::class, 'index']);
    Route::get('/messages/{id}', [MessageController::class, 'show']);
    Route::get('/messages/search/{subject}', [MessageController::class, 'search']);
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
