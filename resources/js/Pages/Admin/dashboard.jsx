import { Head, Link } from '@inertiajs/react';
import HeaderAdmin from '@/Components/HeaderAdmin';


export default function Dashboard({

                totalDemandes,
                demandesTraitees,
                demandesEnCours,
                demandesNonTraitees,
                attestationScolarite,
                attestationReussite,
                releveNotes,
                conventionStage,
    
                totalReclamations,
                reclamationsTraitees,
                reclamationsEnCours,
                reclamationsNonTraitees,
                problemeTechnique,
                problemeService,
                autreProbleme,
              }) 
    {

  
  return (
  

  <div className="relative isolate bg-white py-24 sm:py-32">
      <HeaderAdmin />
      <Head title='Dashboard' />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl lg:mx-0 mt-8">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Bienvenue !</h2>
          <p className="mt-6 text-pretty text-base font-medium text-gray-600 sm:text-lg/8">
          Bienvenue sur le tableau de bord administratif. Gérez les demandes de documents, suivez les réclamations et consultez les statistiques pour optimiser le processus.
          </p>
        </div>
        <div className="mx-auto mt-6 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-gray-900 sm:grid-cols-2 md:flex lg:gap-x-5">
              <Link
                href={route('traitement_demande')}
                className="rounded-md bg-blue-800 bg-opacity-90 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Gérer les demandes <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link 
                href={route('reclamationadmin')} 
                className="rounded-md bg-gray-200 bg-opacity-90 px-3.5 py-2.5 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-300 hover:text-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Gérer les réclamations <span aria-hidden="true">&rarr;</span>
              </Link>
          </div>


          <h2 className="mt-14 text-center text-base/7 font-semibold text-blue-700">e-ENSATé</h2>
          <p className="mx-auto mt-0 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">Tableau de Bord</p>


          <div className="bg-white pt-12 sm:py-16">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <dl className="grid grid-cols-2 gap-x-6 gap-y-6 text-center lg:grid-cols-4">
                      {/* Row 1 */}
                      <div className="flex flex-col gap-y-4 border border-gray-300 border-opacity-50 rounded-lg p-4 w-full h-full bg-gray-100 bg-opacity-50 cursor-default">
                          <dt className="text-base/7 truncate text-gray-600">Nombre Total des Demandes</dt>
                          <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">{totalDemandes}</dd>
                      </div>
                      <div className="flex flex-col gap-y-4 border border-gray-300 border-opacity-50 rounded-lg p-4 w-full h-full bg-blue-100 bg-opacity-50 cursor-default">
                          <dt className="text-base/7 truncate text-gray-600">Demandes Traitées</dt>
                          <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">{demandesTraitees}</dd>
                      </div>
                      <div className="flex flex-col gap-y-4 border border-gray-300 border-opacity-50 rounded-lg p-4 w-full h-full bg-blue-100 bg-opacity-50 cursor-default">
                          <dt className="text-base/7 truncate text-gray-600 group-hover:font-bold">Demande en Cours</dt>
                          <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">{demandesEnCours}</dd>  {/* group-hover:font-bold*/}
                      </div>
                      <div className="flex flex-col gap-y-4 border border-gray-300 border-opacity-50 rounded-lg p-4 w-full h-full bg-blue-100 bg-opacity-50 cursor-default">
                          <dt className="text-base/7 truncate text-gray-600">Demandes Non Traitées</dt>
                          <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">{demandesNonTraitees}</dd>
                      </div>

                      {/* Row 2 */}
                      <div className="flex flex-col gap-y-4 border border-gray-300 border-opacity-50 rounded-lg p-4 w-full h-full bg-gray-100 bg-opacity-50 cursor-default">
                          <dt className="text-base/7 truncate text-gray-600">Attestation de Scolarité</dt>
                          <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">{attestationScolarite}</dd>
                      </div>
                      <div className="flex flex-col gap-y-4 border border-gray-300 border-opacity-50 rounded-lg p-4 w-full h-full bg-gray-100 bg-opacity-50 cursor-default">
                          <dt className="text-base/7 truncate text-gray-600">Attestation de Réussite</dt>
                          <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">{attestationReussite}</dd>
                      </div>
                      <div className="flex flex-col gap-y-4 border border-gray-300 border-opacity-50 rounded-lg p-4 w-full h-full bg-gray-100 bg-opacity-50 cursor-default">
                          <dt className="text-base/7 truncate text-gray-600">Relevé des Notes</dt>
                          <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">{releveNotes}</dd>
                      </div>
                      <div className="flex flex-col gap-y-4 border border-gray-300 border-opacity-50 rounded-lg p-4 w-full h-full bg-gray-100 bg-opacity-50 cursor-default">
                          <dt className="text-base/7 truncate text-gray-600">Convention de Stage</dt>
                          <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">{conventionStage}</dd>
                      </div>

                  </dl>
              </div>
          </div>

          <div className="bg-white pb-12 sm:pb-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <dl className="grid grid-cols-2 gap-x-6 gap-y-6 text-center lg:grid-cols-4">
              {/* Row 3 */}
              <div className="flex flex-col gap-y-4 border border-gray-300 border-opacity-50 rounded-lg p-4 w-full h-full bg-gray-100 bg-opacity-50 cursor-default">
                  <dt className="text-base/7 truncate text-gray-600">Nombre Total des Réclamations</dt>
                  <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">{totalReclamations}</dd>
              </div>
              <div className="flex flex-col gap-y-4 border border-gray-300 border-opacity-50 rounded-lg p-4 w-full h-full bg-blue-100 bg-opacity-50 cursor-default">
                  <dt className="text-base/7 truncate text-gray-600">Réclamations Traitées</dt>
                  <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">{reclamationsTraitees}</dd>
              </div>
              <div className="flex flex-col gap-y-4 border border-gray-300 border-opacity-50 rounded-lg p-4 w-full h-full bg-blue-100 bg-opacity-50 cursor-default">
                  <dt className="text-base/7 truncate text-gray-600">Réclamations en Cours</dt>
                  <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">{reclamationsEnCours}</dd>
              </div>
              <div className="flex flex-col gap-y-4 border border-gray-300 border-opacity-50 rounded-lg p-4 w-full h-full bg-blue-100 bg-opacity-50 cursor-default">
                  <dt className="text-base/7 truncate text-gray-600">Réclamations Non Traitées</dt>
                  <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">{reclamationsNonTraitees}</dd>
              </div>

              {/* Row 4 */}
              <div className="flex flex-col gap-y-4 border border-gray-300 border-opacity-50 rounded-lg p-4 w-full h-full bg-gray-100 bg-opacity-50 cursor-default">
                  <dt className="text-base/7 truncate text-gray-600">Problème Technique</dt>
                  <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">{problemeTechnique}</dd>
              </div>
              <div className="flex flex-col gap-y-4 border border-gray-300 border-opacity-50 rounded-lg p-4 w-full h-full bg-gray-100 bg-opacity-50 cursor-default">
                  <dt className="text-base/7 truncate text-gray-600">Problème d'un service à l'école</dt>
                  <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">{problemeService}</dd>
              </div>
              <div className="flex flex-col gap-y-4 border border-gray-300 border-opacity-50 rounded-lg p-4 w-full h-full bg-gray-100 bg-opacity-50 cursor-default">
                  <dt className="text-base/7 truncate text-gray-600">Autre Problème</dt>
                  <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">{autreProbleme}</dd>
              </div>
              <div className="flex flex-col gap-y-4 border border-gray-300 border-opacity-50 rounded-lg p-4 w-full h-full bg-gray-300 bg-opacity-30 cursor-default">
                  <dt className="text-base/7 truncate text-gray-600">Temps Moyen de Réponse</dt>
                  <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">5h 3min</dd>
              </div>

              </dl>
          </div>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}