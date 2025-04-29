/*
  Warnings:

  - The primary key for the `Admin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Facilitator` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Pengguna` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Workshop` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[email_admin]` on the table `Admin` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email_facilitator]` on the table `Facilitator` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nomor_telepon_facilitator]` on the table `Facilitator` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email_pengguna]` on the table `Pengguna` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nomor_telepon_pengguna]` on the table `Pengguna` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nomor_tiket]` on the table `WorkshopTerdaftar` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Artikel" DROP CONSTRAINT "Artikel_id_pengguna_fkey";

-- DropForeignKey
ALTER TABLE "Artikel" DROP CONSTRAINT "Artikel_id_verifikator_fkey";

-- DropForeignKey
ALTER TABLE "ArtikelDisimpan" DROP CONSTRAINT "ArtikelDisimpan_id_pengguna_fkey";

-- DropForeignKey
ALTER TABLE "ArtikelDisukai" DROP CONSTRAINT "ArtikelDisukai_id_pengguna_fkey";

-- DropForeignKey
ALTER TABLE "KomentarArtikel" DROP CONSTRAINT "KomentarArtikel_id_pengguna_fkey";

-- DropForeignKey
ALTER TABLE "TanamanPengguna" DROP CONSTRAINT "TanamanPengguna_id_pengguna_fkey";

-- DropForeignKey
ALTER TABLE "Workshop" DROP CONSTRAINT "Workshop_id_facilitator_fkey";

-- DropForeignKey
ALTER TABLE "Workshop" DROP CONSTRAINT "Workshop_id_verifikator_fkey";

-- DropForeignKey
ALTER TABLE "WorkshopTerdaftar" DROP CONSTRAINT "WorkshopTerdaftar_id_pengguna_fkey";

-- DropForeignKey
ALTER TABLE "WorkshopTerdaftar" DROP CONSTRAINT "WorkshopTerdaftar_id_workshop_fkey";

-- AlterTable
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_pkey",
ALTER COLUMN "id_admin" DROP DEFAULT,
ALTER COLUMN "id_admin" SET DATA TYPE TEXT,
ADD CONSTRAINT "Admin_pkey" PRIMARY KEY ("id_admin");
DROP SEQUENCE "Admin_id_admin_seq";

-- AlterTable
ALTER TABLE "Artikel" ALTER COLUMN "id_pengguna" SET DATA TYPE TEXT,
ALTER COLUMN "id_verifikator" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "ArtikelDisimpan" ALTER COLUMN "id_pengguna" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "ArtikelDisukai" ALTER COLUMN "id_pengguna" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Facilitator" DROP CONSTRAINT "Facilitator_pkey",
ALTER COLUMN "id_facilitator" DROP DEFAULT,
ALTER COLUMN "id_facilitator" SET DATA TYPE TEXT,
ADD CONSTRAINT "Facilitator_pkey" PRIMARY KEY ("id_facilitator");
DROP SEQUENCE "Facilitator_id_facilitator_seq";

-- AlterTable
ALTER TABLE "KomentarArtikel" ALTER COLUMN "id_pengguna" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Pengguna" DROP CONSTRAINT "Pengguna_pkey",
ALTER COLUMN "id_pengguna" DROP DEFAULT,
ALTER COLUMN "id_pengguna" SET DATA TYPE TEXT,
ADD CONSTRAINT "Pengguna_pkey" PRIMARY KEY ("id_pengguna");
DROP SEQUENCE "Pengguna_id_pengguna_seq";

-- AlterTable
ALTER TABLE "TanamanPengguna" ALTER COLUMN "id_pengguna" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Workshop" DROP CONSTRAINT "Workshop_pkey",
ALTER COLUMN "id_workshop" DROP DEFAULT,
ALTER COLUMN "id_workshop" SET DATA TYPE TEXT,
ALTER COLUMN "id_facilitator" SET DATA TYPE TEXT,
ALTER COLUMN "id_verifikator" SET DATA TYPE TEXT,
ADD CONSTRAINT "Workshop_pkey" PRIMARY KEY ("id_workshop");
DROP SEQUENCE "Workshop_id_workshop_seq";

-- AlterTable
ALTER TABLE "WorkshopTerdaftar" ALTER COLUMN "id_pengguna" SET DATA TYPE TEXT,
ALTER COLUMN "id_workshop" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_admin_key" ON "Admin"("email_admin");

-- CreateIndex
CREATE UNIQUE INDEX "Facilitator_email_facilitator_key" ON "Facilitator"("email_facilitator");

-- CreateIndex
CREATE UNIQUE INDEX "Facilitator_nomor_telepon_facilitator_key" ON "Facilitator"("nomor_telepon_facilitator");

-- CreateIndex
CREATE UNIQUE INDEX "Pengguna_email_pengguna_key" ON "Pengguna"("email_pengguna");

-- CreateIndex
CREATE UNIQUE INDEX "Pengguna_nomor_telepon_pengguna_key" ON "Pengguna"("nomor_telepon_pengguna");

-- CreateIndex
CREATE UNIQUE INDEX "WorkshopTerdaftar_nomor_tiket_key" ON "WorkshopTerdaftar"("nomor_tiket");

-- AddForeignKey
ALTER TABLE "Artikel" ADD CONSTRAINT "Artikel_id_pengguna_fkey" FOREIGN KEY ("id_pengguna") REFERENCES "Pengguna"("id_pengguna") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Artikel" ADD CONSTRAINT "Artikel_id_verifikator_fkey" FOREIGN KEY ("id_verifikator") REFERENCES "Admin"("id_admin") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtikelDisimpan" ADD CONSTRAINT "ArtikelDisimpan_id_pengguna_fkey" FOREIGN KEY ("id_pengguna") REFERENCES "Pengguna"("id_pengguna") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtikelDisukai" ADD CONSTRAINT "ArtikelDisukai_id_pengguna_fkey" FOREIGN KEY ("id_pengguna") REFERENCES "Pengguna"("id_pengguna") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KomentarArtikel" ADD CONSTRAINT "KomentarArtikel_id_pengguna_fkey" FOREIGN KEY ("id_pengguna") REFERENCES "Pengguna"("id_pengguna") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workshop" ADD CONSTRAINT "Workshop_id_facilitator_fkey" FOREIGN KEY ("id_facilitator") REFERENCES "Facilitator"("id_facilitator") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workshop" ADD CONSTRAINT "Workshop_id_verifikator_fkey" FOREIGN KEY ("id_verifikator") REFERENCES "Admin"("id_admin") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkshopTerdaftar" ADD CONSTRAINT "WorkshopTerdaftar_id_pengguna_fkey" FOREIGN KEY ("id_pengguna") REFERENCES "Pengguna"("id_pengguna") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkshopTerdaftar" ADD CONSTRAINT "WorkshopTerdaftar_id_workshop_fkey" FOREIGN KEY ("id_workshop") REFERENCES "Workshop"("id_workshop") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TanamanPengguna" ADD CONSTRAINT "TanamanPengguna_id_pengguna_fkey" FOREIGN KEY ("id_pengguna") REFERENCES "Pengguna"("id_pengguna") ON DELETE RESTRICT ON UPDATE CASCADE;
