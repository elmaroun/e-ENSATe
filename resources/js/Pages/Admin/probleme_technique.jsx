import HeaderAdmin from '@/Components/HeaderAdmin';
import Header from '../../Components/header';
import { Head } from "@inertiajs/react";


const probleme_technique= ({reclamations,id}) => {

  return (
      <div className="bg-white">
          <HeaderAdmin/>
          <Head title="Réclamation" />
  
          <div className="relative isolate px-6 pt-14 lg:px-8">
              <h2 className="mt-10 text-center text-3xl/9 font-bold tracking-tight text-gray-900">
                  Réclamation : Problème Technique
              </h2>
          <div className="mx-auto max-w-4xl py-32 sm:py-15 lg:pb-52 pt-15">
          

          <div className="px-4 sm:px-0">
              <h3 className="text-base/7 font-semibold text-gray-900 underline underline-offset-4 decoration-gray-100">Informations sur l'étudiant</h3>
          </div>


          {reclamations.map((reclamation) => (

          <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">

                  <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">Nom Complet</dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{reclamation.name}</dd>
                  </div>
                  
                  <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">Email Institutionnel</dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{reclamation.email}</dd>
                  </div>

                  <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                  <dd className="text-sm/6 font-medium text-gray-900">CNE</dd>
                  <dd className="mt-1 text-sm/6 text-gray-700  sm:mt-0">{reclamation.CNE}</dd>
                  <dd className="text-sm/6 font-medium text-gray-900">Nº Apogée</dd>
                  <dd className="mt-1 text-sm/6 text-gray-700  sm:mt-0">{reclamation.N_Apogee}</dd>
                  </div>

                  <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">Fillière</dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{reclamation.niveau} - {reclamation.filiere}</dd>
                  </div>

              </dl>
          </div>
))}
          <div className="px-4 sm:px-0 mt-20">
              <h3 className="text-base/7 font-semibold text-gray-900 underline underline-offset-4 decoration-gray-100">Informations sur la réclamation : Problème Technique</h3>
          </div>
         
          <div className="mt-6 border-t border-gray-100">
              {reclamations.map((reclamation) => (
              <dl className="divide-y divide-gray-100">

              <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                  <dd className="text-sm/6 font-medium text-gray-900">Type de réclamation</dd>
                  <dd className="mt-1 text-sm/6 text-gray-700  sm:mt-0">{reclamation.type}</dd>
                  <dd className="text-sm/6 font-medium text-gray-900">Date de réclamation</dd>
                  <dd className="mt-1 text-sm/6 text-gray-700  sm:mt-0">{reclamation.date}</dd>
                  </div>

                  <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">Sujet</dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{reclamation.sujet}</dd>
                  </div>

                  <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">Description</dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-3 sm:mt-0">{reclamation.contenu} </dd>
                  </div>
                
              </dl>
            ))}
              <div className="px-4 sm:px-0 mt-20">
                <h3 className="text-base/7 font-semibold text-gray-900 underline underline-offset-4 decoration-gray-100">Gérer la Réclamation </h3>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">


                              <div className="sm:col-span-5">
                              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                  Sujet de réponse
                              </label>
                              <div className="mt-2">
                                  <input
                                  id="email"
                                  name="email"
                                  type="email"
                                  autoComplete="email"
                                  defaultValue=""
                                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-700 sm:text-sm/6"
                                  />
                              </div>
                              </div>

                              <div className="col-span-full">
                              <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                                  Réponse à la réclamation
                              </label>
                              <div className="mt-2">
                                  <textarea
                                  id="about"
                                  name="about"
                                  rows={5}
                                  className="block w-full min-h-32 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-700 sm:text-sm/6"
                                  defaultValue={''}
                                  />
                              </div>
                              <p className="mt-3 text-sm/6 text-gray-600">Un email contenant la réponse à la réclamation sera adressé à l'étudiant.</p>
                              </div>

                              <div className="col-span-full">

                                <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                                    Status de réclamation
                                </label>
                                <div className="mt-4 flex">

                                <p className="text-sm/6 text-gray-600">Non Traitée</p>

                                <label class="relative inline-flex cursor-pointer items-center mx-4">
                                  <input id="switch" type="checkbox" class="peer sr-only" />
                                  <label for="switch" class="hidden"></label>
                                  <div class="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-800 peer-checked:bg-opacity-90  peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
                                </label>

                                <p className="text-sm/6 text-gray-600">Traitée</p>

                              </div>
                              </div>




                              
                       

                          </div>

              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-gray-900 sm:grid-cols-2 md:flex lg:gap-x-5 mt-8">
                <a    href="#" className="rounded-md  bg-blue-800 bg-opacity-90 px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-blue-700 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  Valider et Envoyer un email <span aria-hidden="true">&rarr;</span>
                </a>
                <a    href="#" className="rounded-md  bg-rose-600 bg-opacity-90 px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-rose-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  Rejeter et Notifier
                </a>
            </div>
          </div>

      </div>
          
      </div>
      </div>
  )
}
export default probleme_technique;