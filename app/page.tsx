"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { FlaskConical, BugPlay, ServerCog, DatabaseZap } from "lucide-react";

import {
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  TestTube,
  Code,
  Database,
  Zap,
  CheckCircle,
  Send,
  Menu,
  X,
  Play,
  Calendar,
  Users,
  Target,
  Award,
  Bug,
  Shield,
  Search,
  FileCheck,
} from "lucide-react"
import type { JSX } from "react/jsx-runtime"

// Project Modal Component
const ProjectModal = ({ project, isOpen, onClose }: { project: any; isOpen: boolean; onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState<"images" | "demo">("images")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!isOpen || !project) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scale-in shadow-2xl">
        {/* Header - ปรับปรุงใหม่ */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 p-6 flex justify-between items-center rounded-t-2xl z-10 shadow-sm">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-purple-900 pr-4">{project.title}</h2>
            <p className="text-sm text-gray-600 mt-1">Project Details & Overview</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-red-50 hover:text-red-600 transition-all duration-200 rounded-full w-10 h-10 flex-shrink-0 border border-gray-200 hover:border-red-200"
          >
            <X size={20} className="font-bold" />
          </Button>
        </div>

        {/* Content - เพิ่ม overflow control */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="p-6">
            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
              <button
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === "images" ? "bg-white text-purple-700 shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setActiveTab("images")}
              >
                📸 Screenshots
              </button>
              <button
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === "demo" ? "bg-white text-purple-700 shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setActiveTab("demo")}
              >
                🎬 Demo Video
              </button>
            </div>

            {/* Tab Content - แก้ไขใหม่ */}
            <div className="relative mb-6">
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden relative group">
                {activeTab === "images" ? (
                  <div className="relative w-full h-full">
                    {/* Main Image Display */}
                    <img
                      src={project.images[currentImageIndex] || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover transition-all duration-500"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Navigation Arrows */}
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}

                    {/* Image Counter */}
                    <div className="absolute top-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                      {currentImageIndex + 1} / {project.images.length}
                    </div>

                    {/* Image Title */}
                    <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium">Screenshot {currentImageIndex + 1}</p>
                      <p className="text-xs opacity-75">{project.title}</p>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full bg-black rounded-xl flex items-center justify-center">
                    {project.demoVideo ? (
                      <video
                        className="w-full h-full object-cover rounded-xl"
                        controls
                        autoPlay
                        muted
                        loop
                        poster={project.images[0]}
                      >
                        <source src={project.demoVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <div className="text-center text-white">
                        <Play size={48} className="mx-auto mb-4 opacity-50" />
                        <p className="text-lg opacity-75">Demo video coming soon</p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Image Indicators */}
              {activeTab === "images" && project.images.length > 1 && (
                <div className="flex justify-center mt-4 space-x-2">
                  {project.images.map((_: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentImageIndex ? "bg-purple-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Thumbnail Navigation - ปรับให้อยู่ซ้าย */}
              {activeTab === "images" && project.images.length > 1 && (
                <div className="flex justify-center space-x-2 mt-4 overflow-x-auto pb-2">
                  {project.images.map((image: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        index === currentImageIndex
                          ? "border-purple-500 scale-105"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

            </div>

            {/* Project Info Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
                <Calendar className="text-purple-600" size={20} />
                <div>
                  <div className="font-semibold text-purple-900">Duration</div>
                  <div className="text-gray-600">{project.duration}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                <Users className="text-blue-600" size={20} />
                <div>
                  <div className="font-semibold text-blue-900">Team Size</div>
                  <div className="text-gray-600">{project.teamSize}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                <Target className="text-green-600" size={20} />
                <div>
                  <div className="font-semibold text-green-900">Role</div>
                  <div className="text-gray-600">{project.role}</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Project Overview</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{project.fullDescription}</p>
            </div>

            {/* Key Features */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {project.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <Badge key={tech} variant="secondary" className="bg-purple-100 text-purple-800 px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Results/Impact */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Results & Impact</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.results.map((result: any, index: number) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Award className="text-yellow-500" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">{result.metric}</div>
                      <div className="text-gray-600">{result.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons - เหลือแค่ GitHub และ Documentation */}
            {/* <div className="flex flex-col sm:flex-row gap-4">
              {project.github && (
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 flex-1 bg-transparent"
                >
                  <Github size={16} className="mr-2" />
                  View Code
                </Button>
              )}
              {project.documentation && (
                <Button
                  variant="outline"
                  className="border-purple-300 text-purple-700 hover:bg-purple-50 flex-1 bg-transparent"
                >
                  <Code size={16} className="mr-2" />
                  Documentation
                </Button>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  // Animation states
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 },
    )

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  // เพิ่มใน useEffect ที่มีอยู่แล้ว หรือสร้างใหม่
  useEffect(() => {
    if (isModalOpen) {
      // ปิด scroll ของ body เมื่อเปิด modal
      document.body.style.overflow = "hidden"
    } else {
      // เปิด scroll ของ body เมื่อปิด modal
      document.body.style.overflow = "unset"
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isModalOpen])

  const setSectionRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const openProjectModal = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeProjectModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const TechIcon = ({ name, className = "w-8 h-8" }: { name: string; className?: string }) => {
    const icons: { [key: string]: JSX.Element } = {
      playwright: (
        <img src="icons/icon-playwright.svg" className={className} alt="Playwright Icon" />
      ),
      postman: (
        <img src="icons/icon-postman.svg" className={className} alt="Postman Icon" />
      ),      
      javascript: (
        <img src="icons/icon-javascript.svg" className={className} alt="JavaScript Icon" />
      ),
      typescript: (
        <img src="icons/icon-typescript.svg" className={className} alt="TypeScript Icon" />
      ),
      jira: (
        <img src="icons/icon-jira.svg" className={className} alt="Jira Icon" />
      ),
      robot: (
        <img src="icons/icon-robotframework.svg" className={className} alt="Robot Icon" />
      ),
      postgresql: (
        <img src="icons/icon-postgresql.svg" className={className} alt="PostgreSQL Icon" />
      ),
      navicat: (
        <img src="icons/icon-navicat.svg" className={className} alt="Navicat Icon" />
      ),
      vscode: (
        <img src="icons/icon-vscode.svg" className={className} alt="VS Code Icon" />
      ),
      bitbucket: (
        <img src="icons/icon-bitbucket.svg" className={className} alt="Bitbucket Icon" />
      ),
      conflue: (
        <img src="icons/icon-conflue.svg" className={className} alt="Conflue Icon" />
      ),
    }
    return icons[name.toLowerCase()] || <Code className={className} />
  }

  const skillsData = {
    tools: [
      { name: "VsCode", icon: "vscode", level: 95 },
      { name: "Postman", icon: "postman", level: 92 },
      { name: "Bitbucket", icon: "bitbucket", level: 85 },
      { name: "Navicat", icon: "navicat", level: 87 },
      { name: "Jira", icon: "jira", level: 87 },
      { name: "Conflue", icon: "conflue", level: 85 },
    ],
    languages: [
      { name: "postgreSQL", icon: "postgresql", level: 87 },
      { name: "TypeScript", icon: "typescript", level: 88 },
      { name: "JavaScript", icon: "javascript", level: 90 },
      
    ],
    frameworks: [
      { name: "Playwright", icon: "playwright", level: 90 },
      { name: "Robot Framework", icon: "robot", level: 80 },
    ],
  };


  const expertise = [
    { name: "Automation Testing", description: "Automation end-to-end test" },
    { name: "API Testing", description: "RESTful API validation and Flow API" },
    { name: "Manual Testing", description: "Manual testing strategies" },
  ]

  const projects = [
    {
      title: "E-commerce Automation Suite",
      description:
        "Comprehensive automated testing suite for an e-commerce platform using Playwright and TypeScript. Covers user registration, product search, cart functionality, and checkout process.",
      fullDescription:
        "This project involved building a complete end-to-end testing framework for a major e-commerce platform. The framework covers all critical user journeys including user registration, authentication, product browsing, cart management, and checkout processes. The solution includes data-driven testing, cross-browser compatibility, and integration with CI/CD pipelines.",
      technologies: ["Playwright", "TypeScript", "CI/CD", "Docker", "GitHub Actions"],
      duration: "6 months",
      teamSize: "4 QA Engineers",
      role: "Lead QA Engineer",
      images: [
        "/placeholder.svg?height=400&width=600&text=E-commerce+Dashboard",
        "/placeholder.svg?height=400&width=600&text=Test+Results",
        "/placeholder.svg?height=400&width=600&text=CI/CD+Pipeline",
        "/placeholder.svg?height=400&width=600&text=Test+Reports",
      ],
      demoVideo: "/placeholder.mp4?text=E-commerce+Demo",
      features: [
        "Cross-browser testing (Chrome, Firefox, Safari, Edge)",
        "Data-driven test scenarios with CSV/JSON inputs",
        "Visual regression testing with screenshot comparison",
        "API testing integration for backend validation",
        "Parallel test execution for faster feedback",
        "Detailed HTML reports with screenshots and videos",
        "Integration with Slack for real-time notifications",
        "Database validation and cleanup procedures",
      ],
      results: [
        { metric: "Test Coverage", value: "95%" },
        { metric: "Execution Time Reduced", value: "60%" },
        { metric: "Bugs Found Pre-Production", value: "150+" },
        { metric: "ROI", value: "$50K+ saved" },
      ],
      github: "https://github.com/example/ecommerce-tests",
      documentation: "https://docs.example.com",
    },
    {
      title: "API Testing Framework",
      description:
        "RESTful API testing framework built with Postman and Newman. Includes automated test execution, data-driven testing, and comprehensive reporting.",
      fullDescription:
        "Developed a robust API testing framework using Postman and Newman for automated execution. The framework includes comprehensive test suites for REST APIs, authentication testing, data validation, and performance benchmarking. Features include environment management, data-driven testing, and integration with monitoring tools.",
      technologies: ["Postman", "Newman", "JavaScript", "Node.js", "MongoDB"],
      duration: "3 months",
      teamSize: "2 QA Engineers",
      role: "Senior QA Engineer",
      images: [
        "/placeholder.svg?height=400&width=600&text=API+Testing+Dashboard",
        "/placeholder.svg?height=400&width=600&text=Postman+Collections",
        "/placeholder.svg?height=400&width=600&text=Test+Reports",
        "/placeholder.svg?height=400&width=600&text=API+Monitoring",
      ],
      demoVideo: "/placeholder.mp4?text=API+Testing+Demo",
      features: [
        "Comprehensive REST API test coverage",
        "Authentication and authorization testing",
        "Data validation and schema verification",
        "Performance and load testing capabilities",
        "Environment-specific configuration management",
        "Automated test data generation and cleanup",
        "Integration with monitoring and alerting systems",
        "Custom reporting with detailed metrics",
      ],
      results: [
        { metric: "API Endpoints Tested", value: "200+" },
        { metric: "Test Automation", value: "100%" },
        { metric: "Response Time Improved", value: "30%" },
        { metric: "Critical Bugs Prevented", value: "25+" },
      ],
      github: "https://github.com/example/api-tests",
      documentation: "https://docs.example.com/api",
    },
    {
      title: "Mobile App Testing Framework",
      description:
        "Cross-platform mobile testing framework using Appium and Python. Automated testing for iOS and Android applications with device farm integration.",
      fullDescription:
        "Built a comprehensive mobile testing framework supporting both iOS and Android platforms using Appium and Python. The framework includes device farm integration, parallel execution across multiple devices, and automated testing for native, hybrid, and web mobile applications.",
      technologies: ["Appium", "Python", "Selenium Grid", "BrowserStack", "TestNG"],
      duration: "5 months",
      teamSize: "5 QA Engineers",
      role: "Mobile Test Architect",
      images: [
        "/placeholder.svg?height=400&width=600&text=Mobile+Test+Framework",
        "/placeholder.svg?height=400&width=600&text=Device+Farm",
        "/placeholder.svg?height=400&width=600&text=Test+Execution",
        "/placeholder.svg?height=400&width=600&text=Mobile+Reports",
      ],
      demoVideo: "/placeholder.mp4?text=Mobile+Testing+Demo",
      features: [
        "Cross-platform testing (iOS and Android)",
        "Device farm integration with BrowserStack",
        "Parallel execution across multiple devices",
        "Native, hybrid, and mobile web app support",
        "Gesture and touch interaction testing",
        "Network condition simulation",
        "App performance monitoring",
        "Automated screenshot and video capture",
      ],
      results: [
        { metric: "Devices Supported", value: "50+" },
        { metric: "Test Execution Speed", value: "70% faster" },
        { metric: "Platform Coverage", value: "100%" },
        { metric: "Critical Issues Found", value: "80+" },
      ],
      github: "https://github.com/example/mobile-tests",
      documentation: "https://docs.example.com/mobile",
    },
    {
      title: "Accessibility Testing Tool",
      description:
        "Custom accessibility testing tool that integrates with existing test suites to ensure WCAG compliance across web applications.",
      fullDescription:
        "Developed a custom accessibility testing tool that automatically scans web applications for WCAG 2.1 compliance issues. The tool integrates seamlessly with existing test automation frameworks and provides detailed reports with remediation suggestions. Features include automated scanning, manual testing workflows, and compliance tracking.",
      technologies: ["Axe-core", "JavaScript", "React", "Node.js", "PostgreSQL"],
      duration: "4 months",
      teamSize: "3 QA Engineers",
      role: "Accessibility Test Lead",
      images: [
        "/placeholder.svg?height=400&width=600&text=Accessibility+Dashboard",
        "/placeholder.svg?height=400&width=600&text=WCAG+Compliance",
        "/placeholder.svg?height=400&width=600&text=Remediation+Guide",
        "/placeholder.svg?height=400&width=600&text=Accessibility+Reports",
      ],
      demoVideo: "/placeholder.mp4?text=Accessibility+Tool+Demo",
      features: [
        "Automated WCAG 2.1 compliance scanning",
        "Integration with popular testing frameworks",
        "Detailed accessibility reports with screenshots",
        "Remediation suggestions and code examples",
        "Compliance tracking and trend analysis",
        "Custom rule configuration and validation",
        "Screen reader simulation and testing",
        "Color contrast and keyboard navigation checks",
      ],
      results: [
        { metric: "WCAG Compliance", value: "98%" },
        { metric: "Accessibility Issues Fixed", value: "500+" },
        { metric: "Testing Time Reduced", value: "50%" },
        { metric: "User Accessibility Score", value: "A+ Rating" },
      ],
      github: "https://github.com/example/accessibility-tool",
      documentation: "https://docs.example.com/accessibility",
    },
  ]

  const experiences = [
    {
      company: "TechCorp Solutions",
      position: "Senior QA Engineer",
      duration: "2022 - Present",
      location: "San Francisco, CA",
      image: "logo/logo-cliniter.svg",
      description:
        "Lead QA engineer responsible for testing strategy and automation framework development for enterprise-level applications.",
      achievements: [
        "Implemented comprehensive test automation framework reducing testing time by 60%",
        "Led a team of 5 QA engineers across multiple projects",
        "Established CI/CD testing pipelines improving deployment frequency by 40%",
        "Mentored junior QA engineers and conducted technical training sessions",
      ],
      technologies: ["Playwright", "TypeScript", "Jenkins", "Docker"],
    },
    {
      company: "FinanceFlow Inc",
      position: "QA Engineer",
      duration: "2020 - 2022",
      location: "Remote",
      description:
        "Specialized in testing financial applications with focus on security, performance, and regulatory compliance.",
      achievements: [
        "Designed and executed comprehensive test plans for payment processing systems",
        "Performed security testing and vulnerability assessments",
        "Reduced production bugs by 45% through improved testing processes",
        "Collaborated with development teams to implement test-driven development practices",
      ],
      technologies: ["Selenium", "Python", "Postman", "JMeter"],
    },
    {
      company: "E-commerce Plus",
      position: "Junior QA Engineer",
      duration: "2019 - 2020",
      location: "Austin, TX",
      description:
        "Started career in QA testing e-commerce platforms and mobile applications with focus on user experience.",
      achievements: [
        "Executed manual testing for web and mobile applications",
        "Created detailed test cases and bug reports",
        "Participated in agile development processes and sprint planning",
        "Learned automation testing and contributed to framework development",
      ],
      technologies: ["Manual Testing", "Cypress", "JavaScript", "Jira"],
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      position: "Product Manager",
      company: "TechCorp Solutions",
      content:
        "Alex is an exceptional QA engineer who consistently delivers high-quality work. His attention to detail and proactive approach to identifying potential issues has saved our team countless hours. The automation framework he built has been instrumental in our success.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Michael Rodriguez",
      position: "Development Team Lead",
      company: "FinanceFlow Inc",
      content:
        "Working with Alex was a game-changer for our development process. His expertise in both manual and automated testing, combined with his understanding of financial systems, made him an invaluable team member. He consistently found critical issues before they reached production.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Emily Johnson",
      position: "CTO",
      company: "E-commerce Plus",
      content:
        "Alex demonstrated remarkable growth during his time with us. His dedication to learning new technologies and improving our testing processes was impressive. He quickly became a key contributor to our QA team and helped establish many of our current best practices.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-purple-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-purple-900">Khwanchai Sopa</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "About",
                "Experience",
                "Skills",
                // "Expertise",
                "Projects",
                // "Testimonials",
                "Resume",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-purple-700 transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-purple-100">
              {[
                "Home",
                "About",
                "Experience",
                "Skills",
                "Expertise",
                "Projects",
                // "Testimonials",
                "Resume",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-gray-700 hover:text-purple-700 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-purple-50 to-white" ref={setSectionRef("home")}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image - ปรับปรุงใหม่ */}
            <div
              className={`flex justify-center lg:justify-end order-1 lg:order-2 transition-all duration-1000 perspective-container ${visibleSections.has("home") ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"}`}
            >
              <div className="relative profile-3d float-3d">
                {/* Main Profile Image */}
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 bg-gradient-to-br from-slate-100/20 to-slate-200/20 glass relative">
                  <img
                    src="/profile.jpg?height=400&width=400&text=Professional+QA+Engineer"
                    alt="Khwanchai Sopa - QA Engineer"
                    className="w-full h-full object-cover"
                  />

                  {/* 3D Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-blue-900/20"></div>
                </div>

                {/* 3D Professional Testing Icons */}
                <div className="absolute -top-1 -right-1 w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl icon-3d hover-lift-3d">
                  <CheckCircle className="text-white w-8 h-8" />
                </div>

                <div className="absolute -bottom-0 -left-1 w-14 h-14 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-2xl icon-3d hover-lift-3d">
                  <Bug className="text-white w-6 h-6" />
                </div>

                <div className="absolute top-1/4 -left-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl icon-3d hover-lift-3d">
                  <Search className="text-white w-5 h-5" />
                </div>

                <div className="absolute top-1/3 -right-8 w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-2xl icon-3d hover-lift-3d">
                  <Shield className="text-white w-4 h-4" />
                </div>

                <div className="absolute bottom-1/3 -right-6 w-11 h-11 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center shadow-2xl icon-3d hover-lift-3d">
                  <FileCheck className="text-white w-5 h-5" />
                </div>

                {/* 3D Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-16 left-16 w-2 h-2 bg-purple-400 rounded-full animate-pulse shadow-lg"></div>
                  <div className="absolute top-24 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300 shadow-lg"></div>
                  <div className="absolute bottom-20 left-24 w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-700 shadow-lg"></div>
                  <div className="absolute bottom-16 right-16 w-3 h-3 bg-orange-400 rounded-full animate-pulse delay-1000 shadow-lg"></div>
                </div>

                {/* 3D Professional badge */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 glass rounded-full px-6 py-3 shadow-2xl border border-white/30">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
                    <span className="text-sm font-medium text-white">Available for Job</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div
                className={`transition-all duration-1000 ${visibleSections.has("home") ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"}`}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-purple-900 mb-4 animate-bounce-in">
                  Khwanchai Sopa
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-purple-700 mb-6 font-medium animate-slide-in-left">
                  Software Tester | QA Engineer
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed animate-slide-in-right">
                  Passionate QA engineer with 5+ years of experience in manual and automated testing. I ensure software
                  quality through comprehensive testing strategies, automation frameworks, and performance optimization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up-delay">
                  <Button
                    onClick={() => scrollToSection("projects")}
                    className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                  >
                    View My Work
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection("contact")}
                    className="border-purple-700 text-purple-700 hover:bg-purple-50 px-8 py-3 text-lg transition-all duration-200 hover:shadow-lg"
                  >
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "2+", label: "Years Experience" },
              { number: "2+", label: "Projects Completed" },
              { number: "60%", label: "Testing Time Reduced" },
              { number: "8", label: "Team Members Led" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-500 delay-${index * 100} ${visibleSections.has("home") ? "animate-fade-in opacity-100" : "opacity-0"}`}
              >
                <div className="text-3xl md:text-4xl font-bold text-purple-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - ปรับปรุงใหม่ */}
      <section id="about" className="py-16 bg-gradient-to-br from-white to-purple-50" ref={setSectionRef("about")}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-800 ${visibleSections.has("about") ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl font-bold text-purple-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-800 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated to ensuring software excellence through innovative testing methodologies and continuous
              improvement
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div
              className={`lg:col-span-2 space-y-6 transition-all duration-1000 delay-200 ${visibleSections.has("about") ? "animate-slide-in-left opacity-100" : "opacity-0 -translate-x-10"}`}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
                <h3 className="text-2xl font-bold text-purple-900 mb-4 flex items-center">
                  <TestTube className="mr-3 text-purple-600" size={28} />
                  My Journey in Quality Assurance
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  I'm a dedicated QA Engineer with a passion for ensuring software quality and user satisfaction. With
                  over 5 years of experience in the field, I've worked across various industries including e-commerce,
                  fintech, and healthcare.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  My expertise spans both manual and automated testing, with a strong focus on building robust test
                  automation frameworks. I believe in the power of comprehensive testing strategies to deliver
                  exceptional user experiences and maintain software reliability.
                </p>
              </div>

              {/* Core Competencies */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: FlaskConical, // เดิม TestTube
                    title: "Manual Testing",
                    desc: "User-centric and exploratory test execution"
                  },
                  {
                    icon: BugPlay, // เดิม Code
                    title: "Test Automation",
                    desc: "Automated scripts for faster regression cycles"
                  },
                  {
                    icon: ServerCog, // เดิม Database
                    title: "API Testing",
                    desc: "Validating RESTful and GraphQL responses"
                  },
                  {
                    icon: DatabaseZap, // เดิม Zap
                    title: "Database Testing",
                    desc: "Data integrity checks with SQL queries"
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-xl p-6 shadow-md border border-purple-50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${visibleSections.has("about") ? "animate-fade-in opacity-100" : "opacity-0"}`}
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mr-4">
                        <item.icon className="text-purple-700" size={24} />
                      </div>
                      <h4 className="text-lg font-semibold text-purple-900">{item.title}</h4>
                    </div>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Sidebar */}
            <div
              className={`transition-all duration-1000 delay-400 ${visibleSections.has("about") ? "animate-slide-in-right opacity-100" : "opacity-0 translate-x-10"}`}
            >
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 text-white shadow-xl transform scale-80 origin-top-lef ">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Award className="mr-3" size={28 * 0.8} />
                  Key Achievements
                </h3>
                <div className="space-y-6">
                  {[
                    { metric: "60%", label: "Testing Time Reduced", icon: "⚡" },
                    { metric: "8", label: "Team Members Led", icon: "👥" },
                    { metric: "40%", label: "Performance Improved", icon: "📈" },
                    { metric: "100%", label: "CI/CD Integration", icon: "🔄" },
                  ].map((achievement, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-4 transition-all duration-500 delay-${500 + index * 100} ${visibleSections.has("about") ? "animate-fade-in opacity-100" : "opacity-0"}`}
                    >
                      <div className="text-[1.6rem]">{achievement.icon}</div>
                      <div>
                        <div className="text-[1.6rem] font-bold">{achievement.metric}</div>
                        <div className="text-purple-100 text-xs">{achievement.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


              {/* Professional Values */}
              <div className="mt-6 bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
                <h4 className="text-lg font-bold text-purple-900 mb-4">Professional Values</h4>
                <div className="space-y-3">
                  {["Quality First", "Continuous Learning", "Innovation"].map((value, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 transition-all duration-500 delay-${600 + index * 100} ${visibleSections.has("about") ? "animate-fade-in opacity-100" : "opacity-0"}`}
                    >
                      <CheckCircle className="text-emerald-500" size={16} />
                      <span className="text-gray-700 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-purple-50" ref={setSectionRef("experience")}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 transition-all duration-800 ${visibleSections.has("experience") ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl font-bold text-purple-900 mb-4">Work Experience</h2>
            <div className="w-24 h-1 bg-purple-700 mx-auto animate-expand"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className={`shadow-lg hover:shadow-xl transition-all duration-500 delay-${index * 200} ${
                  visibleSections.has("experience") ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"
                }`}
              >
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-1 flex flex-col items-start space-y-4">
                      <img
                        src={exp.image || "/profile.jpg"}
                        alt={exp.company + " logo"}
                        className="w-20 h-20 rounded-xl object-cover shadow-md"
                      />

                      <div>
                        <h3 className="text-xl font-bold text-purple-900 mb-1">{exp.position}</h3>
                        <h4 className="text-lg font-semibold text-purple-700 mb-1">{exp.company}</h4>
                        <div className="text-gray-600 mb-1">{exp.duration}</div>
                        <div className="text-gray-600 mb-3">{exp.location}</div>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-purple-100 text-purple-800">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
                      <h5 className="font-semibold text-purple-900 mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2">
                            <CheckCircle className="text-purple-700 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50"
        ref={setSectionRef("skills")}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-800 ${visibleSections.has("skills") ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl font-bold text-purple-900 mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto animate-expand"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Proficient in a wide range of testing tools, programming languages, and frameworks
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {Object.entries(skillsData).map(([category, items], categoryIndex) => (
              <div
                key={category}
                className={`transition-all duration-500 delay-${categoryIndex * 200} ${visibleSections.has("skills") ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"}`}
              >
                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
                  <div className="p-6 border-b border-purple-100">
                    <h3 className="text-2xl font-bold text-purple-900 capitalize flex items-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mr-3"></div>
                      {category}
                    </h3>
                  </div>
                  

                  <div className="p-6">
                    <div className="space-y-4">
                      {items.map((item, index) => (
                        <div
                          key={index}
                          className={`group transition-all duration-300 delay-${index * 100} ${
                            visibleSections.has("skills")
                              ? "animate-slide-in-left opacity-100"
                              : "opacity-0 -translate-x-4"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 group">
                                <TechIcon
                                  name={item.icon}
                                  className="w-6 h-6 text-purple-700 transform transition-transform duration-300 group-hover:rotate-45"
                                />
                              </div>

                              <span className="font-medium text-gray-800 group-hover:text-purple-700 transition-colors duration-200">
                                {item.name}
                              </span>
                            </div>
                            <div className="text-sm font-semibold text-purple-600">
                              {item.level}%
                            </div>
                          </div>

                          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-1000 ease-out"
                              style={{
                                width: visibleSections.has("skills") ? `${item.level}%` : "0%",
                                transitionDelay: `${index * 100 + 500}ms`,
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            {[
              { label: "Testing Tools", count: "6+", icon: "🛠️" },
              { label: "Languages", count: "3+", icon: "💻" },
              { label: "Frameworks", count: "2+", icon: "🚀" },
              { label: "Years Experience", count: "2+", icon: "⭐" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-purple-100 ${visibleSections.has("skills") ? "animate-fade-in opacity-100" : "opacity-0"}`}
                style={{ animationDelay: `${index * 150 + 800}ms` }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-purple-900 mb-1">{stat.count}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-16 bg-white" ref={setSectionRef("expertise")}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 transition-all duration-800 ${visibleSections.has("expertise") ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl font-bold text-purple-900 mb-4">Testing Expertise</h2>
            <div className="w-24 h-1 bg-purple-700 mx-auto animate-expand"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <Card
                key={index}
                className={`shadow-lg hover:shadow-xl transition-all duration-500 delay-${index * 100} transform hover:-translate-y-2 ${visibleSections.has("expertise") ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"}`}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-purple-900 mb-3">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-purple-50" ref={setSectionRef("projects")}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 transition-all duration-800 ${visibleSections.has("projects") ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl font-bold text-purple-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-purple-700 mx-auto animate-expand"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`shadow-lg hover:shadow-xl transition-all duration-500 delay-${index * 150} transform hover:-translate-y-2 hover:scale-105 flex flex-col h-full ${visibleSections.has("projects") ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"}`}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.images[0] || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-purple-900/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  {project.demoVideo && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 rounded-full p-3">
                        <Play className="text-purple-700" size={24} />
                      </div>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-purple-900">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <CardDescription className="text-gray-600 mb-4 flex-1">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-purple-300 text-purple-700 hover:bg-purple-100 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="border-gray-300 text-gray-600">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-purple-700 text-purple-700 hover:bg-purple-50 bg-transparent transition-all duration-200 hover:shadow-md mt-auto"
                    onClick={() => openProjectModal(project)}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="py-16 bg-white" ref={setSectionRef("testimonials")}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 transition-all duration-800 ${visibleSections.has("testimonials") ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl font-bold text-purple-900 mb-4">What People Say</h2>
            <div className="w-24 h-1 bg-purple-700 mx-auto animate-expand"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`shadow-lg hover:shadow-xl transition-all duration-500 delay-${index * 150} transform hover:-translate-y-2 ${visibleSections.has("testimonials") ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-purple-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                      <p className="text-sm text-purple-700">{testimonial.company}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 italic leading-relaxed">"{testimonial.content}"</blockquote>
                  <div className="flex text-yellow-400 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Resume Section */}
      <section id="resume" className="py-16 bg-white" ref={setSectionRef("resume")}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`transition-all duration-800 ${visibleSections.has("resume") ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl font-bold text-purple-900 mb-4">Resume</h2>
            <div className="w-24 h-1 bg-purple-700 mx-auto mb-8 animate-expand"></div>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-purple-900 mb-4">Download My Resume</h3>
                  <p className="text-gray-600 mb-6">
                    Get a detailed overview of my experience, skills, and achievements in software testing and quality
                    assurance.
                  </p>
                </div>

                <Button
                  className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                  onClick={() => {
                    alert("Resume download would start here. Please upload your actual resume PDF.")
                  }}
                >
                  <Download size={20} className="mr-2" />
                  Download PDF Resume
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-purple-50" ref={setSectionRef("contact")}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 transition-all duration-800 ${visibleSections.has("contact") ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl font-bold text-purple-900 mb-4">Contact</h2>
            <div className="w-24 h-1 bg-purple-700 mx-auto mb-6 animate-expand"></div>
            <p className="text-xl text-gray-600">
              Let's discuss how I can help ensure the quality of your software projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div
              className={`transition-all duration-1000 delay-200 ${visibleSections.has("contact") ? "animate-slide-in-left opacity-100" : "opacity-0 -translate-x-10"}`}
            >
              <h3 className="text-2xl font-bold text-purple-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-purple-700" size={20} />
                  <span className="text-gray-700">alex.johnson@email.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-purple-700" size={20} />
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-purple-700" size={20} />
                  <span className="text-gray-700">San Francisco, CA</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-purple-900 mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-purple-700 text-purple-700 hover:bg-purple-50 bg-transparent transition-all duration-200 hover:scale-110"
                  >
                    <Linkedin size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-purple-700 text-purple-700 hover:bg-purple-50 bg-transparent transition-all duration-200 hover:scale-110"
                  >
                    <Github size={20} />
                  </Button>
                </div>
              </div>
            </div>

            <Card
              className={`shadow-lg transition-all duration-1000 delay-400 ${visibleSections.has("contact") ? "animate-slide-in-right opacity-100" : "opacity-0 translate-x-10"}`}
            >
              <CardHeader>
                <CardTitle className="text-purple-900">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-purple-200 focus:border-purple-500 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-purple-200 focus:border-purple-500 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="border-purple-200 focus:border-purple-500 transition-colors duration-200"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-purple-700 hover:bg-purple-800 text-white transition-all duration-200 transform hover:scale-105"
                  >
                    <Send size={16} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-purple-200">
            © 2024 Khwanchai Sopa. All rights reserved. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeProjectModal} />
    </div>
  )
}
