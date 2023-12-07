import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Landingpage = React.lazy(() => import('../components/Pages/LandingPage/LandingPages'));
// const DetailVolunteer = React.lazy(() =>
// import('../components/Pages/Volunteer/DetailVolunteer'));
const App = React.lazy(() => import('../App'));
const DetailDonation = React.lazy(() => import('../components/Pages/DetailDonation/DetailDonations'));
const FinishPayment = React.lazy(() => import('../components/Pages/DetailDonation/Finish'));
const UnfinishPayment = React.lazy(() => import('../components/Pages/DetailDonation/Unfinish'));
const FailsPayment = React.lazy(() => import('../components/Pages/DetailDonation/Fails'));
const Donation = React.lazy(() => import('../components/Pages/Donation/Donations'));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/maintance" element={<App />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/donation/lembagas/:_id" element={<DetailDonation />} />
          <Route path="/finishspayment" element={<FinishPayment />} />
          <Route path="/unfinishpayment" element={<UnfinishPayment />} />
          <Route path="/failspayment" element={<FailsPayment />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
