
import Header from '../../../Components/header';
import React, { useState } from "react";


const demande_releve= () =>  {
 
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 7 }, (_, i) => currentYear -1 - i);
  const yearsfin = Array.from({ length: 7 }, (_, i) => currentYear  - i);


  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");

  // Gestion de la validation
  const handleStartYearChange = (e) => {
    const selectedYear = parseInt(e.target.value, 10);
    setStartYear(selectedYear);

    // Si l'année de fin est invalide par rapport à la règle, la réinitialiser
    if (endYear !== "" && selectedYear + 1 !== endYear) {
      setEndYear("");
    }
  };

  const handleEndYearChange = (e) => {
    const selectedYear = parseInt(e.target.value, 10);
    if (startYear !== "" && selectedYear === startYear + 1) {
      setEndYear(selectedYear);
    } else {
      alert("L'année de fin doit être supérieure à l'année de début par 1.");
      setEndYear("");
    }
  };

  return (
<div className="bg-white">
  <Header />
     

  <div className="relative isolate px-6 pt-14 lg:px-8">
      <h2 className="mt-10 text-center text-3xl/9 font-bold tracking-tight text-gray-900">
         Demande de releve des notes
      </h2>
  <div className="mx-auto max-w-2xl py-32 sm:py-15 lg:pb-52 pt-15">
  <form>
    <div className="space-y-12">
      
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-lg/7 font-semibold text-gray-900">Informations Suplementaire</h2>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
        
          <div className="flex items-center space-x-2">
            
            <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                Année universitaire
                </label>
                <div className="mt-2 grid grid-cols-1">

                <select
                    id="start-year"
                    name="start-year"
                    value={startYear}
                    onChange={handleStartYearChange}
                    className="col-start-1 row-start-1 w-30 appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    required
                    >
                    <option hidden>
                    Début
                    </option>
                    {years.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                    ))}
                </select>
                </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                ‎ 
              </label>
              <div className="mt-2 grid grid-cols-1">
                <span>/</span>
              </div>
            </div>
            <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                    ‎  
                </label>
              <div className="mt-2 grid grid-cols-1">

                <select
                    id="end-year"
                    name="end-year"
                    value={endYear}
                    onChange={handleEndYearChange}
                    className="col-start-1 row-start-1 w-40 appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    required
                >
                    <option hidden>
                    Fin
                    </option>
                    {yearsfin.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                    
                    ))}
                </select>
              </div>
            </div>

            

            
          </div>
          <div className="sm:col-span-3">
            <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
            Semestre : 
            </label>
            <div className="mt-2 grid grid-cols-2">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              >
                <option hidden>Semestre</option>
                <option>Semestre 1</option>
                <option>Semestre 2</option>
             </select>
            </div>
          </div>    
        </div>
      </div>

    </div>

    <div className="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" className="text-sm/6 font-semibold text-gray-900">
        Annuler
      </button>
      <button
        type="submit"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Confirmer la Demande
      </button>
    </div>
  </form>

    
        </div>
      </div>
    </div>
  )
}
export default demande_releve;

