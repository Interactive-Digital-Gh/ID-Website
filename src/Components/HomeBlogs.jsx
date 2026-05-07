import React from 'react';
import { useNavigate } from "react-router-dom";
import { blogPosts } from "../Pages/Blog";

const HomeBlogs = () => {
    const navigate = useNavigate();

    // Function to navigate to BlogDetail page
    const handleReadMore = (id) => {
        navigate(`/blog/${id}`);
    };

    // Sort newest-first and take the 4 most recent posts
    const recentPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 4);

    return (
        <div className="w-full flex justify-center py-10 bg-[#F7F8F9]">
            <div className="lg:w-[1120px] px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {recentPosts.map((post) => (
                    <div
                        key={post.id}
                        onClick={() => handleReadMore(post.id)}
                        className="bg-white cursor-pointer rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:-translate-y-1"
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-[200px] object-cover transform transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="p-4 flex-1">
                            <h3 className="font-bold text-lg mb-2 text-gray-800 line-clamp-2">{post.title}</h3>
                            <p className="text-sm text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                        </div>
                        <div className="flex items-center justify-between px-4 pb-4">
                            <div className="flex items-center">
                                <img
                                    src={post.profile}
                                    alt={post.author}
                                    className="w-10 h-10 rounded-full object-cover mr-3"
                                />
                                <div>
                                    <p className="font-semibold text-gray-800 text-sm">{post.author}</p>
                                    <p className="text-gray-500 text-[11px]">{post.date}</p>
                                </div>
                            </div>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleReadMore(post.id);
                                }}
                                className="text-red-500 font-semibold hover:text-red-700 text-sm"
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeBlogs;
