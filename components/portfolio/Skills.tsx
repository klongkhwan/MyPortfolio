"use client"

import Image from "next/image"
import {
    Terminal, Cpu, Boxes, Zap, Database,
    FileSearch, Monitor, ClipboardCheck, BarChart3,
    RefreshCcw, Brain, MessageSquare, Eye, FileText, Users, Sparkles
} from "lucide-react"
import { SpotlightCard } from "./SpotlightCard"

export const Skills = () => {
    // ===== Testing Tools (Main Hero) =====
    const testingTools = [
        { name: "Playwright", level: 90, icon: "/icons/icon-playwright.svg", desc: "E2E Testing" },
        { name: "Postman", level: 92, icon: "/icons/icon-postman.svg", desc: "API Testing" },
        { name: "Navicat", level: 87, icon: "/icons/icon-navicat.svg", desc: "Database Management" },
    ]



    // ===== Development Tools =====
    const devTools = [
        { name: "Antigravity", icon: "/icons/icon_antigravity.svg" },
        { name: "VS Code", icon: "/icons/icon-vscode.svg" },
        { name: "Bitbucket", icon: "/icons/icon-bitbucket.svg" },
        { name: "Jira", icon: "/icons/icon-jira.svg" },
        { name: "Confluence", icon: "/icons/icon-conflue.svg" },
        { name: "Robot Framework", icon: "/icons/icon-robotframework.svg" },
    ]

    // ===== Testing Expertise =====
    const testingExpertise = [
        { name: "API Testing", icon: Zap, color: "text-yellow-400", desc: "REST, GraphQL, WebSocket" },
        { name: "UI Automation", icon: Monitor, color: "text-dev-cyan", desc: "Browser Automation" },
        { name: "Manual Testing", icon: ClipboardCheck, color: "text-dev-green", desc: "Exploratory & Functional" },
        { name: "Performance Testing", icon: BarChart3, color: "text-orange-400", desc: "Load & Stress Testing" },
        { name: "Database Testing", icon: Database, color: "text-dev-purple", desc: "Data Validation & SQL" },
        { name: "Regression Testing", icon: RefreshCcw, color: "text-pink-400", desc: "Automated Suites" },
    ]

    // ===== Soft Skills =====
    const softSkills = [
        { name: "Analytical Thinking", icon: Brain },
        { name: "Problem Solving", icon: FileSearch },
        { name: "Communication", icon: MessageSquare },
        { name: "Attention to Detail", icon: Eye },
        { name: "Documentation", icon: FileText },
        { name: "Team Collaboration", icon: Users },
        { name: "Generative AI Skills", icon: Sparkles },
    ]

    return (
        <section id="skills" className="py-20 bg-black relative">
            <div className="container px-4 mx-auto">
                {/* Section Header */}
                <div className="mb-16 flex flex-col items-center text-center">
                    <h2 className="text-4xl font-bold text-white mb-4 flex items-center">
                        <span className="text-dev-green mr-2">./</span>Skills
                    </h2>
                    <p className="text-zinc-400 max-w-2xl">
                        Comprehensive QA toolkit for delivering robust and reliable software solutions.
                    </p>
                </div>

                <div className="space-y-12">

                    {/* ========== 1. TESTING TOOLS (Hero Section) ========== */}
                    <div className="border border-zinc-800 bg-zinc-950/50 rounded-xl overflow-hidden">
                        <div className="bg-zinc-900 border-b border-zinc-800 px-6 py-4">
                            <div className="flex items-center justify-center space-x-2 text-sm font-mono">
                                <Terminal className="w-4 h-4 text-dev-green" />
                                <span className="text-zinc-400">Testing Frameworks & Tools</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {testingTools.map((tool) => (
                                    <SpotlightCard
                                        key={tool.name}
                                        className="group relative p-6 bg-zinc-900/60 border border-zinc-800 rounded-xl
                                            hover:border-dev-purple/60 hover:bg-zinc-800/60
                                            transition-all duration-300"
                                        spotlightColor="rgba(124, 58, 237, 0.3)"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="relative">
                                                <Image
                                                    src={tool.icon}
                                                    alt={tool.name}
                                                    width={48}
                                                    height={48}
                                                    className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                                                />
                                                <div className="absolute -inset-2 bg-dev-purple/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-white font-semibold mb-1">{tool.name}</h3>
                                                <p className="text-zinc-500 text-sm mb-3">{tool.desc}</p>
                                                <div className="flex items-center gap-2">
                                                    <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                                                        <div
                                                            className="h-full bg-gradient-to-r from-dev-purple to-dev-cyan rounded-full transition-all duration-500"
                                                            style={{ width: `${tool.level}%` }}
                                                        />
                                                    </div>
                                                    <span className="text-dev-cyan text-sm font-mono">{tool.level}%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SpotlightCard>
                                ))}
                            </div>

                            {/* Dev Tools Sub-section */}
                            <div className="border-t border-zinc-800 px-6 py-4">
                                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                                    {devTools.map((tool) => (
                                        <div
                                            key={tool.name}
                                            className="group flex flex-col items-center p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/50
                                                hover:border-dev-cyan/50 hover:bg-zinc-800/40 transition-all duration-300"
                                        >
                                            <Image
                                                src={tool.icon}
                                                alt={tool.name}
                                                width={28}
                                                height={28}
                                                className="w-7 h-7 mb-2 group-hover:scale-110 transition-transform"
                                            />
                                            <span className="text-xs text-zinc-500 group-hover:text-zinc-300 text-center">{tool.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ========== 3. TESTING EXPERTISE & SOFT SKILLS ========== */}
                    <div className="border border-zinc-800 bg-zinc-950/50 rounded-xl overflow-hidden">
                        <div className="bg-zinc-900 border-b border-zinc-800 px-6 py-4">
                            <div className="flex items-center justify-center space-x-2 text-sm font-mono">
                                <Cpu className="w-4 h-4 text-orange-400" />
                                <span className="text-zinc-400">Testing Expertise</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                {testingExpertise.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/50
                                            hover:border-zinc-700 hover:bg-zinc-800/40 transition-all duration-300 text-center"
                                    >
                                        <div className={`inline-flex p-3 rounded-lg bg-zinc-800/50 mb-3 group-hover:scale-110 transition-transform`}>
                                            <item.icon className={`w-6 h-6 ${item.color}`} />
                                        </div>
                                        <h4 className="text-white text-sm font-medium mb-1">{item.name}</h4>
                                        <p className="text-zinc-500 text-xs">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Soft Skills Sub-section */}
                        <div className="border-t border-zinc-800 px-6 py-4">
                            <div className="flex items-center justify-center space-x-2 text-sm font-mono mb-4">
                                <Brain className="w-4 h-4 text-pink-400" />
                                <span className="text-zinc-400">Soft Skills</span>
                            </div>
                            <div className="flex flex-wrap gap-3 justify-center">
                                {softSkills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="group inline-flex items-center gap-2 px-4 py-2 rounded-full 
                                            bg-zinc-900/60 border border-zinc-800
                                            hover:border-dev-purple/50 hover:bg-zinc-800/60 transition-all duration-300"
                                    >
                                        <skill.icon className="w-4 h-4 text-zinc-500 group-hover:text-dev-purple transition-colors" />
                                        <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
