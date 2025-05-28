"use server"

import { api } from "@/trpc/server"

const rateLimitMap = new Map<string, number[]>();
export async function createContact(formdata: {
    email: string,
    fullname: string,
    subject: string,
    message: string
}) {
    try {
        const { email, fullname, subject, message } = formdata;

        // Simple rate limiting: max 3 requests per minute per email
        const now = Date.now();
        const userRequests = rateLimitMap.get(email) ?? [];
        const recentRequests = userRequests.filter(time => now - time < 60000); // Last minute

        if (recentRequests.length >= 3) {
            return {
                success: false,
                error: 'RATE_LIMIT',
                message: 'Too many requests. Please wait a minute and try again.'
            };
        }

        // Update rate limit tracking
        recentRequests.push(now);
        rateLimitMap.set(email, recentRequests);

        await api.email.createContact({ email, fullname, message, subject });

        return {
            success: true,
            message: 'Message sent successfully!'
        };

    } catch (error) {
        if (error instanceof Error) {
            // Handle duplicate email
            if (error.message.includes('DUPLICATE_EMAIL')) {
                return {
                    success: false,
                    error: 'DUPLICATE_EMAIL',
                    message: 'You have already submitted a contact form with this email address.'
                };
            }

            // Handle other database errors
            if (error.message.includes('DATABASE_ERROR')) {
                return {
                    success: false,
                    error: 'DATABASE_ERROR',
                    message: 'There was a database error. Please try again later.'
                };
            }
        }

        // Default error
        return {
            success: false,
            error: 'SERVER_ERROR',
            message: 'There was an error sending your message. Please try again.'
        };
    }
}
