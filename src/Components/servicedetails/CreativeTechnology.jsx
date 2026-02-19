/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'

import contentbg from "../../assets/service/ct.png"
import Splash from "../../assets/service/sp1.png"
import Splash1 from "../../assets/service/sp2.png"
import Splash2 from "../../assets/service/sp3.png"



const CreativeTechnology = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='overflow-hidden'>
            <div className="relative overflow-hidden">
                {/* Background Image */}
                <img
                    src={contentbg}
                    alt="services background"
                    className="object-cover w-full lg:h-[80vh] h-[500px] brightness-[0.45]"
                    loading="lazy"
                />


                {/* Text Content - middle left */}
                <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-[100px] lg:px-[200px] 4xl:pl-[400px] text-left">
                    <div className="max-w-3xl">
                        <h1 className="text-white font-bold text-[32px] sm:text-[42px] lg:text-[54px] leading-tight drop-shadow-lg">
                            Crafting Immersive Experiences Through Creative Engineering
                        </h1>
                        <p className="text-gray-200 mt-4 text-[14px] sm:text-[16px] lg:text-[18px] font-light tracking-wide">
                            Crafting Digital Excellence for Africa's Ambitious Brand
                        </p>
                    </div>
                </div>
            </div>

            <section className="bg-[#F9F9F9] py-16 px-6 md:px-[100px] lg:px-[200px]">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                            Our Services
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                            We leverage the power of innovative tech to bring creative ideas to life and enhance brand experiences.
                        </p>
                    </div>

                    {/* === ROW 1 === */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        {/* Text Left */}
                        <div className="lg:pl-24">
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                AR/VR Solutions
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                                We create AR and VR experiences your community wants to dive into. Fresh, fun, and unforgettable.
                            </p>
                        </div>

                        {/* Image Right - Overlapping */}
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?auto=format&fit=crop&w=900&q=80"
                                alt="AR/VR Solutions"
                                className="w-[85%] h-[300px] md:h-[350px] object-cover rounded-2xl shadow-md"
                                loading="lazy"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
                                alt="AR/VR Overlay"
                                className="absolute -bottom-8 -right-4 w-[55%] h-[251px] object-cover rounded-2xl shadow-lg border-4 border-white"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* === ROW 2 === */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        {/* Image Left - Overlapping */}
                        <div className="relative order-2 lg:order-1">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                                alt="AI Implementations"
                                className="w-[85%] ml-auto h-[300px] md:h-[350px] object-cover rounded-2xl shadow-md"
                                loading="lazy"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=600&q=80"
                                alt="AI Overlay"
                                className="absolute -bottom-8 -left-4 w-[55%] h-[251px] object-cover rounded-2xl shadow-lg border-4 border-white"
                                loading="lazy"
                            />
                        </div>

                        {/* Text Right */}
                        <div className="order-1 lg:order-2 lg:pr-24">
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                AI Implementations
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                                We put AI to work for your brand. Think personalized experiences, streamlined processes, and creative output with a touch of future magic.
                            </p>
                        </div>
                    </div>

                    {/* === ROW 3 === */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        {/* Text Left */}
                        <div className="lg:pl-24">
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Interactive Installations
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                                We blend the physical and digital to create brand moments you can actually step into. It's not just content; it's an experience you can touch, explore, and remember.
                            </p>
                        </div>

                        {/* Image Right - Overlapping */}
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80"
                                alt="Interactive Installations"
                                className="w-[85%] h-[300px] md:h-[350px] object-cover rounded-2xl shadow-md"
                                loading="lazy"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80"
                                alt="Installation Overlay"
                                className="absolute -bottom-8 -right-4 w-[55%] h-[251px] object-cover rounded-2xl shadow-lg border-4 border-white"
                                loading="lazy"
                            />
                        </div>
                    </div>


                </div>
            </section>

            <main className="min-h-screen bg-background text-foreground">
                {/* Header Section */}
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-20">
                        {/* Left: Title */}
                        <div>
                            <h1 className="text-5xl font-bold tracking-tight">Our Portfolio</h1>
                        </div>

                        {/* Right: Description */}
                        <div className="lg:col-span-2">
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                From our roots as a dynamic social media agency, we've evolved into
                                West Africa's emerging digital powerhouse. Founded on the principle
                                that authentic connections drive business growth, we combine deep
                                local insights with global digital excellence to deliver results
                                that matter.
                            </p>
                        </div>
                    </div>

                    {/* Featured Project */}
                    <div className="mb-16">
                        <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border">
                            <div className="relative w-full h-96 bg-muted">
                                <img
                                    src={Splash}
                                    alt="AR/VR Solutions project showcase with VR headsets"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <h3 className="font-semibold text-foreground mb-3">Project 1</h3>
                            <div className="flex gap-2">
                                <span className="inline-block bg-red-100 text-red-700 text-sm font-medium px-3 py-1 rounded">
                                    AR/VR Solutions
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Project Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Project 2 */}
                        <div>
                            <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border">
                                <div className="relative w-full h-72 bg-muted">
                                    <img
                                        src={Splash1}
                                        alt="AI Implementation project with neon lighting"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <h3 className="font-semibold text-foreground mb-3">Project 1</h3>
                                <div className="flex gap-2">
                                    <span className="inline-block bg-red-100 text-red-700 text-sm font-medium px-3 py-1 rounded">
                                        AI Implementation
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div>
                            <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border">
                                <div className="relative w-full h-72 bg-muted">
                                    <img
                                        src={Splash2}
                                        alt="Interactive Installation project with VR headset"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <h3 className="font-semibold text-foreground mb-3">Project 1</h3>
                                <div className="flex gap-2">
                                    <span className="inline-block bg-red-100 text-red-700 text-sm font-medium px-3 py-1 rounded">
                                        Interactive Installation
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default CreativeTechnology