/*
  Warnings:

  - The `status_pembayaran` column on the `WorkshopTerdaftar` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "WorkshopTerdaftar" DROP COLUMN "status_pembayaran",
ADD COLUMN     "status_pembayaran" BOOLEAN NOT NULL DEFAULT false;
