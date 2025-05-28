"use server"

import { api } from "@/trpc/server"
export async function createContact(formdata:
    {
        email: string,
        fullname: string,
        subject: string,
        message: string
    }) {

    try {

        const { email, fullname, subject, message } = formdata
        await api.email.createContact({ email, fullname, message, subject })
        return { success: true, status: 200, message: 'Contact created successfully' }
    } catch (error) {

        console.error('Error in createContact:', error)
        return {
            success: false,
            status: error instanceof Error ? 500 : 429,
            message: error instanceof Error ? error.message : 'Unknown error'
        }
    }
}
