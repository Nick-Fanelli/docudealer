/*
  Warnings:

  - Added the required column `url` to the `Dealership` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Dealership" ADD COLUMN     "dealerId" TEXT,
ADD COLUMN     "url" TEXT NOT NULL;
