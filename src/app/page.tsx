import Navbar from "../components/navbar"
import { Hero } from "./pages/hero"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      {/* Add content for scroll testing */}
      <div className="pt-32 px-4 max-w-7xl mx-auto">
        <div className="h-[200vh]" />
      </div>
      
      <Footer />
    </main>
  )
}
