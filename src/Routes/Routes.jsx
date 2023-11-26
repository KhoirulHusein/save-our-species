import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// const Landingpage = React.lazy(() => import('../components/Pages/LandingPages'));
const App = React.lazy(() => import('../App'));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
