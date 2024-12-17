import Header from "@/Components/Header";
import { Head, Link, useForm } from "@inertiajs/react";
import React from "react";


export default function ReleveNotes({ demande_id }) {

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2018 }, (_, i) => currentYear - 1 - i);

  const { data, setData, post } = useForm({

    annee: '', 
    semestre: '',
    demande_id: demande_id,

  });

  const onSubmit = (e) => {
    e.preventDefault();
    post(route("storeReleveNotes"));
  };


  return (
    <div className="bg-white">
     <Header />
     <Head title="Relevé des Notes" />
     
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <h2 className="mt-10 text-center text-3xl/9 font-bold tracking-tight text-gray-900">
          Demande de Relevé des Notes
        </h2>
        <div className="mx-auto max-w-2xl py-32 sm:py-15 lg:pb-52 pt-15">

          <form onSubmit={onSubmit}>
          
                    
                  <div className="space-y-12">
                      
                    <div className="border-b border-gray-900/10 pb-12">
          
                      <h2 className="text-lg/7 font-semibold text-gray-900">Informations Supplémentaires</h2>
          
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          
                          <div className="sm:col-span-3">
                            <label htmlFor="annee" className="block text-sm/6 font-medium text-gray-900">
                              Année Universitaire
                            </label>
                            <div className="mt-2 grid grid-cols-1">
                              <select
                                required
                                id="annee"
                                name="annee"
                                value={data.annee}
                                onChange={(e) => setData("annee", e.target.value)}
                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                              >
                                <option value="" hidden>Année Universitaire</option>
                                {years.map((year) => (
                                  <option key={year} value={year}>
                                    {year} / {year + 1}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="sm:col-span-4">
                            <label htmlFor="semestre" className="block text-sm/6 font-medium text-gray-900">
                              Semestre
                            </label>
                            <div className="mt-2 grid grid-cols-1">
                              <select
                                required
                                id="semestre"
                                name="semestre"
                                value={data.semestre} 
                                onChange={(e) => setData("semestre", e.target.value)} 
                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                              >
                                <option value="" hidden>Semestre</option>
                                <option value="Semestre 1">Semestre 1</option>
                                <option value="Semestre 2">Semestre 2</option>
                              </select>
                            </div>
                          </div>

                          <div className="hidden">
                            <label htmlFor="demande_id" className="block text-sm/6 font-medium text-gray-900">
                              Demande ID
                            </label>
                            <div className="mt-2">
                              <input
                                required
                                id="demande_id"
                                name="demande_id"
                                autoComplete="off"
                                value={data.demande_id} 
                                onChange={(e) => setData("demande_id", e.target.value)}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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
