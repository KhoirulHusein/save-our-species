import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Landingpage = React.lazy(() => import('../components/Pages/LandingPage/LandingPages'));
const App = React.lazy(() => import('../App'));
const DetailDonation = React.lazy(() => import('../components/Pages/DetailDonation/DetailDonations'));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/maintance" element={<App />} />
          <Route path="/detaildonation" element={<DetailDonation />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
