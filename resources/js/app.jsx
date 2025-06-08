import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'; // bantu resolve path
import { InertiaProgress } from '@inertiajs/progress'; // loading bar inertia
import React from 'react';

InertiaProgress.init(); // Inisialisasi progress bar

createInertiaApp({
  resolve: name => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
  title: title => `${title} | Portofolio Saya`,
});
