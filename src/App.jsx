import Footer from "./components/molecules/Footer"
import Header from "./components/molecules/Header"
import EasyProcess from "./components/organisms/EasyProcess"
import FAQ from "./components/organisms/FAQ"
import HeroSection from "./components/organisms/HeroSection"
import HowItWorks from "./components/organisms/HowItWorks"
import IncludedInBook from "./components/organisms/IncludedInBook"
import WhyWeStarted from "./components/organisms/WhyWeStarted"

function App() {

  return (
    <div className="flex flex-col">
        <Header/>
      <main className="flex-1 basis-[100dvh]">
        <HeroSection/>
        <EasyProcess/>
        <WhyWeStarted/>
        <HowItWorks/>
        <FAQ/>
        <IncludedInBook/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
