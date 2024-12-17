<?php

namespace Database\Factories;
use App\Models\Student;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class DemandeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $student = Student::inRandomOrder()->first();  // Get a random existing student

        return [
           'student_id' => $student->id, // Creates a related student
            'type_demande' => fake()->randomElement(['Convention de Stage', 'Attestation de Scolarité', 'Attestation de Réussite','Relevé des Notes']),
            'status' => fake()->randomElement(['Traitée', 'En cours', 'Non traitée']),
        ];
    }
}
