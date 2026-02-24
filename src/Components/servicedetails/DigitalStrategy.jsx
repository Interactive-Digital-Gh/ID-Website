/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react"
import servicesbg from "../../assets/service/servicesbg.png"
import gradientBg from "../../assets/gradient.png"
// import service1 from "../assets/service/digital1.jpg"
// import service2 from "../assets/service/creative.jpg"
// import service3 from "../assets/service/tech.jpg"
// import service4 from "../assets/service/market.jpg"

import { CircleCheckBig } from "lucide-react"



const DigitalStrategy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="overflow-hidden">
            <div className="relative overflow-hidden">
                {/* Background Image */}
                <img
                    src={servicesbg}
                    alt="services background"
                    className="object-cover w-full lg:h-[400px] h-[500px] brightness-[0.45]"
                    loading="lazy"
                />


                {/* Text Content - middle left */}
                <div className="absolute md:top-[60%] top-[50%] left-0 translate-y-[-50%] flex flex-col justify-center px-6 sm:px-12 md:px-[100px] lg:px-[200px] 4xl:pl-[400px] text-left">
                    <div className="max-w-3xl">
                        <h1 className="text-white font-bold text-[32px] sm:text-[42px] lg:text-[54px] leading-tight drop-shadow-lg">
                            Crafting Digital Excellence for
                            <br />
                            Africa’s Ambitious Brand
                        </h1>
                        <p className="text-gray-200 mt-4 text-[14px] sm:text-[16px] lg:text-[18px] font-light tracking-wide">
                            Crafting Digital Excellence for Africa’s Ambitious Brand
                        </p>
                    </div>
                </div>
            </div>

            <div className="min-h-screen bg-white md:p-12 lg:p-16 py-8">
                <div className="px-4 lg:px-[150px] 4xl:px-[400px]">
                    <div className="max-w-7xl mx-auto">
                        {/* Header Row - Our Services + Intro Text */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                                Our Services
                            </h1>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                From our roots as a dynamic social media agency, we've evolved into West Africa's emerging digital powerhouse. Founded on the principle that authentic connections drive business growth, we combine deep local insights with global digital excellence to deliver results that matter..
                            </p>
                        </div>

                        {/* Main Content Row */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Left Section - Stats Card */}
                            <div className="flex flex-col justify-center">
                                {/* Stats Card with Gradient Border */}
                                <div className="rounded-3xl h-[600px] overflow-hidden relative">
                                    <img src={gradientBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                                    <div className="relative h-full flex items-center justify-center">
                                        <div className="bg-white rounded-[20px] p-8 md:p-12 flex flex-col justify-center mx-6 md:mx-8 my-8 md:my-16 w-full h-[calc(100%-64px)] md:h-[calc(100%-128px)]">
                                            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 leading-tight">
                                                230 Projects
                                                <br />
                                                worked on
                                            </h2>
                                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                                Create memorable digital experience that drive results Create memorable digital experience that drive results.
                                                Create memorable digital experience that drive results..
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Section - Service Cards */}
                            <div className="space-y-6">
                                {/* Brand Strategy */}
                                <div className="bg-[#F4F4F4] rounded-2xl p-4 border-2 border-transparent hover:border-[#ED0707] transition-all duration-300 group cursor-pointer">
                                    <div className="flex flex-col lg:flex-row items-start gap-4">
                                        {/* Title Pill */}
                                        <div className="flex items-center gap-2 flex-shrink-0 px-4 py-1.5 rounded-full text-sm border border-gray-300 bg-transparent text-gray-900 font-semibold whitespace-nowrap transition-all duration-300 group-hover:bg-[#ED0707] group-hover:text-white group-hover:border-[#ED0707]">
                                            <span>Brand Strategy</span>
                                            <CircleCheckBig className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                                        </div>
                                        {/* Description */}
                                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                            We're not here for surface-level branding. We uncover what drives your customers, what gaps your competitors leave behind, and what makes your business genuinely different. Our strategies blend insight, creativity, and clarity to give you a brand direction that's meaningful, scalable, and built to last.
                                        </p>
                                    </div>
                                </div>

                                {/* Campaigns */}
                                <div className="bg-[#F4F4F4] rounded-2xl p-4 border-2 border-transparent hover:border-[#ED0707] transition-all duration-300 group cursor-pointer">
                                    <div className="flex flex-col lg:flex-row items-start gap-4">
                                        <div className="flex items-center gap-2 flex-shrink-0 px-4 py-1.5 rounded-full text-sm border border-gray-300 bg-transparent text-gray-900 font-semibold whitespace-nowrap transition-all duration-300 group-hover:bg-[#ED0707] group-hover:text-white group-hover:border-[#ED0707]">
                                            <span>Campaigns</span>
                                            <CircleCheckBig className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                                        </div>
                                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                            Every campaign we create is crafted with intention. Bold enough to stop the scroll, sharp enough to spark conversations, and strategic enough to drive serious results. From ideation to execution, we build campaigns that create cultural moments and meaningful impact across every channel.
                                        </p>
                                    </div>
                                </div>

                                {/* Social Media Management */}
                                <div className="bg-[#F4F4F4] rounded-2xl p-4 border-2 border-transparent hover:border-[#ED0707] transition-all duration-300 group cursor-pointer">
                                    <div className="flex flex-col lg:flex-row items-start gap-4">
                                        <div className="flex items-center gap-2 flex-shrink-0 px-4 py-1.5 rounded-full text-sm border border-gray-300 bg-transparent text-gray-900 font-semibold whitespace-nowrap transition-all duration-300 group-hover:bg-[#ED0707] group-hover:text-white group-hover:border-[#ED0707]">
                                            <span>Social Media Management</span>
                                            <CircleCheckBig className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                                        </div>
                                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                            Your online presence is more than posts; it's a living ecosystem. We craft a content strategy tailored to your audience, fuel it with engaging storytelling, and support it with real time community management. The result? Growth, engagement, and a feed that always feels fresh and on brand.
                                        </p>
                                    </div>
                                </div>

                                {/* Content Creation */}
                                <div className="bg-[#F4F4F4] rounded-2xl p-4 border-2 border-transparent hover:border-[#ED0707] transition-all duration-300 group cursor-pointer">
                                    <div className="flex flex-col lg:flex-row items-start gap-4">
                                        <div className="flex items-center gap-2 flex-shrink-0 px-4 py-1.5 rounded-full text-sm border border-gray-300 bg-transparent text-gray-900 font-semibold whitespace-nowrap transition-all duration-300 group-hover:bg-[#ED0707] group-hover:text-white group-hover:border-[#ED0707]">
                                            <span>Content Creation</span>
                                            <CircleCheckBig className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                                        </div>
                                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                            Content isn't one size fits all. We ask the right questions, study your audience's behavior, and refine until your message doesn't just land, it sticks. Whether it's copy, visuals, or experiences, our content is designed to hit the right emotion and convert interest into action.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* grid */}
                <section className="bg-[#F9F9F9] py-16 px-6 md:px-[100px] lg:px-[220px] 4xl:px-[400px]">
                    <div className="max-w-7xl mx-auto">
                        {/* Header Row */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
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
        </div>
    );
};

export default DigitalStrategy;
