"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const blogPosts = [
  {
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends in web development and what they mean for developers.",
    date: "2024-03-15",
    category: "Development",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
    readTime: "5 min read"
  },
  {
    title: "Mastering UI Animation",
    excerpt: "A deep dive into creating smooth and meaningful UI animations.",
    date: "2024-03-10",
    category: "Design",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    readTime: "8 min read"
  },
  {
    title: "The Art of Travel Photography",
    excerpt: "Tips and tricks for capturing memorable moments during your travels.",
    date: "2024-03-05",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    readTime: "6 min read"
  }
];

export function BlogSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Blog
        </motion.h2>

        <div className="max-w-md mx-auto mb-12">
          <Input
            type="search"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:bg-card/70 transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">{post.category}</span>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <time className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString()}
                  </time>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}