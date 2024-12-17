import React from 'react';
import Header from "@/Components/Header";
import { Head, Link, useForm } from '@inertiajs/react';


export default function Reclamation() {

  const {data, setData, post} = useForm({
    
    email: '',
    CNE: '',
    N_Apogee: '',

    type: '',
    contenu: '',
    sujet: '',

  })

  const onSubmit = (e) => {

    e.preventDefault();
    post(route("storeReclamation"));

  }
 
  return (


    <div className="bg-white">
      <Header/>
      <Head title="Réclamation" />


      <div className="relative isolate px-6 pt-14 lg:px-8">
        <h2 className="mt-10 text-center text-3xl/9 font-bold tracking-tight text-gray-900">
            Réclamation
        </h2>
      <div className="mx-auto max-w-2xl py-32 sm:py-15 lg:pb-52 pt-15">


      <form onSubmit={onSubmit}>

          
        <div className="space-y-12">
            
          <div className="border-b border-gray-900/10 pb-12">

            <h2 className="text-lg/7 font-semibold text-gray-900">Informations sur la Réclamation</h2>
            <p className="mt-1 text-sm/6 text-gray-600">Assurez-vous de fournir tous les détails nécessaires pour un traitement optimal de votre réclamation.</p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                <div className="sm:col-span-4">
                  <label htmlFor="type" className="block text-sm/6 font-medium text-gray-900">
                    Type de Réclamation
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      required
                      id="type"
                      name="type"
                      value={data.type} // Bind value to state
                      onChange={(e) => setData("type", e.target.value)} // Update state on change
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option value="" hidden>Type de Réclamation</option>
                      <option value="Problème Technique">Problème Technique</option>
                      <option value="Problème d´un Service à l´École">Problème d'un Service à l'École</option>
                      <option value="Autre Problème">Autre Problème</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-full">
                  <label htmlFor="sujet" className="block text-sm/6 font-medium text-gray-900">
                    Sujet
                  </label>
                  <div className="mt-2">
                    <input
                      required
                      id="sujet"
                      name="sujet"
                      autoComplete="off"
                      value={data.sujet} 
                      onChange={(e) => setData("sujet", e.target.value)}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="contenu" className="block text-sm/6 font-medium text-gray-900">
                    Contenu
                  </label>
                  <div className="mt-2">
                    <textarea
                      required
                      id="contenu"
                      name="contenu"
                      rows={5}
                      value={data.contenu} 
                      onChange={(e) => setData("contenu", e.target.value)}
                      className="block w-full min-h-32 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                  <p className="mt-3 text-sm/6 text-gray-600">
                    N'hésitez pas à fournir tous les détails que vous souhaitez.
                  </p>
                </div>

                </div>
              </div>
          </div>

          <div className="border-b border-gray-900/10 py-12">

              <h2 className="text-lg/7 font-semibold text-gray-900">Informations Personnelles</h2>
              <p className="mt-1 text-sm/6 text-gray-600">Assurez-vous que vos informations sont complètes et exactes.</p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                
                <div className="sm:col-span-5">
                  <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                    Email Institutionnel
                  </label>
                  <div className="mt-2">
                  <input
                  required
                    id="email"
                    name="email"
                    type="email"
                    autoComplete='true'
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                  />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="CNE" className="block text-sm/6 font-medium text-gray-900">
                    CNE
                  </label>
                  <div className="mt-2">
                  <input
                  required
                    id="CNE"
                    name="CNE"
                    type="text"
                    value={data.CNE}
                    onChange={(e) => setData('CNE', e.target.value)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                  />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="N_Apogee" className="block text-sm/6 font-medium text-gray-900">
                    Code Apogée
                  </label>
                  <div className="mt-2">
                  <input
                  required
                    id="N_Apogee"
                    name="N_Apogee"
                    type="text"
                    value={data.N_Apogee}
                    onChange={(e) => setData('N_Apogee', e.target.value)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                  />
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
              Soumettre la Réclamation
            </button>

          </div>
      </form>

    </div>
    </div>
    </div>
  );
}
