import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import ProductShowcase from "./components/sections/ProductShowcase"
import WhyCostchi from "./components/sections/whyCostchi"
import CTASection from "./components/sections/CTASection"
import Footer from "./components/layout/Footer"
export default function Home(){



  return(
    <section>

      <div>
        <Navbar />
        <Hero />
        <ProductShowcase />
        <WhyCostchi />
          <CTASection />
          <Footer />
      </div>
    </section>
  )
}