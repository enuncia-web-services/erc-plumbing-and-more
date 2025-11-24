import { 
  Wrench, 
  Building2, 
  Siren, 
  Droplets, 
  Search, 
  Flame, 
  ShowerHead, 
  Construction 
} from "lucide-react";
import { ServiceItem, TestimonialItem, FAQItem } from "./types";

export const CONTACT_INFO = {
  phone: "(281) 948-8121",
  phoneLink: "tel:2819488121",
  email: "ercplumbingandmore@gmail.com",
  address: "5436 Margarita St, Houston, TX 77020",
  hours: {
    weekdays: "Open 24 Hours",
    saturday: "Open 24 Hours",
    sunday: "Closed"
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'residential',
    title: 'Residential Plumbing',
    description: 'Complete home plumbing solutions from leaky faucets to whole-house repiping.',
    icon: Wrench
  },
  {
    id: 'commercial',
    title: 'Commercial Plumbing',
    description: 'Reliable services for businesses, property managers, and commercial facilities.',
    icon: Building2
  },
  {
    id: 'emergency',
    title: '24/7 Emergency Services',
    description: 'Immediate response for burst pipes, sewage backups, and critical failures.',
    icon: Siren
  },
  {
    id: 'drain',
    title: 'Drain Cleaning',
    description: 'Professional unclogging and cleaning for kitchen, bathroom, and main lines.',
    icon: Droplets
  },
  {
    id: 'leak',
    title: 'Leak Detection & Repair',
    description: 'Advanced technology to locate and fix hidden leaks before they cause damage.',
    icon: Search
  },
  {
    id: 'heater',
    title: 'Water Heaters',
    description: 'Installation, repair, and maintenance of tank and tankless water heaters.',
    icon: Flame
  },
  {
    id: 'fixture',
    title: 'Fixture Upgrades',
    description: 'Modernize your space with new faucets, toilets, showers, and sinks.',
    icon: ShowerHead
  },
  {
    id: 'construction',
    title: 'New Construction & Remodels',
    description: 'Expert plumbing planning and installation for renovations and new builds.',
    icon: Construction
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Maria G.',
    rating: 5,
    text: 'ERC Plumbing saved the day! We had a pipe burst at 2 AM on a Tuesday, and they were there within the hour. Professional, polite, and very affordable.',
    type: 'Residential'
  },
  {
    id: '2',
    name: 'James Henderson',
    rating: 5,
    text: 'I manage several apartment complexes in Houston. ERC is my go-to for all plumbing issues. They explain everything clearly and get the job done right.',
    type: 'Commercial'
  },
  {
    id: '3',
    name: 'Sofia Martinez',
    rating: 5,
    text: 'Excelente servicio. Hablan español lo cual facilitó mucho la comunicación. Arreglaron mi calentador de agua rápidamente.',
    type: 'Residential'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do you offer emergency plumbing services?",
    answer: "Yes, we are available 24 hours a day, Monday through Saturday, for any plumbing emergencies in the Houston area."
  },
  {
    question: "Do you charge for estimates?",
    answer: "We offer fair and transparent pricing. Please call us to discuss your specific issue and we can provide an estimate or schedule a visit."
  },
  {
    question: "Are you bilingual?",
    answer: "Yes! Our team speaks both English and Spanish fluently to better serve our diverse Houston community."
  },
  {
    question: "What areas do you serve?",
    answer: "We serve Houston, TX (77020) and surrounding areas including Pasadena, Pearland, Humble, and Katy."
  }
];