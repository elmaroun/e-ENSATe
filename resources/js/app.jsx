import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
import React from 'react';
import ReactDOM from 'react-dom/client';
import DocumentForm from './components/DocumentForm';

const root = document.getElementById('documentForm');

if (root) {
    ReactDOM.createRoot(root).render(<DocumentForm />);
}

import ReclamationForm from './Components/ReclamationForm';

const roott = document.getElementById('reclamationform');

if (roott) {
    ReactDOM.createRoot(roott).render(<ReclamationForm/>);
}
import DemandeForm from './Components/DemandeForm';

const roots = document.getElementById('demandeform');

if (roots) {
    ReactDOM.createRoot(roots).render(<DemandeForm/>);
}


import DemandeConventionForm from './Components/demandeconvention';

const rootr = document.getElementById('demandeconventionform');

if (rootr) {
    ReactDOM.createRoot(rootr).render(<DemandeConventionForm/>);
}

import DemandeAttestationReussite from './Components/DemandeAttestationReussite';

const rootd = document.getElementById('demandeattestationreussiteform');

if (rootd) {
    ReactDOM.createRoot(rootd).render(<DemandeAttestationReussite/>);
}

import DemandeReleveNote from './Components/DemandeReleveNote';

const rooti = document.getElementById('demanderelevenote');

if (rooti) {
    ReactDOM.createRoot(rooti).render(<DemandeReleveNote/>);
}