<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DemandeController extends Controller
{
    public function showDemande()
    {
        return view('page-demande');
    }

    public function showDemande_convention()
    {
        return view('page-demande-convention');
    }

}
