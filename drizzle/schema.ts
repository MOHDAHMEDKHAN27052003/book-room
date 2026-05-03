// db/schema/users.ts
import { role } from "@/app/api/enums/role";
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),

  name: text("name").notNull(),

  email: text("email").notNull().unique(),

  image: text("image"), // profile image URL

  password: text("password").notNull(), // store hashed password

  role: role("role").default("guest").notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),

  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull(),
});