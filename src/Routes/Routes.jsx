import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = React.lazy(() => import('../App'));
const ListAnimals = React.lazy(() => import('../components/Pages/ListAnimals/ListAnimals'));
const DetailAnimals = React.lazy(() => import('../components/Pages/DetailAnimals/DetailAnimals'));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/animals/details/:id" element={<DetailAnimals />} />
          <Route path="/animals" element={<ListAnimals />} />
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
