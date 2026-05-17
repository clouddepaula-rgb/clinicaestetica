import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { WhatsAppFloat } from "../components/WhatsAppFloat";
import { Schema } from "../components/Schema";
import { Hero } from "../sections/Hero";
import { Differentials } from "../sections/Differentials";
import { About } from "../sections/About";
import { Procedures } from "../sections/Procedures";
import { Results } from "../sections/Results";
import { Contact } from "../sections/Contact";

export default function Home() {
  return (
    <>
      <Schema />
      <Navbar />
      <main className="flex-grow w-full">
        <Hero />
        <Differentials />
        <About />
        <Procedures />
        <Results />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
