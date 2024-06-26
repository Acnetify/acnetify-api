import "dotenv/config"
import { cleanEnv, port, url, str } from "envalid"

export const env = cleanEnv(process.env, {
    PORT: port(),
    FRONTEND_URL: url(),
    GOOGLE_CLOUD_PLATFORM_PROJECT_ID: str(),
    JWT_SECRET: str(),
    GCP_KEY_FILE_PATH: str(),
})