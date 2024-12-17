import Header from '../../Components/header';
import { Head } from "@inertiajs/react";


const detailsdemandes=({demandes,conventions,id}) => {

  return (
    <div className="bg-white">
      <Header/>
      <Head title="demandes" />
  
      <div className="relative isolate px-6 pt-14 lg:px-8">
          <h2 className="mt-10 text-center text-3xl/9 font-bold tracking-tight text-gray-900">
                  demandes de Convention de Stage
          </h2>
          <div className="mx-auto max-w-4xl py-32 sm:py-15 lg:pb-52 pt-15">
          <div className="px-4 sm:px-0">
              <h3 className="text-base/7 font-semibold text-gray-900 underline underline-offset-4 decoration-gray-100">Informations sur l'étudiant</h3>
          </div>
          {demandes.map((demande) => (
          <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">Nom Complet</dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{demande.name}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">Email Institutionnel</dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{demande.email}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                  <dd className="text-sm/6 font-medium text-gray-900">CNE</dd>
                  <dd className="mt-1 text-sm/6 text-gray-700  sm:mt-0">{demande.CNE}</dd>
                  <dd className="text-sm/6 font-medium text-gray-900">Nº Apogée</dd>
                  <dd className="mt-1 text-sm/6 text-gray-700  sm:mt-0">{demande.N_Apogee}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">Fillière</dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{demande.niveau} - {demande.filiere}</dd>
                </div>
              </dl>
          </div>
          ))}
          <div className="px-4 sm:px-0 mt-20">
              <h3 className="text-base/7 font-semibold text-gray-900 underline underline-offset-4 decoration-gray-100">Informations sur la demandes de Convention de Stage</h3>
          </div>
          {conventions.map((convention) => (

          <div className="mt-6 border-t border-gray-100">

              <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                  <dd className="text-sm/6 font-medium text-gray-900">Type de demandes</dd>
                  <dd className="mt-1 text-sm/6 text-gray-700  sm:mt-0">Convention de Stage</dd>
                  <dd className="text-sm/6 font-medium text-gray-900">Date de demandes</dd>
                  <dd className="mt-1 text-sm/6 text-gray-700  sm:mt-0">{convention.date}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                  <dd className="text-sm/6 font-medium text-gray-900">Raison sociale de l'entreprise</dd>
                  <dd className="mt-1 text-sm/6 text-gray-700  sm:mt-0">{convention.Raison_social_de_entreprise}</dd>
                  <dd className="text-sm/6 font-medium text-gray-900">Secteur de l'entreprise</dd>
                  <dd className="mt-1 text-sm/6 text-gray-700  sm:mt-0">{convention.Secteur_entreprise}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                  <dd className="text-sm/6 font-medium text-gray-900">Téléphone de l'entreprise</dd>
                  <dd className="mt-1 text-sm/6 text-gray-700  sm:mt-0">{convention.Telephone_entreprise}</dd>
                  <dd className="text-sm/6 font-medium text-gray-900">Email de l'entreprise</dd>
                  <dd className="mt-1 text-sm/6 text-gray-700  sm:mt-0">{convention.Email_entreprise}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                  <dd className="text-sm/6 font-medium text-gray-900">Adresse de l'entreprise</dd>
                  <dd className="mt-1 text-sm/6 text-gray-700  sm:mt-0">{convention.adresse_entreprise}</dd>
                  <dd className="text-sm/6 font-medium text-gray-900">Ville de l'entreprise</dd>
                  <dd className="mt-1 text-sm/6 text-gray-700  sm:mt-0">{convention.ville_entreprise}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                  <dd className="text-sm/6 font-medium text-gray-900">Représenatant de l'entreprise</dd>
                  <dd className="mt-1 text-sm/6 text-gray-700  sm:mt-0">{convention.representant_entreprise}</dd>
                  <dd className="text-sm/6 font-medium text-gray-900">Fonction du représentant</dd>
                  <dd className="mt-1 text-sm/6 text-gray-700  sm:mt-0">{convention.fonction_representant}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                  <dd className="text-sm/6 font-medium text-gray-900">Encadrant de l'entreprise</dd>
                  <dd className="mt-1 text-sm/6 text-gray-700  sm:mt-0">{convention.encadrant_entreprise}</dd>
                  <dd className="text-sm/6 font-medium text-gray-900">Fonction de l'encadrant</dd>
                  <dd className="mt-1 text-sm/6 text-gray-700  sm:mt-0">{convention.fonction_encadrant}</dd>
                </div>
                  
                  <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                  <dd className="text-sm/6 font-medium text-gray-900">Téléphone de l'encadrant</dd>
                  <dd className="mt-1 text-sm/6 text-gray-700  sm:mt-0">{convention.telephone_encadrant}</dd>
                  <dd className="text-sm/6 font-medium text-gray-900">Email de l'encadrant</dd>
                  <dd className="mt-1 text-sm/6 text-gray-700  sm:mt-0">{convention.email_encadrant}</dd>
                  </div>

                  <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">Encadrant de l'ENSA</dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{convention.encadrant_ensa}</dd>
                  </div>


                  <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                  <dd className="text-sm/6 font-medium text-gray-900">Stage du</dd>
                  <dd className="mt-1 text-sm/6 text-gray-700  sm:mt-0">{convention.date_debut}</dd>
                  <dd className="text-sm/6 font-medium text-gray-900">au</dd>
                  <dd className="mt-1 text-sm/6 text-gray-700  sm:mt-0">{convention.date_fin}</dd>
                  </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">Sujet</dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-3 sm:mt-0">{convention.sujet}</dd>
                </div>  
              </dl>


              <div className="px-4 sm:px-0 mt-20">
                <h3 className="text-base/7 font-semibold text-gray-900 underline underline-offset-4 decoration-gray-100">Gérer la demandes </h3>
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-gray-900 sm:grid-cols-2 md:flex lg:gap-x-5 mt-6">
                <a    href={route('accepter.demande.convention', { id: convention.demande_id })} className="rounded-md  bg-blue-800 bg-opacity-90 px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-blue-700 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  Accepter & Envoyer le Doc <span aria-hidden="true">&rarr;</span>
                </a>
                <a    href="#" className="rounded-md  bg-rose-600 bg-opacity-90 px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-rose-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  Refuser la demandes
                </a>
            </div>
          </div>
         ))}
        </div> 
      </div>
    </div>
  )
}
export default detailsdemandes;

