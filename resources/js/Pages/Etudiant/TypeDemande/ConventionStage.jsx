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
                    <option>CHKOURI Mohamed Yassin - INFO</option>
                    <option>LARIOUI Sanae - ADMIN</option>
                    <option>CHOUIEKH Mohamed - ADMIN</option>
                    <option>REKLAOUI KAMAL - ADMIN</option>
                    <option>EL OUALKADI AHMED - ADMIN</option>
                    <option>EL YAMOUNI Bouraida - ADMIN</option>
                    <option>MAHFOUDI Mohammed - EST</option>
                    <option>EL HAMMOUMI Aboubakr - EST</option>
                    <option>MARZOUKI Faouzi - EST</option>
                    <option>BELMIR IBRAHIM - HUMANITES</option>
                    <option>ISLAMI Chakib - HUMANITES</option>
                    <option>LAIMOUNA Bahija - HUMANITES</option>
                    <option>MALLA HUSSEIN Sawsan - HUMANITES</option>
                    <option>NEJJARI Amel - HUMANITES</option>
                    <option>RGUIG Sara - HUMANITES</option>
                    <option>AZAIMI Karima - HUMANITES</option>
                    <option>AGHZOUT Otman - IAD</option>
                    <option>AYTOUNA Fouad - IAD</option>
                    <option>BENTAJER AHMED - IAD</option>
                    <option>KHOULJI Samira - IAD</option>
                    <option>ZBITOU Jamal - IAD</option>
                    <option>BELCAID Anass - IAD</option>
                    <option>ABTOY Anouar - INFO</option>
                    <option>AL ACHHAB Mohammed - INFO</option>
                    <option>BESRI Zineb - INFO</option>
                    <option>CHRAYAH Mohamed - INFO</option>
                    <option>EL BOUHDIDI Jaber - INFO</option>
                    <option>EL HAJJAMY OUSSAMA - INFO</option>
                    <option>EL KHAMLICHI  Yasser - INFO</option>
                    <option>EL YOUNOUSSI Yacine - INFO</option>
                    <option>JOURANI Reda - INFO</option>
                    <option>MANSOUR Abdeljebbar - INFO</option>
                    <option>MESMOUDI Yasser - INFO</option>
                    <option>TAHIRI Abderrahim - INFO</option>
                    <option>HACHCHANE Imane - INFO</option>
                    <option>EL BAKARI ABDELALI - ITSI</option>
                    <option>EL MOURABIT Youness - ITSI</option>
                    <option>HADDI Ali - ITSI</option>
                    <option>HAJAJI Anas - ITSI</option>
                    <option>MAHBOUB Oussama - ITSI</option>
                    <option>MEDOURI Abdellatif - ITSI</option>
                    <option>NASRI Khalid - ITSI</option>
                    <option>SANBI Mustapha - ITSI</option>
                    <option>MOUTAKKI Zakaria - ITSI</option>
                    <option>AZEROUAL Boubker - SMAD</option>
                    <option>BOUKOUR Mustapha - SMAD</option>
                    <option>CHERKAOUI Mohamed - SMAD</option>
                    <option>DKHISSI Btissam - SMAD</option>
                    <option>ECH-CHARRAT Mohammed Rida - SMAD</option>
                    <option>EL BIARI Aouatef - SMAD</option>
                    <option>EL FALLAHI Abdellah - SMAD</option>
                    <option>LAJJAM Azza - SMAD</option>
                    <option>LOUARTITI Khalid - SMAD</option>
                    <option>LOULY Adel - SMAD</option>
                    <option>SARIR Hicham - SMAD</option>
                    <option>ZLAIJI Loubna - SMAD</option>
                    <option>OKAR CHAFIK - SMAD</option>
                    <option>FILALI Youness - SMAD</option>
                    <option>EL HAKOUME Abdelmajid - SMAD</option>
                    <option>EL MOIZE Othmane - SMAD</option>
                    <option>AIT LHASSAN  Imad - SMAD</option>
                    <option>ACHEGAF Zineb - STIC</option>
                    <option>ATTAJKANI Sabri - STIC</option>
                    <option>BANNOUR Abdelilah - STIC</option>
                    <option>BOUNAB Loubna - STIC</option>
                    <option>EL KHANNOUSSI Fadoua - STIC</option>
                    <option>JOUILEL Naima - STIC</option>
                    <option>KHAMLICHI Abdellatif - STIC</option>
                    <option>O.BENZAROUALA Rachad - STIC</option>
                    <option>ZAKRITI Alia - STIC</option>
                    <option>AL MERS Ahmed - STIC</option>
                    <option>TAHIRI Mohammed - STIC</option>
                    <option>BOLAJRAF Mohamed - TELECOM</option>
                    <option>CHAKKOR Otman - TELECOM</option>
                    <option>CHARIF Mohamed - TELECOM</option>
                    <option>El ADIB Samir - TELECOM</option>
                    <option>RAISSOUNI Naoufal - TELECOM</option>
                    <option>KASSOU MANAR - VAC</option>
                    <option>AL-AMRANI YASSINE - VAC</option>
                    <option>JEBARI HAKIM - VAC</option>
                    <option>ELBAGHDADI ABDELAZIZ - VAC</option>
                    <option>CHIKRI HASSAN - VAC</option>
                    <option>LAZAAR SAIIDA - VAC</option>
                    <option>BENKADDOUR Abdelhamid - VAC</option>
                    <option>BROUILLETTE KATHRYN - VAC</option>
                    <option>MAOUENE Mounir - VAC</option>
                    <option>OUAIL Mohammed - VAC</option>
                    <option>BEN AISSA Nouha - VAC</option>
                    <option>LAGZIRI Hajar - VAC</option>
                    <option>EL HADRI Doae - VAC</option>
                    <option>AMTHIOU HANAN - VAC</option>
                    <option>ACHABBAK AHDIA - VAC</option>
                    <option>BACHAOU MUSTAPHA - VAC</option>
                    <option>RAISS INSSAF - VAC</option>
                    <option>BENKHALOU HAYAT - VAC</option>
                    <option>EL FTOUH HANAE - VAC</option>
                    <option>KHALFI Mustapha - VAC</option>
                    <option>OUTAIR Anas - VAC</option>
                    <option>ZITAN Houda - VAC</option>
                    <option>BOUROUHOU Abdelhamid - VAC</option>
                    <option>BELAMIN Butaina - VAC</option>
                    <option>BERRADI Halim - VAC</option>
                    <option>Yahyaoui Mohammed - VAC</option>
                    <option>ABDESSADAK Jihane - VAC</option>
                    <option>ELIAZIDI Sara - VAC</option>
                    <option>ABOUZID HOUDA - VAC</option>
                    <option>LEQDEH MHAMED - VAC</option>
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