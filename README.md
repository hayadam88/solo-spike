This is my solo project spike.

All it is is a mock representation of what my activity feed is going to look like on the 
bottom of a specific bar's page. This mockup is getting the information from a database a junction table between three tables. I focused on this aspect for my spike, because it was what was giving me the most anxiety going into my project.

The three tables I had in my database were "users", "messages", and "bars". I needed information from all of them to display in my feed. 

The information I needed from "users" was "name" and "id"

The information I needed from "bars" was "name".

The information I needed from "messages" was "message", and "timestamp".

To select these values from these tables I used the following SQL text:

SELECT "users"."name" as "users_name", "messages"."message", "messages"."timestamp", "bars"."name" FROM "users" JOIN "messages" ON "users"."id" = "messages"."user_id" JOIN "bars" ON "bars"."id" = "messages"."bar_id" ORDER BY "users_name";

