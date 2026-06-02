import React from "react";
import {
  Lightbulb,
  Search,
  Users,
  Rocket,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import journeyBg from "../assets/journey-bg.jpg";

const JourneySection = () => {
  const journeySteps = [
    {
      icon: Lightbulb,
      title: "Idea Discovery",
      description:(
      <>
        <span className="font-bold">Find the Right Problem:</span>Identify real-world challenges worth solving.
      </>
      ),
      bgColor: "bg-blue-500",
    },
    {
      icon: Search,
      title: "Market Validation",
      description:(
      <>
        <span className="font-bold">Validate Demand:</span>Test assumptions and understand customer needs.
      </>
      ),
      bgColor: "bg-purple-500",
    },
    {
      icon: Users,
      title: "Mentorship & Strategy",
      description:(
      <>
        <span className="font-bold">Build Your Roadmap:</span>Get expert guidance and refine your strategy.
      </>
      ),
      bgColor: "bg-pink-500",
    },
    {
      icon: Rocket,
      title: "MVP & Early Traction",
      description:(
        <>
        <span className="font-bold">Launch & Learn:</span>Build your MVP and gain early users.
        </>
      ),
      bgColor: "bg-amber-500",
    },
    {
      icon: TrendingUp,
      title: "Funding & Growth",
      description:(
        <>
        <span className="font-bold">Scale Your Startup:</span>Secure funding and accelerate growth.
        </>
      ),
      bgColor: "bg-yellow-400",
    },
  ];

  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="py-20 md:py-32 relative overflow-hidden"
      style={{
        backgroundImage: `url(${journeyBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/85"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2
            id="journey-heading"
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Your Zero-to-One Journey
          </h2>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            A structured path from idea to fundable startup, designed for
            first-time founders.
          </p>
        </div>

        {/* Journey Cards */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 via-amber-500 to-yellow-400 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 text-center hover:-translate-y-3 border border-slate-100"
                >
                  {/* Icon */}
                  <div
                    className={`w-20 h-20 mx-auto rounded-full ${step.bgColor} flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-10 h-10" />
                  </div>

                  {/* Step Number */}
                  <div className="text-sm font-bold text-slate-400 mb-2">
                    STEP {index + 1}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow */}
                  {index !== journeySteps.length - 1 && (
                    <div className="hidden lg:flex justify-center mt-6">
                      <ArrowRight className="w-5 h-5 text-slate-400" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-20 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-colors duration-300">
            Start Your Journey Today
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;