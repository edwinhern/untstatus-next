import { Masthead, About, ContactForm, Footer } from "../components";
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
