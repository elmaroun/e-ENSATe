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

        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
        Schema::dropIfExists('reclamation');
        Schema::dropIfExists('convention_stage');
        Schema::dropIfExists('releve_notes');
        Schema::dropIfExists('attestation_reussite');
        Schema::dropIfExists('notes');
        Schema::dropIfExists('demande');
        Schema::dropIfExists('users');
        Schema::dropIfExists('students');


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
            $table->timestamps();
        });
        Schema::create('demandes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('student_id')->constrained('students')->onDelete('cascade')->onUpdate('cascade');
            $table->enum('type', ['Convention de Stage ', 'Attestation de Scolarité', 'Attestation de Réussite','Relevé des Notes']);
            $table->enum('status',['Traitée','En cours','Non traitée'])->default('Non traitée');
            $table->timestamps();

        });
        Schema::create('reclamations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('student_id')->constrained('students')->onDelete('cascade')->onUpdate('cascade');
            $table->enum('type',['Problème Technique','Problème d´un Service à l´École','Autre Problème']);
            $table->text('contenu');
            $table->string('sujet');
            $table->enum('status',['Traitée','En cours','Non traitée'])->default('Non traitée');
            $table->timestamps();

        });
        Schema::create('convention_stages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('demande_id')->constrained('demandes')->onDelete('cascade')->onUpdate('cascade');
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
            $table->date('date_debut');
            $table->date('date_fin');
            $table->text('sujet');
            $table->timestamps();

        });
        Schema::create('releve_notes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('demande_id')->constrained('demandes')->onDelete('cascade')->onUpdate('cascade');
            $table->string('annee', 4);
            $table->enum('semestre',['Semestre 1','Semestre 2']);
            $table->timestamps();

        });
        Schema::create('attestation_reussites', function (Blueprint $table) {
            $table->id();
            $table->foreignId('demande_id')->constrained('demandes')->onDelete('cascade')->onUpdate('cascade');
            $table->string('annee', 4);
            $table->timestamps();

        });
        Schema::create('attestation_scolarites', function (Blueprint $table) {
            $table->id();
            $table->foreignId('demande_id')->constrained('demandes')->onDelete('cascade')->onUpdate('cascade');
            $table->string('annee', 4);
            $table->timestamps();

        });
        Schema::create('notes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('student_id')->constrained('students')->onDelete('cascade')->onUpdate('cascade');
            $table->integer('note');
            $table->String('Module');
            $table->string('annee', 4);
            $table->enum('semestre',['Semestre 1','Semestre 2']);
            $table->timestamps();

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
        Schema::dropIfExists('students');
        Schema::dropIfExists('demandes');

        Schema::dropIfExists('reclamations');
        Schema::dropIfExists('convention_stages');
        Schema::dropIfExists('releve_notes');
        Schema::dropIfExists('attestation_reussites');
        Schema::dropIfExists('notes');



    }
};
