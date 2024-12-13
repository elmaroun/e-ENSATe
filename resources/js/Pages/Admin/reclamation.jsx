import Header from '../../Components/header';
import { Head, Link } from "@inertiajs/react"
import reclamation from '../Etudiant/reclamation';

  
  const Reclamation = ({ demandes }) => {
    return (
        <div className="bg-white">
            <Header/>
            <Head title="Demandes" />
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <h2 className="mt-10 text-center text-3xl/9 font-bold tracking-tight text-gray-900">
                    Demandes de Documents
                </h2>
              <div className="mx-auto max-w-4xl pb-32 pt-12 sm:py-15 lg:pb-52 pt-15 ">


                <div className="my-10 flex justify-between gap-x-8">
                    <div className="flex-wrap-2 max-w-sm">

                              <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                              Type de Demande
                              </label>
                              <div className="mt-2 grid grid-cols-1">
                                  <select
                                  id="country"
                                  name="country"
                                  autoComplete="country-name"
                                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-700 sm:text-sm/6"
                                  >
                                      <option>Tous les demandes</option>
                                      <option>Attestation de Scolarité</option>
                                      <option>Attestation de Réussite</option>
                                      <option>Relevé des Notes</option>
                                      <option>Convention de Stage</option>
                                  </select>
                              </div>
                    </div>
                    

                    <div className="flex-2 max-w-sm">

                              <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                              Trier par
                              </label>
                              <div className="mt-2 grid grid-cols-1">
                                  <select
                                  id="country"
                                  name="country"
                                  autoComplete="country-name"
                                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-700 sm:text-sm/6"
                                  >
                                      <option>Les plus récentes</option>
                                      <option>Type de demande</option>
                                      <option>Status de demande</option>
                                      <option>Etudiant </option>
                                  </select>
                              </div>
                    </div>


                    <div className="w-20"></div>

                    <div className="flex-1 max-w-sm">

                              <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                              Rechercher
                              </label>
                              <div className="mt-2 grid grid-cols-1">
                              <input
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-700 sm:text-sm/6"
                                    />
                              </div>
                    </div>
                </div>

                <ul role="list" className="divide-y divide-gray-100">


                  {demandes.map((demande) => (

                    <Link>
                    <li key={demande.email} className="grid grid-cols-6 gap-x-10 p-5 items-center justify-center hover:bg-gray-100">


                      <div className="col-span-2 min-w-0 gap-x-4">
                        
                        <div className="min-w-0 flex-auto">
                          <p className="text-base/6 font-semibold text-gray-900 text-nowrap">Type de Demande</p>
                          <p className="mt-1 truncate text-sm/5 text-gray-500">{demande.type_demande}</p>
                        </div>

                      </div>

                      <div className="col-span-2 min-w-0 gap-x-4">
                        
                        <div className="min-w-0 flex-auto">
                          <p className="text-base/6 font-semibold text-gray-900 text-nowrap">Nº Apogee - Etudiant</p>
                          <p className="mt-1 truncate text-sm/5 text-gray-500">{demande.cne} - {demande.name}</p>
                        </div>

                      </div>

                      <div className="col-span-1 min-w-0 gap-x-4">
                        
                        <div className="min-w-0 flex-auto">
                          <p className="text-base/6 font-semibold text-gray-900 text-nowrap">Date</p>
                          <p className="mt-1 truncate text-sm/5 text-gray-500">{demande.date}</p>
                        </div>

                      </div>
                      <div className="col-span-1 min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                          <p className="text-base/6 font-semibold text-gray-900 text-nowrap">Status</p>
                          {
                          demande.status === 'Traitée' && ( 
                            <div class="mt-1 flex items-center gap-x-1.5">
                            <div class="flex-none rounded-full bg-green-500/20 p-1">
                              <div class="size-1.5 rounded-full bg-green-500" />
                            </div>
                            <p class="text-sm/5 truncate text-gray-500">Traitée</p>
                            </div>
                          )}
                                                    {
                          demande.status === 'Non traitée' && ( 
                            <div class="mt-1 flex items-center gap-x-1.5">
                            <div class="flex-none rounded-full bg-red-500/20 p-1">
                              <div class="size-1.5 rounded-full bg-red-500" />
                            </div>
                            <p class="text-sm/5 truncate text-gray-500">Non traitée</p>
                            </div>
                          )}
                                                    {
                          demande.status === 'En cours' && ( 
                            <div class="mt-1 flex items-center gap-x-1.5">
                            <div class="flex-none rounded-full bg-blue-500/20 p-1">
                              <div class="size-1.5 rounded-full bg-blue-500" />
                            </div>
                            <p class="text-sm/5 truncate text-gray-500">En cours</p>
                            </div>
                          )}
                        </div>
                      </div>


                    </li>
                    <hr></hr>
                    </Link>
                    
                  
                  ))}
                </ul>


              </div>
            </div>
      </div>

                  

    )
  }
  export default Reclamation;


  