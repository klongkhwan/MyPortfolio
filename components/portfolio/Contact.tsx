"use client"

import { Mail, Linkedin, Github, Phone } from "lucide-react"

export const Contact = () => {
    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "rotsaniyomnaja@gmail.com",
            href: "mailto:rotsaniyomnaja@gmail.com",
            color: "text-red-400",
            hoverBg: "hover:bg-red-400/10",
            hoverBorder: "hover:border-red-400/50"
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "Khwanchai Sopa",
            href: "https://th.linkedin.com/in/khwanchai-sopa-b96158236",
            color: "text-blue-400",
            hoverBg: "hover:bg-blue-400/10",
            hoverBorder: "hover:border-blue-400/50"
        },
        {
            icon: Github,
            label: "GitHub",
            value: "klongkhwang",
            href: "https://github.com/klongkhwang",
            color: "text-zinc-300",
            hoverBg: "hover:bg-zinc-400/10",
            hoverBorder: "hover:border-zinc-400/50"
        },
        {
            icon: Phone,
            label: "Phone",
            value: "098-279-4554",
            href: "tel:+66982794554",
            color: "text-dev-green",
            hoverBg: "hover:bg-dev-green/10",
            hoverBorder: "hover:border-dev-green/50"
        },
    ]

    return (
        <section id="contact" className="py-16 bg-black relative">
            <div className="container px-4 mx-auto max-w-3xl">
                {/* Section Header */}
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-2">
                        <span className="text-dev-green">{"<"}</span>Contact /<span className="text-dev-green">{">"}</span>
                    </h2>
                    <p className="text-zinc-500 text-sm">Let's connect</p>
                </div>

                {/* Contact Grid - Compact */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {contactInfo.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className={`group flex flex-col items-center p-4 bg-zinc-900/60 border border-zinc-800 rounded-xl
                                ${item.hoverBg} ${item.hoverBorder}
                                transition-all duration-300 cursor-pointer`}
                        >
                            <item.icon className={`w-6 h-6 ${item.color} mb-2 group-hover:scale-110 transition-transform`} />
                            <div className="text-xs text-zinc-500 font-mono">{item.label}</div>
                        </a>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-6 text-center">
                    <p className="text-zinc-600 text-xs font-mono">
                        console.log(<span className="text-dev-green">"Looking forward to hearing from you!"</span>)
                    </p>
                </div>
            </div>
        </section>
    )
}
