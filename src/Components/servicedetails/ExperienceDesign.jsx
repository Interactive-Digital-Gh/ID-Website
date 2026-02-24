import React, { useEffect } from 'react'
import experiencebg from "../../assets/service/experiencebg.png"

const ExperienceDesign = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='overflow-hidden'>
            <div className="relative overflow-hidden">
                {/* Background Image */}
                <img
                    src={experiencebg}
                    alt="services background"
                    className="object-cover w-full lg:h-[400px] h-[500px]"
                    loading="lazy"
                />


                {/* Text Content - middle left */}
                <div className="absolute md:top-[60%] top-[50%] left-0 translate-y-[-50%] flex flex-col justify-center px-6 sm:px-12 md:px-[100px] lg:px-[200px] 4xl:pl-[400px] text-left">
                    <div className="max-w-3xl">
                        <h1 className="text-white font-bold text-[32px] sm:text-[42px] lg:text-[54px] leading-tight drop-shadow-lg">
                            Crafting Digital Excellence for
                            <br />
                            Africa's Ambitious Brand
                        </h1>
                        <p className="text-gray-200 mt-4 text-[14px] sm:text-[16px] lg:text-[18px] font-light tracking-wide">
                            Crafting Digital Excellence for Africa's Ambitious Brand
                        </p>
                    </div>
                </div>
            </div>
            <section className="bg-[#F9F9F9] py-16 px-6 md:px-[100px] lg:px-[200px]">
                <div className="max-w-7xl mx-auto">
                    {/* Header Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Our Work Process
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-xl">
                            From our roots as a dynamic social media agency, we've evolved into West
                            Africa's emerging digital powerhouse. Founded on the principle that
                            authentic connections drive business growth, we combine deep local
                            insights with global digital excellence to deliver results that matter.
                        </p>
                    </div>

                    {/* Process Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: "✏️",
                                title: "Discover",
                                desc: "We begin by deeply understanding your users and business goals through research, interviews, and analytics. This helps uncover pain points, motivations, and opportunities.",
                            },
                            {
                                icon: "🔍",
                                title: "Define",
                                desc: "We synthesize insights into clear user personas, journey maps, and problem statements. This step ensures we're solving the right problem with the right experience.",
                            },
                            {
                                icon: "💡",
                                title: "Ideate",
                                desc: "Using collaborative workshops and brainstorming sessions, we generate creative ideas and innovative solutions that align with user needs and business strategy.",
                            },
                            {
                                icon: "📱",
                                title: "Prototype",
                                desc: "We create wireframes, low-to-high fidelity mockups, and interactive prototypes to quickly visualize and test key user flows and design directions.",
                            },
                            {
                                icon: "🧪",
                                title: "Test",
                                desc: "Through user testing and feedback loops, we validate assumptions, refine the interface, and ensure the experience is intuitive, accessible, and effective.",
                            },
                            {
                                icon: "📦",
                                title: "Deliver",
                                desc: "We finalize the design system, hand off to development, and support implementation to ensure the user experience is brought to life as intended.",
                            },
                        ].map((step, index) => (
                            <div
                                key={index}
                                className="relative rounded-xl p-8 bg-[#F4F4F4] hover:text-white shadow-sm transition-all duration-700 ease-in-out group overflow-hidden"
                            >
                                {/* Red gradient background animation */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#ED0707] to-[#870404] opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-0 transition-all duration-700 ease-in-out"></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="text-2xl mb-4">{step.icon}</div>
                                    <h3 className="font-semibold text-lg mb-3 ">{step.title}</h3>
                                    <p className="text-sm leading-relaxed text-[#666A82] group-hover:text-white transition-colors duration-500">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#F9F9F9] py-16 px-6 md:px-[100px] lg:px-[200px]">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 items-start gap-8 mb-12'>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                            Our Services
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg max-w-xl">
                            Building user-centric experiences that merge creativity with functionality
                        </p>
                    </div>


                    {/* === ROW 1 === */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        {/* Text Left */}
                        <div className="lg:pl-24">
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                UI/UX Design
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                                We design sleek, intuitive interfaces that look great and work great. No clunky clicks, just smart and smooth design your audience will love at first taps
                            </p>
                        </div>

                        {/* Image Right - Overlapping */}
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?auto=format&fit=crop&w=900&q=80"
                                alt="UI/UX Design"
                                className="w-[85%] h-[300px] md:h-[350px] object-cover rounded-2xl shadow-md"
                                loading="lazy"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
                                alt="UI/UX Overlay"
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
                                alt="Service Design"
                                className="w-[85%] ml-auto h-[300px] md:h-[350px] object-cover rounded-2xl shadow-md"
                                loading="lazy"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=600&q=80"
                                alt="Service Design Overlay"
                                className="absolute -bottom-8 -left-4 w-[55%] h-[251px] object-cover rounded-2xl shadow-lg border-4 border-white"
                                loading="lazy"
                            />
                        </div>

                        {/* Text Right */}
                        <div className="order-1 lg:order-2 lg:pr-24">
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Service Design
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                                We map out every step of your customer's journey and smooth out the messy bits. The result? A seamless experience that keeps people happy and your operations running like clockwork.
                            </p>
                        </div>
                    </div>

                    {/* === ROW 3 === */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        {/* Text Left */}
                        <div className="lg:pl-24">
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Customer Journey Mapping
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                                We trace your audience's journey, uncover what's not working, and turn every bland moment into something worth remembering.
                            </p>
                        </div>

                        {/* Image Right - Overlapping */}
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80"
                                alt="Customer Journey"
                                className="w-[85%] h-[300px] md:h-[350px] object-cover rounded-2xl shadow-md"
                                loading="lazy"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80"
                                alt="Journey Overlay"
                                className="absolute -bottom-8 -right-4 w-[55%] h-[251px] object-cover rounded-2xl shadow-lg border-4 border-white"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* === ROW 4 === */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image Left - Overlapping */}
                        <div className="relative order-2 lg:order-1">
                            <img
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80"
                                alt="App/Platform Creation"
                                className="w-[85%] ml-auto h-[300px] md:h-[350px] object-cover rounded-2xl shadow-md"
                                loading="lazy"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80"
                                alt="Platform Overlay"
                                className="absolute -bottom-8 -left-4 w-[55%] h-[251px] object-cover rounded-2xl shadow-lg border-4 border-white"
                                loading="lazy"
                            />
                        </div>

                        {/* Text Right */}
                        <div className="order-1 lg:order-2 lg:pr-24">
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                App/Platform Creation
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                                We build responsive, scalable apps and platforms that are smooth to use and easy to love. Fast loads, zero fuss, and all the right reasons to keep users coming back.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* grid */}
            <section className="bg-[#F9F9F9] py-16 px-6 md:px-[100px] lg:px-[220px] 4xl:px-[400px]">
                <div className="max-w-7xl mx-auto">
                    {/* Header Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 mb-12">
                        <h2 className="text-4xl md:text-5xl font-medium text-gray-900">
                            Our Portfolio Reels
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-xl">
                            From our roots as a dynamic social media agency, we've evolved into West
                            Africa's emerging digital powerhouse. Founded on the principle that
                            authentic connections drive business growth, we combine deep local
                            insights with global digital excellence to deliver results that matter.
                        </p>
                    </div>

                    {/* Portfolio Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            {
                                src: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=900&q=80",
                                title: "Project 1",
                            },
                            {
                                src: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=900&q=80",
                                title: "Project 2",
                            },
                            {
                                src: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=900&q=80",
                                title: "Project 3",
                            },
                            {
                                src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",
                                title: "Project 4",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="relative rounded-2xl overflow-hidden h-[250px] md:h-[300px] group"
                            >
                                {/* Image */}
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                                    loading="lazy"
                                />

                                {/* Sliding Red Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="absolute bottom-0 left-0 right-0 h-full translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out bg-gradient-to-t from-[#ED0707]/90 via-[#ED0707]/60 to-transparent flex items-center justify-center">
                                        <span className="text-white text-xl md:text-2xl font-semibold">
                                            {item.title}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    )
}

export default ExperienceDesign