CREATE TABLE "users" (
	"id" serial primary key,
	"name" varchar(80) not null,
	"password" varchar(80) not null
);

INSERT INTO "users" ("name", "password")
VALUES ('Adam', 'Adam'),
('Sean', 'Sean');

CREATE TABLE "messages" (
	"id" serial primary key,
	"bar_id" integer not null,
	"user_id" integer not null
	"timestamp" timestamp,
	"message" varchar(80) not null
);

INSERT INTO "messages" ("bar_id", "user_id", "timestamp", "message")
VALUES ('1', '1', '2019-8-02 10:23:54', 'I had a great time here');

INSERT INTO "messages" ("bar_id", "user_id", "timestamp", "message")
VALUES ('2', '1', '2019-8-04 11:23:54', 'I had a horrible time here'),
('1', '2', '2019-8-02 10:23:54', 'Adam had a great time here'),
('2', '2', '2019-8-02 10:23:54', 'Adam had a terrible time here');

SELECT "users"."name" as "users_name", 
"messages"."message", "messages"."timestamp", "bars"."name" 
FROM "users" JOIN "messages" ON "users"."id" = "messages"."user_id" 
JOIN "bars" ON "bars"."id" = "messages"."bar_id" ORDER BY "users_name";

CREATE TABLE "bars" (
	"id" serial primary key,
	"name" varchar(80) not null,
	"address" varchar(120) not null,
	"notes" varchar(120) not null,
	"phone" varchar(12),
	"image_url" varchar(240)
);
INSERT INTO "bars" ("name", "address", "notes", "phone", "image_url")
VALUES ('Bierstube', '123 Oakdale', '$5 Pint glasses', '651-555-6969', 'https://cdn.beeradvocate.com/im/c_beer_image.gif')

INSERT INTO "bars" ("name", "address", "notes", "phone", "image_url")
VALUES ('Nuemanns', '123 North St. Paul', '$3.00 Hamms', '651-555-6999', 'https://cdn.beeradvocate.com/im/c_beer_image.gif')
