-- CreateTable
CREATE TABLE "Pet" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(225) NOT NULL,
    "age" INTEGER NOT NULL,
    "type" VARCHAR(225) NOT NULL,
    "breed" VARCHAR(225) NOT NULL,
    "microchip" BOOLEAN NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);