'use client' // Error boundaries must be Client Components

import { type Metadata } from 'next';
import { useEffect } from 'react'
import { motion } from "motion/react";
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
export const metadata: Metadata = {
    title: "Page Not Found",
    description: "Behinde every digital idea there is a fullstack developer",
};
export default function Error({
    error,
    //reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex items-center justify-center pt-20"
        >
            <div className="container-tight text-center px-4">
                <h1 className="text-9xl font-bold text-primary-500 mb-4">404</h1>
                <h2 className="text-3xl font-bold text-white mb-6">Page Not Found</h2>
                <p className="text-gray-400 max-w-md mx-auto mb-8">
                    The page you are looking for doesn&apos;t exist or has been moved.
                </p>
                <Link href="/" className="btn-primary inline-flex items-center">
                    <ArrowLeft size={16} className="mr-2" /> Back to Home
                </Link>
            </div>
        </motion.div>

    )
}
