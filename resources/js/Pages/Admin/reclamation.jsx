import React from 'react';
import Header from '../../Components/header';
import { Head, Link } from "@inertiajs/react"
import HeaderAdmin from '@/Components/HeaderAdmin';

  const reclamation= ({reclamations ,type,trier_par}) => {
    return (
        <div className="bg-white">
            <HeaderAdmin/>
            <Head title="Réclamation" />
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <h2 className="mt-10 text-center text-3xl/9 font-bold tracking-tight text-gray-900">
                    Réclamations
                </h2>
              <div className="mx-auto max-w-4xl pb-32 pt-12 sm:py-15 lg:pb-52 pt-15 ">


                <form methode="get" action={route('reclamationadmin')} id="reclamationfilterForm" className="my-10 flex justify-between gap-x-8">
                    <div className="flex-wrap-2 max-w-sm">

                              <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                              Type de Réclamation
                              </label>
                              <div className="mt-2 grid grid-cols-1">
                                  <select
                                  onChange={()=> document.getElementById('reclamationfilterForm').submit()}
                                  id="type_reclamation"
                                  name="type_reclamation"
                                  autoComplete="type_reclamation"
                                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-700 sm:text-sm/6"
                                  >
                                    <option hidden >{type}</option>
                                      <option value="Tous les réclamation">Tous les réclamation</option>
                                      <option value="Problème Technique">Problème technique</option>
                                      <option value="Problème de Service à l´école">Problème de Service à l´école</option>
                                      <option value="Autre Problème" >Autre Problème</option>
                                  </select>
                              </div>
                    </div>
                    

                    <div className="flex-2 max-w-sm">

                              <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                              Trier par
                              </label>
                              <div className="mt-2 grid grid-cols-1">
                                  <select
                                  onChange={()=> document.getElementById('reclamationfilterForm').submit()}

                                  id="trier_par"
                                  name="trier_par"
                                  autoComplete="trier_par"
                                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-700 sm:text-sm/6"
                                  >
                                   <option hidden >{trier_par}</option>
                                      <option value="Les plus récentes">Les plus récentes</option>
                                      <option value="Status de réclamation">Status de réclamation</option>
                                      <option value="Etudiant">Etudiant</option>
                                  </select>
                              </div>
                    </div>


                    <div className="w-20"></div>

                    <div className="flex-1 max-w-sm">

                              
                    </div>
                </form>

                <ul role="list" className="divide-y divide-gray-100">


                  {reclamations.map((reclamation) => (


  


                <Link href={route('probleme_technique', { id: reclamation.id })}>
                    <li className="grid grid-cols-6 gap-x-10 p-5 items-center justify-center hover:bg-gray-100">


                      <div className="col-span-2 min-w-0 gap-x-4">
                        
                        <div className="min-w-0 flex-auto">
                          <p className="text-base/6 font-semibold text-gray-900 text-nowrap">Type de Réclamation</p>
                          <p className="mt-1 truncate text-sm/5 text-gray-500">{reclamation.type}</p>
                        </div>

                      </div>

                      <div className="col-span-2 min-w-0 gap-x-4">
                        
                        <div className="min-w-0 flex-auto">
                          <p className="text-base/6 font-semibold text-gray-900 text-nowrap">Nº Apogée - Etudiant</p>
                          <p className="mt-1 truncate text-sm/5 text-gray-500"> {reclamation.N_Apogee} - {reclamation.name}</p>
                        </div>

                      </div>

                      <div className="col-span-1 min-w-0 gap-x-4">
                        
                        <div className="min-w-0 flex-auto">
                          <p className="text-base/6 font-semibold text-gray-900 text-nowrap">Date</p>
                          <p className="mt-1 truncate text-sm/5 text-gray-500">{reclamation.created_at}</p>
                        </div>

                      </div>

                      <div className="col-span-1 min-w-0 gap-x-4">
                    
                        <div className="min-w-0 flex-auto">
                          <p className="text-base/6 font-semibold text-gray-900 text-nowrap">Status</p>
                          {
                        reclamation.status === 'Traitée' && (
                          <div className="mt-1 flex items-center gap-x-1.5">
                              <div className="flex-none rounded-full bg-green-500/20 p-1">
                              <div className="size-1.5 rounded-full bg-green-500" />
                              </div>
                              <p className="text-sm/5 truncate text-gray-500">{reclamation.status}</p>
                          </div>
                       )
                        }
                     
                       
                        
                          {reclamation.status === 'Non traitée' && (
                              <div className="mt-1 flex items-center gap-x-1.5">
                                 <div className="flex-none rounded-full bg-red-500/20 p-1">
                              <div className="size-1.5 rounded-full bg-red-500" />
                              </div>
                              <p className="text-sm/5 truncate text-gray-500">{reclamation.status}</p>
                          </div>
                        )
                          }
                      
                            {reclamation.status === 'En cours' && (
                              <div className="mt-1 flex items-center gap-x-1.5">
                                  <div className="flex-none rounded-full bg-blue-500/20 p-1">
                                  <div className="size-1.5 rounded-full bg-blue-500" />
                                  </div>
                                  <p className="text-sm/5 truncate text-gray-500">{reclamation.status}</p>
                              </div>
                            )
                            }
                        
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
  export default reclamation;

  

  