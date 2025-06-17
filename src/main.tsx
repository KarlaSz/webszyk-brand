// uncommend after maintenance
// import { createRoot } from 'react-dom/client';
// import { HashRouter } from 'react-router-dom';
// import App from './App.tsx';
// import './index.css';

// createRoot(document.getElementById('root')!).render(
//   <HashRouter>
//     <App />
//   </HashRouter>
// );


// start MAINTENANCE section

import { createRoot } from 'react-dom/client';
import './index.css';

const MAINTENANCE_MODE = true;

if (MAINTENANCE_MODE) {
  const Maintenance = () => (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Strona w przebudowie</h1>
      <p className="text-gray-700 text-lg max-w-xl mb-6">
        Aktualnie pracuję nad nową wersją serwisu WebSzyk. <br></br>Wrócę niebawem z ulepszeniami 🚀
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        {/* E-mail button */}
        <a
          href="mailto:webszyk@gmail.com"
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Napisz do mnie
        </a>

        {/* Phone button
        <a
          href="tel:+48726486987"
          className="px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition"
        >
          Zadzwoń: +48 726-486-987
        </a> */}
      </div>

      
    </div>
  );

  createRoot(document.getElementById('root')!).render(<Maintenance />);
} else {
  import('./App').then(({ default: App }) => {
    import('react-router-dom').then(({ HashRouter }) => {
      createRoot(document.getElementById('root')!).render(
        <HashRouter>
          <App />
        </HashRouter>
      );
    });
  });
}
``
