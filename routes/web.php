<?php
use App\Http\Controllers\ReclamationController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\DemandeController;



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



//admin

Route::get('/reclamations_admin', [ReclamationController::class, 'showReclamations'])->name('reclamationadmin');;
Route::get('/probleme_technique/{id}', [ReclamationController::class, 'showProblemeTechnique'])->name('probleme_technique');
Route::get('/accepter_attestation_reuissite', [ReclamationController::class, 'attestationreuissitePDF'])->name('attestationreuissitePDF');

//fin








Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});





require __DIR__.'/auth.php';
