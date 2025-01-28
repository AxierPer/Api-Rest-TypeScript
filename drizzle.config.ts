import { AUTH_TOKEN,URL } from "./src/utils/config.utils.ts";
import { defineConfig } from "drizzle-kit";

function validateCredentials(url: string, token: string){
    if (token === 'YOUR AUTH_TOKEN'){
        throw new Error("Missing TURSO_AUTH_TOKEN. Please configure it in the environment or utils file.");
    };
    
    if (url === 'YOUR URL'){
        throw new Error("Missing TURSO_CONNECTION_URL. Please configure it in the environment or utils file.");
    };
}

validateCredentials(URL,AUTH_TOKEN)

export default defineConfig({
    schema: './src/database/schema.ts',
    out: './migrations',
    dialect: 'turso',
    dbCredentials: {
        url: URL,
        authToken: AUTH_TOKEN,
    }
})