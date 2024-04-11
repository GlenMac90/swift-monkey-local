import {
  About,
  Hero,
  Portfolio,
  Process,
  Services,
  Contact,
  Footer,
} from "./components";

export default function Home() {
  return (
    <main
      className="z-20 flex size-full flex-col justify-center px-5 md:px-8"
      id="home"
    >
      <Hero />
      <Services />
      <Process />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
