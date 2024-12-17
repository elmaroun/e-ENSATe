import React from 'react';
import Header from "@/Components/Header";
import { Head, Link } from '@inertiajs/react';
import HeaderAdmin from '@/Components/HeaderAdmin';


export default function Welcome() {

    return (
      <div className="bg-white">
            <Header/>
            <Head title="Bienvenue" />

        <div className="relative isolate px-6 pt-14 lg:px-8">
          
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                  Bienvenue dans votre espace étudiant !
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                  Accédez rapidement à vos services académiques et administratifs
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href={route('form.demande')}
                  className="rounded-md bg-blue-800 bg-opacity-90 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Demander un Document
                </Link>
                <Link 
                  href={route('form.reclamation')} 
                  className="rounded-md bg-gray-200 bg-opacity-90 px-3.5 py-2.5 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-300 hover:text-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Réclamation 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  