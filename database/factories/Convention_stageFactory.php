<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Demande;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class Convention_stageFactory extends Factory
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
           'demande_id' => $demande->id, 
            'Raison_social_de_entreprise' => fake()->company(),
            'Secteur_entreprise' => fake()->word(),
            'Telephone_entreprise' => fake()->phoneNumber(),
            'Email_entreprise' => fake()->companyEmail(),
            'adresse_entreprise' => fake()->address(),
            'ville_entreprise' => fake()->city(),
            'representant_entreprise' => fake()->name(),
            'fonction_representant' => fake()->word(),
            'encadrant_entreprise' => fake()->name(),
            'fonction_encadrant' => fake()->word(),
            'telephone_encadrant' => fake()->phoneNumber(),
            'email_encadrant' => fake()->email(),
            'encadrant_ensa' => fake()->name(),
            'date_debut' => fake()->date(),
            'date_fin' => fake()->date(),
            'sujet' => fake()->text(),
        ];
    }
}
