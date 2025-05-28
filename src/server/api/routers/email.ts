
import { z } from "zod";

import {
    createTRPCRouter,
    publicProcedure,
} from "@/server/api/trpc";
import { newsletter } from "@/server/db/schema";

export const emailRouter = createTRPCRouter({

    create: publicProcedure
        .input(z.object({ email: z.string().min(1) }))
        .mutation(async ({ ctx, input }) => {
            await ctx.db.insert(newsletter).values({
                email: input.email,
            });
        }),


    // getSecretMessage: protectedProcedure.query(() => {
    //     return "you can now see this secret message!";
    // }),
});
