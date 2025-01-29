import { db } from "../../database";
import { type InsertUser, userTable } from "../../database/schema";

export async function createUser(data: InsertUser){
    await db.insert(userTable).values(data);
    return "User successfully created!"
}