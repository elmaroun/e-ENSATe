import Header from '../../Components/header';
import { Head, Link } from "@inertiajs/react"
import reclamation from '../Etudiant/reclamation';
import HeaderAdmin from '@/Components/HeaderAdmin';

const MyLink = ({ demande }) => {
  if ( demande.type_demande === "Relevé des Notes") {
    return <Link href={route('detailsdemanderelevenote', { id: demande.id })}>                 
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
                          <p className="mt-1 truncate text-sm/5 text-gray-500">{demande.N_Apogee} - {demande.name}</p>
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
                          <p className="text-base/6 font-semibold text-gray-900 text-nowrap">Statut</p>
                          {
                          demande.status === 'Traitée' && ( 
                            <div className="mt-1 flex items-center gap-x-1.5">
                            <div className="flex-none rounded-full bg-green-500/20 p-1">
                              <div className="size-1.5 rounded-full bg-green-500" />
                            </div>
                            <p className="text-sm/5 truncate text-gray-500">Traitée</p>
                            </div>
                          )}
                                                    {
                          demande.status === 'Non traitée' && ( 
                            <div className="mt-1 flex items-center gap-x-1.5">
                            <div className="flex-none rounded-full bg-red-500/20 p-1">
                              <div className="size-1.5 rounded-full bg-red-500" />
                            </div>
                            <p className="text-sm/5 truncate text-gray-500">Non traitée</p>
                            </div>
                          )}
                                                    {
                          demande.status === 'En cours' && ( 
                            <div className="mt-1 flex items-center gap-x-1.5">
                            <div className="flex-none rounded-full bg-blue-500/20 p-1">
                              <div className="size-1.5 rounded-full bg-blue-500" />
                            </div>
                            <p className="text-sm/5 truncate text-gray-500">En cours</p>
                            </div>
                          )}
                        </div>
                      </div>


                    </li>
                    <hr></hr>
                    </Link>
                    ;
  } else if(demande.type_demande=== "Convention de Stage") {
    return      <Link href={route('detailsdemandeconvention', { id: demande.id })}>                 
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
          <p className="mt-1 truncate text-sm/5 text-gray-500">{demande.N_Apogee} - {demande.name}</p>
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
            <div className="mt-1 flex items-center gap-x-1.5">
            <div className="flex-none rounded-full bg-green-500/20 p-1">
              <div className="size-1.5 rounded-full bg-green-500" />
            </div>
            <p className="text-sm/5 truncate text-gray-500">Traitée</p>
            </div>
          )}
                                    {
          demande.status === 'Non traitée' && ( 
            <div className="mt-1 flex items-center gap-x-1.5">
            <div className="flex-none rounded-full bg-red-500/20 p-1">
              <div className="size-1.5 rounded-full bg-red-500" />
            </div>
            <p className="text-sm/5 truncate text-gray-500">Non traitée</p>
            </div>
          )}
                                    {
          demande.status === 'En cours' && ( 
            <div className="mt-1 flex items-center gap-x-1.5">
            <div className="flex-none rounded-full bg-blue-500/20 p-1">
              <div className="size-1.5 rounded-full bg-blue-500" />
            </div>
            <p className="text-sm/5 truncate text-gray-500">En cours</p>
            </div>
          )}
        </div>
      </div>


    </li>
    <hr></hr>
    </Link>
    ;
  }else if (demande.type_demande=== "Attestation de Réussite"){
    return   <Link href={route('detailsdemandeattestationreussite', { id: demande.id })}>                 
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
          <p className="mt-1 truncate text-sm/5 text-gray-500">{demande.N_Apogee} - {demande.name}</p>
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
            <div className="mt-1 flex items-center gap-x-1.5">
            <div className="flex-none rounded-full bg-green-500/20 p-1">
              <div className="size-1.5 rounded-full bg-green-500" />
            </div>
            <p className="text-sm/5 truncate text-gray-500">Traitée</p>
            </div>
          )}
                                    {
          demande.status === 'Non traitée' && ( 
            <div className="mt-1 flex items-center gap-x-1.5">
            <div className="flex-none rounded-full bg-red-500/20 p-1">
              <div className="size-1.5 rounded-full bg-red-500" />
            </div>
            <p className="text-sm/5 truncate text-gray-500">Non traitée</p>
            </div>
          )}
                                    {
          demande.status === 'En cours' && ( 
            <div className="mt-1 flex items-center gap-x-1.5">
            <div className="flex-none rounded-full bg-blue-500/20 p-1">
              <div className="size-1.5 rounded-full bg-blue-500" />
            </div>
            <p className="text-sm/5 truncate text-gray-500">En cours</p>
            </div>
          )}
        </div>
      </div>


    </li>
    <hr></hr>
    </Link>
    ;
 
  }else if (demande.type_demande=== "Attestation de Scolarité"){
    return   <Link href={route('detailsdemandeattestationscolarite', { id: demande.id })}>                 
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
          <p className="mt-1 truncate text-sm/5 text-gray-500">{demande.N_Apogee} - {demande.name}</p>
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
            <div className="mt-1 flex items-center gap-x-1.5">
            <div className="flex-none rounded-full bg-green-500/20 p-1">
              <div className="size-1.5 rounded-full bg-green-500" />
            </div>
            <p className="text-sm/5 truncate text-gray-500">Traitée</p>
            </div>
          )}
                                    {
          demande.status === 'Non traitée' && ( 
            <div className="mt-1 flex items-center gap-x-1.5">
            <div className="flex-none rounded-full bg-red-500/20 p-1">
              <div className="size-1.5 rounded-full bg-red-500" />
            </div>
            <p className="text-sm/5 truncate text-gray-500">Non traitée</p>
            </div>
          )}
                                    {
          demande.status === 'En cours' && ( 
            <div className="mt-1 flex items-center gap-x-1.5">
            <div className="flex-none rounded-full bg-blue-500/20 p-1">
              <div className="size-1.5 rounded-full bg-blue-500" />
            </div>
            <p className="text-sm/5 truncate text-gray-500">En cours</p>
            </div>
          )}
        </div>
      </div>


    </li>
    <hr></hr>
    </Link>
    ;
 
  }
}
  
  const Reclamation = ({ demandes ,type_demande,trier_par}) => {
    return (
        <div className="bg-white">
            <HeaderAdmin/>
            <Head title="Demandes" />
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <h2 className="mt-10 text-center text-3xl/9 font-bold tracking-tight text-gray-900">
                    Demandes de Documents
                </h2>
              <div className="mx-auto max-w-4xl pb-32 pt-12 sm:py-15 lg:pb-52 pt-15 ">


                  <form method="get" action={route('traitement_demande')} id="filterForm" className="my-10 flex justify-between gap-x-8">
                    <div className="flex-wrap-2 max-w-sm">

                              <label className="block text-sm/6 font-medium text-gray-900">
                              Type de Demande
                              </label>
                              <div className="mt-2 grid grid-cols-1">
                                  <select
                                   onChange={() => document.getElementById('filterForm').submit()}
                                   id="type_demande"
                                  name="type_demande"
                                  autoComplete="type_demande"
                                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-700 sm:text-sm/6"
                                  >   <option hidden >{type_demande}</option>
                                      <option value="Tous les demandes">Tous les demandes </option>
                                      <option value="Attestation de Scolarité">Attestation de Scolarité</option>
                                      <option value="Attestation de Réussite">Attestation de Réussite</option>
                                      <option value="Relevé des Notes">Relevé des Notes</option>
                                      <option value="Convention de Stage">Convention de Stage</option>
                                  </select>
                              </div>
                    </div>                   
                    <div className="flex-2 max-w-sm">
                              <label className="block text-sm/6 font-medium text-gray-900">
                              Trier par
                              </label>
                              <div className="mt-2 grid grid-cols-1">
                                  <select
                                  onChange={() => document.getElementById('filterForm').submit()}
                                  id="trier_par"
                                  name="trier_par"
                                  autoComplete="trier_par"
                                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-700 sm:text-sm/6"
                                  >
                                      <option hidden >{trier_par}</option>

                                      <option value="Les plus récentes">Les plus récentes</option>
                                      <option value="Status de demande">Status de demande</option>
                                      <option value="Etudiant">Etudiant </option>
                                  </select>
                              </div>
                    </div>


                    <div className="w-20"></div>
                    <div className="flex-1 max-w-sm">

                              
                  </div>

                  </form>


                  <div>
                      <ul role="list" className="divide-y divide-gray-100">
                          {demandes.data.map((demande) => (
                              <MyLink key={demande.id} demande={demande} />
                          ))}
                      </ul>

                      <div className="mt-4">
                          <nav aria-label="Pagination">
                              <ul className="flex justify-center space-x-2 mt-14">
                                  {demandes.links.map((link, index) => (
                                      <li key={index}>
                                          <Link
                                              href={link.url ? `${link.url}&type_demande=${type_demande}&trier_par=${trier_par}` : null}
                                              className={`px-4 py-2 border rounded-md ${
                                                  link.active ? 'bg-gray-400 text-white' : link.url ? 'bg-white text-gray-900 hover:bg-gray-100'
                                                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                              }`}
                                              onClick={(e) => {
                                                  if (!link.url) e.preventDefault();
                                              }}
                                          >
                                              {link.label === '&laquo; Previous' ? '«' : link.label === 'Next &raquo;' ? '»' : link.label}
                                          </Link>
                                      </li>
                                  ))}
                              </ul>
                          </nav>
                      </div>
                  </div>



                
                


              </div>
            </div>
      </div>

                  

    )
  }
  export default Reclamation;


  