
import { z } from "zod";

import {
    createTRPCRouter,
    publicProcedure,
} from "@/server/api/trpc";
import { waitlist } from "@/server/db/schema";

export const emailRouter = createTRPCRouter({

    create: publicProcedure
        .input(z.object({ email: z.string().min(1) }))
        .mutation(async ({ ctx, input }) => {
            await ctx.db.insert(waitlist).values({
                email: input.email,
            });
        }),


    // getSecretMessage: protectedProcedure.query(() => {
    //     return "you can now see this secret message!";
    // }),
});
