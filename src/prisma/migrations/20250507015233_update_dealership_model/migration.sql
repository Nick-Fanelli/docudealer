/*
  Warnings:

  - You are about to drop the column `dealerId` on the `Dealership` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Dealership` table. All the data in the column will be lost.
  - Added the required column `licenseNumber` to the `Dealership` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stateLicensed` to the `Dealership` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zipCode` to the `Dealership` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Dealership" DROP COLUMN "dealerId",
DROP COLUMN "url",
ADD COLUMN     "licenseNumber" TEXT NOT NULL,
ADD COLUMN     "stateLicensed" TEXT NOT NULL,
ADD COLUMN     "zipCode" TEXT NOT NULL;
