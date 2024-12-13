<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use App\Models\Student;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class NoteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $student= Student::inRandomOrder()->first();  // Get a random existing student

        return [
            'student_id' => $student->id, // Generates a random student
            'note' => fake()->numberBetween(0, 20),
            'Module' => fake()->randomElement(['Algèbre 1', 'Analyse 1', 'Informatique 1', 'Physique 1', 'Programmation', 'Mécanique des Fluides', 'Algorithmique', 'Résistance des Matériaux', 'Optimisation Mathématique', 'Anglais Technique']        ),
            'annee' => fake()->year()
        ];
    }
}
