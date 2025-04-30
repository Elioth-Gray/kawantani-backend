/*
  Warnings:

  - Added the required column `jenisKelamin` to the `Pengguna` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pengguna" ADD COLUMN     "jenisKelamin" INTEGER NOT NULL;
