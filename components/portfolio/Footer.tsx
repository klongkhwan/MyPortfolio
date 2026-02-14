"use client"

import { Github, Linkedin, Mail, Heart, Coffee } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 py-12 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">
              Khwanchai<span className="text-dev-purple">.port</span>
            </h2>
            <p className="text-zinc-500 max-w-sm">
              Building quality software through rigorous testing and robust automation frameworks.
              Let's ensure your product is bug-free.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-zinc-400">
              <li><button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-dev-purple transition-colors">Home</button></li>
              <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-dev-purple transition-colors">About</button></li>
              <li><button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-dev-purple transition-colors">Projects</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-dev-purple transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm">
          <p>© 2024 Khwanchai Sopa. All rights reserved.</p>
          <div className="flex items-center space-x-1 mt-4 md:mt-0">
            <span>Made with</span>
            <Heart size={14} className="text-red-500 fill-current" />
            <span>and</span>
            <Coffee size={14} className="text-yellow-600" />
            <span>in Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
