import { db } from "../../database";
import { asc, count, eq, getTableColumns, gt, sql } from "drizzle-orm";
import { type SelectPost,postTable } from "../../database/schema";

export async function getPosts(): Promise<
    Array<{
        id: number,
        title: string,
        content: string,
        userId: number
    }>
>{
    return db.select().from(postTable).orderBy(asc(postTable.id))
}