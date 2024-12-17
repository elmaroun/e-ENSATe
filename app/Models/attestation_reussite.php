<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Attestation_reussite extends Model
{
    use HasFactory;
    protected $fillable = ['annee', 'demande_id'];
}
