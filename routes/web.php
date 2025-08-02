<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
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
//    Route::group(['prefix' => 'contact'], function () {
//        Route::get('/', [App\Http\Controllers\Admin\ContactController::class, 'index'])->name('admin.contact');
//        Route::post('/store', [App\Http\Controllers\Admin\ContactController::class, 'store'])->name('admin.contact.store');
//    });



});
