import Checkbox from '@/Components/Checkbox';
import Header from '@/Components/Header';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';


export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };
    return (
        <div className="bg-white h-full">
        <Head title='Login' />
        <div className="relative isolate px-6 pt-10 lg:px-8">
          
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-20 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm flex items-center justify-center gap-x-3">
                    <img
                    alt="e-ENSATé"
                    src="/images/logo.png"
                    className="h-10 w-auto"
                    />
                    <h3 className="text-pretty text-lg text-gray-800 font-semibold sm:text-lg/8">e-ENSATé</h3>
                </div>
                <h2 className="mt-8 text-center text-xl/9 font-bold tracking-tight text-gray-800">
                    Bienvenue dans l'Espace Administrateur
                </h2>
                <p className="mt-4 text-pretty text-center text-base font-medium text-gray-500 sm:text-base/8">
                    Veuillez vous connecter pour accéder à l'espace de gestion administratif.
                </p>
    
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={submit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-800">
                            Adresse e-mail
                            </label>
                            <div className="mt-2">
                            <TextInput
                                id="email"
                                name="email"
                                type="email"
                                value={data.email}
                                autoComplete="username"
                                onChange={(e) => setData('email', e.target.value)}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                            <InputError message={errors.email} className="mt-2" />
                            </div>
                        </div>
            
                        <div>
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-800">
                                Mot de passe
                            </label>
                            <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={data.password}
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                            <InputError message={errors.password} className="mt-2" />
                            
                            </div>
                        </div>

                        <div className="mt-4 block">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData('remember', e.target.checked)
                            }
                        />
                        <span className="ms-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                </div>
            
                        <div className="flex justify-center pt-5" disabled={processing}>
                            <button
                            type="submit"
                            className="flex w-40 justify-center rounded-md bg-blue-800 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
                            >
                            Se connecter
                            </button>
                        </div>
                    </form>
        
                </div>
            </div>
        </div>
        </div>
    )
  }