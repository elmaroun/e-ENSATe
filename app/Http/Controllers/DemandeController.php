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
    public function showattestation_reussite()
    {
        return view('page-demande-attestation-reussite');
    }
    public function show_releve_note()
    {
        return view('page-demande-releve_note');
    }

}
