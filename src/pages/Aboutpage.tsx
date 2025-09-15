import { Target, Flag, Handshake, LineChart, Eye } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import abouthero from "./../assets/aboutPage/hero.png"
import beltech from "./../assets/aboutPage/beltech.jpg";
import { Button } from "../components/ui/button";
import above_the_footer from "./../assets/above_the_footer.png"

const About = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 antialiased">
      <main>
        <section className="relative w-full h-screen overflow-hidden">
          <div
            className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${abouthero})` }}
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
                About Us
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-2xl">
                A company born in Ethiopia, supporting businesses across Africa with digital transformation solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              <div className="order-1 md:order-1">
                <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                  Our Story
                </h2>
                <p className="mb-4 text-gray-600">
                  BelTech Solutions was founded in 2020 in Addis Ababa, Ethiopia with a
                  clear vision to empower African businesses through technology. What
                  started as a small team of dedicated tech enthusiasts has grown into a
                  comprehensive service provider, driven by a passion for creating a
                  more connected Africa.
                </p>
                <p className="mb-4 text-gray-600">
                  Our founder, Haile Mengistu, recognized that while many international
                  technology solutions existed, few were adapted to the unique
                  challenges and opportunities present in the African market. This
                  insight led to the creation of BelTech, combining global best
                  practices with deep local knowledge.
                </p>
                <p className="text-gray-600">
                  Today, we're proud to have helped dozens of businesses across multiple
                  African countries modernize their operations, streamline processes,
                  and achieve sustainable growth through carefully tailored digital
                  solutions.
                </p>
              </div>
              <div className="order-2 md:order-2 flex justify-center">
                <img
                  src={beltech}
                  alt="Bel Tech Solutions Logo"
                  className="w-full max-w-xs mt-4"
                />
              </div>
            </div>
          </div>
        </section>


        <section className="bg-gray-50 py-10">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-white p-8 shadow-md">
                <div className="mb-4 flex items-center">
                  <Target className="h-8 w-8 text-[#27A2D8] " />
                  <h3 className="ml-4 text-2xl font-semibold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-sm font-medium text-gray-500">
                  "To build scalable, efficient digital systems that empower local businesses."
                </p>
                <p className="mt-4 text-gray-600">
                  We strive to provide technology solutions that are specifically tailored to the needs and challenges of African businesses, helping them compete effectively in the global marketplace.
                </p>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-md">
                <div className="mb-4 flex items-center">
                  <Eye className="h-8 w-8 text-[#27A2D8] " />
                  <h3 className="ml-4 text-2xl font-semibold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-sm font-medium text-gray-500">
                  "To be the #1 partner for ERP, automation, and software development in Africa by 2030."
                </p>
                <p className="mt-4 text-gray-600">
                  We aim to lead the digital transformation of African businesses by providing innovative, reliable, and accessible technology solutions that drive growth and efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto my-10 px-4 md:px-8 lg:px-12">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Core Values</h2>
          <p className="mb-12 text-center text-gray-600">
            The principles that guide our work and define our company culture
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Target className="h-6 w-6 text-[#27A2D8] " />
                </div>
                <CardTitle className="mt-4">Precision</CardTitle>
                <CardDescription>
                  We deliver accurate, reliable solutions and pay attention to detail.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Flag className="h-6 w-6 text-[#27A2D8] " />
                </div>
                <CardTitle className="mt-4">Purpose</CardTitle>
                <CardDescription>
                  Every project we undertake is aligned with the goals of our clients.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Handshake className="h-6 w-6 text-[#27A2D8] " />
                </div>
                <CardTitle className="mt-4">Partnership</CardTitle>
                <CardDescription>
                  We work collaboratively with clients as a strategic technology partner.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <LineChart className="h-6 w-6 text-[#27A2D8] " />
                </div>
                <CardTitle className="mt-4">Progress</CardTitle>
                <CardDescription>
                  Continuously implementing improvements and pushing the boundaries of technology.
                </CardDescription>
              </CardHeader>
            </Card>
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
              background: "linear-gradient(to right, #31A8EB, #61C7D5)",
              opacity: 0.5,
            }}
          ></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join hundreds of African businesses that have streamlined their operations with BelTech Solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 py-3 text-lg transition-all duration-200 hover:scale-105 bg-[#27A2D8] text-white"
                onClick={() => window.location.href = '/Contact'}
              >
                Start Your Digital Journey
              </Button>
              <Button
                size="lg"
                className="px-8 py-3 text-lg transition-all duration-200 hover:scale-105 bg-[#27A2D8] text-white"
                onClick={() => window.location.href = '/Solutions'}
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

export default About;
