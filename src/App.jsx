import React from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import OurSolutions from "./components/OurSolutions/OurSolutions";
import Navigation from "./components/Navigation/Navigation";
import OurCustomers from "./components/OurCustomers/OurCustomers";
import Testimonials from "./components/Testimonials/Testimonials";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import Brochures from "./components/Brochures/Brochures";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Hero />
        <About />
        <OurSolutions />
        <OurCustomers />
        <Testimonials />
        <CaseStudies />
        <Brochures />
        <News />
      </main>
      <Footer />
    </>
  );
};

export default App;
