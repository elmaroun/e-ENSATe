<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Demande;
use App\Models\Student;
use App\Mail\DemandeFailed;
use App\Models\Reclamation;
use App\Models\Releve_note;
use App\Mail\DemandeSuccess;
use App\Mail\ReclamationFailed;
use Illuminate\Validation\Rule;
use App\Mail\ReclamationSuccess;
use App\Models\Convention_stage;
use Illuminate\Support\Facades\Log;
use App\Models\Attestation_reussite;
use Illuminate\Support\Facades\Mail;
use App\Models\Attestation_scolarite;
use Illuminate\Support\Facades\Route;
use Symfony\Component\HttpFoundation\Request;

class EtudiantController extends Controller
{

    // Reclamation

    public function storeReclamation(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|email',
            'CNE' => 'required|string',
            'N_Apogee' => 'required|integer',
            'type' => ['required', Rule::in(['Problème Technique', 'Problème de Service à l´école', 'Autre Problème'])],
            'contenu' => 'required|string|max:1000',
            'sujet' => 'required|string|max:255',
        ]);


        $student = Student::where('email', $data['email'])
        ->where('CNE', $data['CNE'])
        ->where('N_Apogee', $data['N_Apogee'])
        ->first();


        if (!$student) {
            Mail::to($data['email'])->send(new ReclamationFailed());
            return to_route('done')->with('noEtudiant', 'Aucun Etudiant');
        }

        $data['student_id'] = $student->id;

        Reclamation::create($data);

        $reclamation = Reclamation::latest()->first();
        Mail::to($data['email'])->send(new ReclamationSuccess($reclamation));

        return to_route('done')->with('message', 'Réussi');
            
    }


    // Demande

    public function storeDemande(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|email',
            'CNE' => 'required|string',
            'N_Apogee' => 'required|integer',
            'type_demande' => ['required', Rule::in(['Convention de Stage', 'Attestation de Scolarité', 'Attestation de Réussite', 'Relevé des Notes'])],
        ]);

        $student = Student::where('email', $data['email'])
            ->where('CNE', $data['CNE'])
            ->where('N_Apogee', $data['N_Apogee'])
            ->first();

        if (!$student) {
            Mail::to($data['email'])->send(new DemandeFailed());
            return to_route('done')->with('noEtudiant', 'Aucun Etudiant');
        }

        $data['student_id'] = $student->id;

        $demande = Demande::create($data);

        $demande = Demande::latest()->first();
        Mail::to($data['email'])->send(new DemandeSuccess($demande));

        if ($data['type_demande'] === 'Attestation de Scolarité') {

            $currentMonth = now()->month; 
            $year = in_array($currentMonth, [9, 10, 11, 12]) ? now()->year : now()->year - 1;

            Attestation_scolarite::create([
                'demande_id' => $demande->id,
                'annee' => $year,
            ]);
            
            return to_route('done')->with('message1', 'Réussi');
        }

        if ($data['type_demande'] === 'Relevé des Notes')
        {
            return to_route('form.releveNotes')->with('demande_id', $demande->id);
        } 
        else if ($data['type_demande'] === 'Convention de Stage') 
        {
            return to_route('form.conventionStage')->with('demande_id', $demande->id);
        } 
        else if ($data['type_demande'] === 'Attestation de Réussite') 
        {
            return to_route('form.attestationReussite')->with('demande_id', $demande->id);
        }

        return to_route('done')->with('message1', 'Réussi +-');

    }

    // Types des Demandes

    public function storeReleveNotes(Request $request)
    {
        $data = $request->validate([
            'semestre' => ['required', Rule::in(['Semestre 1', 'Semestre 2'])],
            'annee' => 'required|string',
            'demande_id' => 'required|exists:demandes,id',
        ]);
    
        Releve_note::create($data);
    
        return to_route('done')->with('message1', 'Réussi');
    }

    public function storeAttestationReussite(Request $request)
    {
        $data = $request->validate([
            'annee' => 'required|string',
            'demande_id' => 'required|exists:demandes,id',
        ]);
    
        Attestation_reussite::create($data);
    
        return to_route('done')->with('message1', 'Réussi');
    }

    public function storeConventionStage(Request $request)
    {
        $data = $request->validate([
            'demande_id' => 'required|exists:demandes,id',
            'Raison_social_de_entreprise' => 'required|string|max:255',
            'Secteur_entreprise' => 'required|string|max:255',
            'Telephone_entreprise' => 'required|string|max:15',
            'Email_entreprise' => 'required|email|max:255',
            'adresse_entreprise' => 'required|string|max:255',
            'ville_entreprise' => 'required|string|max:100',
            'representant_entreprise' => 'required|string|max:255',
            'fonction_representant' => 'required|string|max:255',
            'encadrant_entreprise' => 'required|string|max:255',
            'fonction_encadrant' => 'required|string|max:255',
            'telephone_encadrant' => 'required|string|max:15',
            'email_encadrant' => 'required|email|max:255',
            'encadrant_ensa' => 'required|string|max:255',
            'date_debut' => 'required|date|after_or_equal:today',
            'date_fin' => 'required|date|after:date_debut',
            'sujet' => 'required|string',
        ]);
    
        Convention_stage::create($data);
    
        return to_route('done')->with('message1', 'Réussi');
    }


 


}
