/*
  Warnings:

  - You are about to drop the `books` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "books";

-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(225) NOT NULL,
    "type" VARCHAR(225) NOT NULL,
    "author" VARCHAR(225) NOT NULL,
    "topic" VARCHAR(225) NOT NULL,
    "publicationDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
