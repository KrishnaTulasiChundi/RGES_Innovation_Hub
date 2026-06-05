import React, { useState } from "react";
import {
  Target,
  Users,
  Rocket,
  Award,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const AboutSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const features = [
    {
      icon: Target,
      title: "Idea to Impact",
      description:
        "Empowering innovators to transform ideas into meaningful and scalable solutions.",
      bgColor:"#c0c0c0",
    },
    {
      icon: Users,
      title: "Founder-Led",
      description:
        "Guided by experienced founders who provide practical insights and mentorship.",
      bgColor:"#c0c0c0",
    },
    {
      icon: Rocket,
      title: "Zero-to-One",
      description:
        "Supporting startups in building, validating, and launching their first product.",
      bgColor:"#c0c0c0",
    },
    {
      icon: Award,
      title: "Funding Ready",
      description:
        "Equipping ventures with the tools, strategy, and confidence to attract investors.",
      bgColor:"#c0c0c0",
    },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-20 md:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 sm:mb-24 text-center">
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-slate-900 tracking-tight text-center"
            style={{ fontFamily: "Inter, sans-serif" }}>
            About RGES Innovation Hub
          </h2>
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-lg md:text-xl text-slate-600 max-w-6xl mx-auto leading-relaxed text-center font-medium"
                style={{ fontFamily: "Inter, sans-serif" }}>
              RGES Innovation Hub is a startup-driven ecosystem built to
              accelerate ideas into scalable, market-ready digital products.
              Focused on{" "}
              <strong className="text-slate-900 font-semibold">
                Cyber Security, Full-Stack Development, and Artificial Intelligence
              </strong>
              .
            </p>
          </div>
        </div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{backgroundColor:feature.bgColor}}
                className={`group relative p-8 bg-white border transition-all duration-300 rounded-xl
                  ${isHovered ? "border-blue-600 shadow-lg" : "border-slate-200"}`}>
                <div className="mb-6">
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-lg mb-6 transition-colors duration-300 
                    ${isHovered ? "bg-blue-600 text-black" : "bg-slate-100 text-black"}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3"
                    style={{ fontFamily: "Inter, sans-serif" }}>
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mission Statement - Technical Design */}
        <div className="relative bg-sky-900 rounded-2xl overflow-hidden p-8 md:p-16">
          {/* Subtle Pattern */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundSize: "40px 40px",
            }}
          ></div>

          <div className="relative z-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 text-blue-400 font-bold text-xs uppercase tracking-widest">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Our Mission
              </div>
              <h3
                className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Empowering the Next Generation of Founders
              </h3>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                We exist to help founders move from idea to impact. Through
                practical mentorship, market validation, and a community-first
                approach.
              </p>
              <a
              href="https://discord.gg/WnC9QRfT"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-slate-900 text-white border border-slate-700 hover:border-slate-600 rounded-xl font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Join the Community
              <ArrowRight className="w-4 h-4" />
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
