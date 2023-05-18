import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from "./components/Header";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import AfterAbout from "./components/AfterAbout";
import Reliability from "./components/Reliability";
import InstantPayments from "./components/InstantPayments";
import CompetitiveRates from "./components/CompetitiveRates";
import GlobalReach from "./components/GlobalReach";
import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import BannerTwo from "./components/BannerTwo";
import PaymentMethods from "./components/PaymentMethods";
import styles from './styles.module.css'
import BannerThree from "./components/BannerThree";
import Services from "./components/Services";
import Contacts from "./components/Contacts";


function App() {
    const scrollToAboutUs = () => {
        const aboutUsSection = document.getElementById('about-us-section');
        aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToPaymentMethods = () => {
        const aboutUsSection = document.getElementById('payment-methods-section');
        aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToServices = () => {
        const aboutUsSection = document.getElementById('services-section');
        aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContacts= () => {
        const aboutUsSection = document.getElementById('contacts-section');
        aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    };

    const phoneNumber = '+254792648012';
    const handleWhatsAppClick = () => {
        const whatsAppUrl = `https://wa.me/${phoneNumber}`;
        window.location.href=whatsAppUrl;
    }

  return (
    <div className="App">
      <Router>
          <Header scrollToAboutUs={scrollToAboutUs}
                  scrollToPaymentMethods={scrollToPaymentMethods}
                  scrollToServices={scrollToServices}
                  scrollToContacts={scrollToContacts}>

          </Header>
          <Banner></Banner>
          <AboutUs></AboutUs>
          <AfterAbout></AfterAbout>
          <Reliability></Reliability>
          <InstantPayments></InstantPayments>
          <CompetitiveRates></CompetitiveRates>
          <GlobalReach></GlobalReach>
          <BannerTwo></BannerTwo>
          <PaymentMethods></PaymentMethods>
          <Services></Services>
          <BannerThree></BannerThree>
          <Contacts handleWhatsAppClick={handleWhatsAppClick}>

          </Contacts>
      </Router>
    </div>
  );
}

export default App;
