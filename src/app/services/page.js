import EachHero from "@/components/EachHero";
import ExpertiseSection from "@/components/ExpertiseSection";
import ScheduleHealthcare from "@/components/ScheduleHealthcare";
import ServiceHero from "@/components/ServiceHero";
import ServiceSlider from "@/components/ServiceSlider";

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

export default function Home() {
  return (
    <>
      <ServiceSlider slides={slides} />
      <ServiceHero />
      <ExpertiseSection />
      <ScheduleHealthcare />
          
    </>
  );
}
