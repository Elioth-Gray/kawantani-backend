/*
  Warnings:

  - A unique constraint covering the columns `[id_artikel,id_komentar]` on the table `KomentarArtikel` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "KomentarArtikel_id_artikel_id_pengguna_key";

-- CreateIndex
CREATE UNIQUE INDEX "KomentarArtikel_id_artikel_id_komentar_key" ON "KomentarArtikel"("id_artikel", "id_komentar");
