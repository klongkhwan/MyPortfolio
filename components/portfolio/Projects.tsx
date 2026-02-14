"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github, Play, Eye, Code2, Calendar, Users, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectModal } from "./ProjectModal"
import { SpotlightCard } from "./SpotlightCard"

const projectsData = [
    {
        title: "E-commerce Automation Suite",
        description: "Comprehensive automated testing suite for an e-commerce platform using Playwright and TypeScript.",
        fullDescription: "Built a complete end-to-end testing framework for a major e-commerce platform. The framework covers critical user journeys including registration, product browsing, and checkout. Features data-driven testing and CI/CD integration.",
        technologies: ["Playwright", "TypeScript", "CI/CD", "Docker", "GitHub Actions"],
        duration: "6 months",
        teamSize: "4 QA Engineers",
        role: "Lead QA Engineer",
        images: ["/placeholder.svg?height=400&width=600&text=E-commerce+Dashboard"],
        demoVideo: "",
        features: ["Cross-browser testing", "Data-driven scenarios", "Visual regression testing", "API testing integration"],
        results: [{ metric: "Coverage", value: "95%" }, { metric: "Time Saved", value: "60%" }],
        color: "dev-purple"
    },
    {
        title: "API Testing Framework",
        description: "RESTful API testing framework built with Postman and Newman.",
        fullDescription: "Robust API testing framework including automated execution, data validation, and performance benchmarking.",
        technologies: ["Postman", "Newman", "JavaScript", "Node.js"],
        duration: "3 months",
        teamSize: "2 QA Engineers",
        role: "Senior QA Engineer",
        images: ["/placeholder.svg?height=400&width=600&text=API+Testing"],
        demoVideo: "",
        features: ["REST API coverage", "Auth testing", "Schema validation", "Performance testing"],
        results: [{ metric: "Endpoints", value: "200+" }, { metric: "Automation", value: "100%" }],
        color: "dev-cyan"
    },
    {
        title: "Mobile App Testing Framework",
        description: "Cross-platform mobile testing framework using Appium and Python.",
        fullDescription: "Comprehensive mobile testing framework supporting both iOS and Android platforms using Appium and Python with device farm integration.",
        technologies: ["Appium", "Python", "Selenium Grid", "BrowserStack"],
        duration: "5 months",
        teamSize: "5 QA Engineers",
        role: "Mobile Test Architect",
        images: ["/placeholder.svg?height=400&width=600&text=Mobile+Testing"],
        demoVideo: "",
        features: ["iOS & Android support", "Device farm integration", "Parallel execution", "Gesture testing"],
        results: [{ metric: "Devices", value: "50+" }, { metric: "Speedup", value: "70%" }],
        color: "dev-green"
    }
]

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<any>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openProjectModal = (project: any) => {
        setSelectedProject(project)
        setIsModalOpen(true)
    }

    const getColorClass = (color: string) => {
        switch (color) {
            case "dev-purple": return { border: "hover:border-dev-purple/60", text: "text-dev-purple", bg: "bg-dev-purple", glow: "rgba(124, 58, 237, 0.3)" }
            case "dev-cyan": return { border: "hover:border-dev-cyan/60", text: "text-dev-cyan", bg: "bg-dev-cyan", glow: "rgba(34, 211, 238, 0.3)" }
            case "dev-green": return { border: "hover:border-dev-green/60", text: "text-dev-green", bg: "bg-dev-green", glow: "rgba(34, 197, 94, 0.3)" }
            default: return { border: "hover:border-dev-purple/60", text: "text-dev-purple", bg: "bg-dev-purple", glow: "rgba(124, 58, 237, 0.3)" }
        }
    }

    return (
        <section id="projects" className="py-20 bg-zinc-950">
            <div className="container px-4 mx-auto">
                {/* Section Header */}
                <div className="mb-16 flex flex-col items-center text-center">
                    <h2 className="text-4xl font-bold text-white mb-4 flex items-center">
                        <span className="text-dev-cyan mr-2">./</span>Featured Works
                    </h2>
                    <p className="text-zinc-400 max-w-2xl">
                        Selected projects demonstrating technical expertise in QA automation.
                    </p>
                </div>

                {/* Projects Container */}
                <div className="border border-zinc-800 bg-zinc-950/50 rounded-xl overflow-hidden">
                    {/* Window Header */}
                    <div className="bg-zinc-900 border-b border-zinc-800 px-6 py-4">
                        <div className="flex items-center justify-center space-x-2 text-sm font-mono">
                            <Code2 className="w-4 h-4 text-dev-cyan" />
                            <span className="text-zinc-400">Project Portfolio</span>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="p-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projectsData.map((project, index) => {
                                const colors = getColorClass(project.color)
                                return (
                                    <SpotlightCard
                                        key={index}
                                        className={`group relative bg-zinc-900/60 border border-zinc-800 rounded-xl overflow-hidden 
                                            ${colors.border} hover:bg-zinc-800/60
                                            transition-all duration-300 cursor-pointer`}
                                        spotlightColor={colors.glow}
                                        onClick={() => openProjectModal(project)}
                                    >
                                        {/* Image Section */}
                                        <div className="relative aspect-video overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10" />
                                            <img
                                                src={project.images[0]}
                                                alt={project.title}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                            />
                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center">
                                                <div className="flex gap-3">
                                                    <Button
                                                        size="sm"
                                                        className={`${colors.bg} hover:opacity-90 text-white`}
                                                    >
                                                        <Eye className="w-4 h-4 mr-2" />
                                                        View Details
                                                    </Button>
                                                    {project.demoVideo && (
                                                        <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                                                            <Play className="w-4 h-4 mr-2" />
                                                            Demo
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                            {/* Project Number Badge */}
                                            <div className={`absolute top-3 left-3 z-30 px-2 py-1 rounded-md ${colors.bg}/20 border border-current ${colors.text} text-xs font-mono`}>
                                                #{String(index + 1).padStart(2, '0')}
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-5">
                                            <h3 className={`text-lg font-bold text-white mb-2 group-hover:${colors.text} transition-colors flex items-center`}>
                                                {project.title}
                                                <ChevronRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </h3>
                                            <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                                            {/* Technologies */}
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.slice(0, 3).map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="text-xs px-2 py-1 bg-zinc-800/80 text-zinc-300 rounded border border-zinc-700/50 font-mono"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.technologies.length > 3 && (
                                                    <span className="text-xs px-2 py-1 text-zinc-500 font-mono">
                                                        +{project.technologies.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </SpotlightCard>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    )
}
