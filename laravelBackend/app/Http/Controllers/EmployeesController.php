<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Employees;

class EmployeesController extends Controller
{
    public function index(){
        return Employees::all();
    }

    public function store(request $request){

        $employees = new Employees;
        $employees->name=$request->input('name');
        $employees->email=$request->input('email');
        $employees->save();

        return response()->json([
            'status'=>200,
            'message'=>'student added sucessfully',
        ]);
    }
}
