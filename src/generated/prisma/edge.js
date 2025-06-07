
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ProvinsiScalarFieldEnum = {
  id_provinsi: 'id_provinsi',
  nama_provinsi: 'nama_provinsi'
};

exports.Prisma.KabupatenScalarFieldEnum = {
  id_kabupaten: 'id_kabupaten',
  nama_kabupaten: 'nama_kabupaten',
  type: 'type',
  id_provinsi: 'id_provinsi'
};

exports.Prisma.PenggunaScalarFieldEnum = {
  id_pengguna: 'id_pengguna',
  nama_depan_pengguna: 'nama_depan_pengguna',
  nama_belakang_pengguna: 'nama_belakang_pengguna',
  tanggal_lahir_pengguna: 'tanggal_lahir_pengguna',
  email_pengguna: 'email_pengguna',
  nomor_telepon_pengguna: 'nomor_telepon_pengguna',
  jenisKelamin: 'jenisKelamin',
  password_pengguna: 'password_pengguna',
  tanggal_pembuatan_akun: 'tanggal_pembuatan_akun',
  kode_verifikasi: 'kode_verifikasi',
  status_verfikasi: 'status_verfikasi',
  avatar: 'avatar',
  status_aktif: 'status_aktif'
};

exports.Prisma.FacilitatorScalarFieldEnum = {
  id_facilitator: 'id_facilitator',
  nama_facilitator: 'nama_facilitator',
  email_facilitator: 'email_facilitator',
  nomor_telepon_facilitator: 'nomor_telepon_facilitator',
  password_facilitator: 'password_facilitator',
  tanggal_pembuatan_akun: 'tanggal_pembuatan_akun',
  alamat_lengkap_facilitator: 'alamat_lengkap_facilitator',
  avatar: 'avatar',
  status_aktif: 'status_aktif',
  id_kabupaten: 'id_kabupaten'
};

exports.Prisma.AdminScalarFieldEnum = {
  id_admin: 'id_admin',
  nama_depan_admin: 'nama_depan_admin',
  nama_belakang_admin: 'nama_belakang_admin',
  email_admin: 'email_admin',
  password_admin: 'password_admin',
  tanggal_pembuatan_akun: 'tanggal_pembuatan_akun',
  avatar: 'avatar'
};

exports.Prisma.ArtikelScalarFieldEnum = {
  id_artikel: 'id_artikel',
  judul_artikel: 'judul_artikel',
  tanggal_artikel: 'tanggal_artikel',
  deskripsi_artikel: 'deskripsi_artikel',
  isi_artikel: 'isi_artikel',
  status_artikel: 'status_artikel',
  status_verifikasi: 'status_verifikasi',
  gambar_artikel: 'gambar_artikel',
  status_aktif: 'status_aktif',
  id_kategori_artikel: 'id_kategori_artikel',
  id_pengguna: 'id_pengguna'
};

exports.Prisma.KategoriArtikelScalarFieldEnum = {
  id_kategori_artikel: 'id_kategori_artikel',
  nama_kategori_artikel: 'nama_kategori_artikel'
};

exports.Prisma.ArtikelDisimpanScalarFieldEnum = {
  id_penyimpanan: 'id_penyimpanan',
  id_artikel: 'id_artikel',
  id_pengguna: 'id_pengguna'
};

exports.Prisma.ArtikelDisukaiScalarFieldEnum = {
  id_disukai: 'id_disukai',
  id_artikel: 'id_artikel',
  id_pengguna: 'id_pengguna',
  rating: 'rating'
};

exports.Prisma.KomentarArtikelScalarFieldEnum = {
  id_komentar: 'id_komentar',
  id_artikel: 'id_artikel',
  id_pengguna: 'id_pengguna',
  komentar: 'komentar',
  tanggal_komentar: 'tanggal_komentar'
};

exports.Prisma.WorkshopScalarFieldEnum = {
  id_workshop: 'id_workshop',
  judul_workshop: 'judul_workshop',
  tanggal_workshop: 'tanggal_workshop',
  alaamt_lengkap_workshop: 'alaamt_lengkap_workshop',
  deskripsi_workshop: 'deskripsi_workshop',
  harga_workshop: 'harga_workshop',
  kapasitas: 'kapasitas',
  status_verifikasi: 'status_verifikasi',
  lat_lokasi: 'lat_lokasi',
  long_lokasi: 'long_lokasi',
  gambar_workshop: 'gambar_workshop',
  status_aktif: 'status_aktif',
  waktu_mulai: 'waktu_mulai',
  waktu_berakhir: 'waktu_berakhir',
  id_facilitator: 'id_facilitator',
  id_kabupaten: 'id_kabupaten'
};

exports.Prisma.WorkshopTerdaftarScalarFieldEnum = {
  id_pendaftaran: 'id_pendaftaran',
  nama_depan_peserta: 'nama_depan_peserta',
  nama_belakang_peserta: 'nama_belakang_peserta',
  email_peserta: 'email_peserta',
  nomor_telepon_peserta: 'nomor_telepon_peserta',
  jenis_kelamin_peserta: 'jenis_kelamin_peserta',
  tanggal_pendaftaran: 'tanggal_pendaftaran',
  status_pembayaran: 'status_pembayaran',
  nomor_tiket: 'nomor_tiket',
  id_pengguna: 'id_pengguna',
  id_workshop: 'id_workshop',
  id_metode_pembayaran: 'id_metode_pembayaran'
};

exports.Prisma.MetodePembayaranScalarFieldEnum = {
  id_metode_pembayaran: 'id_metode_pembayaran',
  nama_metode_pembayaran: 'nama_metode_pembayaran',
  gambar_metode_pembayaran: 'gambar_metode_pembayaran'
};

exports.Prisma.KategoriTanamanScalarFieldEnum = {
  id_kategori_tanaman: 'id_kategori_tanaman',
  nama_kategori_tanaman: 'nama_kategori_tanaman'
};

exports.Prisma.TanamanScalarFieldEnum = {
  id_tanaman: 'id_tanaman',
  nama_tanaman: 'nama_tanaman',
  nama_latin: 'nama_latin',
  durasi_penanaman: 'durasi_penanaman',
  deskripsi_tanaman: 'deskripsi_tanaman',
  gambar_tanaman: 'gambar_tanaman',
  tingkat_kesulitan: 'tingkat_kesulitan',
  id_kategori_tanaman: 'id_kategori_tanaman'
};

exports.Prisma.InstruksiTanamanScalarFieldEnum = {
  id_instruksi: 'id_instruksi',
  instruksi: 'instruksi',
  urutan: 'urutan',
  id_tanaman: 'id_tanaman'
};

exports.Prisma.HariPenanamanScalarFieldEnum = {
  id_hari_penanaman: 'id_hari_penanaman',
  hari_ke: 'hari_ke',
  nama_fase: 'nama_fase',
  deskripsi_fase: 'deskripsi_fase',
  id_tanaman: 'id_tanaman'
};

exports.Prisma.TugasPenanamanScalarFieldEnum = {
  id_tugas: 'id_tugas',
  nama_tugas: 'nama_tugas',
  jenis_tugas: 'jenis_tugas',
  estimasi_waktu: 'estimasi_waktu',
  id_hari_penanaman: 'id_hari_penanaman'
};

exports.Prisma.TanamanPenggunaScalarFieldEnum = {
  id_tanaman_pengguna: 'id_tanaman_pengguna',
  nama_custom: 'nama_custom',
  tanggal_penanaman: 'tanggal_penanaman',
  tanggal_target_panen: 'tanggal_target_panen',
  status_penanaman: 'status_penanaman',
  hari_ke_saat_ini: 'hari_ke_saat_ini',
  progress_persen: 'progress_persen',
  catatan_umum: 'catatan_umum',
  id_tanaman: 'id_tanaman',
  id_pengguna: 'id_pengguna'
};

exports.Prisma.HariTanamanPenggunaScalarFieldEnum = {
  id_hari_tanaman_pengguna: 'id_hari_tanaman_pengguna',
  hari_ke: 'hari_ke',
  tanggal_aktual: 'tanggal_aktual',
  fase_penanaman: 'fase_penanaman',
  status_hari: 'status_hari',
  catatan_harian: 'catatan_harian',
  total_tugas: 'total_tugas',
  tugas_selesai: 'tugas_selesai',
  progress_hari_persen: 'progress_hari_persen',
  id_tanaman_pengguna: 'id_tanaman_pengguna'
};

exports.Prisma.TugasPenanamanPenggunaScalarFieldEnum = {
  id_tugas_penanaman_pengguna: 'id_tugas_penanaman_pengguna',
  nama_tugas: 'nama_tugas',
  deskripsi_tugas: 'deskripsi_tugas',
  jenis_tugas: 'jenis_tugas',
  status_selesai: 'status_selesai',
  tanggal_selesai: 'tanggal_selesai',
  durasi_pengerjaan: 'durasi_pengerjaan',
  id_hari_tanaman_pengguna: 'id_hari_tanaman_pengguna',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.StatusArtikel = exports.$Enums.StatusArtikel = {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED'
};

exports.StatusVerifikasiArtikel = exports.$Enums.StatusVerifikasiArtikel = {
  MENUNGGU: 'MENUNGGU',
  DIVERIFIKASI: 'DIVERIFIKASI',
  DITOLAK: 'DITOLAK'
};

exports.StatusVerifikasiWorkshop = exports.$Enums.StatusVerifikasiWorkshop = {
  MENUNGGU: 'MENUNGGU',
  DIVERIFIKASI: 'DIVERIFIKASI',
  DITOLAK: 'DITOLAK'
};

exports.JenisTugas = exports.$Enums.JenisTugas = {
  TUGAS_BIASA: 'TUGAS_BIASA',
  PENGECEKAN_HARIAN: 'PENGECEKAN_HARIAN'
};

exports.FasePenanaman = exports.$Enums.FasePenanaman = {
  PERSIAPAN: 'PERSIAPAN',
  PENANAMAN: 'PENANAMAN',
  PERTUMBUHAN: 'PERTUMBUHAN',
  PEMELIHARAAN: 'PEMELIHARAAN',
  PRAPANEN: 'PRAPANEN',
  PANEN: 'PANEN',
  PASCA_PANEN: 'PASCA_PANEN'
};

exports.StatusPenanaman = exports.$Enums.StatusPenanaman = {
  AKTIF: 'AKTIF',
  SELESAI: 'SELESAI',
  DIBATALKAN: 'DIBATALKAN',
  DITUNDA: 'DITUNDA'
};

exports.StatusHari = exports.$Enums.StatusHari = {
  BELUM_DIMULAI: 'BELUM_DIMULAI',
  SEDANG_BERJALAN: 'SEDANG_BERJALAN',
  SELESAI: 'SELESAI',
  TERLEWAT: 'TERLEWAT'
};

exports.TingkatKesulitan = exports.$Enums.TingkatKesulitan = {
  SANGAT_MUDAH: 'SANGAT_MUDAH',
  MUDAH: 'MUDAH',
  SEDANG: 'SEDANG',
  SULIT: 'SULIT',
  SANGAT_SULIT: 'SANGAT_SULIT'
};

exports.Prisma.ModelName = {
  Provinsi: 'Provinsi',
  Kabupaten: 'Kabupaten',
  Pengguna: 'Pengguna',
  Facilitator: 'Facilitator',
  Admin: 'Admin',
  Artikel: 'Artikel',
  KategoriArtikel: 'KategoriArtikel',
  ArtikelDisimpan: 'ArtikelDisimpan',
  ArtikelDisukai: 'ArtikelDisukai',
  KomentarArtikel: 'KomentarArtikel',
  Workshop: 'Workshop',
  WorkshopTerdaftar: 'WorkshopTerdaftar',
  MetodePembayaran: 'MetodePembayaran',
  KategoriTanaman: 'KategoriTanaman',
  Tanaman: 'Tanaman',
  InstruksiTanaman: 'InstruksiTanaman',
  HariPenanaman: 'HariPenanaman',
  TugasPenanaman: 'TugasPenanaman',
  TanamanPengguna: 'TanamanPengguna',
  HariTanamanPengguna: 'HariTanamanPengguna',
  TugasPenanamanPengguna: 'TugasPenanamanPengguna'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Sutha\\Documents\\Kuliah\\Semester 4\\Pemrograman Web (Praktikum)\\KawanTani Web 2\\kawan-tani-backend\\src\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\Sutha\\Documents\\Kuliah\\Semester 4\\Pemrograman Web (Praktikum)\\KawanTani Web 2\\kawan-tani-backend\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": "postgres://tripitropi:tripitropi123@localhost:5432/kawantani"
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel Provinsi {\n  id_provinsi   Int    @id @default(autoincrement())\n  nama_provinsi String @db.VarChar(100)\n\n  kabupaten Kabupaten[]\n}\n\nmodel Kabupaten {\n  id_kabupaten   Int    @id @default(autoincrement())\n  nama_kabupaten String @db.VarChar(100)\n  type           String @db.VarChar(100)\n\n  id_provinsi Int\n  provinsi    Provinsi @relation(fields: [id_provinsi], references: [id_provinsi])\n\n  facilitators Facilitator[]\n  workshop     Workshop[]\n}\n\nmodel Pengguna {\n  id_pengguna            String   @id @default(cuid())\n  nama_depan_pengguna    String   @db.VarChar(50)\n  nama_belakang_pengguna String   @db.VarChar(50)\n  tanggal_lahir_pengguna DateTime\n  email_pengguna         String   @db.VarChar(50)\n  nomor_telepon_pengguna String   @db.VarChar(13)\n  jenisKelamin           Int\n  password_pengguna      String   @db.VarChar(100)\n  tanggal_pembuatan_akun DateTime\n  kode_verifikasi        String   @db.Char(4)\n  status_verfikasi       Boolean\n  avatar                 String   @db.VarChar(255)\n  status_aktif           Boolean  @default(true)\n\n  workshop_terdaftar WorkshopTerdaftar[]\n  artikel            Artikel[]\n  artikel_disimpan   ArtikelDisimpan[]\n  artikel_disukai    ArtikelDisukai[]\n  komentar_artikel   KomentarArtikel[]\n  tanaman_pengguna   TanamanPengguna[]\n\n  @@unique([email_pengguna])\n  @@unique([nomor_telepon_pengguna])\n}\n\nmodel Facilitator {\n  id_facilitator             String   @id @default(cuid())\n  nama_facilitator           String   @db.VarChar(50)\n  email_facilitator          String   @db.VarChar(50)\n  nomor_telepon_facilitator  String   @db.VarChar(13)\n  password_facilitator       String   @db.VarChar(100)\n  tanggal_pembuatan_akun     DateTime\n  alamat_lengkap_facilitator String   @db.VarChar(255)\n  avatar                     String   @db.VarChar(255)\n  status_aktif               Boolean  @default(true)\n\n  id_kabupaten Int\n  kabupaten    Kabupaten @relation(fields: [id_kabupaten], references: [id_kabupaten])\n\n  workshops Workshop[]\n\n  @@unique([email_facilitator])\n  @@unique([nomor_telepon_facilitator])\n}\n\nmodel Admin {\n  id_admin               String   @id @default(cuid())\n  nama_depan_admin       String   @db.VarChar(50)\n  nama_belakang_admin    String   @db.VarChar(50)\n  email_admin            String   @db.VarChar(50)\n  password_admin         String   @db.VarChar(100)\n  tanggal_pembuatan_akun DateTime\n  avatar                 String   @db.VarChar(255)\n\n  @@unique([email_admin])\n}\n\nenum StatusArtikel {\n  DRAFT\n  PUBLISHED\n}\n\nenum StatusVerifikasiArtikel {\n  MENUNGGU\n  DIVERIFIKASI\n  DITOLAK\n}\n\nmodel Artikel {\n  id_artikel          String                  @id @db.VarChar(50)\n  judul_artikel       String                  @db.VarChar(100)\n  tanggal_artikel     DateTime                @default(now())\n  deskripsi_artikel   String                  @db.Text\n  isi_artikel         String                  @db.Text\n  status_artikel      StatusArtikel\n  status_verifikasi   StatusVerifikasiArtikel\n  gambar_artikel      String                  @db.VarChar(255)\n  status_aktif        Boolean                 @default(true)\n  id_kategori_artikel Int\n  kategori            KategoriArtikel         @relation(fields: [id_kategori_artikel], references: [id_kategori_artikel])\n  id_pengguna         String\n  pengguna            Pengguna                @relation(fields: [id_pengguna], references: [id_pengguna])\n  artikel_disimpan    ArtikelDisimpan[]\n  artikel_disukai     ArtikelDisukai[]\n  komentar_artikel    KomentarArtikel[]\n}\n\nmodel KategoriArtikel {\n  id_kategori_artikel   Int    @id @default(autoincrement())\n  nama_kategori_artikel String @db.VarChar(100)\n\n  artikel Artikel[]\n}\n\nmodel ArtikelDisimpan {\n  id_penyimpanan Int      @id @default(autoincrement())\n  id_artikel     String\n  artikel        Artikel  @relation(fields: [id_artikel], references: [id_artikel])\n  id_pengguna    String\n  pengguna       Pengguna @relation(fields: [id_pengguna], references: [id_pengguna])\n\n  @@unique([id_artikel, id_pengguna])\n}\n\nmodel ArtikelDisukai {\n  id_disukai  Int      @id @default(autoincrement())\n  id_artikel  String\n  artikel     Artikel  @relation(fields: [id_artikel], references: [id_artikel])\n  id_pengguna String\n  pengguna    Pengguna @relation(fields: [id_pengguna], references: [id_pengguna])\n  rating      Int\n\n  @@unique([id_artikel, id_pengguna])\n}\n\nmodel KomentarArtikel {\n  id_komentar      Int      @id @default(autoincrement())\n  id_artikel       String\n  artikel          Artikel  @relation(fields: [id_artikel], references: [id_artikel])\n  id_pengguna      String\n  pengguna         Pengguna @relation(fields: [id_pengguna], references: [id_pengguna])\n  komentar         String   @db.Text\n  tanggal_komentar DateTime\n\n  @@unique([id_artikel, id_komentar])\n}\n\nenum StatusVerifikasiWorkshop {\n  MENUNGGU\n  DIVERIFIKASI\n  DITOLAK\n}\n\nmodel Workshop {\n  id_workshop             String                   @id @db.VarChar(50)\n  judul_workshop          String                   @db.VarChar(100)\n  tanggal_workshop        DateTime                 @db.Date\n  alaamt_lengkap_workshop String                   @db.VarChar(100)\n  deskripsi_workshop      String                   @db.VarChar(1000)\n  harga_workshop          Decimal                  @db.Decimal(10, 2)\n  kapasitas               Int\n  status_verifikasi       StatusVerifikasiWorkshop\n  lat_lokasi              Float\n  long_lokasi             Float\n  gambar_workshop         String                   @db.VarChar(255)\n  status_aktif            Boolean                  @default(true)\n  waktu_mulai             String                   @default(\"08:00\") @db.VarChar(100)\n  waktu_berakhir          String                   @default(\"16:00\") @db.VarChar(100)\n\n  id_facilitator String\n  facilitator    Facilitator         @relation(fields: [id_facilitator], references: [id_facilitator])\n  id_kabupaten   Int\n  kabupaten      Kabupaten           @relation(fields: [id_kabupaten], references: [id_kabupaten])\n  pendaftaran    WorkshopTerdaftar[]\n}\n\nmodel WorkshopTerdaftar {\n  id_pendaftaran        Int      @id @default(autoincrement())\n  nama_depan_peserta    String   @db.VarChar(100)\n  nama_belakang_peserta String   @db.VarChar(100)\n  email_peserta         String   @db.VarChar(100)\n  nomor_telepon_peserta String   @db.VarChar(50)\n  jenis_kelamin_peserta Int\n  tanggal_pendaftaran   DateTime @default(now())\n  status_pembayaran     Boolean  @default(false)\n  nomor_tiket           String?  @db.VarChar(50)\n\n  pengguna             Pengguna         @relation(fields: [id_pengguna], references: [id_pengguna])\n  id_pengguna          String\n  workshop             Workshop         @relation(fields: [id_workshop], references: [id_workshop])\n  id_workshop          String\n  metode_pembayaran    MetodePembayaran @relation(fields: [id_metode_pembayaran], references: [id_metode_pembayaran])\n  id_metode_pembayaran Int\n\n  @@unique([nomor_tiket])\n}\n\nmodel MetodePembayaran {\n  id_metode_pembayaran     Int    @id @default(autoincrement())\n  nama_metode_pembayaran   String @db.VarChar(100)\n  gambar_metode_pembayaran String @db.VarChar(50)\n\n  workshop_terdaftar WorkshopTerdaftar[]\n}\n\nmodel KategoriTanaman {\n  id_kategori_tanaman   Int       @id @default(autoincrement())\n  nama_kategori_tanaman String    @db.VarChar(100)\n  tanaman               Tanaman[]\n}\n\nmodel Tanaman {\n  id_tanaman          String           @id @db.VarChar(36)\n  nama_tanaman        String           @db.VarChar(100)\n  nama_latin          String           @db.VarChar(100)\n  durasi_penanaman    Int\n  deskripsi_tanaman   String           @db.Text\n  gambar_tanaman      String?          @db.VarChar(255)\n  tingkat_kesulitan   TingkatKesulitan @default(MUDAH)\n  id_kategori_tanaman Int\n\n  kategori          KategoriTanaman    @relation(fields: [id_kategori_tanaman], references: [id_kategori_tanaman])\n  instruksi_tanaman InstruksiTanaman[]\n  hari_penanaman    HariPenanaman[]\n  tanaman_pengguna  TanamanPengguna[]\n}\n\nmodel InstruksiTanaman {\n  id_instruksi Int    @id @default(autoincrement())\n  instruksi    String @db.Text\n  urutan       Int    @default(1)\n  id_tanaman   String @db.VarChar(36)\n\n  tanaman Tanaman @relation(fields: [id_tanaman], references: [id_tanaman], onDelete: Cascade)\n}\n\nmodel HariPenanaman {\n  id_hari_penanaman Int           @id @default(autoincrement())\n  hari_ke           Int\n  nama_fase         FasePenanaman\n  deskripsi_fase    String?       @db.Text\n  id_tanaman        String        @db.VarChar(36)\n\n  tanaman         Tanaman          @relation(fields: [id_tanaman], references: [id_tanaman], onDelete: Cascade)\n  tugas_penanaman TugasPenanaman[]\n\n  @@unique([id_tanaman, hari_ke])\n}\n\nmodel TugasPenanaman {\n  id_tugas          Int        @id @default(autoincrement())\n  nama_tugas        String     @db.VarChar(255)\n  jenis_tugas       JenisTugas\n  estimasi_waktu    Int?\n  id_hari_penanaman Int\n\n  hari_penanaman HariPenanaman @relation(fields: [id_hari_penanaman], references: [id_hari_penanaman], onDelete: Cascade)\n}\n\nmodel TanamanPengguna {\n  id_tanaman_pengguna  String          @id @db.VarChar(36)\n  nama_custom          String?         @db.VarChar(100)\n  tanggal_penanaman    DateTime        @default(now())\n  tanggal_target_panen DateTime? // Dihitung otomatis\n  status_penanaman     StatusPenanaman @default(AKTIF)\n  hari_ke_saat_ini     Int             @default(1)\n  progress_persen      Float           @default(0.0)\n  catatan_umum         String?         @db.Text\n  id_tanaman           String          @db.VarChar(36)\n  id_pengguna          String          @db.VarChar(36)\n\n  // Relations\n  tanaman      Tanaman               @relation(fields: [id_tanaman], references: [id_tanaman])\n  pengguna     Pengguna              @relation(fields: [id_pengguna], references: [id_pengguna])\n  hari_tanaman HariTanamanPengguna[]\n}\n\n// Model Hari Tanaman Pengguna (Instance hari untuk user)\nmodel HariTanamanPengguna {\n  id_hari_tanaman_pengguna Int           @id @default(autoincrement())\n  hari_ke                  Int\n  tanggal_aktual           DateTime\n  fase_penanaman           FasePenanaman\n  status_hari              StatusHari    @default(BELUM_DIMULAI)\n  catatan_harian           String?       @db.Text\n  total_tugas              Int           @default(0)\n  tugas_selesai            Int           @default(0)\n  progress_hari_persen     Float         @default(0.0)\n  id_tanaman_pengguna      String        @db.VarChar(36)\n\n  // Relations\n  tanaman_pengguna TanamanPengguna          @relation(fields: [id_tanaman_pengguna], references: [id_tanaman_pengguna], onDelete: Cascade)\n  tugas_penanaman  TugasPenanamanPengguna[]\n\n  @@unique([id_tanaman_pengguna, hari_ke])\n}\n\n// Model Tugas Penanaman Pengguna (Instance tugas untuk user)\nmodel TugasPenanamanPengguna {\n  id_tugas_penanaman_pengguna Int        @id @default(autoincrement())\n  nama_tugas                  String     @db.VarChar(255)\n  deskripsi_tugas             String?    @db.Text\n  jenis_tugas                 JenisTugas\n  status_selesai              Boolean    @default(false)\n  tanggal_selesai             DateTime?\n  durasi_pengerjaan           Int? // dalam menit\n  id_hari_tanaman_pengguna    Int\n  created_at                  DateTime   @default(now())\n  updated_at                  DateTime   @updatedAt\n\n  // Relations\n  hari_tanaman HariTanamanPengguna @relation(fields: [id_hari_tanaman_pengguna], references: [id_hari_tanaman_pengguna], onDelete: Cascade)\n}\n\n// ENUMS\nenum JenisTugas {\n  TUGAS_BIASA // Tugas rutin seperti menyiram\n  PENGECEKAN_HARIAN // Cek kondisi tanaman  \n}\n\nenum FasePenanaman {\n  PERSIAPAN // Fase persiapan lahan/pot\n  PENANAMAN // Fase penanaman benih/bibit\n  PERTUMBUHAN // Fase pertumbuhan\n  PEMELIHARAAN // Fase pemeliharaan intensif\n  PRAPANEN // Fase menjelang panen\n  PANEN // Fase panen\n  PASCA_PANEN // Fase setelah panen\n}\n\nenum StatusPenanaman {\n  AKTIF // Sedang dalam proses penanaman\n  SELESAI // Sudah selesai (panen)\n  DIBATALKAN // Dibatalkan/gagal\n  DITUNDA // Sementara ditunda\n}\n\nenum StatusHari {\n  BELUM_DIMULAI\n  SEDANG_BERJALAN\n  SELESAI\n  TERLEWAT\n}\n\nenum TingkatKesulitan {\n  SANGAT_MUDAH\n  MUDAH\n  SEDANG\n  SULIT\n  SANGAT_SULIT\n}\n",
  "inlineSchemaHash": "e1acc3bebed957bca1e48bbb12c37118d817743d243de2e1e1696ddf2d26cbe4",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Provinsi\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_provinsi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_provinsi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kabupaten\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Kabupaten\",\"nativeType\":null,\"relationName\":\"KabupatenToProvinsi\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Kabupaten\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_kabupaten\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_kabupaten\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_provinsi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provinsi\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Provinsi\",\"nativeType\":null,\"relationName\":\"KabupatenToProvinsi\",\"relationFromFields\":[\"id_provinsi\"],\"relationToFields\":[\"id_provinsi\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"facilitators\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Facilitator\",\"nativeType\":null,\"relationName\":\"FacilitatorToKabupaten\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workshop\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Workshop\",\"nativeType\":null,\"relationName\":\"KabupatenToWorkshop\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Pengguna\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"cuid\",\"args\":[1]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_depan_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_belakang_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_lahir_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomor_telepon_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"13\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jenisKelamin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_pembuatan_akun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kode_verifikasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"4\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_verfikasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_aktif\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workshop_terdaftar\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorkshopTerdaftar\",\"nativeType\":null,\"relationName\":\"PenggunaToWorkshopTerdaftar\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artikel\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Artikel\",\"nativeType\":null,\"relationName\":\"ArtikelToPengguna\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artikel_disimpan\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ArtikelDisimpan\",\"nativeType\":null,\"relationName\":\"ArtikelDisimpanToPengguna\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artikel_disukai\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ArtikelDisukai\",\"nativeType\":null,\"relationName\":\"ArtikelDisukaiToPengguna\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"komentar_artikel\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"KomentarArtikel\",\"nativeType\":null,\"relationName\":\"KomentarArtikelToPengguna\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanaman_pengguna\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TanamanPengguna\",\"nativeType\":null,\"relationName\":\"PenggunaToTanamanPengguna\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"email_pengguna\"],[\"nomor_telepon_pengguna\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"email_pengguna\"]},{\"name\":null,\"fields\":[\"nomor_telepon_pengguna\"]}],\"isGenerated\":false},\"Facilitator\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_facilitator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"cuid\",\"args\":[1]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_facilitator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_facilitator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomor_telepon_facilitator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"13\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password_facilitator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_pembuatan_akun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat_lengkap_facilitator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_aktif\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_kabupaten\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kabupaten\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Kabupaten\",\"nativeType\":null,\"relationName\":\"FacilitatorToKabupaten\",\"relationFromFields\":[\"id_kabupaten\"],\"relationToFields\":[\"id_kabupaten\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workshops\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Workshop\",\"nativeType\":null,\"relationName\":\"FacilitatorToWorkshop\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"email_facilitator\"],[\"nomor_telepon_facilitator\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"email_facilitator\"]},{\"name\":null,\"fields\":[\"nomor_telepon_facilitator\"]}],\"isGenerated\":false},\"Admin\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_admin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"cuid\",\"args\":[1]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_depan_admin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_belakang_admin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_admin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password_admin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_pembuatan_akun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"email_admin\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"email_admin\"]}],\"isGenerated\":false},\"Artikel\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_artikel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"judul_artikel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_artikel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deskripsi_artikel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isi_artikel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_artikel\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatusArtikel\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_verifikasi\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatusVerifikasiArtikel\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gambar_artikel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_aktif\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_kategori_artikel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kategori\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"KategoriArtikel\",\"nativeType\":null,\"relationName\":\"ArtikelToKategoriArtikel\",\"relationFromFields\":[\"id_kategori_artikel\"],\"relationToFields\":[\"id_kategori_artikel\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pengguna\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pengguna\",\"nativeType\":null,\"relationName\":\"ArtikelToPengguna\",\"relationFromFields\":[\"id_pengguna\"],\"relationToFields\":[\"id_pengguna\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artikel_disimpan\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ArtikelDisimpan\",\"nativeType\":null,\"relationName\":\"ArtikelToArtikelDisimpan\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artikel_disukai\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ArtikelDisukai\",\"nativeType\":null,\"relationName\":\"ArtikelToArtikelDisukai\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"komentar_artikel\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"KomentarArtikel\",\"nativeType\":null,\"relationName\":\"ArtikelToKomentarArtikel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"KategoriArtikel\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_kategori_artikel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_kategori_artikel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artikel\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Artikel\",\"nativeType\":null,\"relationName\":\"ArtikelToKategoriArtikel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ArtikelDisimpan\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_penyimpanan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_artikel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artikel\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Artikel\",\"nativeType\":null,\"relationName\":\"ArtikelToArtikelDisimpan\",\"relationFromFields\":[\"id_artikel\"],\"relationToFields\":[\"id_artikel\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pengguna\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pengguna\",\"nativeType\":null,\"relationName\":\"ArtikelDisimpanToPengguna\",\"relationFromFields\":[\"id_pengguna\"],\"relationToFields\":[\"id_pengguna\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"id_artikel\",\"id_pengguna\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id_artikel\",\"id_pengguna\"]}],\"isGenerated\":false},\"ArtikelDisukai\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_disukai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_artikel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artikel\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Artikel\",\"nativeType\":null,\"relationName\":\"ArtikelToArtikelDisukai\",\"relationFromFields\":[\"id_artikel\"],\"relationToFields\":[\"id_artikel\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pengguna\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pengguna\",\"nativeType\":null,\"relationName\":\"ArtikelDisukaiToPengguna\",\"relationFromFields\":[\"id_pengguna\"],\"relationToFields\":[\"id_pengguna\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"id_artikel\",\"id_pengguna\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id_artikel\",\"id_pengguna\"]}],\"isGenerated\":false},\"KomentarArtikel\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_komentar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_artikel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artikel\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Artikel\",\"nativeType\":null,\"relationName\":\"ArtikelToKomentarArtikel\",\"relationFromFields\":[\"id_artikel\"],\"relationToFields\":[\"id_artikel\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pengguna\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pengguna\",\"nativeType\":null,\"relationName\":\"KomentarArtikelToPengguna\",\"relationFromFields\":[\"id_pengguna\"],\"relationToFields\":[\"id_pengguna\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"komentar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_komentar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"id_artikel\",\"id_komentar\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id_artikel\",\"id_komentar\"]}],\"isGenerated\":false},\"Workshop\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_workshop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"judul_workshop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_workshop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alaamt_lengkap_workshop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deskripsi_workshop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"1000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"harga_workshop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"10\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kapasitas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_verifikasi\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatusVerifikasiWorkshop\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lat_lokasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"long_lokasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gambar_workshop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_aktif\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"waktu_mulai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"default\":\"08:00\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"waktu_berakhir\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"default\":\"16:00\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_facilitator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"facilitator\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Facilitator\",\"nativeType\":null,\"relationName\":\"FacilitatorToWorkshop\",\"relationFromFields\":[\"id_facilitator\"],\"relationToFields\":[\"id_facilitator\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_kabupaten\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kabupaten\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Kabupaten\",\"nativeType\":null,\"relationName\":\"KabupatenToWorkshop\",\"relationFromFields\":[\"id_kabupaten\"],\"relationToFields\":[\"id_kabupaten\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pendaftaran\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorkshopTerdaftar\",\"nativeType\":null,\"relationName\":\"WorkshopToWorkshopTerdaftar\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"WorkshopTerdaftar\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_pendaftaran\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_depan_peserta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_belakang_peserta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_peserta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomor_telepon_peserta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jenis_kelamin_peserta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_pendaftaran\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_pembayaran\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomor_tiket\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pengguna\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pengguna\",\"nativeType\":null,\"relationName\":\"PenggunaToWorkshopTerdaftar\",\"relationFromFields\":[\"id_pengguna\"],\"relationToFields\":[\"id_pengguna\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workshop\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Workshop\",\"nativeType\":null,\"relationName\":\"WorkshopToWorkshopTerdaftar\",\"relationFromFields\":[\"id_workshop\"],\"relationToFields\":[\"id_workshop\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_workshop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metode_pembayaran\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MetodePembayaran\",\"nativeType\":null,\"relationName\":\"MetodePembayaranToWorkshopTerdaftar\",\"relationFromFields\":[\"id_metode_pembayaran\"],\"relationToFields\":[\"id_metode_pembayaran\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_metode_pembayaran\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"nomor_tiket\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"nomor_tiket\"]}],\"isGenerated\":false},\"MetodePembayaran\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_metode_pembayaran\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_metode_pembayaran\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gambar_metode_pembayaran\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workshop_terdaftar\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorkshopTerdaftar\",\"nativeType\":null,\"relationName\":\"MetodePembayaranToWorkshopTerdaftar\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"KategoriTanaman\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_kategori_tanaman\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_kategori_tanaman\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanaman\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tanaman\",\"nativeType\":null,\"relationName\":\"KategoriTanamanToTanaman\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Tanaman\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_tanaman\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"36\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_tanaman\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_latin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"durasi_penanaman\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deskripsi_tanaman\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gambar_tanaman\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tingkat_kesulitan\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"TingkatKesulitan\",\"nativeType\":null,\"default\":\"MUDAH\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_kategori_tanaman\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kategori\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"KategoriTanaman\",\"nativeType\":null,\"relationName\":\"KategoriTanamanToTanaman\",\"relationFromFields\":[\"id_kategori_tanaman\"],\"relationToFields\":[\"id_kategori_tanaman\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instruksi_tanaman\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InstruksiTanaman\",\"nativeType\":null,\"relationName\":\"InstruksiTanamanToTanaman\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hari_penanaman\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HariPenanaman\",\"nativeType\":null,\"relationName\":\"HariPenanamanToTanaman\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanaman_pengguna\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TanamanPengguna\",\"nativeType\":null,\"relationName\":\"TanamanToTanamanPengguna\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InstruksiTanaman\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_instruksi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instruksi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"urutan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_tanaman\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"36\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanaman\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tanaman\",\"nativeType\":null,\"relationName\":\"InstruksiTanamanToTanaman\",\"relationFromFields\":[\"id_tanaman\"],\"relationToFields\":[\"id_tanaman\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"HariPenanaman\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_hari_penanaman\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hari_ke\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_fase\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FasePenanaman\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deskripsi_fase\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_tanaman\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"36\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanaman\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tanaman\",\"nativeType\":null,\"relationName\":\"HariPenanamanToTanaman\",\"relationFromFields\":[\"id_tanaman\"],\"relationToFields\":[\"id_tanaman\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tugas_penanaman\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TugasPenanaman\",\"nativeType\":null,\"relationName\":\"HariPenanamanToTugasPenanaman\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"id_tanaman\",\"hari_ke\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id_tanaman\",\"hari_ke\"]}],\"isGenerated\":false},\"TugasPenanaman\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_tugas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_tugas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jenis_tugas\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"JenisTugas\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estimasi_waktu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_hari_penanaman\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hari_penanaman\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HariPenanaman\",\"nativeType\":null,\"relationName\":\"HariPenanamanToTugasPenanaman\",\"relationFromFields\":[\"id_hari_penanaman\"],\"relationToFields\":[\"id_hari_penanaman\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TanamanPengguna\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_tanaman_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"36\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_custom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_penanaman\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_target_panen\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_penanaman\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"StatusPenanaman\",\"nativeType\":null,\"default\":\"AKTIF\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hari_ke_saat_ini\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"progress_persen\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"catatan_umum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_tanaman\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"36\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"36\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanaman\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tanaman\",\"nativeType\":null,\"relationName\":\"TanamanToTanamanPengguna\",\"relationFromFields\":[\"id_tanaman\"],\"relationToFields\":[\"id_tanaman\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pengguna\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pengguna\",\"nativeType\":null,\"relationName\":\"PenggunaToTanamanPengguna\",\"relationFromFields\":[\"id_pengguna\"],\"relationToFields\":[\"id_pengguna\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hari_tanaman\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HariTanamanPengguna\",\"nativeType\":null,\"relationName\":\"HariTanamanPenggunaToTanamanPengguna\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"HariTanamanPengguna\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_hari_tanaman_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hari_ke\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_aktual\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fase_penanaman\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FasePenanaman\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_hari\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"StatusHari\",\"nativeType\":null,\"default\":\"BELUM_DIMULAI\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"catatan_harian\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_tugas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tugas_selesai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"progress_hari_persen\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_tanaman_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"36\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanaman_pengguna\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TanamanPengguna\",\"nativeType\":null,\"relationName\":\"HariTanamanPenggunaToTanamanPengguna\",\"relationFromFields\":[\"id_tanaman_pengguna\"],\"relationToFields\":[\"id_tanaman_pengguna\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tugas_penanaman\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TugasPenanamanPengguna\",\"nativeType\":null,\"relationName\":\"HariTanamanPenggunaToTugasPenanamanPengguna\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"id_tanaman_pengguna\",\"hari_ke\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id_tanaman_pengguna\",\"hari_ke\"]}],\"isGenerated\":false},\"TugasPenanamanPengguna\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_tugas_penanaman_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_tugas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deskripsi_tugas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jenis_tugas\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"JenisTugas\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_selesai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_selesai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"durasi_pengerjaan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_hari_tanaman_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"hari_tanaman\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HariTanamanPengguna\",\"nativeType\":null,\"relationName\":\"HariTanamanPenggunaToTugasPenanamanPengguna\",\"relationFromFields\":[\"id_hari_tanaman_pengguna\"],\"relationToFields\":[\"id_hari_tanaman_pengguna\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"StatusArtikel\":{\"values\":[{\"name\":\"DRAFT\",\"dbName\":null},{\"name\":\"PUBLISHED\",\"dbName\":null}],\"dbName\":null},\"StatusVerifikasiArtikel\":{\"values\":[{\"name\":\"MENUNGGU\",\"dbName\":null},{\"name\":\"DIVERIFIKASI\",\"dbName\":null},{\"name\":\"DITOLAK\",\"dbName\":null}],\"dbName\":null},\"StatusVerifikasiWorkshop\":{\"values\":[{\"name\":\"MENUNGGU\",\"dbName\":null},{\"name\":\"DIVERIFIKASI\",\"dbName\":null},{\"name\":\"DITOLAK\",\"dbName\":null}],\"dbName\":null},\"JenisTugas\":{\"values\":[{\"name\":\"TUGAS_BIASA\",\"dbName\":null},{\"name\":\"PENGECEKAN_HARIAN\",\"dbName\":null}],\"dbName\":null},\"FasePenanaman\":{\"values\":[{\"name\":\"PERSIAPAN\",\"dbName\":null},{\"name\":\"PENANAMAN\",\"dbName\":null},{\"name\":\"PERTUMBUHAN\",\"dbName\":null},{\"name\":\"PEMELIHARAAN\",\"dbName\":null},{\"name\":\"PRAPANEN\",\"dbName\":null},{\"name\":\"PANEN\",\"dbName\":null},{\"name\":\"PASCA_PANEN\",\"dbName\":null}],\"dbName\":null},\"StatusPenanaman\":{\"values\":[{\"name\":\"AKTIF\",\"dbName\":null},{\"name\":\"SELESAI\",\"dbName\":null},{\"name\":\"DIBATALKAN\",\"dbName\":null},{\"name\":\"DITUNDA\",\"dbName\":null}],\"dbName\":null},\"StatusHari\":{\"values\":[{\"name\":\"BELUM_DIMULAI\",\"dbName\":null},{\"name\":\"SEDANG_BERJALAN\",\"dbName\":null},{\"name\":\"SELESAI\",\"dbName\":null},{\"name\":\"TERLEWAT\",\"dbName\":null}],\"dbName\":null},\"TingkatKesulitan\":{\"values\":[{\"name\":\"SANGAT_MUDAH\",\"dbName\":null},{\"name\":\"MUDAH\",\"dbName\":null},{\"name\":\"SEDANG\",\"dbName\":null},{\"name\":\"SULIT\",\"dbName\":null},{\"name\":\"SANGAT_SULIT\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

