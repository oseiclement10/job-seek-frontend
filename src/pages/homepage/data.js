import businessConsultancyImg from "@/assets/images/closeup.jpg";
import graphicDesign from "@/assets/images/graphicdesign.avif";
import virtualAssistance from "@/assets/images/virtualassistant.jpg";
import uiDesigner from "@/assets/images/ui-design.avif";

import man1 from "@/assets/images/man.png";
import man2 from "@/assets/images/gamer.png";
import lady1 from "@/assets/images/woman.png";
import lady2 from "@/assets/images/woman(1).png";
import lady3 from "@/assets/images/girl.png";

export const mockJobs = [
  {
    name: "Business Consultancy",
    image: businessConsultancyImg,
  },
  {
    name: "Graphic Design",
    image: graphicDesign,
  },
  {
    name: "Virtual Assistance",
    image: virtualAssistance,
  },
  {
    name: "UI Design",
    image: uiDesigner,
  },
];

export const mockTalents = [
  {
    name: "Aisha Khan",
    image: lady1,
    jobRole: "Full-Stack Developer",
    rating: 4.8,
    location: "Dubai, UAE",
    availability: "available",
    shortBio:
      "Experienced in building scalable web applications using modern technologies like React, Node.js, and Laravel.",
  },
  {
    name: "Kwame Mensah",
    image: man1,
    jobRole: "Cybersecurity Analyst",
    rating: 4.7,
    location: "Accra, Ghana",
    availability: "busy",
    shortBio:
      "Specialized in threat detection, risk assessment, and security architecture to protect digital assets.",
  },
  {
    name: "Carlos Rodríguez",
    image: lady2,
    jobRole: "Digital Marketing Specialist",
    rating: 4.6,
    location: "Madrid, Spain",
    availability: "available",
    shortBio:
      "Expert in SEO, social media marketing, and PPC campaigns with a track record of boosting brand visibility.",
  },
  {
    name: "Sophie Dubois",
    image: man2,
    jobRole: "Graphic Designer",
    rating: 4.5,
    location: "Paris, France",
    availability: "available",
    shortBio:
      "Creative designer with expertise in branding, UI/UX, and visual storytelling across various digital platforms.",
  },
  {
    name: "Emily Johnson",
    image: lady3,
    jobRole: "Data Scientist",
    rating: 4.9,
    availability: "available",
    location: "San Francisco, USA",
    shortBio:
      "Passionate about leveraging AI and machine learning to drive data-driven business decisions.",
  },
];
