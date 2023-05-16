<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\EmployeesController;

Route::get('/employee' , [EmployeesController::class , 'index']);
 
Route::post('/add-student',[EmployeesController::class,'store']);