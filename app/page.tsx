import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import Subscription from "./sections/Subscription";

export default function Home() {
  return (
    <div className="p-[2rem] md:p-[6rem]">
      <Header />
      <main>
        <Hero/>
        <Features/>
        <Testimonials/>
        <FAQ/>
        <Subscription/>
      </main>
      <Footer/>
    </div>
  );
}
