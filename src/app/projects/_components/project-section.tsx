"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "Immersive Brand Identity",
    subtitle: "Visual strategy & design system for a global tech brand",
    category: "Brand Design",
    year: "2024",
    image: "/tech-brand-geometric.png",
    span: "col-span-2",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    subtitle: "Full-stack marketplace with advanced filtering",
    category: "Web Development",
    year: "2024",
    image: "/sleek-ecommerce-dark.png",
    span: "col-span-1",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    subtitle: "Secure financial interface with biometric authentication",
    category: "UI/UX Design",
    year: "2023",
    image: "/modern-mobile-banking-app.png",
    span: "col-span-1",
  },
  {
    id: 4,
    title: "AI Dashboard Analytics",
    subtitle: "Real-time data visualization for machine learning insights",
    category: "Data Visualization",
    year: "2024",
    image: "/futuristic-ai-dashboard.png",
    span: "col-span-2",
  },
];

export default function PortfolioGrid() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      
      <section className="pt-22 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            SELECTED
            <br />
            <span className="text-gray-400">WORKS</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Design is more than visuals — it's the story your brand tells.
            Explore my selected works.
          </p>
        </div>
      </section>

     
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className={`${project.span} relative overflow-hidden bg-gray-900 border-gray-800 cursor-pointer group transition-all duration-500 ease-out hover:scale-[1.03] hover:shadow-2xl hover:shadow-cyan-400/20`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/70"></div>
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-cyan-400/10 via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                  {/* Category Badge */}
                  <div className="mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-cyan-400/20 text-cyan-400 rounded-full border border-cyan-400/30">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Info */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-3 leading-relaxed">
                      {project.subtitle}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">
                        {project.year}
                      </span>
                      <div className="w-8 h-8 rounded-full border border-cyan-400/50 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors duration-300">
                        <svg
                          className="w-4 h-4 text-cyan-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 17L17 7M17 7H7M17 7V17"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/30 transition-colors duration-300 rounded-lg"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
