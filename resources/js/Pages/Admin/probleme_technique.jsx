import HeaderAdmin from '@/Components/HeaderAdmin';
import Header from '../../Components/header';
import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect } from 'react';



const probleme_technique= ({reclamations,id}) => {
    const {data, setData, post} = useForm({
      
      sujet: '',
      reponse: '',
      reclamation_id: id,
    })


    useEffect(() => {
      if (reclamations.length > 0) {
          setData('sujet', `Réponse à : ${reclamations[0].sujet}`);
      }
  }, [reclamations]);


  const onSubmit = (e) => {

    e.preventDefault();
    post(route("resoudreReclamation"));

  }

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

          <div key={reclamation.id}  className="mt-6 border-t border-gray-100">
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
              <dl key={reclamation.id}  className="divide-y divide-gray-100">

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

              {reclamations.some((reclamation) => reclamation.status !== 'Traitée') ? (

            <form onSubmit={onSubmit} >
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-5">
                      <label htmlFor="sujet" className="block text-sm/6 font-medium text-gray-900">
                                  Sujet de réponse
                      </label>
                        <div className="mt-2">
                          <input
                                  id="sujet"
                                  name="sujet"
                                  type="sujet"
                                  value={data.sujet}
                                  autoComplete="sujet"
                                  onChange={(e) => setData('sujet', e.target.value)}
                                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-700 sm:text-sm/6"
                            />
                        </div>
                  </div>

                    <div className="col-span-full">
                        <label htmlFor="reponse" className="block text-sm/6 font-medium text-gray-900">
                                  Réponse à la réclamation
                        </label>
                        <div className="mt-2">
                          <textarea
                                  id="reponse"
                                  name="reponse"
                                  value={data.reponse}
                                  rows={5}
                                  onChange={(e) => setData('reponse', e.target.value)}

                                  className="block w-full min-h-32 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-700 sm:text-sm/6"
                                  
                                  />
                        </div>
                          <p className="mt-3 text-sm/6 text-gray-600">Un email contenant la réponse à la réclamation sera adressé à l'étudiant.</p>
                    </div>
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-gray-900 sm:grid-cols-2 md:flex lg:gap-x-5 mt-8">
                <button   type="submit" className="rounded-md  bg-blue-800 bg-opacity-90 px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-blue-700 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  Valider et Envoyer un email <span aria-hidden="true">&rarr;</span>
                </button>

              </div>
            </form>

            ) : (
              <p className="text-sm/6 font-medium text-gray-900 sm:gap-4 sm:px-0 px-4 py-6">
                Cette réclamation est déjà traitée.
              </p>
            )}

          </div>
      </div>
          
      </div>
      </div>
  )
}
export default probleme_technique;