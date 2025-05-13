/*
  Warnings:

  - You are about to drop the column `alamat_lengkap` on the `Facilitator` table. All the data in the column will be lost.
  - Added the required column `alamat_lengkap_facilitator` to the `Facilitator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Facilitator" DROP COLUMN "alamat_lengkap",
ADD COLUMN     "alamat_lengkap_facilitator" VARCHAR(255) NOT NULL;
