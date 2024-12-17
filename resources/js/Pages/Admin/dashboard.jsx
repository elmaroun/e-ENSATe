import React from 'react';
import Header from '../../Components/header';
import HeaderAdmin from '@/Components/HeaderAdmin';

const links = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },

  ]
  const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
  ]



  
  const dashboard= () => {
    return (
    

    <div className="relative isolate bg-white py-24 sm:py-32">
        <HeaderAdmin/>
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Bienvenue !</h2>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-600 sm:text-xl/8">
            Bienvenue sur le tableau de bord administratif. Gérez les demandes de documents, suivez les réclamations et consultez les statistiques pour optimiser le processus.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-gray-900 sm:grid-cols-2 md:flex lg:gap-x-5">
                <a className="rounded-md  bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"   href="#">
                  les demandes <span aria-hidden="true">&rarr;</span>
                </a>
                <a  href="#" className="rounded-md  px-3.5 py-2.5 text-sm font-semibold text-gray-900 hover:shadow-sm hover:bg-indigo-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  les reclamation <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
            <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-2xl font-medium tracking-tight text-gray-900 max-lg:text-center">
                  Nombre demande par type
                </p>
              </div>
              <div className="px-8 pb-3 pt-2 sm:px-10 sm:pb-0 sm:pt-2">
                <p className="mt-2 text-lg font-medium tracking-tight text-indigo-600 max-lg:text-center">
                  Convention de Stage
                </p>
              </div>
              <div className="flex flex-reverse mt-1 gap-1 justify-center items-center">
                 <dd className="text-4xl font-semibold tracking-tight text-gray-900">+20</dd>
                <dt className="text-base/7 text-gray-900">Demande </dt>
              </div>
              <div className="px-8 pb-3 pt-2 sm:px-10 sm:pb-0 sm:pt-2">
                <p className="mt-2 text-lg font-medium tracking-tight text-indigo-600 max-lg:text-center">
                  Attestation de reussite
                </p>
              </div>
              <div className="flex flex-reverse mt-1 gap-1 justify-center items-center">
                 <dd className="text-4xl font-semibold tracking-tight text-gray-900">+14</dd>
                <dt className="text-base/7 text-gray-900">Demande </dt>
              </div>
              <div className="px-8 pb-3 pt-2 sm:px-10 sm:pb-0 sm:pt-2">
                <p className="mt-2 text-lg font-medium tracking-tight text-indigo-600 max-lg:text-center">
                  Releve des notes
                </p>
              </div>
              <div className="flex flex-reverse mt-1 gap-1 justify-center items-center">
                 <dd className="text-4xl font-semibold tracking-tight text-gray-900">+18</dd>
                <dt className="text-base/7 text-gray-900">Demande </dt>
              </div>
              <div className="px-8 pb-3 pt-2 sm:px-10 sm:pb-0 sm:pt-2">
                <p className="mt-2 text-lg font-medium tracking-tight text-indigo-600 max-lg:text-center">
                  Attestation de scolarite
                </p>
              </div>
              <div className="flex flex-reverse mt-1 gap-1 justify-center items-center">
                 <dd className="text-4xl font-semibold tracking-tight text-gray-900">+50</dd>
                <dt className="text-base/7 text-gray-900">Demande </dt>
              </div>
              <div className="px-8 pb-3 pt-2 sm:px-10 sm:pb-0 sm:pt-2">
                <p className="mt-2 text-lg font-medium tracking-tight text-indigo-600 max-lg:text-center">
                  Retrait de baccalauréat
                </p>
              </div>
              <div className="flex flex-reverse mt-1 mb-6 gap-1 justify-center items-center">
                 <dd className="text-4xl font-semibold tracking-tight text-gray-900">+40</dd>
                <dt className="text-base/7 text-gray-900">Demande</dt>
              </div>
              
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Efficacité optimale</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                Nous assurons une performance de haut niveau avec des solutions adaptées à vos besoins.
                </p>
              </div>
           
              <div className="flex flex-reverse mt-9 gap-1 justify-center items-center">
              <dd className="text-7xl font-semibold tracking-tight text-gray-900">+300</dd>

              <dt className="text-base/7 text-gray-900">Demande</dt>
              </div>
         
            </div>


            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>

          
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Temps moyen de réponse</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Un suivi rapide et réactif pour répondre à vos besoins.
                </p>
              </div>
           
              <div className="flex flex-reverse mt-9 gap-1 justify-center items-center">
              <dd className="text-7xl font-semibold tracking-tight text-gray-900">7</dd>

              <dt className="text-base/7 text-gray-900">JOURS </dt>
              </div>
         
            </div>

            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-2xl font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Nombre demande par status
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                Nous assurons une performance de haut niveau avec des solutions adaptées à vos besoins.
                </p>
              </div>
              <div className="px-8 pb-3 pt-2 sm:px-10 sm:pb-0 sm:pt-2">
                <p className="mt-2 text-lg font-medium tracking-tight text-indigo-600 max-lg:text-center">
                  en cours
                </p>
              </div>
              <div className="flex flex-reverse mt-3 gap-1 justify-center items-center">
                 <dd className="text-4xl font-semibold tracking-tight text-gray-900">+40</dd>
                <dt className="text-base/7 text-gray-900">Demande</dt>
              </div>
              <div className="px-8 pb-3 pt-2 sm:px-10 sm:pb-0 sm:pt-2">
                <p className="mt-2 text-lg font-medium tracking-tight text-indigo-600 max-lg:text-center">
                  traite
                </p>
              </div>
              <div className="flex flex-reverse mt-3 gap-1 justify-center items-center">
                 <dd className="text-4xl font-semibold tracking-tight text-gray-900">+40</dd>
                <dt className="text-base/7 text-gray-900">Demande</dt>
              </div>              <div className="px-8 pb-3 pt-2 sm:px-10 sm:pb-0 sm:pt-2">
                <p className="mt-2 text-lg font-medium tracking-tight text-indigo-600 max-lg:text-center">
                  non traite
                </p>
              </div>
              <div className="flex flex-reverse mt-3 gap-1 justify-center items-center">
                 <dd className="text-4xl font-semibold tracking-tight text-gray-900">+40</dd>
                <dt className="text-base/7 text-gray-900">Demande</dt>
              </div>

            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
          </div>
        </div>
      </div>
    )
  }
  export default dashboard;
