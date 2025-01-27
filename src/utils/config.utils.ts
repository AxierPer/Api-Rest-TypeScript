import { fileURLToPath } from "bun";
import { config } from "dotenv";
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

config({ path: resolve(__dirname, '../../.env') })

export const {
    AUTH_TOKEN = "YOUR AUTH_TOKEN"
} = process.env

export const {
    SYNC_URL = "YOUR SYNC_URL"
} = process.env

export const {
    URL = "YOUR URL"
} = process.env