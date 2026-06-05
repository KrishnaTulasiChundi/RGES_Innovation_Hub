import React from "react";
import { ArrowUpRight, Linkedin } from "lucide-react";

import Prasad_Anumula from "../assets/Prasad_Anumula.png";
import Durgesh_Raparthi from "../assets/Durgesh_Raparthi.png";
import Srilekha_Kaluvakunta from "../assets/Srilekha_Kaluvakunta.png";
import Shubham_Mishra from "../assets/Shubham_Mishra.png";
import Srikanth_Parikibandla from "../assets/Srikanth_Parikibandla.png";
import Priyatam_Kallakuri from "../assets/Priyatam_Kallakuri.jpeg"

const mentors = [
  {
    name: "Prasad Anumula",
    role: "Founder & CEO Risk Guard Enterprise Solutions",
    company: "Risk Guard Enterprise Solutions",
    bio: "Entrepreneur, Security Expert with extensive experience in ERP, Cloud Security, Enterprise Risk Management, and Information Security. Passionate about driving digital transformation, building secure business solutions, and helping organizations achieve operational excellence through innovation and strategic leadership.",
    skills: ["Speaker", "Mentor", "Startup Enabler"],
    image: Prasad_Anumula,
    calendly: "https://calendly.com/admin-rgesindia/30min",
    linkedin:"https://www.linkedin.com/in/prasad-anumula?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Durgesh Raparthi",
    role: "Founder of IntelliRMS",
    company: "IntelliRMS",
    bio: "Founder & CEO of IntelliRMS AI Solutions and Risk Management Expert with 20+ years of experience across banking, financial services, and technology. Passionate about leveraging AI and innovation to simplify risk management and compliance.",
    skills: [
      "AI Risk Management",
      "Risk Consulting",
      "Compliance",
    ],
    image: Durgesh_Raparthi,
    calendly: "https://calendly.com/durgesh-raparthi",
    linkedin:"https://www.linkedin.com/in/durgesh-raparthi/",
  },
  {
    name: "Srilekha Kaluvakunta",
    role: "Board of Director",
    company: "IBSEA",
    bio: "Award-winning Global Thought Leader, Author, Speaker, and Corporate Leader with expertise in Program Management, Service Delivery, and Digital Transformation. Dedicated to empowering individuals through leadership, education, and social impact.",
    skills: ["Program Management","Digital Transformation","Public Speaking","Corporate Governance",],
    image: Srilekha_Kaluvakunta,
    calendly: "https://calendly.com/admin-rgesindia/30min",
    linkedin:"https://www.linkedin.com/in/srilekha01?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Shubham Mishra",
    role: "Insider Threat Specialist",
    company: "Freelance Cyber Security Trainer",
    bio: "Cybersecurity professional specializing in Threat Hunting, Incident Response, and Insider Threat Management. Passionate trainer, mentor, and speaker dedicated to strengthening security awareness and empowering future cyber professionals.",
    skills: ["Insider Threat Specialist", " Threat Hunter", "Freelance Cyber Security Trainer","Mentor","Speaker"],
    image: Shubham_Mishra,
    calendly: "https://calendly.com/admin-rgesindia/30min",
    linkedin:"https://www.linkedin.com/in/shubham-mishra-2abb8418b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Dr Srikanth Parikibandla",
    role: "Telengana State President, IBSEA",
    company: "IBSEA",
    bio: "Founder and Ex-Director of INAS Technologies Pvt. Ltd., specializing in Agentic AI, Robotics, UAVs, IoT, Embedded Systems, and Industrial Automation. Passionate about driving innovation through product development, advanced manufacturing, technology partnerships, and industry-focused training initiatives.",
    skills: ["Agentic AI","Robotics","IoT & Embedded Systems","VLSI Design","Entrepreneurship",],
    image: Srikanth_Parikibandla,
    calendly: "https://calendly.com/admin-rgesindia/30min",
    linkedin:"https://www.linkedin.com/in/srikanthparikibandla?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Priyatam Kallakuri",
    role: "Founder & Principal Advisor",
    company: "LDP FinMart",
    bio: "Priyatam Kallakuri is a seasoned business leader with 20+ years of experience across FMCG, Banking & Financial Services, and Insurance. An alumnus of IIM Calcutta, he holds an MBA in Sales & Marketing from Amity University and certifications from NISM and the Insurance Institute of India. He has held leadership roles at Karvy Consultants, Pidilite Industries, Reliance Life Insurance, and IndiaFirst Life Insurance, building high-performing sales networks and leading large teams across India.",
    skills: ["Sales & Distribution Leadership","Financial Services & Wealth Management","Strategic Business Development"],
    image: Priyatam_Kallakuri,
    calendly: "https://calendly.com/admin-rgesindia/30min",
    linkedin:"https://www.linkedin.com/in/priyatam-kallakuri?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
];

const MentorsSection = () => {
  return (
    <section
      id="mentors"
      className="bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-600">
            Meet the Team
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Mentors who've been in your seat
          </h2>

          <p className="mt-6 text-xl leading-8 text-slate-900">
            Sessions with operators, designers, and engineers from the
            companies you admire.
          </p>
        </div>

        {/* Mentors Grid */}
        <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {mentors.map((m) => (
            <li
              key={m.name}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/90 to-transparent" />

                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${m.name} on LinkedIn`}
                  className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/80 text-slate-900 backdrop-blur-sm transition-colors hover:bg-blue-600 hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  {m.name}
                </h3>

                <p className="mt-1 text-xl text-slate-900">
                  {m.role}
                  <span className="text-slate-900">
                    {" "}
                    · {m.company}
                  </span>
                </p>

                <p className="mt-4 text-lg leading-relaxed text-slate-900">
                  {m.bio}
                </p>

                {/* Skills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {m.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-slate-100 px-3 py-1 text-lg font-medium text-slate-900"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex items-center gap-3 pt-4">
                  {m.calendly ? (
                    <a
                      href={m.calendly}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                    >
                      Book a Session
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 rounded-full bg-slate-300 px-4 py-2 text-sm font-medium text-white cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MentorsSection;