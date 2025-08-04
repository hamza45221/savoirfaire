<?php

use App\Models\Images;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $images = Images::all();
    return view('welcome',compact('images'));
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


Route::group(['prefix'=>'admin'], function () {
    Route::get('/dashboard', [App\Http\Controllers\Admin\AdminController::class, 'index'])->name('admin.dashboard');




    Route::group(['prefix'=>'image'],function(){
        Route::get('/',[\App\Http\Controllers\Admin\ImageController::class,'index'])->name('admin.image');
        Route::get('/fetch',[\App\Http\Controllers\Admin\ImageController::class,'fetch'])->name('admin.image.fetch');
        Route::post('/store',[\App\Http\Controllers\Admin\ImageController::class,'store'])->name('admin.image.store');
        Route::post('/delete-multiple',[\App\Http\Controllers\Admin\ImageController::class,'deleteMultiple'])->name('admin.image.delete.multiple');
        Route::get('/delete/{id}',[\App\Http\Controllers\Admin\ImageController::class,'delete'])->name('admin.image.delete');
    });
//
    Route::group(['prefix' => 'content'], function () {
        Route::get('/', [App\Http\Controllers\Admin\ContentController::class, 'index'])->name('admin.content');
        Route::post('/store', [App\Http\Controllers\Admin\ContentController::class, 'store'])->name('admin.content.store');
    });



});
