-- CreateTable
CREATE TABLE "Pengguna" (
    "id_pengguna" SERIAL NOT NULL,
    "nama_depan_pengguna" VARCHAR(50) NOT NULL,
    "nama_belakang_pengguna" VARCHAR(50) NOT NULL,
    "tanggal_lahir_pengguna" TIMESTAMP(3) NOT NULL,
    "email_pengguna" VARCHAR(50) NOT NULL,
    "nomor_telepon_pengguna" VARCHAR(13) NOT NULL,
    "password_pengguna" VARCHAR(50) NOT NULL,
    "tanggal_pembuatan_akun" TIMESTAMP(3) NOT NULL,
    "kode_verifikasi" CHAR(4) NOT NULL,
    "status_verfikasi" BOOLEAN NOT NULL,

    CONSTRAINT "Pengguna_pkey" PRIMARY KEY ("id_pengguna")
);

-- CreateTable
CREATE TABLE "Facilitator" (
    "id_facilitator" SERIAL NOT NULL,
    "nama_facilitator" VARCHAR(50) NOT NULL,
    "email_facilitator" VARCHAR(50) NOT NULL,
    "nomor_telepon_facilitator" VARCHAR(13) NOT NULL,
    "password_facilitator" VARCHAR(50) NOT NULL,
    "tanggal_pembuatan_akun" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Facilitator_pkey" PRIMARY KEY ("id_facilitator")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id_admin" SERIAL NOT NULL,
    "nama_depan_admin" VARCHAR NOT NULL,
    "nama_belakang_admin" VARCHAR NOT NULL,
    "email_admin" VARCHAR NOT NULL,
    "password_admin" VARCHAR NOT NULL,
    "tanggal_pembuatan_akun" VARCHAR NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id_admin")
);

-- CreateTable
CREATE TABLE "Artikel" (
    "id_artikel" SERIAL NOT NULL,
    "judul_artikel" VARCHAR(100) NOT NULL,
    "tanggal_artikel" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "rating_artikel" INTEGER NOT NULL,
    "isi_artikel" TEXT NOT NULL,
    "status_artikel" INTEGER NOT NULL,
    "status_verifikasi" BOOLEAN NOT NULL,
    "id_pengguna" INTEGER NOT NULL,
    "id_verifikator" INTEGER NOT NULL,

    CONSTRAINT "Artikel_pkey" PRIMARY KEY ("id_artikel")
);

-- CreateTable
CREATE TABLE "ArtikelDisimpan" (
    "id_penyimpanan" SERIAL NOT NULL,
    "id_artikel" INTEGER NOT NULL,
    "id_pengguna" INTEGER NOT NULL,

    CONSTRAINT "ArtikelDisimpan_pkey" PRIMARY KEY ("id_penyimpanan")
);

-- CreateTable
CREATE TABLE "ArtikelDisukai" (
    "id_disukai" SERIAL NOT NULL,
    "id_artikel" INTEGER NOT NULL,
    "id_pengguna" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,

    CONSTRAINT "ArtikelDisukai_pkey" PRIMARY KEY ("id_disukai")
);

-- CreateTable
CREATE TABLE "KomentarArtikel" (
    "id_komentar" SERIAL NOT NULL,
    "id_artikel" INTEGER NOT NULL,
    "id_pengguna" INTEGER NOT NULL,
    "komentar" TEXT NOT NULL,

    CONSTRAINT "KomentarArtikel_pkey" PRIMARY KEY ("id_komentar")
);

-- CreateTable
CREATE TABLE "Workshop" (
    "id_workshop" SERIAL NOT NULL,
    "judul_workshop" VARCHAR(100) NOT NULL,
    "tanggal_workshop" DATE NOT NULL,
    "lokasi_workshop" VARCHAR(100) NOT NULL,
    "deskripsi_workshop" VARCHAR(1000) NOT NULL,
    "harga_workshop" DECIMAL(10,2) NOT NULL,
    "kapasitas" INTEGER NOT NULL,
    "status_verifikasi" BOOLEAN NOT NULL,
    "id_facilitator" INTEGER NOT NULL,
    "id_verifikator" INTEGER NOT NULL,

    CONSTRAINT "Workshop_pkey" PRIMARY KEY ("id_workshop")
);

-- CreateTable
CREATE TABLE "WorkshopTerdaftar" (
    "id_pendaftaran" SERIAL NOT NULL,
    "nama_peserta" VARCHAR(100) NOT NULL,
    "email_peserta" VARCHAR(100) NOT NULL,
    "nomor_telepon_peserta" VARCHAR(50) NOT NULL,
    "tanggal_pendaftaran" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status_pembayaran" VARCHAR(20) NOT NULL,
    "nomor_tiket" VARCHAR(50),
    "id_pengguna" INTEGER NOT NULL,
    "id_workshop" INTEGER NOT NULL,

    CONSTRAINT "WorkshopTerdaftar_pkey" PRIMARY KEY ("id_pendaftaran")
);

-- CreateTable
CREATE TABLE "Tanaman" (
    "id_tanaman" SERIAL NOT NULL,
    "nama_tanaman" VARCHAR NOT NULL,
    "nama_latin" VARCHAR NOT NULL,
    "durasi_penanaman" INTEGER NOT NULL,
    "deskripsi_tanaman" VARCHAR NOT NULL,

    CONSTRAINT "Tanaman_pkey" PRIMARY KEY ("id_tanaman")
);

-- CreateTable
CREATE TABLE "InstruksiTanaman" (
    "id_instruksi" SERIAL NOT NULL,
    "instruksi" TEXT NOT NULL,
    "id_tanaman" INTEGER NOT NULL,

    CONSTRAINT "InstruksiTanaman_pkey" PRIMARY KEY ("id_instruksi")
);

-- CreateTable
CREATE TABLE "HariPenanaman" (
    "id_hari_penanaman" SERIAL NOT NULL,
    "jenis_tugas" INTEGER NOT NULL,
    "id_tanaman" INTEGER NOT NULL,

    CONSTRAINT "HariPenanaman_pkey" PRIMARY KEY ("id_hari_penanaman")
);

-- CreateTable
CREATE TABLE "TugasPenanaman" (
    "id_tugas" SERIAL NOT NULL,
    "nama_tugas" TEXT NOT NULL,
    "id_hari_penanaman" INTEGER NOT NULL,

    CONSTRAINT "TugasPenanaman_pkey" PRIMARY KEY ("id_tugas")
);

-- CreateTable
CREATE TABLE "TanamanPengguna" (
    "id_tanaman_pengguna" SERIAL NOT NULL,
    "tanggal_penanaman" TIMESTAMP(3) NOT NULL,
    "status_penanaman" BOOLEAN NOT NULL,
    "nama_tanaman" VARCHAR(50) NOT NULL,
    "id_tanaman" INTEGER NOT NULL,
    "id_pengguna" INTEGER NOT NULL,

    CONSTRAINT "TanamanPengguna_pkey" PRIMARY KEY ("id_tanaman_pengguna")
);

-- CreateTable
CREATE TABLE "HariTanamanPengguna" (
    "id_hari_tanaman_pengguna" SERIAL NOT NULL,
    "catatan" VARCHAR NOT NULL,
    "id_tanaman_pengguna" INTEGER NOT NULL,

    CONSTRAINT "HariTanamanPengguna_pkey" PRIMARY KEY ("id_hari_tanaman_pengguna")
);

-- CreateTable
CREATE TABLE "TugasPenanamanPengguna" (
    "id_tugas_penanaman_pengguna" SERIAL NOT NULL,
    "nama_tugas" VARCHAR NOT NULL,
    "id_hari_tanaman_pengguna" INTEGER NOT NULL,

    CONSTRAINT "TugasPenanamanPengguna_pkey" PRIMARY KEY ("id_tugas_penanaman_pengguna")
);

-- CreateIndex
CREATE UNIQUE INDEX "ArtikelDisimpan_id_artikel_id_pengguna_key" ON "ArtikelDisimpan"("id_artikel", "id_pengguna");

-- CreateIndex
CREATE UNIQUE INDEX "ArtikelDisukai_id_artikel_id_pengguna_key" ON "ArtikelDisukai"("id_artikel", "id_pengguna");

-- CreateIndex
CREATE UNIQUE INDEX "KomentarArtikel_id_artikel_id_pengguna_key" ON "KomentarArtikel"("id_artikel", "id_pengguna");

-- AddForeignKey
ALTER TABLE "Artikel" ADD CONSTRAINT "Artikel_id_pengguna_fkey" FOREIGN KEY ("id_pengguna") REFERENCES "Pengguna"("id_pengguna") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Artikel" ADD CONSTRAINT "Artikel_id_verifikator_fkey" FOREIGN KEY ("id_verifikator") REFERENCES "Admin"("id_admin") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtikelDisimpan" ADD CONSTRAINT "ArtikelDisimpan_id_artikel_fkey" FOREIGN KEY ("id_artikel") REFERENCES "Artikel"("id_artikel") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtikelDisimpan" ADD CONSTRAINT "ArtikelDisimpan_id_pengguna_fkey" FOREIGN KEY ("id_pengguna") REFERENCES "Pengguna"("id_pengguna") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtikelDisukai" ADD CONSTRAINT "ArtikelDisukai_id_artikel_fkey" FOREIGN KEY ("id_artikel") REFERENCES "Artikel"("id_artikel") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtikelDisukai" ADD CONSTRAINT "ArtikelDisukai_id_pengguna_fkey" FOREIGN KEY ("id_pengguna") REFERENCES "Pengguna"("id_pengguna") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KomentarArtikel" ADD CONSTRAINT "KomentarArtikel_id_artikel_fkey" FOREIGN KEY ("id_artikel") REFERENCES "Artikel"("id_artikel") ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE "InstruksiTanaman" ADD CONSTRAINT "InstruksiTanaman_id_tanaman_fkey" FOREIGN KEY ("id_tanaman") REFERENCES "Tanaman"("id_tanaman") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HariPenanaman" ADD CONSTRAINT "HariPenanaman_id_tanaman_fkey" FOREIGN KEY ("id_tanaman") REFERENCES "Tanaman"("id_tanaman") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TugasPenanaman" ADD CONSTRAINT "TugasPenanaman_id_hari_penanaman_fkey" FOREIGN KEY ("id_hari_penanaman") REFERENCES "HariPenanaman"("id_hari_penanaman") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TanamanPengguna" ADD CONSTRAINT "TanamanPengguna_id_tanaman_fkey" FOREIGN KEY ("id_tanaman") REFERENCES "Tanaman"("id_tanaman") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TanamanPengguna" ADD CONSTRAINT "TanamanPengguna_id_pengguna_fkey" FOREIGN KEY ("id_pengguna") REFERENCES "Pengguna"("id_pengguna") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HariTanamanPengguna" ADD CONSTRAINT "HariTanamanPengguna_id_tanaman_pengguna_fkey" FOREIGN KEY ("id_tanaman_pengguna") REFERENCES "TanamanPengguna"("id_tanaman_pengguna") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TugasPenanamanPengguna" ADD CONSTRAINT "TugasPenanamanPengguna_id_hari_tanaman_pengguna_fkey" FOREIGN KEY ("id_hari_tanaman_pengguna") REFERENCES "HariTanamanPengguna"("id_hari_tanaman_pengguna") ON DELETE RESTRICT ON UPDATE CASCADE;
