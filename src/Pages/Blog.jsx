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
import Val from "../assets/blog/val.jpeg";

import blogbanner from "../assets/blog/blogbanner.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export const blogPosts = [



    {
        id: 1,
        title: "The Audience Most Marketing Teams Forget to Woo on Valentine's Day.",
        excerpt: `As soon as the January "dryness" starts to fade, the month of February swoops in, bringing with it a season of love. Walk through Makola or scroll through social media, and you'll see a relentless wave of red and white.`,
        image: Val,
        author: "Philomina Akekudaga",
        date: "February 14, 2026",
        profile: Profile3,
    },

    {
        id: 2,
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
        title: "Interactive Digital Wins the 2025 NINANI Premier League.",
        excerpt: `They say, "All work and no play makes Jack a dull boy." Stepping away from the daily office routine for sports and recreation gives teams a chance to recharge, bond, and return with renewed energy.`,
        image: ninani,
        imagemobile: ninani,
        author: "Philomina Akekudaga",
        date: "December 20, 2025",
        profile: Profile3,
    },

     {
        id: 10,
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
    const navigate = useNavigate();

    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPosts = sortedBlogPosts.slice(startIndex, endIndex);

    const totalPages = Math.ceil(sortedBlogPosts.length / postsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleReadMore = (id) => {
        navigate(`/blog/${id}`);
    };

    return (
        <div className="overflow-hidden bg-[#F7F8F9]">

            {/* Blog Banner */}
            <div className="relative h-[400px] overflow-hidden">
                <img
                    src={blogbanner}
                    alt="Blog banner"
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-transparent flex items-end pb-14 justify-center">
                    <h2 className="text-5xl font-bold text-white text-center tracking-wide drop-shadow-lg">
                        Latest News
                    </h2>
                </div>
            </div>

            {/* Search + Featured Latest Blog */}
            <div className="w-full max-w-[1140px] mx-auto px-4 pt-12 pb-4">
                {/* Search */}
                <div className="mb-8">
                    <input
                        type="text"
                        placeholder="Search articles..."
                        className="w-full max-w-sm bg-white h-[48px] px-4 rounded-xl shadow-sm border border-gray-200 outline-none focus:ring-2 focus:ring-red-400 transition"
                    />
                </div>

                {/* Featured Latest Post */}
                <div
                    onClick={() => handleReadMore(latestBlog.id)}
                    className="w-full flex flex-col lg:flex-row bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
                >
                    <div className="lg:w-[55%] overflow-hidden">
                        <img
                            src={latestBlog.image}
                            alt={latestBlog.title}
                            loading="lazy"
                            className="w-full h-[280px] lg:h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="lg:w-[45%] p-8 flex flex-col justify-center gap-5">
                        <span className="text-xs text-red-500 font-bold uppercase tracking-widest">
                            Featured
                        </span>
                        <h2 className="text-2xl font-bold text-gray-900 line-clamp-3 leading-snug">
                            {latestBlog.title}
                        </h2>
                        <p className="text-gray-500 leading-relaxed line-clamp-4 text-sm">
                            {latestBlog.excerpt}
                        </p>
                        <div className="flex items-center gap-3">
                            <img
                                src={latestBlog.profile}
                                alt={latestBlog.author}
                                loading="lazy"
                                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                            />
                            <div>
                                <p className="font-semibold text-gray-800 text-sm">{latestBlog.author}</p>
                                <p className="text-gray-400 text-xs">{latestBlog.date}</p>
                            </div>
                        </div>
                        <div>
                            <button
                                onClick={() => handleReadMore(latestBlog.id)}
                                className="inline-flex items-center gap-1 text-red-500 font-semibold hover:text-red-700 text-sm transition-colors"
                            >
                                Read More &rarr;
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="w-full max-w-[1140px] mx-auto px-4 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentPosts.map((post) => (
                        <div
                            key={post.id}
                            onClick={() => handleReadMore(post.id)}
                            className="bg-white cursor-pointer rounded-2xl shadow-md overflow-hidden flex flex-col group hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-[220px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-5 flex-1 flex flex-col">
                                <h3 className="font-bold text-base mb-2 text-gray-900 line-clamp-2 leading-snug">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed flex-1">
                                    {post.excerpt}
                                </p>
                            </div>
                            <div className="flex items-center justify-between px-5 pb-5 pt-2 border-t border-gray-100 mt-auto">
                                <div className="flex items-center gap-2">
                                    <img
                                        src={post.profile}
                                        alt={post.author}
                                        className="w-9 h-9 rounded-full object-cover flex-shrink-0"
                                    />
                                    <div>
                                        <p className="font-semibold text-gray-800 text-xs">{post.author}</p>
                                        <p className="text-gray-400 text-[11px]">{post.date}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleReadMore(post.id)}
                                    className="text-red-500 font-semibold hover:text-red-700 text-sm transition-colors"
                                >
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex gap-2 mt-10 justify-center">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`w-10 h-10 rounded-full font-semibold text-sm transition-colors duration-200 ${
                                currentPage === index + 1
                                    ? "bg-red-500 text-white shadow"
                                    : "bg-white text-gray-600 hover:bg-gray-100 shadow-sm"
                            }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
