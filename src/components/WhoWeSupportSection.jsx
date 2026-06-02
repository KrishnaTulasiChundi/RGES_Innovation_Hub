import React, { useState } from "react";
import { GraduationCap, Lightbulb, Users, Zap } from "lucide-react";

const WhoWeSupportSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const supporters = [
    {
      icon: Lightbulb,
      title: "First-Time Entrepreneurs",
      description:
        "Guidance and support for aspiring founders taking their first step into entrepreneurship.",
      bgColor:"#c0c0c0",
    },
    {
      icon: GraduationCap,
      title: "Student Founders",
      description:
        "Helping students transform innovative ideas into impactful startup ventures.",
      bgColor:"#c0c0c0",
    },
    {
      icon: Users,
      title: "Early-Stage Innovators",
      description: "Resources, mentorship, and validation support for promising early-stage ideas.",
      bgColor:"#c0c0c0",
    },
    {
      icon: Zap,
      title: "Zero-to-One Builders",
      description:
        "Empowering builders to create, launch, and grow products from scratch.",
      bgColor:"#c0c0c0",
    },
  ];

  return (
    <section
      aria-labelledby="support-heading"
      className="py-20 md:py-32 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2
            id="support-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Who We Support
          </h2>
          <p
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            We're here for dreamers, builders, and innovators at the start of
            their journey.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {supporters.map((supporter, index) => {
            const Icon = supporter.icon;
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{backgroundColor:supporter.bgColor}}
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
                    {supporter.title}
                  </h3>
                  <p className="text-sm leading-relaxed transition-colors duration-300">
                    {supporter.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeSupportSection;
