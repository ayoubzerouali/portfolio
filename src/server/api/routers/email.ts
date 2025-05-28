
import { z } from "zod";

import {
    createTRPCRouter,
    publicProcedure,
} from "@/server/api/trpc";
import { contact, newsletter } from "@/server/db/schema";
import { TRPCError } from "@trpc/server";

export const emailRouter = createTRPCRouter({

    createNewsletter: publicProcedure
        .input(z.object({ email: z.string().min(1) }))
        .mutation(async ({ ctx, input }) => {
            await ctx.db.insert(newsletter).values({
                email: input.email,
            });
        }),
    createContact: publicProcedure
        .input(z.object({
            email: z.string().min(1),
            fullname: z.string().min(1),
            subject: z.string().min(1),
            message: z.string().min(1)
        }))
        .mutation(async ({ ctx, input }) => {
            try {
                await ctx.db.insert(contact).values({
                    fullname: input.fullname,
                    email: input.email,
                    message: input.message,
                    subject: input.subject
                });

                return { success: true };
            } catch (dbError) {
                console.error('Database error:', dbError);

                // Check for duplicate email constraint violation
                // The exact error message depends on your database (PostgreSQL, MySQL, SQLite, etc.)
                const errorMessage = dbError instanceof Error ? dbError.message.toLowerCase() : '';

                if (errorMessage.includes('unique') ||
                    errorMessage.includes('duplicate') ||
                    errorMessage.includes('already exists') ||
                    errorMessage.includes('constraint')) {

                    throw new TRPCError({
                        code: 'CONFLICT',
                        message: 'DUPLICATE_EMAIL'
                    });
                }

                // For other database errors
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'DATABASE_ERROR'
                });
            }
        }),


    // getSecretMessage: protectedProcedure.query(() => {
    //     return "you can now see this secret message!";
    // }),
});
