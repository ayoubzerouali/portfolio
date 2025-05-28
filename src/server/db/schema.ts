// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { index, pgTableCreator } from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `${name}`);

export const newsletter = createTable(
    "newsletter",
    (d) => ({
        id: d.integer().primaryKey().generatedByDefaultAsIdentity(),
        email: d.varchar({ length: 256 }).notNull().unique(),
        createdAt: d
            .timestamp({ withTimezone: true })
            .default(sql`CURRENT_TIMESTAMP`)
            .notNull(),
        updatedAt: d.timestamp({ withTimezone: true }).$onUpdate(() => new Date()),
    }),
    (t) => [index("name_idx").on(t.email)]
);

export const contact = createTable(
    "contact",
    (d) => ({
        id: d.integer().primaryKey().generatedByDefaultAsIdentity(),
        fullname: d.varchar({ length: 256 }).notNull(),
        email: d.varchar({ length: 256 }).notNull().unique(),
        subject: d.varchar({ length: 256 }).notNull(),
        message: d.text().notNull(),
        createdAt: d
            .timestamp({ withTimezone: true })
            .default(sql`CURRENT_TIMESTAMP`)
            .notNull(),
        updatedAt: d.timestamp({ withTimezone: true }).$onUpdate(() => new Date()),
    }),
    (t) => [index("email_idx").on(t.email)]
);
