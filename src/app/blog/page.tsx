
"use client"
import { useState } from 'react';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';
import BlogCard from '@/components/ui/BlogCard';
import { blogPosts } from '@/data/blog';

const BlogPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    // Get all unique tags from blog posts
    const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

    // Filter blog posts based on search term and selected tag
    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = searchTerm === '' ||
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesTag = selectedTag === null || post.tags.includes(selectedTag);

        return matchesSearch && matchesTag;
    });

    return (
        <>


            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Blog Header */}
                <section className="pt-32 pb-16">
                    <div className="container-wide">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 ">Blog & Articles</h1>
                            <p className="text-gray-400 max-w-3xl mx-auto mb-12">
                                Insights, tutorials, and thoughts about web development, software engineering,
                                and my journey as a developer.
                            </p>

                            {/* Search */}
                            <div className="max-w-md mx-auto mb-12">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search articles..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full rounded-md bg-gray-800 border border-gray-700 pl-10 pr-4 py-2  placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                                    />
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                <button
                                    onClick={() => setSelectedTag(null)}
                                    className={`px-4 py-2 rounded-md transition-all cursor-pointer ${selectedTag === null
                                        ? 'bg-blue-800 '
                                        : 'bg-gray-800 text-gray-300 hover:bg-blue-700/60'
                                        }`}
                                >
                                    All
                                </button>
                                {allTags.map((tag, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedTag(tag)}
                                        className={`px-4 py-2 rounded-md transition-all cursor-pointer ${selectedTag === tag
                                            ? 'bg-blue-800 '
                                            : 'bg-gray-800 text-gray-300 hover:bg-blue-700/60'
                                            }`}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </motion.div>

                        {/* Blog Posts Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post, index) => (
                                <BlogCard key={post.id} post={post} index={index} />
                            ))}
                        </div>

                        {filteredPosts.length === 0 && (
                            <div className="text-center py-16">
                                <p className="text-gray-400">No articles found matching your search criteria.</p>
                            </div>
                        )}
                    </div>
                </section>
            </motion.div>
        </>
    );
};

export default BlogPage;

