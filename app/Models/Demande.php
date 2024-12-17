<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Demande extends Model
{
    use HasFactory;
    protected $fillable = ['student_id', 'type', 'status'];
}
