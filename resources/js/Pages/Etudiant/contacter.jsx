import Header from "@/Components/Header";
import { Head } from "@inertiajs/react";
import React from 'react';


const contacter= () => {

    return (
        <div className="bg-white">
            <Header/>
            <Head title="Contactez-nous" />
    
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <h2 className="mt-10 text-center text-3xl/9 font-bold tracking-tight text-gray-900">
                    Contactez-nous
                </h2>
            <div className="mx-auto max-w-2xl py-32 sm:py-15 lg:pb-52 pt-15">
            

            <div className="px-4 sm:px-0">
                <h3 className="text-base/7 font-semibold text-gray-900">ENSATé - Ecole Nationale des Sciences Appliquées de Tétouan</h3>
                <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">L'École Nationale des Sciences Appliquées de Tétouan (ENSA-Tétouan), fondée en 2008, est une école d'ingénieurs publique au Maroc, rattachée à l'Université Abdelmalek Essaâdi. Située à Tétouan, elle forme des ingénieurs compétents et innovants, prêts à répondre aux défis technologiques et scientifiques de demain.</p>
            </div>

            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm/6 font-medium text-gray-900">Adresse</dt>
                    <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Avenue de la Palestine Mhanech I, TÉTOUAN</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm/6 font-medium text-gray-900">Email</dt>
                    <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">ensate@uae.ac.ma</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm/6 font-medium text-gray-900">Numéro de téléphone</dt>
                    <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">+212 5396-88027</dd>
                    </div>
                </dl>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg/8 pt-14 font-semibold text-gray-900">
                    Nos Réseaux Sociaux
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl lg:max-w-none ">
                    <a href="https://www.linkedin.com/school/ensa-tetouan/"  target="_blank">
                    <img
                        alt="Transistor"
                        src="/images/linkedin.svg"
                        width={158}
                        height={48}
                        className="opacity-80 col-span-1 max-h-8 w-full object-contain lg:col-span-1"
                    />
                    </a>
                    <a href="https://www.facebook.com/ensa.tetouan.officiel"  target="_blank">
                    <img
                        alt="Transistor"
                        src="/images/facebook.svg"
                        width={158}
                        height={48}
                        className="opacity-80 col-span-1 max-h-8 w-full object-contain lg:col-span-1"
                    />
                    </a>
                    <a href="https://www.instagram.com/ensa_tetouan_officiel/"  target="_blank">
                    <img
                        alt="Transistor"
                        src="/images/instagram.svg"
                        width={158}
                        height={48}
                        className="opacity-80 col-span-1 max-h-8 w-full object-contain lg:col-span-1"
                    />
                    </a>
                </div>
            </div>
        </div>
            
        </div>
        </div>
    )
}
export default contacter;

  