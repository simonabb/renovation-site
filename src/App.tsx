import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Approach from "./components/Approach";
import Gallery from "./components/Gallery";
import Videos from "./components/Videos";
import Testimonials from "./components/Testimonials";
import Areas from "./components/Areas";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Approach />
        <Gallery />
        <Videos />
        <Testimonials />
        <Areas />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
