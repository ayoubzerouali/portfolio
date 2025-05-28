
import { z } from "zod";

import {
    createTRPCRouter,
    publicProcedure,
} from "@/server/api/trpc";
import { contact, newsletter } from "@/server/db/schema";

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
            await ctx.db.insert(contact).values({
                fullname: input.fullname,
                email: input.email,
                message: input.message,
                subject: input.subject
            });
        }),


    // getSecretMessage: protectedProcedure.query(() => {
    //     return "you can now see this secret message!";
    // }),
});
