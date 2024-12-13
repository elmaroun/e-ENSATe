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
        $demande= Demande::inRandomOrder()->first();  // Get a random existing student

        return [
            'demande_id' => $demande->id, // Generates a random demande
            'annee' => fake()->year(),
        ];
    }
}
