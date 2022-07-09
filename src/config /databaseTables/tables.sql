CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT UNIQUE NOT NULL,
    "password" TEXT NOT NULL
);

CREATE TABLE "commitments" (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "userId" INTEGER NOT NULL REFERENCES "users"("id"),
    "type" TEXT NOT NULL,
    "place" TEXT NOT NULL,
    "startHour" TIME NOT NULL,
    "finishHour" TIME NOT NULL,
    "alarmHour" TIME NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "week" INTEGER NOT NULL,
    "day" INTEGER NOT NULL 
);

CREATE TABLE "participants" (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "commitmentId" INTEGER NOT NULL REFERENCES "commitments"("id"),
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL 
);