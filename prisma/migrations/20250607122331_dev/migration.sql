/*
  Warnings:

  - You are about to drop the column `jenis_tugas` on the `HariPenanaman` table. All the data in the column will be lost.
  - You are about to alter the column `id_tanaman` on the `HariPenanaman` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(36)`.
  - You are about to alter the column `id_tanaman` on the `InstruksiTanaman` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(36)`.
  - The primary key for the `Tanaman` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id_tanaman` on the `Tanaman` table. The data in that column could be lost. The data in that column will be cast from `VarChar` to `VarChar(36)`.
  - You are about to alter the column `nama_tanaman` on the `Tanaman` table. The data in that column could be lost. The data in that column will be cast from `VarChar` to `VarChar(100)`.
  - You are about to alter the column `nama_latin` on the `Tanaman` table. The data in that column could be lost. The data in that column will be cast from `VarChar` to `VarChar(100)`.
  - You are about to drop the `HariTanamanPengguna` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TanamanPengguna` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TugasPenanaman` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TugasPenanamanPengguna` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `kategoriTanaman` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id_tanaman,hari_ke]` on the table `HariPenanaman` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `hari_ke` to the `HariPenanaman` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama_fase` to the `HariPenanaman` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "jenis_tugas" AS ENUM ('TUGAS_BIASA', 'PENGECEKAN_HARIAN', 'PERAWATAN_KHUSUS', 'PANEN');

-- CreateEnum
CREATE TYPE "fase_penanaman" AS ENUM ('PERSIAPAN', 'PENANAMAN', 'PERTUMBUHAN', 'PEMELIHARAAN', 'PRAPANEN', 'PANEN', 'PASCA_PANEN');

-- CreateEnum
CREATE TYPE "status_penanaman" AS ENUM ('AKTIF', 'SELESAI', 'DIBATALKAN', 'DITUNDA');

-- CreateEnum
CREATE TYPE "status_hari" AS ENUM ('BELUM_DIMULAI', 'SEDANG_BERJALAN', 'SELESAI', 'TERLEWAT');

-- CreateEnum
CREATE TYPE "tingkat_kesulitan" AS ENUM ('SANGAT_MUDAH', 'MUDAH', 'SEDANG', 'SULIT', 'SANGAT_SULIT');

-- DropForeignKey
ALTER TABLE "HariPenanaman" DROP CONSTRAINT "HariPenanaman_id_tanaman_fkey";

-- DropForeignKey
ALTER TABLE "HariTanamanPengguna" DROP CONSTRAINT "HariTanamanPengguna_id_tanaman_pengguna_fkey";

-- DropForeignKey
ALTER TABLE "InstruksiTanaman" DROP CONSTRAINT "InstruksiTanaman_id_tanaman_fkey";

-- DropForeignKey
ALTER TABLE "Tanaman" DROP CONSTRAINT "Tanaman_id_kategori_tanaman_fkey";

-- DropForeignKey
ALTER TABLE "TanamanPengguna" DROP CONSTRAINT "TanamanPengguna_id_pengguna_fkey";

-- DropForeignKey
ALTER TABLE "TanamanPengguna" DROP CONSTRAINT "TanamanPengguna_id_tanaman_fkey";

-- DropForeignKey
ALTER TABLE "TugasPenanaman" DROP CONSTRAINT "TugasPenanaman_id_hari_penanaman_fkey";

-- DropForeignKey
ALTER TABLE "TugasPenanamanPengguna" DROP CONSTRAINT "TugasPenanamanPengguna_id_hari_tanaman_pengguna_fkey";

-- AlterTable
ALTER TABLE "HariPenanaman" DROP COLUMN "jenis_tugas",
ADD COLUMN     "deskripsi_fase" TEXT,
ADD COLUMN     "hari_ke" INTEGER NOT NULL,
ADD COLUMN     "nama_fase" "fase_penanaman" NOT NULL,
ALTER COLUMN "id_tanaman" SET DATA TYPE VARCHAR(36);

-- AlterTable
ALTER TABLE "InstruksiTanaman" ADD COLUMN     "urutan" INTEGER NOT NULL DEFAULT 1,
ALTER COLUMN "id_tanaman" SET DATA TYPE VARCHAR(36);

-- AlterTable
ALTER TABLE "Tanaman" DROP CONSTRAINT "Tanaman_pkey",
ADD COLUMN     "gambar_tanaman" VARCHAR(255),
ADD COLUMN     "tingkat_kesulitan" "tingkat_kesulitan" NOT NULL DEFAULT 'MUDAH',
ALTER COLUMN "id_tanaman" SET DATA TYPE VARCHAR(36),
ALTER COLUMN "nama_tanaman" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "nama_latin" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "deskripsi_tanaman" SET DATA TYPE TEXT,
ADD CONSTRAINT "Tanaman_pkey" PRIMARY KEY ("id_tanaman");

-- DropTable
DROP TABLE "HariTanamanPengguna";

-- DropTable
DROP TABLE "TanamanPengguna";

-- DropTable
DROP TABLE "TugasPenanaman";

-- DropTable
DROP TABLE "TugasPenanamanPengguna";

-- DropTable
DROP TABLE "kategoriTanaman";

-- CreateTable
CREATE TABLE "KategoriTanaman" (
    "id_kategori_tanaman" SERIAL NOT NULL,
    "nama_kategori_tanaman" VARCHAR(100) NOT NULL,

    CONSTRAINT "KategoriTanaman_pkey" PRIMARY KEY ("id_kategori_tanaman")
);

-- CreateTable
CREATE TABLE "tugas_penanaman" (
    "id_tugas" SERIAL NOT NULL,
    "nama_tugas" VARCHAR(255) NOT NULL,
    "jenis_tugas" "jenis_tugas" NOT NULL,
    "estimasi_waktu" INTEGER,
    "id_hari_penanaman" INTEGER NOT NULL,

    CONSTRAINT "tugas_penanaman_pkey" PRIMARY KEY ("id_tugas")
);

-- CreateTable
CREATE TABLE "tanaman_pengguna" (
    "id_tanaman_pengguna" VARCHAR(36) NOT NULL,
    "nama_custom" VARCHAR(100),
    "tanggal_penanaman" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tanggal_target_panen" TIMESTAMP(3),
    "status_penanaman" "status_penanaman" NOT NULL DEFAULT 'AKTIF',
    "hari_ke_saat_ini" INTEGER NOT NULL DEFAULT 1,
    "progress_persen" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "catatan_umum" TEXT,
    "id_tanaman" VARCHAR(36) NOT NULL,
    "id_pengguna" VARCHAR(36) NOT NULL,

    CONSTRAINT "tanaman_pengguna_pkey" PRIMARY KEY ("id_tanaman_pengguna")
);

-- CreateTable
CREATE TABLE "hari_tanaman_pengguna" (
    "id_hari_tanaman_pengguna" SERIAL NOT NULL,
    "hari_ke" INTEGER NOT NULL,
    "tanggal_aktual" TIMESTAMP(3) NOT NULL,
    "fase_penanaman" "fase_penanaman" NOT NULL,
    "status_hari" "status_hari" NOT NULL DEFAULT 'BELUM_DIMULAI',
    "catatan_harian" TEXT,
    "total_tugas" INTEGER NOT NULL DEFAULT 0,
    "tugas_selesai" INTEGER NOT NULL DEFAULT 0,
    "progress_hari_persen" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "id_tanaman_pengguna" VARCHAR(36) NOT NULL,

    CONSTRAINT "hari_tanaman_pengguna_pkey" PRIMARY KEY ("id_hari_tanaman_pengguna")
);

-- CreateTable
CREATE TABLE "tugas_penanaman_pengguna" (
    "id_tugas_penanaman_pengguna" SERIAL NOT NULL,
    "nama_tugas" VARCHAR(255) NOT NULL,
    "deskripsi_tugas" TEXT,
    "jenis_tugas" "jenis_tugas" NOT NULL,
    "status_selesai" BOOLEAN NOT NULL DEFAULT false,
    "tanggal_selesai" TIMESTAMP(3),
    "durasi_pengerjaan" INTEGER,
    "id_hari_tanaman_pengguna" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tugas_penanaman_pengguna_pkey" PRIMARY KEY ("id_tugas_penanaman_pengguna")
);

-- CreateIndex
CREATE UNIQUE INDEX "hari_tanaman_pengguna_id_tanaman_pengguna_hari_ke_key" ON "hari_tanaman_pengguna"("id_tanaman_pengguna", "hari_ke");

-- CreateIndex
CREATE UNIQUE INDEX "HariPenanaman_id_tanaman_hari_ke_key" ON "HariPenanaman"("id_tanaman", "hari_ke");

-- AddForeignKey
ALTER TABLE "Tanaman" ADD CONSTRAINT "Tanaman_id_kategori_tanaman_fkey" FOREIGN KEY ("id_kategori_tanaman") REFERENCES "KategoriTanaman"("id_kategori_tanaman") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstruksiTanaman" ADD CONSTRAINT "InstruksiTanaman_id_tanaman_fkey" FOREIGN KEY ("id_tanaman") REFERENCES "Tanaman"("id_tanaman") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HariPenanaman" ADD CONSTRAINT "HariPenanaman_id_tanaman_fkey" FOREIGN KEY ("id_tanaman") REFERENCES "Tanaman"("id_tanaman") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tugas_penanaman" ADD CONSTRAINT "tugas_penanaman_id_hari_penanaman_fkey" FOREIGN KEY ("id_hari_penanaman") REFERENCES "HariPenanaman"("id_hari_penanaman") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tanaman_pengguna" ADD CONSTRAINT "tanaman_pengguna_id_tanaman_fkey" FOREIGN KEY ("id_tanaman") REFERENCES "Tanaman"("id_tanaman") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tanaman_pengguna" ADD CONSTRAINT "tanaman_pengguna_id_pengguna_fkey" FOREIGN KEY ("id_pengguna") REFERENCES "Pengguna"("id_pengguna") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hari_tanaman_pengguna" ADD CONSTRAINT "hari_tanaman_pengguna_id_tanaman_pengguna_fkey" FOREIGN KEY ("id_tanaman_pengguna") REFERENCES "tanaman_pengguna"("id_tanaman_pengguna") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tugas_penanaman_pengguna" ADD CONSTRAINT "tugas_penanaman_pengguna_id_hari_tanaman_pengguna_fkey" FOREIGN KEY ("id_hari_tanaman_pengguna") REFERENCES "hari_tanaman_pengguna"("id_hari_tanaman_pengguna") ON DELETE CASCADE ON UPDATE CASCADE;
