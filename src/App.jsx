import EasyProcess from "./components/EasyProcess"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import HowItWorks from "./components/HowItWorks"
import IncludedInBook from "./components/IncludedInBook"
import WhyWeStarted from "./components/WhyWeStarted"

function App() {

  return (
    <>
      <Header/>
      <main>
        <HeroSection/>
        <EasyProcess/>
        <WhyWeStarted/>
        <HowItWorks/>
        <FAQ/>
        <IncludedInBook/>
      </main>
      <Footer/>
    </>
  )
}

export default App
