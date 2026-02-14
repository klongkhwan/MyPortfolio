"use client"

import { useState } from "react"
import { X, Play, Github, ExternalLink, Calendar, Users, Award, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const ProjectModal = ({ project, isOpen, onClose }: { project: any; isOpen: boolean; onClose: () => void }) => {
    const [activeTab, setActiveTab] = useState<"images" | "demo">("images")
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
    if (!isOpen || !project) return null
  
    return (
      <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[60] flex items-center justify-center p-4 animate-in fade-in duration-200">
        <div className="bg-zinc-950 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-zinc-800 flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-zinc-800 bg-zinc-900/50">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center">
                 <span className="text-dev-purple mr-2">func</span> {project.title}<span className="text-zinc-500">()</span>
              </h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full"
            >
              <X size={24} />
            </Button>
          </div>
  
          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
             {/* Media Section */}
             <div className="space-y-4">
                 <div className="flex space-x-4 mb-4">
                     <button
                         onClick={() => setActiveTab("images")}
                         className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === "images" ? "bg-dev-purple text-white" : "text-zinc-400 hover:text-white hover:bg-zinc-800"}`}
                     >
                         Screenshots
                     </button>
                     <button
                         onClick={() => setActiveTab("demo")}
                         className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === "demo" ? "bg-dev-purple text-white" : "text-zinc-400 hover:text-white hover:bg-zinc-800"}`}
                     >
                         Live Demo
                     </button>
                 </div>

                 <div className="aspect-video bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 relative group">
                    {activeTab === "images" ? (
                        <>
                            <img 
                                src={project.images[currentImageIndex] || "/placeholder.svg"} 
                                alt="Project screenshot" 
                                className="w-full h-full object-cover"
                            />
                            {/* Navigation */}
                            {project.images.length > 1 && (
                                <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button onClick={() => setCurrentImageIndex(prev => (prev - 1 + project.images.length) % project.images.length)} className="p-2 bg-black/50 text-white rounded-full backdrop-blur hover:bg-black/70">←</button>
                                    <button onClick={() => setCurrentImageIndex(prev => (prev + 1) % project.images.length)} className="p-2 bg-black/50 text-white rounded-full backdrop-blur hover:bg-black/70">→</button>
                                </div>
                            )}
                            <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 text-white text-xs rounded-full backdrop-blur font-mono">
                                {currentImageIndex + 1} / {project.images.length}
                            </div>
                        </>
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-zinc-500 bg-zinc-900">
                             {project.demoVideo ? (
                                <video src={project.demoVideo} controls className="w-full h-full" />
                             ) : (
                                <div className="text-center">
                                    <Play className="w-12 h-12 mx-auto mb-2 opacity-50" />
                                    <p>Demo Video Not Available</p>
                                </div>
                             )}
                        </div>
                    )}
                 </div>

                 {/* Thumbnails */}
                 {activeTab === "images" && (
                    <div className="flex gap-2 overflow-x-auto pb-2">
                        {project.images.map((img: string, idx: number) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentImageIndex(idx)}
                                className={`w-20 h-12 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${currentImageIndex === idx ? "border-dev-purple" : "border-transparent opacity-50 hover:opacity-100"}`}
                            >
                                <img src={img} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                 )}
             </div>

             <div className="grid md:grid-cols-3 gap-8">
                 <div className="md:col-span-2 space-y-6">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Project Overview</h3>
                        <p className="text-zinc-400 leading-relaxed">{project.fullDescription}</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                            {project.features.map((feature: string, i: number) => (
                                <div key={i} className="flex items-start text-sm text-zinc-300">
                                    <CheckCircle className="w-4 h-4 text-dev-green mr-2 mt-0.5 flex-shrink-0" />
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>
                 </div>

                 <div className="space-y-6">
                     <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 space-y-4">
                        <div className="flex items-center text-sm">
                            <Calendar className="w-4 h-4 text-dev-purple mr-3" />
                            <div>
                                <div className="text-zinc-500">Duration</div>
                                <div className="text-white font-medium">{project.duration}</div>
                            </div>
                        </div>
                        <div className="flex items-center text-sm">
                            <Users className="w-4 h-4 text-dev-cyan mr-3" />
                            <div>
                                <div className="text-zinc-500">Team Size</div>
                                <div className="text-white font-medium">{project.teamSize}</div>
                            </div>
                        </div>
                        <div className="flex items-center text-sm">
                            <Award className="w-4 h-4 text-yellow-500 mr-3" />
                            <div>
                                <div className="text-zinc-500">Role</div>
                                <div className="text-white font-medium">{project.role}</div>
                            </div>
                        </div>
                     </div>

                     <div>
                         <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Tech Stack</h4>
                         <div className="flex flex-wrap gap-2">
                             {project.technologies.map((tech: string) => (
                                 <Badge key={tech} variant="secondary" className="bg-zinc-800 text-zinc-300">
                                     {tech}
                                 </Badge>
                             ))}
                         </div>
                     </div>
                 </div>
             </div>
          </div>
        </div>
      </div>
    )
  }
