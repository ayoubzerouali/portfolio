//"use client"
//import Image from "next/image";
//import { motion } from "motion/react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
export default function Home() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <BlogSection />
            <ContactSection />
        </>
    );
}
