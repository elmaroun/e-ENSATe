import HeaderAdmin from '@/Components/HeaderAdmin';
import Header from '../../Components/header';
import { Head } from "@inertiajs/react";


const detailsdemandesattestationscolarite =({demandes,attestation_scolarites,id}) => {

  return (
      <div className="bg-white">
          <HeaderAdmin/>
          <Head title="Demande" />
  
          <div className="relative isolate px-6 pt-14 lg:px-8">
              <h2 className="mt-10 text-center text-3xl/9 font-bold tracking-tight text-gray-900">
                  Demande de Attestation de réussite
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
              <h3 className="text-base/7 font-semibold text-gray-900 underline underline-offset-4 decoration-gray-100">Informations sur la demande de Convention de Stage</h3>
          </div>
          {attestation_scolarites.map((attestation_scolarite) => (

          <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">

              <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                  <dd className="text-sm/6 font-medium text-gray-900">Type de demande</dd>
                  <dd className="mt-1 text-sm/6 text-gray-700  sm:mt-0">Attestation de scolarite</dd>
                  <dd className="text-sm/6 font-medium text-gray-900">Date de demande</dd>
                  <dd className="mt-1 text-sm/6 text-gray-700  sm:mt-0">{attestation_scolarite.date}</dd>
                  </div>  
                  <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">année de l'attestation</dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-3 sm:mt-0">{attestation_scolarite.annee1}/{attestation_scolarite.annee2}</dd>
                </div>                
              </dl>

              <div className="px-4 sm:px-0 mt-20">
                <h3 className="text-base/7 font-semibold text-gray-900 underline underline-offset-4 decoration-gray-100">Gérer la demande </h3>
              </div>

              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-gray-900 sm:grid-cols-2 md:flex lg:gap-x-5 mt-6">
                <a     href={route('accepter.demande.attestation.scolarite', { id: attestation_scolarite.demande_id })}  className="rounded-md  bg-blue-800 bg-opacity-90 px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-blue-700 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  Accepter & Envoyer le Doc <span aria-hidden="true">&rarr;</span>
                </a>
                <a    href={route('Refuser_demande_document', { id: attestation_scolarite.demande_id })} className="rounded-md  bg-rose-600 bg-opacity-90 px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-rose-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  Refuser la demande
                </a>
            </div>
          </div>
        ))}
      </div>
          
      </div>
      </div>
  )
}
export default detailsdemandesattestationscolarite;

