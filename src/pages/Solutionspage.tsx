import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import solutionHero from "../assets/solutionpage/heroNew.png";
import importEport from "./../assets/solutionpage/importExport.jpg";
import eLearning from "./../assets/solutionpage/eLearning.jpg";
import DigitalMarketingDetail from "../assets/solutionpage/diggityMarketing.jpg";
import above_the_footer from "../assets/above_the_footer.png";

const SolutionsPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 antialiased">

      <section className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${solutionHero})` }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2)),
              linear-gradient(to left, rgba(39,162,216,0.5) 0%, rgba(39,162,216,0.0) 40%)
            `,
          }}
        ></div>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full px-4 lg:px-8 text-white">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
              Solution in Action
            </h1>
             <p className="mt-4 text-lg md:text-xl max-w-2xl">
              Real projects. Real impact. Discover how we help businesses work smarter.

            </p>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-1 bg-white"></div>
      </section>

      <section className="container mx-auto my-12 px-4 md:px-8 lg:px-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl font-normal text-black mb-12 max-w-3xl mx-auto">
            Explore how our solutions have helped businesses overcome challenges and achieve growth.
          </p>
        </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

  <div className="border border-gray-200 flex flex-col rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-white overflow-hidden">
    <img
      src={importEport}
      alt="ERP for Textile Manufacturer"
      className="w-full aspect-video object-cover"
    />
    <div className="px-6 pt-4 pb-3">
      <h3 className="text-xl font-bold leading-snug mb-1">
        ERP for import/export company
      </h3>
    </div>
    <div className="px-6 pb-6">
      <p className="text-base font-normal text-gray-700 leading-relaxed">
    Deployed a full-scale ERP to manage orders, inventory, logistics, and finance for an African import-export company. </p>
      <Link
        to="/ERPDetail"
        className="mt-4 inline-block text-[#27A2D8] font-medium hover:underline hover:translate-x-1 transition-transform duration-200"
      >
        Read More
      </Link>
    </div>
  </div>

  <div className="border border-gray-200 flex flex-col rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-white overflow-hidden">
    <img
      src={eLearning}
      alt="Charity Platform"
      className="w-full aspect-video object-cover"
    />
    <div className="px-6 pt-4 pb-3">
      <h3 className="text-xl font-bold leading-snug mb-1">
       Website for E learning company
      </h3>
    </div>
    <div className="px-6 pb-6">
      <p className="text-base font-normal text-gray-700 leading-relaxed">
       Developed a student-focused e-learning portal showcasing courses and enabling registration for SkillsBridge
      </p>
      <Link
        to="/CharityPlatform"
        className="mt-4 inline-block text-[#27A2D8] font-medium hover:underline hover:translate-x-1 transition-transform duration-200"
      >
        Read More
      </Link>
    </div>
  </div>

  <div className="border border-gray-200 flex flex-col rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-white overflow-hidden">
    <img
      src={DigitalMarketingDetail}
      alt="Retail Automation"
      className="w-full aspect-video object-cover"
    />
    <div className="px-6 pt-4 pb-3">
      <h3 className="text-xl font-bold leading-snug mb-1">
        Website for marketing company
      </h3>
    </div>
    <div className="px-6 pb-6">
      <p className="text-base font-normal text-gray-700 leading-relaxed">
        Developed a modern, responsive website to showcase services, and portfolios for digital marketing company.
      </p>
      <Link
        to="/RetailAuto"
        className="mt-4 inline-block text-[#27A2D8] font-medium hover:underline hover:translate-x-1 transition-transform duration-200"
      >
        Read More
      </Link>
    </div>
  </div>

</div>

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
            Join hundreds of African businesses that have streamlined their operations with BelTech Solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="px-8 py-3 text-lg transition-all duration-200 hover:scale-105 bg-[#27A2D8] text-white"
              onClick={() => window.location.href = '/contact'}
            >
              Start Your Digital Journey
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;