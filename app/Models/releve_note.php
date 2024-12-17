<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Releve_note extends Model
{
    use HasFactory;
    protected $fillable = ['annee', 'semestre', 'demande_id'];
}
