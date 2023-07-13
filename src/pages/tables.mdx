export const description =
  'On this page, we’ll dive into tables - how to manage your data schmea.'

# Tables

SonicJs uses 2 of different Cloudflare products to persist data:

1. KV (Key-Value pair store)
1. D1 (A SQLite SQL database)

## Why 2 Datastores?

SonicJs is all about low latency data delivery. If the client is requesting a single record we use KV to retrieve it, since its the fastest way to deliver the content
to the client.

However, if the client is requests is anything other than a single record, for example:

1. Latest 10 blog posts
1. Blog post with related user data
1. Blog posts sorted and filterd

In these cases we use D1 (CloudFlare's SQLite product)

## Accessing D1 SQL Data

SonicJs uses <a target="_blank" href="https://orm.drizzle.team/docs/quick-start">Drizzle</a>, a popular open source ORM that lets you write plain
SQL or use the API if you prefer. Here are a couple of examples:

### API:
```js
const allUsers = await db.select().from(users);
```

### Plain SQL:
```js
  const { results } = await db.prepare("select * from users").all();
```

## Schema

SonicJs uses Drizzle for schema management. You can find the <a target="_blank" href="https://orm.drizzle.team/docs/sql-schema-declaration">full docs here</a>. 

The SonicJs schema can be found here: `/src/db/schema.ts`

This schema is essentially a boilerplate/example. It can be fully altered to suite your needs.

Here 
is an example of the schema definition for a users and posts tables along with the relationship between them:

```js
import {
  sqliteTable,
  text,
  integer
} from "drizzle-orm/sqlite-core";

import { relations } from "drizzle-orm";

export const auditSchema = {
  created_on: integer('created_on'),
  updated_on: integer('updated_on')
}

export const userSchema = {
  id: text("id").primaryKey(),
  name: text("name"),
  email: text("email"),
  password: text("password"),
  role: text("role").$type<"admin" | "user">(),
  created_on: integer('created_on'),
  updated_on: integer('updated_on')
}

export const users = sqliteTable("users", {...userSchema, ...auditSchema});

export const usersRelations = relations(users, ({ many }) => ({
  posts: many(posts),
}));

export const postsSchema = {
  id: text("id").primaryKey(),
  title: text("title"),
  body: text("body"),
  userId: text("user_id"),
}
export const posts = sqliteTable("posts", {...postsSchema, ...auditSchema});

export const postsRelations = relations(posts, ({ one }) => ({
  author: one(users, {
    fields: [posts.userId],
    references: [users.id],
  }),
}));
```

Note that we're using a standard set of audit fields for our tables so that we don't have to copy/paste the fields in the auditSchema object for every table. This is 
completely optional.