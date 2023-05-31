import { ContactForm } from "../components/Form/ContactForm.Component";
import { Masthead } from "../components/Header/Masthead.Component";
import { Footer } from "../components/Layout/Footer.Component";
import { About } from "../components/About/About.Component";
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
