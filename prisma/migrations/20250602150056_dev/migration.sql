/*
  Warnings:

  - Made the column `avatar` on table `Admin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `avatar` on table `Facilitator` required. This step will fail if there are existing NULL values in that column.
  - Made the column `avatar` on table `Pengguna` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Admin" ALTER COLUMN "avatar" SET NOT NULL;

-- AlterTable
ALTER TABLE "Facilitator" ALTER COLUMN "avatar" SET NOT NULL;

-- AlterTable
ALTER TABLE "Pengguna" ALTER COLUMN "avatar" SET NOT NULL;
