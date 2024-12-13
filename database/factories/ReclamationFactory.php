<?php

namespace Database\Factories;

use App\Models\Student;
use App\Models\User;

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
        $user= User::inRandomOrder()->first();
        $student=Student::inRandomOrder()->first();  // Get a random existing student
        // Get a random existing student

        return [
            'student_id' => $student->id,
            'admin_id' => $user->id,
            'type' => fake()->randomElement(['Problèmes techniques', 'Problèmes de service école', 'Autre problème']),
            'contenu' => fake()->paragraph(),
            'sujet' => fake()->sentence(),
            'date_reclamation' => fake()->date(),
        ];
    }
}
