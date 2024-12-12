<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->integer('N_Apogee');
            $table->string('CNE');
            $table->string('filiere');
            $table->string('annee_inscription', 4);
            $table->string('niveau');
        });
        Schema::create('demande', function (Blueprint $table) {
            $table->id();
            $table->integer('id_student');
            $table->enum('type_demande', ['convention de stage ', 'attestation de scolarite', 'attestation de reussite','releve des notes']);
            $table->enum('status',['Traitée','En cours','Non traitée']);
            $table->date('date_demande');
            $table->string('id_admin')->nullable();
        });
        Schema::create('reclamation', function (Blueprint $table) {
            $table->id();
            $table->integer('id_student');
            $table->string('id_admin')->nullable();
            $table->enum('type',['Problèmes techniques','Problèmes de service école','Autre problème']);
            $table->text('contenu');
            $table->string('sujet');
            $table->date('date_reclamation');
        });
        Schema::create('convention_stage', function (Blueprint $table) {
            $table->id();
            $table->integer('id_demande');
            $table->string('Raison_social_de_entreprise');
            $table->string('Secteur_entreprise');
            $table->string('Telephone_entreprise');
            $table->string('Email_entreprise');
            $table->string('adresse_entreprise');
            $table->string('ville_entreprise');
            $table->string('representant_entreprise');
            $table->string('fonction_representant');
            $table->string('encadrant_entreprise');
            $table->string('fonction_encadrant');
            $table->string('telephone_encadrant');
            $table->string('email_encadrant');
            $table->string('encadrant_ensa');
            $table->string('encadrant_ensa');
            $table->date('date_debut');
            $table->date('date_fin');
            $table->text('sujet');
        });
        Schema::create('releve_notes', function (Blueprint $table) {
            $table->id();
            $table->integer('id_demande');
            $table->string('annee', 4);
            $table->enum('semestre',['Semestre 1','Semestre 2']);
        });
        Schema::create('attestation_reussite', function (Blueprint $table) {
            $table->id();
            $table->integer('id_demande');
            $table->string('annee', 4);
        });
        Schema::create('Notes', function (Blueprint $table) {
            $table->id();
            $table->integer('id_student');
            $table->integer('note');
            $table->integer('Module');
            $table->string('annee', 4);
        });



        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};
