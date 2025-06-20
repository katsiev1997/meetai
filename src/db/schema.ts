import * as t from 'drizzle-orm/pg-core';

export const users = t.pgTable('users', {
	id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
	name: t.varchar({ length: 255 }).notNull(),
	age: t.integer().notNull(),
	email: t.varchar({ length: 255 }).notNull().unique(),
});
