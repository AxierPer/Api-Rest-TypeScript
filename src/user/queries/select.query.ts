import { db } from "../../database";
import { asc, count, eq, getTableColumns, gt, sql } from "drizzle-orm";
import { type SelectUser,userTable } from "../../database/schema";

export async function getUserByEmail(email: SelectUser['email']): Promise< 
    Array<{
        id: number,
        username: string,
        email: string,
        password: string
    }> 
>{
    return db.select().from(userTable).where(eq(userTable.email, email))
}
