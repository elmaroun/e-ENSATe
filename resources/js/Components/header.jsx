export default function Header() {
    return (
      <header className="absolute inset-x-0 top-0 z-50">
          <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
              <a href="#" className="flex items-center gap-x-3">
                <img
                  alt=""
                  src="/images/logo.png"
                  className="h-10 w-auto"
                />
                <h3 className="text-pretty text-lg font-medium text-gray-800 font-semibold sm:text-lg/8">e-ENSATé</h3>
              </a>
            </div>
            <div className="lg:flex lg:flex-1 lg:justify-end">
              <a href="/contacter-nous" className="text-sm/6 font-semibold text-gray-900 transition ease-in-out hover:scale-105 duration-200">
                Contactez-nous <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
        </header>
    );
  }
  