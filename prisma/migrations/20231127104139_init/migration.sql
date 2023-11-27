/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Post";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "leilaoId" TEXT NOT NULL,
    "lanceId" TEXT NOT NULL,
    CONSTRAINT "Usuario_leilaoId_fkey" FOREIGN KEY ("leilaoId") REFERENCES "Leilao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Usuario_lanceId_fkey" FOREIGN KEY ("lanceId") REFERENCES "Lance" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Leilao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "produto" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "datalimete" DATETIME NOT NULL,
    "listaLances" TEXT NOT NULL,
    "lanceId" TEXT NOT NULL,
    CONSTRAINT "Leilao_lanceId_fkey" FOREIGN KEY ("lanceId") REFERENCES "Lance" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Lance" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "valor" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Job" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "FecharLeilao" REAL NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
