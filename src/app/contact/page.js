import ContactSection from "@/components/ContactSection";
import ContactInformation from "../../components/ContactInformation";
import { Divide } from "lucide-react";
import FeqSection from "@/components/FeqSection";
import MultiItemCarousel from "@/components/MultiItemCarousel";
import ServiceSlider from "@/components/ServiceSlider";
export default function Contact() {

  const slides = [
    {
      image: "/images/home/slide4.jpg",
      title: "Dr. Jagdish Singh Charan",
      subtitle: "Relief for Back and Neck Pain Through Expert, Personalized Care",
    },
    {
      image: "/images/services/joint-replacement.png",
      title: "Dr. Jagdish Singh Charan",
      subtitle:
        "Joint Replacement Surgery – Move Freely Again with Expert Surgery for Pain-Free Living",
    },
    {
      image: "/images/services/kneeinjury.webp",
      title: "Dr. Jagdish Singh Charan",
      subtitle:
        "Sports Injury Care – Specialized Recovery for Athletes and Active Lifestyles",
    },
  ];



  return (
< >
<ServiceSlider slides={slides} />
<ContactInformation/>
<ContactSection/>
<MultiItemCarousel/>
<FeqSection/>



</>



  )
}