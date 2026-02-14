"use client"

import { Briefcase, Calendar, MapPin } from "lucide-react"

export const Experience = () => {
  const experiences = [
    {
      company: "CLINITER CO., LTD.",
      position: "Software Tester",
      duration: "May 2023 - Present",
      location: "Thailand",
      description: "Ensuring system quality through comprehensive manual and automated testing strategies.",
      achievements: [
        "Analyze requirements and design test cases based on business and system requirements",
        "Perform manual testing (Functional, UI, Regression) to ensure system quality",
        "Identify, log, and track defects using defect tracking tools",
        "Execute API testing and validate data accuracy using SQL queries",
        "Support automation testing and perform re-testing"
      ],
      tags: ["Manual Testing", "API Testing", "SQL", "Regression", "Defect Tracking"]
    },
    {
      company: "Pruksa Real Estate",
      position: "Application Support",
      duration: "Feb 2021 - Oct 2021",
      location: "Thailand",
      description: "Provided technical support and user management for internal enterprise applications.",
      achievements: [
        "Provide information and respond to user inquiries via phone",
        "Manage user permissions for internal applications",
        "Troubleshoot and support SAP and B2B system usage"
      ],
      tags: ["SAP Support", "User Management", "Troubleshooting", "B2B Systems"]
    },
    {
      company: "Advanced Contact Center",
      position: "Call Center Ais Fibre Info",
      duration: "Nov 2016 - Mar 2017",
      location: "Thailand",
      description: "Delivered excellence in customer service and technical information support.",
      achievements: [
        "Provide application, promotion, and service coverage information",
        "Handle contract and equipment installation inquiries",
        "Deliver high-quality customer service excellence"
      ],
      tags: ["Customer Support", "Service Info", "Technical Support"]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-zinc-950">
      <div className="container px-4 mx-auto">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center">
            <span className="text-dev-purple mr-2">./</span>Experience
          </h2>
          <p className="text-zinc-400">Professional journey timeline.</p>
        </div>

        <div className="relative border-l border-zinc-800 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-0 w-3 h-3 rounded-full bg-zinc-800 border border-zinc-600 group-hover:bg-dev-purple group-hover:border-dev-purple transition-colors" />

              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-dev-purple transition-colors">{exp.position}</h3>
                  <h4 className="text-zinc-400 text-lg">{exp.company}</h4>
                </div>
                <div className="flex flex-col text-sm text-zinc-500 font-mono">
                  <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {exp.duration}</div>
                  <div className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> {exp.location}</div>
                </div>
              </div>

              <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 hover:border-zinc-700 transition-all">
                <p className="text-zinc-300 mb-4 font-mono text-sm leading-relaxed border-l-2 border-dev-purple/30 pl-4">
                  "{exp.description}"
                </p>
                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start text-zinc-400 text-sm">
                      <span className="mr-2 text-dev-green">➜</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
