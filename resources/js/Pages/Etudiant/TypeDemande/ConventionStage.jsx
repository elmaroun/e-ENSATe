import Header from "@/Components/Header";
import { Head, Link, useForm } from "@inertiajs/react";
import React, { useState } from "react";


export default function ConventionStage({ demande_id }) {

  const { data, setData, post } = useForm({
    demande_id: demande_id, 
    Raison_social_de_entreprise: "",
    Secteur_entreprise: "",
    Telephone_entreprise: "",
    Email_entreprise: "",
    adresse_entreprise: "",
    ville_entreprise: "",
    representant_entreprise: "",
    fonction_representant: "",
    encadrant_entreprise: "",
    fonction_encadrant: "",
    telephone_encadrant: "",
    email_encadrant: "",
    encadrant_ensa: "",
    date_debut: "",
    date_fin: "",
    sujet: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    post(route("storeConventionStage"));
  };


  const today = new Date().toISOString().split("T")[0];

  const [minEndDate, setMinEndDate] = useState(today); 

  const handleStartDateChange = (value) => {
    // Update the form state for date_debut
    setData("date_debut", value); 
  
    // Set the minimum value for date_fin to the new date_debut
    setMinEndDate(value); 
  
    // Reset date_fin if it becomes invalid
    if (data.date_fin && data.date_fin < value) {
      setData("date_fin", ""); 
    }
  };


  return (
    <div className="bg-white">
      <Header />
      <Head title="Convention de Stage" />

      <div className="relative isolate px-6 pt-14 lg:px-8">
          <h2 className="mt-10 text-center text-3xl/9 font-bold tracking-tight text-gray-900">
            Demande de Convention de Stage
          </h2>

      <div className="mx-auto max-w-2xl py-32 sm:py-15 lg:pb-52 pt-15">
      <form onSubmit={onSubmit}>
        <div className="space-y-12">
          
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-lg/7 font-semibold text-gray-900">Informations sur le stage</h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              
              <div className="sm:col-span-3">
                <label htmlFor="Raison_social_de_entreprise" className="block text-sm/6 font-medium text-gray-900">
                  Raison sociale de l'entreprise
                </label>
                <div className="mt-2">
                  <input
                    id="Raison_social_de_entreprise"
                    name="Raison_social_de_entreprise"
                    type="text"
                    required
                    autoComplete="off"
                    value={data.Raison_social_de_entreprise} 
                    onChange={(e) => setData("Raison_social_de_entreprise", e.target.value)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="Secteur_entreprise" className="block text-sm/6 font-medium text-gray-900">
                  Secteur de l'entreprise
                </label>
                <div className="mt-2">
                  <input
                    id="Secteur_entreprise"
                    name="Secteur_entreprise"
                    type="text"
                    required
                    autoComplete="off"
                    value={data.Secteur_entreprise} 
                    onChange={(e) => setData("Secteur_entreprise", e.target.value)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>



              <div className="sm:col-span-3">
                <label htmlFor="Telephone_entreprise" className="block text-sm/6 font-medium text-gray-900">
                  Telephone de l'entreprise
                </label>
                <div className="mt-2">
                  <input
                    id="Telephone_entreprise"
                    name="Telephone_entreprise"
                    type="text"
                    required
                    autoComplete="off"
                    value={data.Telephone_entreprise} 
                    onChange={(e) => setData("Telephone_entreprise", e.target.value)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="Email_entreprise" className="block text-sm/6 font-medium text-gray-900">
                  Email de l'entreprise
                </label>
                <div className="mt-2">
                  <input
                    id="Email_entreprise"
                    name="Email_entreprise"
                    type="email"
                    required
                    autoComplete="off"
                    value={data.Email_entreprise} 
                    onChange={(e) => setData("Email_entreprise", e.target.value)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="adresse_entreprise" className="block text-sm/6 font-medium text-gray-900">
                  Adresse de l'entreprise
                </label>
                <div className="mt-2">
                  <input
                    id="adresse_entreprise"
                    name="adresse_entreprise"
                    type="text"
                    required
                    autoComplete="off"
                    value={data.adresse_entreprise} 
                    onChange={(e) => setData("adresse_entreprise", e.target.value)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="ville_entreprise" className="block text-sm/6 font-medium text-gray-900">
                  Ville de l'entreprise
                </label>
                <div className="mt-2">
                  <input
                    id="ville_entreprise"
                    name="ville_entreprise"
                    type="text"
                    required
                    autoComplete="off"
                    value={data.ville_entreprise} 
                    onChange={(e) => setData("ville_entreprise", e.target.value)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="representant_entreprise" className="block text-sm/6 font-medium text-gray-900">
                  Representant de l'entreprise
                </label>
                <div className="mt-2">
                  <input
                    id="representant_entreprise"
                    name="representant_entreprise"
                    type="text"
                    required
                    autoComplete="off"
                    value={data.representant_entreprise} 
                    onChange={(e) => setData("representant_entreprise", e.target.value)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="fonction_representant" className="block text-sm/6 font-medium text-gray-900">
                  Fonction du representant
                </label>
                <div className="mt-2">
                  <input
                    id="fonction_representant"
                    name="fonction_representant"
                    type="text"
                    required
                    autoComplete="off"
                    value={data.fonction_representant} 
                    onChange={(e) => setData("fonction_representant", e.target.value)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              
              <div className="sm:col-span-3">
                <label htmlFor="encadrant_entreprise" className="block text-sm/6 font-medium text-gray-900">
                  Encadrant de l'entreprise
                </label>
                <div className="mt-2">
                  <input
                    id="encadrant_entreprise"
                    name="encadrant_entreprise"
                    type="text"
                    required
                    autoComplete="off"
                    value={data.encadrant_entreprise} 
                    onChange={(e) => setData("encadrant_entreprise", e.target.value)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>

          
              </div>


              <div className="sm:col-span-3">
                <label htmlFor="fonction_encadrant" className="block text-sm/6 font-medium text-gray-900">
                  Fonction de Encadrant de l'entreprise
                </label>
                <div className="mt-2">
                  <input
                    id="fonction_encadrant"
                    name="fonction_encadrant"
                    type="text"
                    required
                    autoComplete="off"
                    value={data.fonction_encadrant} 
                    onChange={(e) => setData("fonction_encadrant", e.target.value)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>

          
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="telephone_encadrant" className="block text-sm/6 font-medium text-gray-900">
                  Tel. de l'encadrant de l'entreprise
                </label>
                <div className="mt-2">
                  <input
                    id="telephone_encadrant"
                    name="telephone_encadrant"
                    type="text"
                    required
                    autoComplete="off"
                    value={data.telephone_encadrant} 
                    onChange={(e) => setData("telephone_encadrant", e.target.value)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="email_encadrant" className="block text-sm/6 font-medium text-gray-900">
                  Email de l'encadrant de l'entreprise
                </label>
                <div className="mt-2">
                  <input
                    id="email_encadrant"
                    name="email_encadrant"
                    type="email"
                    required
                    autoComplete="off"
                    value={data.email_encadrant} 
                    onChange={(e) => setData("email_encadrant", e.target.value)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>


              <div className="sm:col-span-4">
                <label htmlFor="encadrant_ensa" className="block text-sm/6 font-medium text-gray-900">
                Encadrant de l'ENSA 
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    id="encadrant_ensa"
                    name="encadrant_ensa"
                    required
                    autoComplete="off"
                    value={data.encadrant_ensa} 
                    onChange={(e) => setData("encadrant_ensa", e.target.value)}
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option hidden>Encadrant</option>
                    <option>Ilias Maroun</option>
                    <option>Rajae El-abida</option>
                </select>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="date_debut" className="block text-sm/6 font-medium text-gray-900">
                Stage du : 
                </label>
                  <div className="mt-2">
                    <input
                      id="date_debut"
                      name="date_debut"
                      type="date"
                      required
                      autoComplete="off"
                      value={data.date_debut || ""} 
                      min={today} 
                      onChange={(e) => handleStartDateChange(e.target.value)}


                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  
                  </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="date_fin" className="block text-sm/6 font-medium text-gray-900">
                Stage au : 
                </label>
                <div className="mt-2">
                <input
                    id="date_fin"
                    name="date_fin"
                    type="date"
                    required
                    autoComplete="off"
                    value={data.date_fin} 
                    min={minEndDate} 
                    onChange={(e) => setData("date_fin", e.target.value)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                  
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="sujet" className="block text-sm/6 font-medium text-gray-900">
                  Sujet
                </label>
                <div className="mt-2">
                  <textarea
                    id="sujet"
                    name="sujet"
                    rows={5}
                    required
                    autoComplete="off"
                    value={data.sujet} 
                    onChange={(e) => setData("sujet", e.target.value)}
                    className="block w-full min-h-32 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              

            </div>
          </div>
        </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
                  
            <Link
              href={route('welcome')}
              className="text-sm/6 font-semibold text-gray-900"
            >
              Annuler
            </Link>

            <button
              type="submit"
              className="rounded-md bg-blue-800 bg-opacity-90 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Confirmer la Demande
            </button>

          </div>

      </form>

        
            </div>
          </div>
        </div>
  );
}