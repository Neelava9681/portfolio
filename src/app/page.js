import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import { Imprima } from "next/font/google";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#2F017C]">
     <Navbar/> 
     <div className="container mx-auto px-12 py-4 mt-24">
      <HeroSection/>
      <About/>
      <ProjectSection/>
      <EmailSection/>
     </div>
     <Footer/>
    </main>
  );
}
