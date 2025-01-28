import { db } from "..";
import { type InsertUser, userTable } from "../schema";

export async function createUser(data: InsertUser){
    await db.insert(userTable).values(data);
    return "User successfully created!"
}