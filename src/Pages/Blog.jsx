import fuguThumb from "../assets/blog/fugu.png";
import Mtn from "../assets/blog/mtn.png"
import Picbanner from "../assets/blog/picbanner.png";
import scefthumb from "../assets/blog/joy1.jpg";
import socialthumb from "../assets/blog/thumbnail-social-media.png";
import pitchers from "../assets/blog/pitchers_banner.png";
import ninani from "../assets/blog/winner.jpeg";

import Digi from "../assets/blog/digi.jpg";
import joy from "../assets/blog/joy2.jpg";

import Profile1 from "../assets/blog/profile1.jpg";
import Profile2 from "../assets/blog/profile2.jpg";
import Profile3 from "../assets/blog/profile3.jpg";
import Profile4 from "../assets/blog/profile4.jpeg";
import Val from "../assets/blog/val.jpeg";
import Eyramthumb from "../assets/blog/Eyramthumbnail.jpg";
import Philothumb from "../assets/blog/Philothumbnail.jpg";

import blogbanner from "../assets/blog/blogbanner.png";
import idPattern from "../assets/pattern/ID-pattern.png";
import mPattern from "../assets/pattern/m-pattern.png";
import { useState, useRef, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";



export const blogPosts = [



    {
        id: 1,
        category: "Insight",
        title: "The Audience Most Marketing Teams Forget to Woo on Valentine's Day.",
        excerpt: `As soon as the January "dryness" starts to fade, the month of February swoops in, bringing with it a season of love. Walk through Makola or scroll through social media, and you'll see a relentless wave of red and white.`,
        image: Val,
        author: "Philomina Akekudaga",
        date: "February 14, 2026",
        profile: Profile3,
    },

    {
        id: 2,
        category: "Award",
        title: "Interactive Digital Celebrates MTN Ghana's Historic Achievement",
        excerpt: "It's a triple threat! We are thrilled to congratulate MTN Ghana's outstanding accomplishment as the 5th-time winner of the Chartered Institute of Marketing Ghana (CIMG) Telecommunications Award for Overall Marketing Orientation Organization of the Year 2023, Telecom Company of the Year, as well as the Hall of Fame Award for Telecommunications.",
        image: Mtn,
        imagemobile: Mtn,
        author: "Philomina Akekudaga",
        date: "January 09, 2025",
        profile: Profile3,
    },
    {
        id: 3,
        category: "Insight",
        title: "Why Digital Storytelling Matters and How Interactive Digital Is Making It Count.",
        excerpt: "You're scrolling through your feed online, and then a video pops up, it's not just one of those boring pitches. Instead, it tells a catchy story that draws you in. Before you realise it, you are emotionally invested and eager to learn more about the brand behind it.",
        image: Digi,
        imagemobile: Digi,
        author: "Kwadwo A. Sirebour",
        date: "April 02, 2024",
        profile: Profile1,
    },
    {
        id: 4,
        category: "News",
        title: "Interactive Digital and Street Children Empowerment Foundation (SCEF) Host Successful 'Sound of Freedom' Movie Screening to Raise Funds for Street-Connected Children Initiatives.",
        excerpt: `It was all about impact on Friday, October 18, 2024, as the Street Children Empowerment Foundation (SCEF) hosted a fundraising screening of the film "Sound of Freedom" at the AMA Omanye Aba Hall in Accra.`,
        image: joy,
        imagemobile: joy,
        author: "Judith Abani",
        date: "October 18, 2024",
        profile: Profile2,
    },
    {
        id: 5,
        category: "Insight",
        title: "Leveraging Platform Specific Features For Digital Communication",
        excerpt: "Digital platforms have changed the way businesses communicate and how people connect. These platforms offer a variety of tools and features that often go unnoticed due to a lack of deeper understanding",
        image: Picbanner,
        imagemobile: Picbanner,
        author: "Philomina Akekudaga",
        date: "June 07, 2024",
        profile: Profile3,
    },
    {
        id: 6,
        category: "News",
        title: "Going Beyond the Digital Canvas: Interactive Digital paints smiles on the faces of street-connected children for Christmas.",
        excerpt: "Christmas was a little different this time here at ID. We partnered with the Street Children Empowerment Foundation (SCEF) to share the joy of Christmas with street-connected children and children in vulnerable situations.",
        image: scefthumb,
        imagemobile: scefthumb,
        author: "Philomina Akekudaga",
        date: "December 29, 2023",
        profile: Profile3,
    },
    {
        id: 7,
        category: "Insight",
        title: "Before Social Media Was A Thing, Humans Ran The Algorithm.",
        excerpt: "Today is World Social Media Day, and chale, we've come a long way. It feels like just yesterday we were meticulously crafting our Facebook profiles and sending slightly awkward messages from a busy internet café computer.",
        image: socialthumb,
        imagemobile: socialthumb,
        author: "Philomina Akekudaga",
        date: "June 30, 2025",
        profile: Profile3,
    },
    {
        id: 8,
        category: "Award",
        title: "𝐈𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐯𝐞 𝐃𝐢𝐠𝐢𝐭𝐚𝐥 𝐒𝐡𝐢𝐧𝐞𝐬 𝐚𝐭 𝟐𝟎𝟐𝟓 𝐏𝐢𝐭𝐜𝐡𝐞𝐫𝐬 𝐀𝐰𝐚𝐫𝐝𝐬 𝐚𝐧𝐝 𝐖𝐞'𝐫𝐞 𝐉𝐮𝐬𝐭 𝐆𝐞𝐭𝐭𝐢𝐧𝐠 𝐒𝐭𝐚𝐫𝐭𝐞𝐝!",
        excerpt: "Interactive Digital is proud to have earned a Silver Award at the 2025 Pitchers Festival of Creativity for our Use of Influencers in the Stanbic Bank Youth Banking campaign, Your Plug.",
        image: pitchers,
        imagemobile: Picbanner,
        author: "Philomina Akekudaga",
        date: "May 17, 2025",
        profile: Profile3,
    },
    {
        id: 9,
        category: "News",
        title: "Interactive Digital Wins the 2025 NINANI Premier League.",
        excerpt: `They say, "All work and no play makes Jack a dull boy." Stepping away from the daily office routine for sports and recreation gives teams a chance to recharge, bond, and return with renewed energy.`,
        image: ninani,
        imagemobile: ninani,
        author: "Philomina Akekudaga",
        date: "December 20, 2025",
        profile: Profile3,
    },

    {
        id: 12,
        category: "Insight",
        title: "When Is the Right Time to Run a PR Campaign After a Crisis?",
        excerpt: "Public relations has always been about shaping perception, but there is one reality every communications professional eventually learns.",
        image: Philothumb,
        author: "Philomina Akekudaga",
        date: "August 21, 2026",
        profile: Profile3,
    },

    {
        id: 11,
        category: "Insight",
        title: "Why Brands Need Cultural Intelligence",
        excerpt: "During an analysis meeting of one of the top 10 best super bowl ads, a couple of team members were dumbfounded at what they were watching.",
        image: Eyramthumb,
        author: "Eyram Kpodo",
        date: "August 20, 2026",
        profile: Profile4,
    },

    {
        id: 10,
        category: "Insight",
        title: "The Accidental Brand Campaign of the Year.",
        excerpt: "Let's be honest: if you've ever attended a Ghanaian funeral, wedding, naming ceremony or even just a random Sunday church service, you already know that Ghanaians do not play when it comes to dressing up.",
        image: fuguThumb,
        author: "Philomina Akekudaga",
        date: "May 4, 2026",
        profile: Profile3,
    },
];

// Sort posts newest-first for display (does not mutate the original array)
const sortedBlogPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

const latestBlog = sortedBlogPosts[0]; // The most recent blog post

const Blog = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    const postsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const searchInputRef = useRef(null);
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const activeCategory = searchParams.get("category") || "All";

    useEffect(() => {
        if (isSearchActive && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchActive]);

    const filteredPosts = sortedBlogPosts.filter(post => {
        const matchesCategory = activeCategory === "All" || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const displayFeatured = activeCategory === "All" && searchQuery === "" && filteredPosts.length > 0;
    const latestBlog = filteredPosts[0];
    const postsList = displayFeatured ? filteredPosts.slice(1) : filteredPosts;

    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPosts = postsList.slice(startIndex, endIndex);

    const totalPages = Math.ceil(postsList.length / postsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleReadMore = (id) => {
        navigate(`/blog/${id}`);
    };

    const handleCategorySelect = (category) => {
        if (category === "All") {
            setSearchParams({});
        } else {
            setSearchParams({ category });
        }
        setCurrentPage(1);
    };

    return (
        <div className="bg-[#FAFAFA] min-h-screen pt-32 pb-24 relative overflow-hidden">
            {/* Background Patterns */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <img
                    src={idPattern}
                    alt=""
                    className="absolute top-0 left-0 w-[40vw] max-w-[500px]  object-contain object-top object-left"
                />
                <img
                    src={mPattern}
                    alt=""
                    className="absolute top-[15%] right-[-10%] w-[50vw] max-w-[700px]  transform rotate-12"
                />
                <img
                    src={mPattern}
                    alt=""
                    className="absolute top-[50%] left-[-15%] w-[60vw] max-w-[800px]  transform -rotate-12"
                />
                <img
                    src={mPattern}
                    alt=""
                    className="absolute bottom-[-5%] right-[5%] w-[45vw] max-w-[600px]  transform rotate-6"
                />
            </div>

            <div className="relative z-10">
                {/* Categories / Tags Navigation */}
                <div className="w-full overflow-x-auto no-scrollbar">
                    <div className="w-max mx-auto px-4 flex justify-center items-center gap-6 md:gap-10 mb-14 text-[13px] font-semibold text-[#A32626]">
                        <span onClick={() => handleCategorySelect("All")} className={`cursor-pointer transition-colors ${activeCategory === "All" ? "text-black font-bold border-b-2 border-[#A32626]" : "hover:text-black"}`}>All</span>
                        <span onClick={() => handleCategorySelect("Insight")} className={`cursor-pointer transition-colors ${activeCategory === "Insight" ? "text-black font-bold border-b-2 border-[#A32626]" : "hover:text-black"}`}>Insights</span>
                        <span onClick={() => handleCategorySelect("News")} className={`cursor-pointer transition-colors ${activeCategory === "News" ? "text-black font-bold border-b-2 border-[#A32626]" : "hover:text-black"}`}>News</span>
                        <span onClick={() => handleCategorySelect("Award")} className={`cursor-pointer transition-colors ${activeCategory === "Award" ? "text-black font-bold border-b-2 border-[#A32626]" : "hover:text-black"}`}>Awards</span>
                        
                        <div className="relative flex items-center ml-2">
                            <div 
                                className={`flex items-center border ${isSearchActive ? 'border-[#A32626] w-[200px] px-3' : 'border-transparent w-[30px] px-1'} rounded-full transition-all duration-300 h-[32px] overflow-hidden`}
                            >
                                <button 
                                    onClick={() => !isSearchActive && setIsSearchActive(true)}
                                    className={`cursor-pointer hover:text-black transition-colors flex items-center shrink-0 ${isSearchActive ? 'text-gray-400' : ''}`}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                </button>
                                <input
                                    ref={searchInputRef}
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onBlur={() => setIsSearchActive(false)}
                                    placeholder="Search..."
                                    className={`ml-2 outline-none bg-transparent text-sm text-black w-full transition-opacity duration-300 ${isSearchActive ? 'opacity-100' : 'opacity-0'}`}
                                    disabled={!isSearchActive}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Top Featured Post */}
                {displayFeatured && latestBlog && (
                <div className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                    <div
                        onClick={() => handleReadMore(latestBlog.id)}
                        className="flex flex-col lg:flex-row bg-white rounded-[2rem] p-4 lg:p-5 shadow-[0_4px_20px_rgb(0,0,0,0.04)] cursor-pointer group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300 items-stretch"
                    >
                        {/* Left Content */}
                        <div className="lg:w-[45%] p-6 lg:px-12 lg:py-8 flex flex-col">
                            <span className="text-[#B3261E] font-bold text-[11px] tracking-wider uppercase mb-5">
                                {latestBlog.category}
                            </span>
                            <h2 className="text-[1.65rem] lg:text-[2rem] font-semibold text-[#333333] leading-[1.3] mb-8">
                                {latestBlog.title}
                            </h2>
                            <div className="mt-auto pt-6">
                                <p className="text-[#666666] text-[13px] mb-2">
                                    By {latestBlog.author}
                                </p>
                                <p className="text-[#999999] text-[13px] mb-10 lg:mb-14">
                                    {latestBlog.date}
                                </p>
                            </div>
                            {/* Carousel Dots */}
                            <div className="flex items-center gap-2 mt-auto">
                                <div className="w-[7px] h-[7px] rounded-full bg-[#B3261E]"></div>
                                <div className="w-[7px] h-[7px] rounded-full bg-gray-200"></div>
                                <div className="w-[7px] h-[7px] rounded-full bg-gray-200"></div>
                            </div>
                        </div>
                        {/* Right Image */}
                        <div className="lg:w-[55%] h-[300px] lg:h-[400px] overflow-hidden rounded-2xl">
                            <img
                                src={latestBlog.image}
                                alt={latestBlog.title}
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
                )}

                {/* Blog Posts Grid */}
                <div className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {currentPosts.map((post) => (
                            <div
                                key={post.id}
                                onClick={() => handleReadMore(post.id)}
                                className="bg-white rounded-[1.5rem] p-4 lg:p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 cursor-pointer group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col"
                            >
                                <div className="relative overflow-hidden aspect-[4/3] rounded-2xl mb-6">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex flex-col flex-1 px-1 pb-1">
                                    <span className="text-[#8B1A10] font-bold text-[12px] tracking-widest uppercase mb-4">
                                        {post.category}
                                    </span>
                                    <h3 className="text-[1.35rem] font-semibold text-[#333333] leading-[1.4] mb-8 line-clamp-3">
                                        {post.title}
                                    </h3>
                                    <div className="mt-auto">
                                        <p className="text-[#777777] text-[14px] mb-3">
                                            By {post.author}
                                        </p>
                                        <p className="text-[#999999] text-[14px]">
                                            {post.date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-6 mt-20">
                            {currentPage > 1 && (
                                <button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    className="flex items-center gap-2 px-8 py-3 rounded-lg font-medium bg-white text-[#A32626] shadow-sm hover:bg-gray-50 text-[16px] transition-colors duration-300"
                                >
                                    &larr; Previous Page
                                </button>
                            )}
                            <button
                                onClick={() => {
                                    if (currentPage < totalPages) handlePageChange(currentPage + 1);
                                }}
                                className={`flex items-center gap-2 px-8 py-3 rounded-lg font-medium text-white text-[16px] transition-colors duration-300 ${currentPage < totalPages ? 'bg-[#A32626] hover:bg-[#8A1A14]' : 'bg-gray-300 cursor-not-allowed'
                                    }`}
                                disabled={currentPage >= totalPages}
                            >
                                Next Page &rarr;
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blog;
