
import Header from './header';

export default function Example() {

    return (
      <div className="bg-white">
      
      <Header />

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
                <a
                  href="/Demande"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Demander un Document
                </a>
                <a href="/Reclamation" className="text-sm/6 font-semibold text-gray-900">
                  Réclamation <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  