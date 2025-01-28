// import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"

export const userTable = sqliteTable('user',{
    id: integer().primaryKey({ autoIncrement: true }),
    username: text().notNull(),
    email: text().notNull().unique(),
    password: text().notNull()
})


export type InsertUser = typeof userTable.$inferInsert;
export type SelectUser = typeof userTable.$inferSelect;