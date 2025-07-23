'use client';
import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import StatsSection from './components/StatsSection';
import HowItWorks from './components/HowItWorks';
import PharmacyCardsRow from './components/PharmacyCardsRow';
import PlatformAccessCards from './components/PlatformAccessCards/PlatformAccessCards';
import Testimonials from './components/Testimonials/Testimonials';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer'; // ✅ Import the new component
import './globals.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <StatsSection />
      <PharmacyCardsRow />
      <HowItWorks />
      <PlatformAccessCards />
      <Testimonials />
      <ContactForm />
      <Footer /> {/* ✅ Add Footer here */}
    </>
  );
}





