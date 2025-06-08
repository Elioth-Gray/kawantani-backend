/*
  Warnings:

  - The values [PERAWATAN_KHUSUS,PANEN] on the enum `JenisTugas` will be removed. If these variants are still used in the database, this will fail.
  - The values [DIBATALKAN,DITUNDA] on the enum `StatusPenanaman` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `catatan_umum` on the `TanamanPengguna` table. All the data in the column will be lost.
  - You are about to drop the column `hari_ke_saat_ini` on the `TanamanPengguna` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `TugasPenanamanPengguna` table. All the data in the column will be lost.
  - You are about to drop the column `durasi_pengerjaan` on the `TugasPenanamanPengguna` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `TugasPenanamanPengguna` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "JenisTugas_new" AS ENUM ('TUGAS_BIASA', 'PENGECEKAN_HARIAN');
ALTER TABLE "TugasPenanaman" ALTER COLUMN "jenis_tugas" TYPE "JenisTugas_new" USING ("jenis_tugas"::text::"JenisTugas_new");
ALTER TABLE "TugasPenanamanPengguna" ALTER COLUMN "jenis_tugas" TYPE "JenisTugas_new" USING ("jenis_tugas"::text::"JenisTugas_new");
ALTER TYPE "JenisTugas" RENAME TO "JenisTugas_old";
ALTER TYPE "JenisTugas_new" RENAME TO "JenisTugas";
DROP TYPE "JenisTugas_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "StatusPenanaman_new" AS ENUM ('AKTIF', 'SELESAI');
ALTER TABLE "TanamanPengguna" ALTER COLUMN "status_penanaman" DROP DEFAULT;
ALTER TABLE "TanamanPengguna" ALTER COLUMN "status_penanaman" TYPE "StatusPenanaman_new" USING ("status_penanaman"::text::"StatusPenanaman_new");
ALTER TYPE "StatusPenanaman" RENAME TO "StatusPenanaman_old";
ALTER TYPE "StatusPenanaman_new" RENAME TO "StatusPenanaman";
DROP TYPE "StatusPenanaman_old";
ALTER TABLE "TanamanPengguna" ALTER COLUMN "status_penanaman" SET DEFAULT 'AKTIF';
COMMIT;

-- AlterTable
ALTER TABLE "TanamanPengguna" DROP COLUMN "catatan_umum",
DROP COLUMN "hari_ke_saat_ini";

-- AlterTable
ALTER TABLE "TugasPenanamanPengguna" DROP COLUMN "created_at",
DROP COLUMN "durasi_pengerjaan",
DROP COLUMN "updated_at",
ADD COLUMN     "estimasi_waktu" INTEGER;
