"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Terminal, Code2 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HeroName } from "@/components/portfolio/HeroName"

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background Grid & Gradient */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.2]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />

      {/* Kinetic Typography Background */}
      <div className="absolute inset-0 flex flex-col justify-center opacity-[0.03] select-none pointer-events-none overflow-hidden">
        <div className="whitespace-nowrap text-[20vw] font-black leading-none animate-marquee text-white will-change-transform">
          TESTER DEVELOPER QA AUTOMATION
        </div>
        <div className="whitespace-nowrap text-[20vw] font-black leading-none animate-marquee-reverse text-white ml-20 will-change-transform">
          QUALITY ASSURANCE TESTING CODE
        </div>
      </div>

      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Terminal Badge */}
            <div className="inline-flex items-center space-x-2 bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-full px-4 py-2 text-sm text-zinc-400 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono">System.out.print("Hello AI");</span>
            </div>

            <div className="space-y-4">
              <HeroName />
              <p className="text-xl md:text-2xl text-zinc-400 max-w-lg animate-fade-in-up delay-200">
                <span className="text-dev-green font-mono">Software Tester</span> & <span className="text-dev-purple font-mono">Developer</span>
              </p>
              <p className="text-zinc-500 max-w-xl animate-fade-in-up delay-300 leading-relaxed">
                Bridging the gap between Development and QA. Passionate about building robust software and breaking it to make it stronger, specializing in automation frameworks and high-quality solution delivery.
              </p>
            </div>

            <div className="flex gap-4">
              <Button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-black hover:bg-zinc-200 h-12 px-8 text-lg font-medium"
              >
                View Works <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-900 h-12 px-8 text-lg font-medium"
                  >
                    Download CV <Download className="ml-2 w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-zinc-900 border-zinc-800 text-zinc-300">
                  <DropdownMenuItem className="hover:bg-zinc-800 hover:text-white cursor-pointer group">
                    <a href="/pdf/Khwanchai_Resume_SoftwareTester.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center w-full">
                      <Terminal className="mr-2 h-4 w-4 text-dev-green group-hover:text-dev-green" />
                      Software Tester CV
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-zinc-800 hover:text-white cursor-pointer group">
                    <a href="/pdf/Khwanchai_Resume_Developer.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center w-full">
                      <Code2 className="mr-2 h-4 w-4 text-dev-purple group-hover:text-dev-purple" />
                      Developer CV
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* 3D/Visual Element */}
          <div className="relative hidden lg:block animate-fade-in-up delay-500">
            <div className="relative w-full max-w-[500px] mx-auto">
              {/* Floating Cards Pattern */}
              <div className="absolute inset-0 bg-gradient-to-tr from-dev-purple/20 to-dev-cyan/20 rounded-full blur-3xl" />

              <div className="relative z-10 w-full h-auto border border-zinc-800 bg-black/40 backdrop-blur-sm rounded-2xl p-6 shadow-2xl overflow-hidden glass-card">
                {/* Mockup Window Header */}
                <div className="flex items-center space-x-2 mb-4 border-b border-zinc-800 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="ml-auto text-xs text-zinc-500 font-mono">workflow.ts</div>
                </div>

                {/* Mockup Code Content */}
                <div className="space-y-2 font-mono text-sm">
                  <div className="flex">
                    <span className="text-zinc-600 mr-4">01</span>
                    <span className="text-dev-purple">describe</span>
                    <span className="text-white">('Quality Assurance', () ={'>'} {'{'}</span>
                  </div>
                  <div className="flex">
                    <span className="text-zinc-600 mr-4">02</span>
                    <span className="text-dev-purple ml-4">it</span>
                    <span className="text-dev-green">('should ensure reliability', </span>
                    <span className="text-zinc-400">async () ={'>'} {'{'}</span>
                  </div>
                  <div className="flex">
                    <span className="text-zinc-600 mr-4">03</span>
                    <span className="text-zinc-300 ml-8">await</span>
                    <span className="text-dev-cyan ml-2">testRunner.executeSuite()</span>
                    <span className="text-zinc-400">;</span>
                  </div>
                  <div className="flex">
                    <span className="text-zinc-600 mr-4">04</span>
                    <span className="text-zinc-300 ml-8">const</span>
                    <span className="text-dev-cyan ml-2">bugs = await analyzer.scan()</span>
                    <span className="text-zinc-400">;</span>
                  </div>
                  <div className="flex">
                    <span className="text-zinc-600 mr-4">05</span>
                    <span className="text-dev-purple ml-8">expect</span>
                    <span className="text-zinc-300">(bugs.length)</span>
                    <span className="text-dev-cyan">.toBe(0)</span>
                    <span className="text-zinc-400">;</span>
                  </div>
                  <div className="flex">
                    <span className="text-zinc-600 mr-4">06</span>
                    <span className="text-zinc-400 ml-4">{'}'});</span>
                  </div>
                  <div className="flex">
                    <span className="text-zinc-600 mr-4">07</span>
                    <span className="text-white">{'}'});</span>
                  </div>

                  {/* Status Indicator */}
                  <div className="mt-8 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-green-500 font-bold">All Specs Passed</span>
                    </div>
                    <span className="text-zinc-500">284/284</span>
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
