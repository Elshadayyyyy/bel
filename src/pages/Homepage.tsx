"use client";

import React from "react";
import { Button } from "../components/ui/button";
import {
  CheckCircle, Users, Zap, Layers, TrendingUp, DollarSign, Globe, ArrowDown, Award, ShoppingCart, Factory, Truck, Building2, FileText, Hospital, UtensilsCrossed
} from "lucide-react";
import hero from "./../assets/homepage/hero.png";
import odoo from "./../assets/homepage/odoo.png";
import odooErp from "./../assets/homepage/oddoNew.png";
import custom_soft_dev from "./../assets/homepage/customSoftNew.png";
import bussiness_automation_int from "./../assets/homepage/automationAndIntegration.jpg";
import eyoha from "./../assets/clientLogo/eyoha.png";
import Roha from "./../assets/clientLogo/RohaCake.png";
import SkillsBridge from "./../assets/clientLogo/skillBridge.png";
import diligent from "./../assets/clientLogo/diligent.png";
import above_the_footer from "./../assets/above_the_footer.png";
import beltechImpact from "./../assets/homepage/beltechImpact.png";


const industries = [
  {
    id: "retail",
    icon: ShoppingCart,
    title: "Retail & Supermarkets",
    lead: "Run your shop like a modern chain.",
    bullets: [
      "Multi-branch POS",
      "Barcode inventory + automated stock alerts",
      "Real-time sales dashboards",
    ],
    quote: "Know exactly what’s selling, what’s missing, and what’s making money — from your phone.",
  },
  {
    id: "manufacturing",
    icon: Factory,
    title: "Manufacturing",
    lead: "Turn production into a controlled, measurable process.",
    bullets: [
      "BoM, work orders, quality control",
      "Batch & lot tracking for compliance",
      "Production cost analysis",
    ],
    quote: "No more guesswork. Know your cost per product before you produce.",
  },
  {
    id: "import",
    icon: Truck,
    title: "Import, Export & Distribution",
    lead: "Visibility from shipment to warehouse shelf.",
    bullets: [
      "Landed cost (tax, transport, freight, insurance)",
      "Multi-currency vendor management",
      "Warehouse + delivery tracking",
    ],
    quote: "Stop losing profit on hidden costs. Track every birr from customs to customer.",
  },
  {
    id: "construction",
    icon: Building2,
    title: "Construction & Real Estate",
    lead: "Control project costs and eliminate leakage.",
    bullets: [
      "Material usage tracking + supplier invoicing",
      "Project budget vs. actual cost monitoring",
      "Timesheets & subcontractor management",
    ],
    quote: "See where money is going — before it disappears.",
  },
  {
    id: "services",
    icon: FileText,
    title: "Service Businesses & Accounting Firms",
    lead: "Get paid without chasing clients.",
    bullets: [
      "CRM + Projects + Invoicing in one system",
      "Subscription billing (perfect for retainers)",
      "Automated follow-ups for unpaid invoices",
    ],
    quote: "Invoice smarter — not harder.",
  },
  {
    id: "health",
    icon: Hospital,
    title: "Hospitals, Clinics & Pharmacies",
    lead: "Less paper. More patient care.",
    bullets: [
      "Patient management + appointment scheduling",
      "Pharmacy stock expiry tracking",
      "Integrated billing + accounting",
    ],
    quote: "Your whole facility in one system — zero paperwork.",
  },
  {
    id: "restaurants",
    icon: UtensilsCrossed,
    title: "Restaurants & Cafés",
    lead: "Fast service. Zero wastage.",
    bullets: [
      "POS + kitchen display",
      "Recipe costing and ingredient consumption",
      "Delivery, takeaway, and table management",
    ],
    quote: "Know your profit per plate — not just your daily sales.",
  },
];

// Card component for the ndustries we serve section
function Card({ data }: { data: typeof industries[number] }) {
  const Icon = data.icon;
  return (
    <div className="group bg-white p-5 rounded-2xl shadow-md transition-all duration-300 flex flex-col justify-between hover:bg-[#27A2D8] hover:text-white">
      <div>
        <div className="mb-4 flex h-10 w-10 items-center justify-center bg-[#f7f8fa] rounded-xl group-hover:bg-white">
          <Icon className="h-5 w-5 text-[#27A2D8] group-hover:text-[#27A2D8]" />
        </div>
        <h3 className="text-lg font-semibold text-black mb-1 group-hover:text-white">{data.title}</h3>
        <p className="text-sm text-gray-700 mb-2 group-hover:text-white">{data.lead}</p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 group-hover:text-white">
          {data.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
      <p className="italic text-xs text-gray-600 mt-3 group-hover:text-white">{data.quote}</p>
    </div>
  );
}
function IndustryCarousel() {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [index, setIndex] = React.useState(1);

  const totalCards = industries.length;
  let startX = 0;
  let endX = 0;

  const getCardWidth = () => {
    if (!trackRef.current) return 0;
    const first = trackRef.current.children[0] as HTMLElement;
    return first.getBoundingClientRect().width + 24; // + gap
  };

  const slide = (direction: number) => {
    if (!trackRef.current) return;

    let newIndex = index + direction;
    setIndex(newIndex);

    const width = getCardWidth();

    trackRef.current.style.transition = "transform 0.5s ease";
    trackRef.current.style.transform = `translateX(-${newIndex * width}px)`;

    setTimeout(() => {
      if (!trackRef.current) return;

      // Loop to last
      if (newIndex === 0) {
        trackRef.current.style.transition = "none";
        setIndex(totalCards);
        trackRef.current.style.transform = `translateX(-${totalCards * width}px)`;
      }

      // Loop to first
      if (newIndex === totalCards + 1) {
        trackRef.current.style.transition = "none";
        setIndex(1);
        trackRef.current.style.transform = `translateX(-${1 * width}px)`;
      }
    }, 500);
  };

  const handleTouchStart = (e: React.TouchEvent) => { startX = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    endX = e.changedTouches[0].clientX;
    const diff = endX - startX;
    if (Math.abs(diff) < 40) return;
    if (diff < 0) slide(1);
    else slide(-1);
  };

  const handleMouseDown = (e: React.MouseEvent) => { startX = e.clientX; };
  const handleMouseUp = (e: React.MouseEvent) => {
    endX = e.clientX;
    const diff = endX - startX;
    if (Math.abs(diff) < 40) return;
    if (diff < 0) slide(1);
    else slide(-1);
  };

  React.useEffect(() => {
    if (!trackRef.current) return;
    const width = getCardWidth();
    trackRef.current.style.transform = `translateX(-${1 * width}px)`;
  }, []);

  return (
    <div className="relative flex items-center">
      {/* Left Arrow */}
      <button
        onClick={() => slide(-1)}
        className="absolute left-0 z-20 bg-transparent shadow-md p-3 rounded-full hover:bg-[#27A2D8] hover:text-white transition"
      >
        <ArrowDown className="rotate-90" />
      </button>

      {/* Slider wrapper */}
      <div
        className="overflow-hidden w-full"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <div
          ref={trackRef}
          className="flex gap-6 transition-transform duration-500"
        >
          {/* Clone last */}
          <div className="min-w-full sm:min-w-[33.33%]">
            <Card data={industries[totalCards - 1]} />
          </div>

          {/* Actual cards */}
          {industries.map((item, i) => (
            <div key={i} className="min-w-full sm:min-w-[33.33%]">
              <Card data={item} />
            </div>
          ))}

          {/* Clone first */}
          <div className="min-w-full sm:min-w-[33.33%]">
            <Card data={industries[0]} />
          </div>
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => slide(1)}
        className="absolute right-0 z-20 bg-transparent shadow-md p-3 rounded-full hover:bg-[#27A2D8] hover:text-white transition"
      >
        <ArrowDown className="-rotate-90" />
      </button>
    </div>
  );
}


const Homepage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F0F5F9]">
      <main className="flex-grow">
        {/* hero section */}
        <section
          className="relative text-white flex items-center justify-center"
          style={{
            backgroundImage: `url(${hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "black",
            minHeight: "100vh",
          }}
        >
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center pt-32 pb-24">
            <div className="flex flex-col items-center text-center w-full">
              <div className="mb-6 relative w-full max-w-3xl mx-auto flex justify-center md:justify-start">
                <div className="relative inline-flex items-center text-left -translate-x-6 md:-translate-x-25">
                  <div className="hidden md:block h-0.5 w-16 bg-[#27A2D8] mr-6"></div>
                  <span className="inline-block text-sm font-medium text-[#27A2D8]">
                    DIGITAL TRANSFORMATION EXPERTS
                  </span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
                Streamline. Automate. Scale.
              </h1>
              <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-0">
                Transforming African businesses with ERP, automation, and smart software solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button
                  size="lg"
                  className="text-white px-8 py-3 text-lg transition-all duration-200 hover:scale-105 bg-[#27A2D8] cursor-pointer"
                  onClick={() => (window.location.href = "/Contact")}
                >
                  Get a Free Consultation
                </Button>

                <a href="/Contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white px-8 py-3 text-lg transition-all duration-200 hover:scale-105 bg-transparent cursor-pointer"
                  >
                    See Live Demo
                  </Button>
                </a>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white px-8 py-3 text-lg transition-all duration-200 hover:scale-105 bg-transparent cursor-pointer"
                  onClick={() => (window.location.href = "/Contact")}
                >
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center flex flex-col items-center pointer-events-auto">
            <span className="text-sm text-white mb-2">Discover Our Solutions</span>
            <button
              className="p-0 bg-transparent hover:bg-transparent transition-colors duration-200"
              onClick={() => {
                const solutionsSection = document.getElementById("solutions-section");
                if (solutionsSection) {
                  solutionsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <ArrowDown className="w-8 h-8 text-[#27A2D8] cursor-pointer"  />
            </button>
          </div>
        </section>



        {/* our soluton section*/}
        <section id="solutions-section" className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Solutions
              </h2>
              <p className="text-xl font-normal text-black max-w-3xl mx-auto">
                We provide comprehensive digital transformation solutions that
                help African businesses thrive in the modern economy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <div className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0">
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src={odooErp}
                    alt="Odoo ERP Implementation"
                    className="w-full h-full object-cover object-top block"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3">
                    Odoo ERP Implementation
                  </h3>
                  <p className="text-base font-normal text-black mb-6">
                    A tailored Odoo ERP system to
                    streamline your entire workflow and
                    gain real-time insights.

                  </p>
                  <a
                    onClick={() => (window.location.href = "/Services")}
                    className="text-[#27A2D8] font-bold flex items-center space-x-2 hover:underline cursor-pointer"
                  >
                    <span>Learn More</span>
                  </a>
                </div>
              </div>

              <div className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0">
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src={bussiness_automation_int}
                    alt="Business Automation & Integration"
                    className="w-full h-full object-cover object-top block"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3">
                    Automation & Integration
                  </h3>
                  <p className="text-base font-normal text-black mb-4">
                    Automation workflows that reduce
                    errors, cut down on costs, and free your
                    team’s time.

                  </p>
                  <a
                    onClick={() => (window.location.href = "/Services")}
                    className="text-[#27A2D8] font-bold flex items-center space-x-2 hover:underline cursor-pointer"
                  >
                    <span>Learn More</span>
                  </a>
                </div>
              </div>

              <div className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0">
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src={custom_soft_dev}
                    alt="Custom Software Development"
                    className="w-full h-full object-cover object-top block"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3">
                    Custom Software Development
                  </h3>
                  <p className="text-base font-normal text-black mb-4">
                    Web and mobile applications designed
                    to enhance your operations and solve
                    specific challenges.

                  </p>
                  <a
                    onClick={() => (window.location.href = "/Services")}
                    className="text-[#27A2D8] font-bold flex items-center space-x-2 hover:underline cursor-pointer"
                  >
                    <span>Learn More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* why oddo part */}
       <section className="py-10 bg-[#f7f8fa]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Why Odoo?
      </h2>
      <p className="text-xl font-normal text-black max-w-3xl mx-auto">
        Odoo is the world's most popular open-source ERP system, trusted
        by millions of businesses worldwide.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
      <div className="flex flex-col gap-6 h-full">

        {/* Card 1 */}
        <div className="group relative bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex items-start space-x-4 cursor-pointer hover:bg-[#27A2D8]">
          <CheckCircle className="w-6 h-6 text-[#27A2D8] group-hover:text-white flex-shrink-0 transition-colors duration-300" />
          <div>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-1 transition-colors duration-300">
              All-in-One Solution
            </h3>
            <p className="text-base font-normal text-gray-700 group-hover:text-white transition-colors duration-300">
              Manage sales, inventory, accounting, HR, and more from a single platform.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group relative bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex items-start space-x-4 cursor-pointer hover:bg-[#27A2D8]">
          <Users className="w-6 h-6 text-[#27A2D8] group-hover:text-white flex-shrink-0 transition-colors duration-300" />
          <div>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-1 transition-colors duration-300">
              User-Friendly Interface
            </h3>
            <p className="text-base font-normal text-gray-700 group-hover:text-white transition-colors duration-300">
              Empower your team with an intuitive interface that is easy to navigate.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group relative bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex items-start space-x-4 cursor-pointer hover:bg-[#27A2D8]">
          <Layers className="w-6 h-6 text-[#27A2D8] group-hover:text-white flex-shrink-0 transition-colors duration-300" />
          <div>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-1 transition-colors duration-300">
              Modular Architecture
            </h3>
            <p className="text-base font-normal text-gray-700 group-hover:text-white transition-colors duration-300">
              Start with what you need and add modules as your business grows.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="group relative bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex items-start space-x-4 cursor-pointer hover:bg-[#27A2D8]">
          <TrendingUp className="w-6 h-6 text-[#27A2D8] group-hover:text-white flex-shrink-0 transition-colors duration-300" />
          <div>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-1 transition-colors duration-300">
              Scalable Growth
            </h3>
            <p className="text-base font-normal text-gray-700 group-hover:text-white transition-colors duration-300">
              Handle more tasks with the same or fewer human resources as your business grows.
            </p>
          </div>
        </div>

      </div>

      <div className="flex h-full">
        <img
          src={odoo}
          alt="Odoo Interface"
          className="w-full h-full rounded-2xl"
          style={{ height: "108%", width: "108%" }}
        />
      </div>
    </div>
  </div>
</section>


        {/* beltech impact section*/}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">BelTech Impact</h2>
              <p className="text-xl font-normal text-black max-w-3xl mx-auto">
                We combine technical expertise with deep understanding of African business needs to deliver exceptional results.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-stretch">
              <div className="lg:flex-1 flex items-stretch">
                <img src={beltechImpact} alt="BelTech Impact" className="rounded-3xl w-full h-full object-cover" />
              </div>

              <div className="lg:flex-1 flex flex-col space-y-6 h-full">
                <div
                  className="bg-white p-6 rounded-3xl flex items-start space-x-4 flex-1 border-l-4 border-[#27A2D8] transform transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ boxShadow: '4px 4px 10px rgba(0,0,0,0.1)' }}
                >
                  <div className="flex-shrink-0 h-12 w-12 bg-[#27A2D8] flex items-center justify-center rounded-sm">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Odoo ERP experts</h3>
                    <p className="text-base font-normal text-black">
                      Our team has deep expertise in Odoo and extensive experience in ERP implementation.
                    </p>
                  </div>
                </div>

                <div
                  className="bg-white p-6 rounded-3xl flex items-start space-x-4 flex-1 border-l-4 border-[#27A2D8] transform transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ boxShadow: '4px 4px 10px rgba(0,0,0,0.1)' }}
                >
                  <div className="flex-shrink-0 h-12 w-12 bg-[#27A2D8] flex items-center justify-center rounded-sm">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Real-world African business focus</h3>
                    <p className="text-base font-normal text-black">
                      We understand the unique challenges and opportunities of African markets.
                    </p>
                  </div>
                </div>

                <div
                  className="bg-white p-6 rounded-3xl flex items-start space-x-4 flex-1 border-l-4 border-[#27A2D8] transform transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ boxShadow: '4px 4px 10px rgba(0,0,0,0.1)' }}
                >
                  <div className="flex-shrink-0 h-12 w-12 bg-[#27A2D8] flex items-center justify-center rounded-sm">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Open-source innovation at your service</h3>
                    <p className="text-base font-normal text-black">
                      Leveraging the power of open-source technology for maximum flexibility and value.
                    </p>
                  </div>
                </div>

                <div
                  className="bg-white p-6 rounded-3xl flex items-start space-x-4 flex-1 border-l-4 border-[#27A2D8] transform transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ boxShadow: '4px 4px 10px rgba(0,0,0,0.1)' }}
                >
                  <div className="flex-shrink-0 h-12 w-12 bg-[#27A2D8] flex items-center justify-center rounded-sm">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Agile, scalable, and cost-effective</h3>
                    <p className="text-base font-normal text-black">
                      Solutions that grow with your business while maintaining cost efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

         {/*  Industries We Serve section*/}
<section className="py-10 bg-[#f7f8fa]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Industries We Serve
      </h2>
      <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
        We automate business operations so you stop managing chaos and start managing growth.
      </p>
    </div>

    {/* CAROUSEL */}
    <IndustryCarousel />
  </div>
</section>


        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Packages
              </h2>
              <p className="text-xl font-normal text-black max-w-3xl mx-auto">
                Pick the right ERP package designed for your business size and growth goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter */}
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-black mb-2">Starter</h3>
                <p className="text-gray-800 italic mb-1">
                  For small businesses getting started with ERP
                </p>
                <p className="text-black mb-1">
                  <span className="font-semibold">Ideal for:</span> Startups, small retail or service businesses
                </p>

                {/* Features */}
                <h4 className="font-semibold mb-2">Features:</h4>
                <ul className="text-black mb-4 space-y-2">
                  {[
                    "Sales & Purchase Management",
                    "Inventory Tracking",
                    "Basic Accounting & Reporting",
                    "Standard Dashboards",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle className="text-[#27A2D8] w-5 h-5 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className="w-full text-white bg-[#27A2D8] hover:scale-105 transition-all duration-200 cursor-pointer"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Get Started
                </Button>
              </div>

              {/* Professional */}
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-black mb-2">Professional</h3>
                <p className="text-gray-800 italic mb-1">
                  For growing SMEs that need more automation
                </p>
                <p className="text-black mb-1">
                  <span className="font-semibold">Ideal for:</span> Medium businesses expanding operations
                </p>

                <h4 className="font-semibold mb-2">Features:</h4>
                <ul className="text-black mb-4 space-y-2">
                  {[
                    "All Starter modules",
                    "HR & Payroll",
                    "POS & eCommerce",
                    "Workflow Automation",
                    "Customizable Reports & Dashboards",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle className="text-[#27A2D8] w-5 h-5 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className="w-full text-white bg-[#27A2D8] hover:scale-105 transition-all duration-200 cursor-pointer"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Request a Demo
                </Button>
              </div>

              {/* Enterprise */}
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-black mb-2">Enterprise</h3>
                <p className="text-gray-800 italic mb-1">
                  For large organizations with advanced needs
                </p>
                <p className="text-black mb-1">
                  <span className="font-semibold">Ideal for:</span> Multi-branch operations, complex workflows, large teams
                </p>

                <h4 className="font-semibold mb-2">Features:</h4>
                <ul className="text-black mb-4 space-y-2">
                  {[
                    "All Professional modules",
                    "Manufacturing (MRP)",
                    "Marketing & Campaigns",
                    "Project Management ",
                    "Multi-branch support",
                    "Custom Integrations & Automation",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle className="text-[#27A2D8] w-5 h-5 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className="w-full text-white bg-[#27A2D8] hover:scale-105 transition-all duration-200 cursor-pointer"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>


        {/* testimonial section */}
        <section className="py-8 bg-[#f7f8fa] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Happy Clients
              </h2>
              <p className="text-xl font-normal text-black max-w-3xl mx-auto">
                See what our clients say about their digital transformation journey with BelTech Solutions.
              </p>
            </div>

            <div className="relative overflow-hidden">
              {/* 👇 Perfectly seamless marquee */}
              <div className="flex gap-12 whitespace-nowrap animate-marquee will-change-transform">
                {[
                  { name: "Eyoha Digitals", img: eyoha, testimonial: "Eyoha Digitals loved our website!" },
                  { name: "Roha Cake and Bread Bakery", img: Roha, testimonial: "Roha Bakery saw amazing growth with our product." },
                  { name: "SkillBridge Institute of Technology", img: SkillsBridge, testimonial: "SkillBridge praises the website we built." },
                  { name: "Diligent Trade Solutions", img: diligent, testimonial: "Diligent Trade saw great results from our ERP." },
                ]
                  // Duplicate twice for a continuous flow
                  .concat([
                    { name: "Eyoha Digitals", img: eyoha, testimonial: "Eyoha Digitals loved our website!" },
                    { name: "Roha Cake and Bread Bakery", img: Roha, testimonial: "Roha Bakery saw amazing growth with our product." },
                    { name: "SkillBridge Institute of Technology", img: SkillsBridge, testimonial: "SkillBridge praises the website we built." },
                    { name: "Diligent Trade Solutions", img: diligent, testimonial: "Diligent Trade saw great results from our ERP." },
                  ])

                  .concat([
                    { name: "Eyoha Digitals", img: eyoha, testimonial: "Eyoha Digitals loved our website!" },
                    { name: "Roha Cake and Bread Bakery", img: Roha, testimonial: "Roha Bakery saw amazing growth with our product." },
                    { name: "SkillBridge Institute of Technology", img: SkillsBridge, testimonial: "SkillBridge praises the website we built." },
                    { name: "Diligent Trade Solutions", img: diligent, testimonial: "Diligent Trade saw great results from our ERP." },
                  ])

                  .map((client, idx) => (
                    <div
                      key={idx}
                      className="relative flex flex-col items-center group flex-shrink-0"
                    >
                      {/* Logo */}
                      <div
                        className="flex items-center justify-center transition-transform duration-200 group-hover:scale-110 z-10 w-44 h-44 md:w-48 md:h-48"
                      >
                        <img
                          src={client.img}
                          alt={client.name}
                          className="h-full w-full object-contain"
                        />
                      </div>

                      {/* Tooltip */}
                      <div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full 
                opacity-0 group-hover:opacity-100 group-hover:translate-y-2 
                transition-all duration-300 
                w-64 max-w-xs bg-white shadow-lg rounded-lg 
                p-4 text-center z-50 pointer-events-none"
                      >
                        <p className="text-base font-normal text-black whitespace-normal break-words line-clamp-2">
                          "{client.testimonial}"
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Custom animation styles */}
          <style>
            {`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-33.333%); } /* Matches 3 duplicates for perfect loop */
      }

      .animate-marquee {
        display: flex;
        width: max-content;
        animation: marquee 40s linear infinite;
        gap: 8rem; /* Nicely spaced but still smooth */
      }

      /* Keep hover working without stopping animation */
      .animate-marquee * {
        pointer-events: auto;
      }

      /* Optimize GPU performance */
      .will-change-transform {
        will-change: transform;
      }
    `}
          </style>
        </section>




        <section
          className="relative py-10 text-white"
          style={{
            backgroundImage: `url(${above_the_footer})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }}
          ></div>
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "linear-gradient(to right, #31A8EB, #61C7D5)",
              opacity: 0.5,
            }}
          ></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl font-normal mb-8 max-w-3xl mx-auto">
              Join hundreds of African businesses that have streamlined their
              operations with BelTech Solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 py-3 text-lg transition-all duration-200 hover:scale-105 bg-[#27A2D8]  text-white hover:bg-[#27A2D8]-100 cursor-pointer"
                onClick={() => (window.location.href = "/contact")}
              >
                Start Your Digital Journey
              </Button>
              <Button
                size="lg"
                className="px-8 py-3 text-lg transition-all duration-200 hover:scale-105 bg-[#27A2D8]  text-white hover:bg-[#27A2D8]-100 cursor-pointer"
                onClick={() => (window.location.href = "/solutions")}
              >
                View Success Stories
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Homepage;