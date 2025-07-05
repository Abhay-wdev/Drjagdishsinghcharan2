import React from "react";
import { FaUserMd, FaAmbulance } from "react-icons/fa";
import { MdEmergency, MdMedicalServices } from "react-icons/md";
import ServiceSlide from "./ServiceSlide";
import ServDetail from "./ServDetail";
import SpineOrthoServices from "./SpineOrthoServices";

const ExpertiseSection = () => {
  return (
    <section className="py-1 px-4 bg-[#ffffff]">
       
         
       <ServDetail/>
         
<SpineOrthoServices/>
 
    </section>
  );
};

export default ExpertiseSection;
