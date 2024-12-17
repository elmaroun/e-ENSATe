<?php

namespace Database\Factories;

use App\Models\Student;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ReclamationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $student=Student::inRandomOrder()->first();  // Get a random existing student
        // Get a random existing student

        return [
            'student_id' => $student->id,
            'type' => fake()->randomElement(['Problème Technique', 'Problème d´un Service à l´École', 'Autre Problème']),
            'contenu' => fake()->paragraph(),
            'sujet' => fake()->sentence(),
        ];
    }
}

