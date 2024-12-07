<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReclamationController extends Controller
{
    public function showReclamation()
    {
        return view('page-reclamation');
    }
}
