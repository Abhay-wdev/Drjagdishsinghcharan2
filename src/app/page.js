 
 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection";
import AboutDoctor from "@/components/AboutDoctor";
import Service from "@/components/Service";
import FeqSection from "@/components/FeqSection";
import GoogleReviews from "@/components/GoogleReviews";
import TopNavbar from "@/components/TopNavbar";
import Test from "@/components/Test";
import Doctorinfo from "@/components/Doctorinfo";
import WhyChoose from "@/components/WhyChoose";
import HeroSectiontwo from "@/components/HeroTwo";
export default function Home() {
  return (
     <>
      
      <HeroSectiontwo/>
      <AboutDoctor/>
      <Service/>
      <hr className="text-gray-300"></hr>
     <Doctorinfo/>
      <GoogleReviews />
      <hr className="text-gray-300"></hr>
      <WhyChoose/>
       <FeqSection/>
     </>
  );
}
