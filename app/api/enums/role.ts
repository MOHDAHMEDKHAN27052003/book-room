// db/schema/enums.ts
import { pgEnum } from "drizzle-orm/pg-core";

// User role enum
export const role = pgEnum("user_role", ["admin", "guest", "owner"]);