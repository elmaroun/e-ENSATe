import Dropdown from '@/Components/Dropdown';
import { Link, usePage } from '@inertiajs/react';

export default function HeaderAdmin() {
  const user = usePage().props.auth.user;


    return (
      <header className="absolute inset-x-0 top-0 z-50">
          <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
                <Link href={route('dashboard')} className="flex items-center gap-x-3">
                <img
                    alt=""
                    src="/images/logo.png"
                    className="h-10 w-auto"
                />
                <h3 className="text-pretty text-lg text-gray-800 font-semibold sm:text-lg/8">e-ENSATé</h3>
                </Link>
            </div>

            <div className="sm:ms-6 sm:flex sm:items-center">
                  <div className="relative ms-3">
                      <Dropdown>
                          <Dropdown.Trigger>
                              <span className="inline-flex rounded-md">
                                  <button
                                      type="button"
                                      className="inline-flex items-center text-sm/6 font-semibold text-gray-900"
                                  >
                                      {user.name}

                                      <svg
                                          className="-me-0.5 ms-2 h-4 w-4"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                      >
                                          <path
                                              fillRule="evenodd"
                                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                              clipRule="evenodd"
                                          />
                                      </svg>
                                  </button>
                              </span>
                          </Dropdown.Trigger>

                          <Dropdown.Content>
                              <Link
                                  href={route('profile.edit')}
                                  className='text-sm/6 cursor-default text-gray-900 font-semibold block w-full px-4 py-2 leading-5 text-nowrap'

                              >
                                    {user.email}
                              </Link>
                              <Dropdown.Link
                                  href={route('logout')}
                                  className='text-sm/6 text-gray-900 text-nowrap min-w-48'
                                  method="post"
                                  as="button"
                              >
                                
                                  Se déconnecter
                              </Dropdown.Link>
                          </Dropdown.Content>
                      </Dropdown>
                  </div>
              </div>
          </nav>
        </header>
    );
  }
  