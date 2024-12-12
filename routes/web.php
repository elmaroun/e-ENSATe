<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\DemandeController;

use App\Http\Controllers\ReclamationController;

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




Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});









Route::get('/Demande_convention_stage', [DemandeController::class, 'showDemande_convention'])
    ->name('Demande_convention');

Route::get('/Demande_attestation_reussite', [DemandeController::class, 'showattestation_reussite'])
    ->name('Demande_attestation_reussite');

 Route::get('/Demande_releve_notes', [DemandeController::class, 'show_releve_note'])
    ->name('Demande_releve_note');


require __DIR__.'/auth.php';
