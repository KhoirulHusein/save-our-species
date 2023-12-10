import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loaders from '../components/Fragments/Loader/Loaders';

const Landingpage = React.lazy(() => import('../components/Pages/LandingPage/LandingPages'));
const ListAnimals = React.lazy(() => import('../components/Pages/ListAnimals/ListAnimals'));
const DetailAnimals = React.lazy(() => import('../components/Pages/DetailAnimals/DetailAnimals'));
const DetailDonation = React.lazy(() => import('../components/Pages/DetailDonation/DetailDonations'));
const FinishPayment = React.lazy(() => import('../components/Pages/DetailDonation/Finish'));
const UnfinishPayment = React.lazy(() => import('../components/Pages/DetailDonation/Unfinish'));
const FailsPayment = React.lazy(() => import('../components/Pages/DetailDonation/Fails'));
const Donation = React.lazy(() => import('../components/Pages/Donation/Donations'));
const Laporan = React.lazy(() => import('../components/Pages/Laporan/Laporan'));
const LaporanSucces = React.lazy(() => import('../components/Pages/Laporan/LaporanSucces'));
const Volunteer = React.lazy(() => import('../components/Pages/Volunteer/Volunteer'));
const DetailVolunteerPage = React.lazy(() => import('../components/Pages/Volunteer/DetailVolunteer'));
const FormVolunteer = React.lazy(() => import('../components/Pages/Volunteer/FormVolunteer'));
const FormVolunteerSucces = React.lazy(() => import('../components/Pages/Volunteer/FormVolunteerSucces'));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<Loaders />}>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/maintance" element={<App />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/donation/lembaga/:_id" element={<DetailDonation />} />
          <Route path="/animals/details/:id" element={<DetailAnimals />} />
          <Route path="/animals" element={<ListAnimals />} />
          <Route path="/detaildonation" element={<DetailDonation />} />
          <Route path="/finishspayment" element={<FinishPayment />} />
          <Route path="/unfinishpayment" element={<UnfinishPayment />} />
          <Route path="/failspayment" element={<FailsPayment />} />
          <Route path="/lapor" element={<Laporan />} />
          <Route path="/laporansucces" element={<LaporanSucces />} />
          <Route path="/Volunteer" element={<Volunteer />} />
          <Route path="//DetailVolunteerPage/:id" element={<DetailVolunteerPage />} />
          <Route path="/formvolunteer" element={<FormVolunteer />} />
          <Route path="/formvolunteersucces" element={<FormVolunteerSucces />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
