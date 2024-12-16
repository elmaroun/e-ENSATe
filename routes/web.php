<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\DemandeController;
use App\Http\Controllers\CustomAdminController;

use Inertia\Inertia;

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






Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

//administrateur
Route::get('/traitement_demande', [CustomAdminController::class,'show'])->name('traitement_demande');


Route::get('/demande-details-convention/{id}', [CustomAdminController::class,'show_convention'])->name('detailsdemandeconvention');
Route::get('/demande-details-attestation-reussite/{id}', [CustomAdminController::class,'show_attestation_reussite'])->name('detailsdemandeattestationreussite');
Route::get('/demande-details-attestation-scolarite/{id}', [CustomAdminController::class,'show_attestation_scolarite'])->name('detailsdemandeattestationscolarite');
Route::get('/demande-details-releve-notes/{id}', [CustomAdminController::class,'show_releve_notes'])->name('detailsdemanderelevenote');




Route::get('/acceptet_convention_stage', [CustomAdminController::class,'accepter_demande_convention'])->name('accepter.demande.convention');
Route::get('/acceptet_attestation_scolarite', [CustomAdminController::class,'accepter_attestation_scolarite'])->name('accepter.demande.attestation.scolarite');
Route::get('/acceptet_relevee_notes', [CustomAdminController::class,'accepter_relevee_notes'])->name('accepter.demande.relevee_notes');












Route::get('/Demande_convention_stage', [DemandeController::class, 'showDemande_convention'])
    ->name('Demande_convention');

Route::get('/Demande_attestation_reussite', [DemandeController::class, 'showattestation_reussite'])
    ->name('Demande_attestation_reussite');

 Route::get('/Demande_releve_notes', [DemandeController::class, 'show_releve_note'])
    ->name('Demande_releve_note');


require __DIR__.'/auth.php';
