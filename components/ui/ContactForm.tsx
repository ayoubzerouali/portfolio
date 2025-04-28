"use client"
import { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');

        // Simulate API call
        try {
            // In a real application, you would send the form data to your backend
            //await new Promise(resolve => setTimeout(resolve, 1000));
            const res = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (!res.ok) {
                throw new Error(
                    res.status === 429
                        ? 'Rate limit exceeded, please wait a minute and try again.'
                        : 'There was an error sending your message. Please try again.'
                )
            }


            setSubmitSuccess(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.log(error);
            setSubmitError('There was an error sending your message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="glass-card p-6 md:p-8">
            {submitSuccess ? (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-6"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 text-blue-500 mb-4">
                        <Send size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-gray-400 mb-6">
                        Thank you for reaching out. I&pos;ll get back to you as soon as possible.
                    </p>
                    <button
                        onClick={() => setSubmitSuccess(false)}
                        className="btn-primary"
                    >
                        Send Another Message
                    </button>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full rounded-md  border border-gray-700 px-4 py-2 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full rounded-md border border-gray-700 px-4 py-2  placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full rounded-md  border border-gray-700 px-4 py-2 placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                            placeholder="Project Inquiry"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="w-full rounded-md border border-gray-700 px-4 py-2  placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none resize-none"
                            placeholder="Tell me about your project or inquiry..."
                        />
                    </div>

                    {submitError && (
                        <div className="text-red-500 mb-4 text-sm">
                            {submitError}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full flex items-center justify-center"
                    >
                        {isSubmitting ? (
                            <span className="flex items-center">
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </span>
                        ) : (
                            <span className="flex items-center">
                                Send Message <Send size={16} className="ml-2" />
                            </span>
                        )}
                    </button>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
