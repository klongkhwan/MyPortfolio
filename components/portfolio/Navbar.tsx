"use client"

import { useState, useEffect } from "react"
import { Menu, X, Terminal, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5",
        isScrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => scrollToSection("home")}>
            <div className="w-10 h-10 bg-dev-purple/20 rounded-lg flex items-center justify-center border border-dev-purple/50 group-hover:bg-dev-purple/30 transition-all">
              <Terminal className="text-dev-purple w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Khwanchai<span className="text-dev-purple">.port</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
              >
                <span className="relative z-10">0{navItems.indexOf(item) + 1}. {item.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dev-purple group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-white/10"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-b border-white/10 py-4 px-4 flex flex-col space-y-4 animate-in slide-in-from-top-5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-left text-gray-300 hover:text-white py-2 px-4 rounded-lg hover:bg-white/5 transition-all flex items-center space-x-3"
            >
              <Code2 className="w-4 h-4 text-dev-purple" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
