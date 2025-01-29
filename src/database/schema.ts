// import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"

export const userTable = sqliteTable('user',{
    id: integer().primaryKey({ autoIncrement: true }),
    username: text().notNull(),
    email: text().notNull().unique(),
    password: text().notNull()
})

export const postTable = sqliteTable('post',{ 
    id: integer().primaryKey({ autoIncrement: true }),
    title: text().notNull(),
    content: text().notNull(),
    userId: integer().notNull().references(() => userTable.id)
})


export type InsertUser = typeof userTable.$inferInsert;
export type SelectUser = typeof userTable.$inferSelect;

export type InsertPost = typeof postTable.$inferInsert;
export type SelectPost = typeof postTable.$inferSelect;