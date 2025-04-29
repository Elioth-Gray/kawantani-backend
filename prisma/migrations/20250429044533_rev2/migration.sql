/*
  Warnings:

  - You are about to alter the column `nama_depan_admin` on the `Admin` table. The data in that column could be lost. The data in that column will be cast from `VarChar` to `VarChar(50)`.
  - You are about to alter the column `nama_belakang_admin` on the `Admin` table. The data in that column could be lost. The data in that column will be cast from `VarChar` to `VarChar(50)`.
  - You are about to alter the column `email_admin` on the `Admin` table. The data in that column could be lost. The data in that column will be cast from `VarChar` to `VarChar(50)`.
  - You are about to alter the column `password_admin` on the `Admin` table. The data in that column could be lost. The data in that column will be cast from `VarChar` to `VarChar(100)`.
  - Changed the type of `tanggal_pembuatan_akun` on the `Admin` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Admin" ALTER COLUMN "nama_depan_admin" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "nama_belakang_admin" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "email_admin" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "password_admin" SET DATA TYPE VARCHAR(100),
DROP COLUMN "tanggal_pembuatan_akun",
ADD COLUMN     "tanggal_pembuatan_akun" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Facilitator" ALTER COLUMN "password_facilitator" SET DATA TYPE VARCHAR(100);

-- AlterTable
ALTER TABLE "Pengguna" ALTER COLUMN "password_pengguna" SET DATA TYPE VARCHAR(100);
