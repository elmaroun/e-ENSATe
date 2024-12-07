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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



Route::get('/welcome', [WelcomeController::class, 'showwelcome'])
    ->name('welcome');


Route::get('/Reclamation', [ReclamationController::class, 'showReclamation'])
    ->name('reclalamtion');

Route::get('/Demande', [DemandeController::class, 'showDemande'])
    ->name('Demande');


Route::get('/Demande_convention_stage', [DemandeController::class, 'showDemande_convention'])
    ->name('Demande_convention');




require __DIR__.'/auth.php';
