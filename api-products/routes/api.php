<?php

use Illuminate\Support\Facades\Route;

Route::apiResource('/products','ProductController');
Route::group(['prefix'=>'products'],function(){

});
