import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="overlay" />
      <div className="stars" aria-hidden="true" />
      <div className="starts2" aria-hidden="true" />
      <div className="stars3" aria-hidden="true" />
      <main className="main">
        <section className="contact">
          <h1 className="title">Save Our Species</h1>
          <h2 className="sub-title">Site Under Construction</h2>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
