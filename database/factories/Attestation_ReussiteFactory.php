<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use App\Models\Student;
use App\Models\Demande;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class Attestation_ReussiteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    
    public function definition(): array
    {
        $demande= Demande::inRandomOrder()
        ->where('demandes.type_demande', "Attestation de Réussite")
        ->first();  

        return [
            'demande_id' => $demande->id, 
            'annee' => fake()->numberBetween(2010, date('Y')),

        ];
    }
}
