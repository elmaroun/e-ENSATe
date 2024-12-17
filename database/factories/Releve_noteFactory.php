<?php

namespace Database\Factories;
use App\Models\Student;
use App\Models\Demande;


use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class Releve_noteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $demande= Demande::inRandomOrder()
        ->where('demandes.type', "Relevé des Notes")
        ->first();  // Get a random existing student

        return [
            'demande_id' => $demande->id, 
            'annee' => fake()->numberBetween(2010, date('Y')),
            'semestre' => fake()->randomElement(['Semestre 1', 'Semestre 2']),
        ];
    }
}
