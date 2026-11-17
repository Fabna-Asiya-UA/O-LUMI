
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Ingredients from "@/components/Ingredient";
import Philosophy from "@/components/Philosophy";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/NewsLetter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <Ingredients />
      <Philosophy />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
