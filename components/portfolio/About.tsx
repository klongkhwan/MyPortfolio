"use client"

import { Terminal, Cpu, Globe, Zap } from "lucide-react"

export const About = () => {
    return (
        <section id="about" className="py-20 bg-black relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-dev-purple/5 to-transparent pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-6 flex items-center justify-center md:justify-start">
                                <span className="text-dev-green mr-2">./</span>About Me
                            </h2>
                            <div className="prose prose-invert prose-lg text-zinc-400">
                                <p>
                                    I am a <span className="text-white font-semibold">QA Tester</span> with hands-on experience in manual testing, automation, API testing, and SQL. With a strong interest in software development, I actively contribute beyond testing by understanding system architecture, collaborating closely with developers, and supporting application improvement.
                                </p>
                                <p>
                                    I also have experience as a <span className="text-white font-semibold">Developer</span> working with JavaScript/TypeScript, REST APIs, and database systems, which allows me to approach quality from both testing and development perspectives. My goal is to ensure high-quality, reliable.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: Terminal, label: "Automation", desc: "Playwright / Selenium" },
                                { icon: Cpu, label: "Performance", desc: "JMeter / LoadRunner" },
                                { icon: Globe, label: "API Testing", desc: "Postman / REST Assured" },
                                { icon: Zap, label: "CI/CD", desc: "Jenkins / GitHub Actions" },
                            ].map((item, index) => (
                                <div key={index} className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-800/50 transition-colors group">
                                    <item.icon className="w-8 h-8 text-dev-purple mb-3 group-hover:scale-110 transition-transform" />
                                    <h4 className="text-white font-bold">{item.label}</h4>
                                    <p className="text-zinc-500 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        {/* Abstract Profile Layout */}
                        <div className="relative aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-dev-purple to-dev-cyan rounded-[2rem] rotate-3 opacity-20 blur-xl animate-pulse" />
                            <div className="absolute inset-0 border-2 border-zinc-800 rounded-[2rem] rotate-3" />
                            <div className="absolute inset-0 border-2 border-zinc-800 rounded-[2rem] -rotate-3" />

                            <div className="absolute inset-4 overflow-hidden rounded-[1.5rem] bg-zinc-900 shadow-2xl">
                                <img
                                    src="/profile.jpg?height=800&width=800"
                                    alt="Khwanchai Sopa"
                                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 scale-105 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                                        <div className="flex items-center space-x-3 text-sm font-mono">
                                            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                            <span className="text-green-400">Open to work</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
