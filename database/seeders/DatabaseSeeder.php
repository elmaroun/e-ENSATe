<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Student;
use App\Models\attestation_reussite;
use App\Models\Attestation_scolarite;
use App\Models\convention_stage;
use App\Models\Demande;
use App\Models\Note;
use App\Models\Reclamation;
use App\Models\releve_note;



use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
    User::factory(10)->create();
    Student::factory(50)->create();
    Demande::factory(40)->create();
    Reclamation::factory(30)->create();
    convention_stage::factory(20)->create();
    Releve_Note::factory(10)->create();
    Attestation_Reussite::factory(10)->create();
    Note::factory(80)->create();
   
        //User::factory()->create([
            //'name' => 'Test User',
            //'email' => 'test@example.com',
        //]);
    }
}
