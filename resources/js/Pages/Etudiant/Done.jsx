import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Header from "@/Components/Header";


export default function Done({ message, noEtudiant, message1}) {



    return (
      <div className="bg-white">
       
        <Header/>

        {message && (
        <Head title={message} />
        )}
        {message1 && (
        <Head title={message1} />
        )}
        {noEtudiant && (
        <Head title={noEtudiant} />
        )}

            
        <div className="relative isolate px-6 pt-14 lg:px-8">
          
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">

           

            {message && (
            <div>
                <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                  {message}
                </h1>
                <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                  Réclamation soumise avec succès !
                </p>
            </div>
            )}

            {message1 && (
            <div>
                <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                  {message1}
                </h1>
                <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                  Demande soumise avec succès !
                </p>
            </div>
            )}

            {noEtudiant && (
            <div>
                <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                  {noEtudiant}
                </h1>
                <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                   Aucun étudiant correspondant trouvé.
                </p>
            </div>
            )}

            {(!message && !noEtudiant && !message1) && (
            <div>
                <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                  Échec 
                </h1>
                <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                  Une erreur s'est produite. Veuillez réessayer.
                </p>
            </div>
            )}

            
            
              
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href={route('welcome')}
                  className="rounded-md bg-blue-800 bg-opacity-90 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Retourner à la page d'Accueil <span aria-hidden="true">→</span>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


  