import { ContactForm } from "../components/ContactForm.Component";
import { Masthead } from "../components/Masthead.Component";
import { Footer } from "../components/Footer.Component";
import { About } from "../components/About.Component";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Masthead />
      <About />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
