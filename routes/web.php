<?php
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\DemandeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\EtudiantController;

use App\Http\Controllers\CustomAdminController;
use App\Http\Controllers\ReclamationController;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/welcome', function () {
    return Inertia::render('Etudiant/welcome');
})->name('welcome');

Route::get('/demande', function () {
    return Inertia::render('Etudiant/demande_document');
})->name('demande_document');

Route::get('/reclamation', function () {
    return Inertia::render('Etudiant/reclamation');
})->name('reclamation');

Route::get('/dashboard', function () {
    return Inertia::render('Admin/dashboard');
})->name('dashboard');

Route::get('/contacter-nous', function () {
    return Inertia::render('Etudiant/contacter');
})->name('contacter');

Route::get('/demande-releve-notes', function () {
    return Inertia::render('Etudiant/type_demande/DemandeReleveNote');
})->name('DemandeReleveNote');

Route::get('/demande-convention', function () {
    return Inertia::render('Etudiant/type_demande/demandeconvention');
})->name('DemandeConvention');

Route::get('/demande-attestation', function () {
    return Inertia::render('Etudiant/type_demande/DemandeAttestationReussite');
})->name('DemandeAttestation');



//admin

Route::get('/reclamations_admin', [ReclamationController::class, 'showReclamations'])->name('reclamationadmin');;
Route::get('/probleme_technique/{id}', [ReclamationController::class, 'showProblemeTechnique'])->name('probleme_technique');
Route::get('/accepter_attestation_reuissite/{id}', [ReclamationController::class, 'attestationreuissitePDF'])->name('attestationreuissitePDF');

//fin

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';



Route::get('/', function () {
    return to_route('welcome');
});



/////// Admin

Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->name('dashboard');

// Demandes & Reclamations Tables

Route::get('/reclamations', [ReclamationController::class, 'showReclamations'])->name('reclamationadmin');
Route::get('/demandes', [CustomAdminController::class,'show'])->name('traitement_demande');



Route::get('/probleme_technique/{id}', [ReclamationController::class, 'showProblemeTechnique'])->name('probleme_technique');
Route::get('/accepter_attestation_reuissite', [ReclamationController::class, 'attestationreuissitePDF'])->name('attestationreuissitePDF');



Route::get('/demande-details-convention/{id}', [CustomAdminController::class,'show_convention'])->name('detailsdemandeconvention');
Route::get('/demande-details-attestation-reussite/{id}', [CustomAdminController::class,'show_attestation_reussite'])->name('detailsdemandeattestationreussite');
Route::get('/demande-details-attestation-scolarite/{id}', [CustomAdminController::class,'show_attestation_scolarite'])->name('detailsdemandeattestationscolarite');
Route::get('/demande-details-releve-notes/{id}', [CustomAdminController::class,'show_releve_notes'])->name('detailsdemanderelevenote');


Route::get('/accepter_convention_stage/{id}', [CustomAdminController::class,'accepter_demande_convention'])->name('accepter.demande.convention');
Route::get('/accepter_attestation_scolarite/{id}', [CustomAdminController::class,'accepter_attestation_scolarite'])->name('accepter.demande.attestation.scolarite');
Route::get('/accepter_relevee_notes/{id}', [CustomAdminController::class,'accepter_relevee_notes'])->name('accepter.demande.relevee_notes');












///// Etudiant 

// Welcome & Contact

Route::get('/welcome', function () {
    return Inertia::render('Etudiant/Welcome');
})->name('welcome');

Route::get('/contacter-nous', function () {
    return Inertia::render('Etudiant/Contacter');
})->name('contacter');


// Demande & Reclamation

Route::get('/demande', function () {
    return Inertia::render('Etudiant/Demande');
})->name('form.demande');

Route::get('/reclamation', function () {
    return Inertia::render('Etudiant/Reclamation');
})->name('form.reclamation');


// Types Demandes

Route::get('/releve_notes', function () {
    return Inertia::render('Etudiant/TypeDemande/ReleveNotes', [
        'demande_id' => session('demande_id'),
    ]);
})->name('form.releveNotes');

Route::get('/convention_stage', function () {
    return Inertia::render('Etudiant/TypeDemande/ConventionStage', [
        'demande_id' => session('demande_id'),
    ]);
})->name('form.conventionStage');

Route::get('/attestation_reussite', function () {
    return Inertia::render('Etudiant/TypeDemande/AttestationReussite', [
        'demande_id' => session('demande_id'),
    ]);
})->name('form.attestationReussite');


// Store Reclamation & Demande

Route::post('/storeReclamation', [EtudiantController::class, 'storeReclamation'])->name('storeReclamation');
Route::post('/storeDemande', [EtudiantController::class, 'storeDemande'])->name('storeDemande');

Route::post('/storeReleveNotes', [EtudiantController::class, 'storeReleveNotes'])->name('storeReleveNotes');
Route::post('/storeAttestationReussite', [EtudiantController::class, 'storeAttestationReussite'])->name('storeAttestationReussite');
Route::post('/storeConventionStage', [EtudiantController::class, 'storeConventionStage'])->name('storeConventionStage');


Route::get('/resultat', function () {
    return Inertia::render('Etudiant/Done', [
        'message' => session('message'),
        'message1' => session('message1'),
        'noEtudiant' => session('noEtudiant'),
    ]);
})->name('done');




