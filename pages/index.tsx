import type { NextPage } from "next";
import { Masthead, About, ContactForm, Footer } from "../components";
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
