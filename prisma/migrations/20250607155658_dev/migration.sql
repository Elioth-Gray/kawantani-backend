/*
  Warnings:

  - The `tingkat_kesulitan` column on the `Tanaman` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `hari_tanaman_pengguna` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tanaman_pengguna` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tugas_penanaman` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tugas_penanaman_pengguna` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `nama_fase` on the `HariPenanaman` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "JenisTugas" AS ENUM ('TUGAS_BIASA', 'PENGECEKAN_HARIAN', 'PERAWATAN_KHUSUS', 'PANEN');

-- CreateEnum
CREATE TYPE "FasePenanaman" AS ENUM ('PERSIAPAN', 'PENANAMAN', 'PERTUMBUHAN', 'PEMELIHARAAN', 'PRAPANEN', 'PANEN', 'PASCA_PANEN');

-- CreateEnum
CREATE TYPE "StatusPenanaman" AS ENUM ('AKTIF', 'SELESAI', 'DIBATALKAN', 'DITUNDA');

-- CreateEnum
CREATE TYPE "StatusHari" AS ENUM ('BELUM_DIMULAI', 'SEDANG_BERJALAN', 'SELESAI', 'TERLEWAT');

-- CreateEnum
CREATE TYPE "TingkatKesulitan" AS ENUM ('SANGAT_MUDAH', 'MUDAH', 'SEDANG', 'SULIT', 'SANGAT_SULIT');

-- DropForeignKey
ALTER TABLE "hari_tanaman_pengguna" DROP CONSTRAINT "hari_tanaman_pengguna_id_tanaman_pengguna_fkey";

-- DropForeignKey
ALTER TABLE "tanaman_pengguna" DROP CONSTRAINT "tanaman_pengguna_id_pengguna_fkey";

-- DropForeignKey
ALTER TABLE "tanaman_pengguna" DROP CONSTRAINT "tanaman_pengguna_id_tanaman_fkey";

-- DropForeignKey
ALTER TABLE "tugas_penanaman" DROP CONSTRAINT "tugas_penanaman_id_hari_penanaman_fkey";

-- DropForeignKey
ALTER TABLE "tugas_penanaman_pengguna" DROP CONSTRAINT "tugas_penanaman_pengguna_id_hari_tanaman_pengguna_fkey";

-- AlterTable
ALTER TABLE "HariPenanaman" DROP COLUMN "nama_fase",
ADD COLUMN     "nama_fase" "FasePenanaman" NOT NULL;

-- AlterTable
ALTER TABLE "Tanaman" DROP COLUMN "tingkat_kesulitan",
ADD COLUMN     "tingkat_kesulitan" "TingkatKesulitan" NOT NULL DEFAULT 'MUDAH';

-- DropTable
DROP TABLE "hari_tanaman_pengguna";

-- DropTable
DROP TABLE "tanaman_pengguna";

-- DropTable
DROP TABLE "tugas_penanaman";

-- DropTable
DROP TABLE "tugas_penanaman_pengguna";

-- DropEnum
DROP TYPE "fase_penanaman";

-- DropEnum
DROP TYPE "jenis_tugas";

-- DropEnum
DROP TYPE "status_hari";

-- DropEnum
DROP TYPE "status_penanaman";

-- DropEnum
DROP TYPE "tingkat_kesulitan";

-- CreateTable
CREATE TABLE "TugasPenanaman" (
    "id_tugas" SERIAL NOT NULL,
    "nama_tugas" VARCHAR(255) NOT NULL,
    "jenis_tugas" "JenisTugas" NOT NULL,
    "estimasi_waktu" INTEGER,
    "id_hari_penanaman" INTEGER NOT NULL,

    CONSTRAINT "TugasPenanaman_pkey" PRIMARY KEY ("id_tugas")
);

-- CreateTable
CREATE TABLE "TanamanPengguna" (
    "id_tanaman_pengguna" VARCHAR(36) NOT NULL,
    "nama_custom" VARCHAR(100),
    "tanggal_penanaman" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tanggal_target_panen" TIMESTAMP(3),
    "status_penanaman" "StatusPenanaman" NOT NULL DEFAULT 'AKTIF',
    "hari_ke_saat_ini" INTEGER NOT NULL DEFAULT 1,
    "progress_persen" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "catatan_umum" TEXT,
    "id_tanaman" VARCHAR(36) NOT NULL,
    "id_pengguna" VARCHAR(36) NOT NULL,

    CONSTRAINT "TanamanPengguna_pkey" PRIMARY KEY ("id_tanaman_pengguna")
);

-- CreateTable
CREATE TABLE "HariTanamanPengguna" (
    "id_hari_tanaman_pengguna" SERIAL NOT NULL,
    "hari_ke" INTEGER NOT NULL,
    "tanggal_aktual" TIMESTAMP(3) NOT NULL,
    "fase_penanaman" "FasePenanaman" NOT NULL,
    "status_hari" "StatusHari" NOT NULL DEFAULT 'BELUM_DIMULAI',
    "catatan_harian" TEXT,
    "total_tugas" INTEGER NOT NULL DEFAULT 0,
    "tugas_selesai" INTEGER NOT NULL DEFAULT 0,
    "progress_hari_persen" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "id_tanaman_pengguna" VARCHAR(36) NOT NULL,

    CONSTRAINT "HariTanamanPengguna_pkey" PRIMARY KEY ("id_hari_tanaman_pengguna")
);

-- CreateTable
CREATE TABLE "TugasPenanamanPengguna" (
    "id_tugas_penanaman_pengguna" SERIAL NOT NULL,
    "nama_tugas" VARCHAR(255) NOT NULL,
    "deskripsi_tugas" TEXT,
    "jenis_tugas" "JenisTugas" NOT NULL,
    "status_selesai" BOOLEAN NOT NULL DEFAULT false,
    "tanggal_selesai" TIMESTAMP(3),
    "durasi_pengerjaan" INTEGER,
    "id_hari_tanaman_pengguna" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TugasPenanamanPengguna_pkey" PRIMARY KEY ("id_tugas_penanaman_pengguna")
);

-- CreateIndex
CREATE UNIQUE INDEX "HariTanamanPengguna_id_tanaman_pengguna_hari_ke_key" ON "HariTanamanPengguna"("id_tanaman_pengguna", "hari_ke");

-- AddForeignKey
ALTER TABLE "TugasPenanaman" ADD CONSTRAINT "TugasPenanaman_id_hari_penanaman_fkey" FOREIGN KEY ("id_hari_penanaman") REFERENCES "HariPenanaman"("id_hari_penanaman") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TanamanPengguna" ADD CONSTRAINT "TanamanPengguna_id_tanaman_fkey" FOREIGN KEY ("id_tanaman") REFERENCES "Tanaman"("id_tanaman") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TanamanPengguna" ADD CONSTRAINT "TanamanPengguna_id_pengguna_fkey" FOREIGN KEY ("id_pengguna") REFERENCES "Pengguna"("id_pengguna") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HariTanamanPengguna" ADD CONSTRAINT "HariTanamanPengguna_id_tanaman_pengguna_fkey" FOREIGN KEY ("id_tanaman_pengguna") REFERENCES "TanamanPengguna"("id_tanaman_pengguna") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TugasPenanamanPengguna" ADD CONSTRAINT "TugasPenanamanPengguna_id_hari_tanaman_pengguna_fkey" FOREIGN KEY ("id_hari_tanaman_pengguna") REFERENCES "HariTanamanPengguna"("id_hari_tanaman_pengguna") ON DELETE CASCADE ON UPDATE CASCADE;
