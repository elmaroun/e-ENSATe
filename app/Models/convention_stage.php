<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Convention_stage extends Model
{
    use HasFactory;
    protected $fillable = [
        'demande_id',
        'Raison_social_de_entreprise',
        'Secteur_entreprise',
        'Telephone_entreprise',
        'Email_entreprise',
        'adresse_entreprise',
        'ville_entreprise',
        'representant_entreprise',
        'fonction_representant',
        'encadrant_entreprise',
        'fonction_encadrant',
        'telephone_encadrant',
        'email_encadrant',
        'encadrant_ensa',
        'date_debut',
        'date_fin',
        'sujet',
    ];
}
