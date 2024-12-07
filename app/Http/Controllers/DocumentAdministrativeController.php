<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DocumentAdministrativeController extends Controller
{
    public function showForm()
    {
        return view('document-administrative.form');
    }

    public function store(Request $request)
    {
        // Valider et enregistrer les données du formulaire
        $validatedData = $request->validate([
            'prenom' => 'required',
            'nom' => 'required',
            'email_institutionnel' => 'required|email',
            'cin' => 'required',
            'code_apogee' => 'required',
            'type_document' => 'required',
        ]);

        // Traiter la demande de document administratif
        // ...

        return redirect()->route('home')->with('success', 'Votre demande a été envoyée avec succès.');
    }
}