
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
} = require('./runtime/library.js')


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




  const path = require('path')

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
  komentar: 'komentar'
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
  id_facilitator: 'id_facilitator',
  id_kabupaten: 'id_kabupaten'
};

exports.Prisma.WorkshopTerdaftarScalarFieldEnum = {
  id_pendaftaran: 'id_pendaftaran',
  nama_peserta: 'nama_peserta',
  email_peserta: 'email_peserta',
  nomor_telepon_peserta: 'nomor_telepon_peserta',
  tanggal_pendaftaran: 'tanggal_pendaftaran',
  status_pembayaran: 'status_pembayaran',
  nomor_tiket: 'nomor_tiket',
  id_pengguna: 'id_pengguna',
  id_workshop: 'id_workshop'
};

exports.Prisma.TanamanScalarFieldEnum = {
  id_tanaman: 'id_tanaman',
  nama_tanaman: 'nama_tanaman',
  nama_latin: 'nama_latin',
  durasi_penanaman: 'durasi_penanaman',
  deskripsi_tanaman: 'deskripsi_tanaman'
};

exports.Prisma.InstruksiTanamanScalarFieldEnum = {
  id_instruksi: 'id_instruksi',
  instruksi: 'instruksi',
  id_tanaman: 'id_tanaman'
};

exports.Prisma.HariPenanamanScalarFieldEnum = {
  id_hari_penanaman: 'id_hari_penanaman',
  jenis_tugas: 'jenis_tugas',
  id_tanaman: 'id_tanaman'
};

exports.Prisma.TugasPenanamanScalarFieldEnum = {
  id_tugas: 'id_tugas',
  nama_tugas: 'nama_tugas',
  id_hari_penanaman: 'id_hari_penanaman'
};

exports.Prisma.TanamanPenggunaScalarFieldEnum = {
  id_tanaman_pengguna: 'id_tanaman_pengguna',
  tanggal_penanaman: 'tanggal_penanaman',
  status_penanaman: 'status_penanaman',
  nama_tanaman: 'nama_tanaman',
  id_tanaman: 'id_tanaman',
  id_pengguna: 'id_pengguna'
};

exports.Prisma.HariTanamanPenggunaScalarFieldEnum = {
  id_hari_tanaman_pengguna: 'id_hari_tanaman_pengguna',
  catatan: 'catatan',
  id_tanaman_pengguna: 'id_tanaman_pengguna'
};

exports.Prisma.TugasPenanamanPenggunaScalarFieldEnum = {
  id_tugas_penanaman_pengguna: 'id_tugas_penanaman_pengguna',
  nama_tugas: 'nama_tugas',
  id_hari_tanaman_pengguna: 'id_hari_tanaman_pengguna'
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
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel Provinsi {\n  id_provinsi   Int    @id @default(autoincrement())\n  nama_provinsi String @db.VarChar(100)\n\n  kabupaten Kabupaten[]\n}\n\nmodel Kabupaten {\n  id_kabupaten   Int    @id @default(autoincrement())\n  nama_kabupaten String @db.VarChar(100)\n  type           String @db.VarChar(100)\n\n  id_provinsi Int\n  provinsi    Provinsi @relation(fields: [id_provinsi], references: [id_provinsi])\n\n  facilitators Facilitator[]\n  workshop     Workshop[]\n}\n\nmodel Pengguna {\n  id_pengguna            String   @id @default(cuid())\n  nama_depan_pengguna    String   @db.VarChar(50)\n  nama_belakang_pengguna String   @db.VarChar(50)\n  tanggal_lahir_pengguna DateTime\n  email_pengguna         String   @db.VarChar(50)\n  nomor_telepon_pengguna String   @db.VarChar(13)\n  jenisKelamin           Int\n  password_pengguna      String   @db.VarChar(100)\n  tanggal_pembuatan_akun DateTime\n  kode_verifikasi        String   @db.Char(4)\n  status_verfikasi       Boolean\n  avatar                 String?  @db.VarChar(255)\n  status_aktif           Boolean  @default(true)\n\n  workshop_terdaftar WorkshopTerdaftar[]\n  artikel            Artikel[]\n  artikel_disimpan   ArtikelDisimpan[]\n  artikel_disukai    ArtikelDisukai[]\n  komentar_artikel   KomentarArtikel[]\n  tanaman_pengguna   TanamanPengguna[]\n\n  @@unique([email_pengguna])\n  @@unique([nomor_telepon_pengguna])\n}\n\nmodel Facilitator {\n  id_facilitator             String   @id @default(cuid())\n  nama_facilitator           String   @db.VarChar(50)\n  email_facilitator          String   @db.VarChar(50)\n  nomor_telepon_facilitator  String   @db.VarChar(13)\n  password_facilitator       String   @db.VarChar(100)\n  tanggal_pembuatan_akun     DateTime\n  alamat_lengkap_facilitator String   @db.VarChar(255)\n  avatar                     String?  @db.VarChar(255)\n  status_aktif               Boolean  @default(true)\n\n  id_kabupaten Int\n  kabupaten    Kabupaten @relation(fields: [id_kabupaten], references: [id_kabupaten])\n\n  workshops Workshop[]\n\n  @@unique([email_facilitator])\n  @@unique([nomor_telepon_facilitator])\n}\n\nmodel Admin {\n  id_admin               String   @id @default(cuid())\n  nama_depan_admin       String   @db.VarChar(50)\n  nama_belakang_admin    String   @db.VarChar(50)\n  email_admin            String   @db.VarChar(50)\n  password_admin         String   @db.VarChar(100)\n  tanggal_pembuatan_akun DateTime\n  avatar                 String?  @db.VarChar(255)\n\n  @@unique([email_admin])\n}\n\nenum StatusArtikel {\n  DRAFT\n  PUBLISHED\n}\n\nmodel Artikel {\n  id_artikel        String        @id @db.VarChar(50)\n  judul_artikel     String        @db.VarChar(100)\n  tanggal_artikel   DateTime      @default(now())\n  deskripsi_artikel String        @db.Text\n  isi_artikel       String        @db.Text\n  status_artikel    StatusArtikel\n  status_verifikasi Boolean\n  gambar_artikel    String        @db.VarChar(255)\n  status_aktif      Boolean       @default(true)\n\n  id_kategori_artikel Int\n  kategori            KategoriArtikel   @relation(fields: [id_kategori_artikel], references: [id_kategori_artikel])\n  id_pengguna         String\n  pengguna            Pengguna          @relation(fields: [id_pengguna], references: [id_pengguna])\n  artikel_disimpan    ArtikelDisimpan[]\n  artikel_disukai     ArtikelDisukai[]\n  komentar_artikel    KomentarArtikel[]\n}\n\nmodel KategoriArtikel {\n  id_kategori_artikel   Int    @id @default(autoincrement())\n  nama_kategori_artikel String @db.VarChar(100)\n\n  artikel Artikel[]\n}\n\nmodel ArtikelDisimpan {\n  id_penyimpanan Int      @id @default(autoincrement())\n  id_artikel     String\n  artikel        Artikel  @relation(fields: [id_artikel], references: [id_artikel])\n  id_pengguna    String\n  pengguna       Pengguna @relation(fields: [id_pengguna], references: [id_pengguna])\n\n  @@unique([id_artikel, id_pengguna])\n}\n\nmodel ArtikelDisukai {\n  id_disukai  Int      @id @default(autoincrement())\n  id_artikel  String\n  artikel     Artikel  @relation(fields: [id_artikel], references: [id_artikel])\n  id_pengguna String\n  pengguna    Pengguna @relation(fields: [id_pengguna], references: [id_pengguna])\n  rating      Int\n\n  @@unique([id_artikel, id_pengguna])\n}\n\nmodel KomentarArtikel {\n  id_komentar Int      @id @default(autoincrement())\n  id_artikel  String\n  artikel     Artikel  @relation(fields: [id_artikel], references: [id_artikel])\n  id_pengguna String\n  pengguna    Pengguna @relation(fields: [id_pengguna], references: [id_pengguna])\n  komentar    String   @db.Text\n\n  @@unique([id_artikel, id_pengguna])\n}\n\nmodel Workshop {\n  id_workshop             String   @id @default(cuid())\n  judul_workshop          String   @db.VarChar(100)\n  tanggal_workshop        DateTime @db.Date\n  alaamt_lengkap_workshop String   @db.VarChar(100)\n  deskripsi_workshop      String   @db.VarChar(1000)\n  harga_workshop          Decimal  @db.Decimal(10, 2)\n  kapasitas               Int\n  status_verifikasi       Boolean\n  lat_lokasi              Int\n  long_lokasi             Int\n  gambar_workshop         String   @db.VarChar(255)\n  status_aktif            Boolean  @default(true)\n\n  id_facilitator String\n  facilitator    Facilitator         @relation(fields: [id_facilitator], references: [id_facilitator])\n  id_kabupaten   Int\n  kabupaten      Kabupaten           @relation(fields: [id_kabupaten], references: [id_kabupaten])\n  pendaftaran    WorkshopTerdaftar[]\n}\n\nmodel WorkshopTerdaftar {\n  id_pendaftaran        Int      @id @default(autoincrement())\n  nama_peserta          String   @db.VarChar(100)\n  email_peserta         String   @db.VarChar(100)\n  nomor_telepon_peserta String   @db.VarChar(50)\n  tanggal_pendaftaran   DateTime @default(now())\n  status_pembayaran     String   @db.VarChar(20)\n  nomor_tiket           String?  @db.VarChar(50)\n\n  pengguna    Pengguna @relation(fields: [id_pengguna], references: [id_pengguna])\n  id_pengguna String\n  workshop    Workshop @relation(fields: [id_workshop], references: [id_workshop])\n  id_workshop String\n\n  @@unique([nomor_tiket])\n}\n\nmodel Tanaman {\n  id_tanaman        Int    @id @default(autoincrement())\n  nama_tanaman      String @db.VarChar\n  nama_latin        String @db.VarChar\n  durasi_penanaman  Int\n  deskripsi_tanaman String @db.VarChar\n\n  instruksi_tanaman InstruksiTanaman[]\n  hari_penanaman    HariPenanaman[]\n  tanaman_pengguna  TanamanPengguna[]\n}\n\nmodel InstruksiTanaman {\n  id_instruksi Int    @id @default(autoincrement())\n  instruksi    String @db.Text\n\n  id_tanaman Int\n  tanaman    Tanaman @relation(fields: [id_tanaman], references: [id_tanaman])\n}\n\nmodel HariPenanaman {\n  id_hari_penanaman Int              @id @default(autoincrement())\n  jenis_tugas       Int\n  id_tanaman        Int\n  tanaman           Tanaman          @relation(fields: [id_tanaman], references: [id_tanaman])\n  tugas_penanaman   TugasPenanaman[]\n}\n\nmodel TugasPenanaman {\n  id_tugas          Int           @id @default(autoincrement())\n  nama_tugas        String        @db.Text\n  id_hari_penanaman Int\n  hari_penanaman    HariPenanaman @relation(fields: [id_hari_penanaman], references: [id_hari_penanaman])\n}\n\nmodel TanamanPengguna {\n  id_tanaman_pengguna Int      @id @default(autoincrement())\n  tanggal_penanaman   DateTime\n  status_penanaman    Boolean\n  nama_tanaman        String   @db.VarChar(50)\n\n  id_tanaman   Int\n  tanaman      Tanaman               @relation(fields: [id_tanaman], references: [id_tanaman])\n  id_pengguna  String\n  pengguna     Pengguna              @relation(fields: [id_pengguna], references: [id_pengguna])\n  hari_tanaman HariTanamanPengguna[]\n}\n\nmodel HariTanamanPengguna {\n  id_hari_tanaman_pengguna Int                      @id @default(autoincrement())\n  catatan                  String                   @db.VarChar\n  tugas_penanaman          TugasPenanamanPengguna[]\n  id_tanaman_pengguna      Int\n  tanaman_pengguna         TanamanPengguna          @relation(fields: [id_tanaman_pengguna], references: [id_tanaman_pengguna])\n}\n\nmodel TugasPenanamanPengguna {\n  id_tugas_penanaman_pengguna Int                 @id @default(autoincrement())\n  nama_tugas                  String              @db.VarChar\n  id_hari_tanaman_pengguna    Int\n  hari_tanaman                HariTanamanPengguna @relation(fields: [id_hari_tanaman_pengguna], references: [id_hari_tanaman_pengguna])\n}\n",
  "inlineSchemaHash": "25acf4837d4212c83ea2f2b14a2181a20513eb2397bd9b480710ce9d2f9be7c7",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/generated/prisma",
    "generated/prisma",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Provinsi\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_provinsi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_provinsi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kabupaten\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Kabupaten\",\"nativeType\":null,\"relationName\":\"KabupatenToProvinsi\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Kabupaten\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_kabupaten\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_kabupaten\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_provinsi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provinsi\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Provinsi\",\"nativeType\":null,\"relationName\":\"KabupatenToProvinsi\",\"relationFromFields\":[\"id_provinsi\"],\"relationToFields\":[\"id_provinsi\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"facilitators\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Facilitator\",\"nativeType\":null,\"relationName\":\"FacilitatorToKabupaten\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workshop\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Workshop\",\"nativeType\":null,\"relationName\":\"KabupatenToWorkshop\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Pengguna\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"cuid\",\"args\":[1]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_depan_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_belakang_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_lahir_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomor_telepon_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"13\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jenisKelamin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_pembuatan_akun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kode_verifikasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"4\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_verfikasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_aktif\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workshop_terdaftar\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorkshopTerdaftar\",\"nativeType\":null,\"relationName\":\"PenggunaToWorkshopTerdaftar\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artikel\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Artikel\",\"nativeType\":null,\"relationName\":\"ArtikelToPengguna\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artikel_disimpan\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ArtikelDisimpan\",\"nativeType\":null,\"relationName\":\"ArtikelDisimpanToPengguna\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artikel_disukai\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ArtikelDisukai\",\"nativeType\":null,\"relationName\":\"ArtikelDisukaiToPengguna\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"komentar_artikel\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"KomentarArtikel\",\"nativeType\":null,\"relationName\":\"KomentarArtikelToPengguna\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanaman_pengguna\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TanamanPengguna\",\"nativeType\":null,\"relationName\":\"PenggunaToTanamanPengguna\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"email_pengguna\"],[\"nomor_telepon_pengguna\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"email_pengguna\"]},{\"name\":null,\"fields\":[\"nomor_telepon_pengguna\"]}],\"isGenerated\":false},\"Facilitator\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_facilitator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"cuid\",\"args\":[1]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_facilitator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_facilitator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomor_telepon_facilitator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"13\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password_facilitator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_pembuatan_akun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat_lengkap_facilitator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_aktif\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_kabupaten\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kabupaten\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Kabupaten\",\"nativeType\":null,\"relationName\":\"FacilitatorToKabupaten\",\"relationFromFields\":[\"id_kabupaten\"],\"relationToFields\":[\"id_kabupaten\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workshops\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Workshop\",\"nativeType\":null,\"relationName\":\"FacilitatorToWorkshop\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"email_facilitator\"],[\"nomor_telepon_facilitator\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"email_facilitator\"]},{\"name\":null,\"fields\":[\"nomor_telepon_facilitator\"]}],\"isGenerated\":false},\"Admin\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_admin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"cuid\",\"args\":[1]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_depan_admin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_belakang_admin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_admin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password_admin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_pembuatan_akun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"email_admin\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"email_admin\"]}],\"isGenerated\":false},\"Artikel\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_artikel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"judul_artikel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_artikel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deskripsi_artikel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isi_artikel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_artikel\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatusArtikel\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_verifikasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gambar_artikel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_aktif\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_kategori_artikel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kategori\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"KategoriArtikel\",\"nativeType\":null,\"relationName\":\"ArtikelToKategoriArtikel\",\"relationFromFields\":[\"id_kategori_artikel\"],\"relationToFields\":[\"id_kategori_artikel\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pengguna\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pengguna\",\"nativeType\":null,\"relationName\":\"ArtikelToPengguna\",\"relationFromFields\":[\"id_pengguna\"],\"relationToFields\":[\"id_pengguna\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artikel_disimpan\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ArtikelDisimpan\",\"nativeType\":null,\"relationName\":\"ArtikelToArtikelDisimpan\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artikel_disukai\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ArtikelDisukai\",\"nativeType\":null,\"relationName\":\"ArtikelToArtikelDisukai\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"komentar_artikel\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"KomentarArtikel\",\"nativeType\":null,\"relationName\":\"ArtikelToKomentarArtikel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"KategoriArtikel\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_kategori_artikel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_kategori_artikel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artikel\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Artikel\",\"nativeType\":null,\"relationName\":\"ArtikelToKategoriArtikel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ArtikelDisimpan\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_penyimpanan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_artikel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artikel\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Artikel\",\"nativeType\":null,\"relationName\":\"ArtikelToArtikelDisimpan\",\"relationFromFields\":[\"id_artikel\"],\"relationToFields\":[\"id_artikel\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pengguna\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pengguna\",\"nativeType\":null,\"relationName\":\"ArtikelDisimpanToPengguna\",\"relationFromFields\":[\"id_pengguna\"],\"relationToFields\":[\"id_pengguna\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"id_artikel\",\"id_pengguna\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id_artikel\",\"id_pengguna\"]}],\"isGenerated\":false},\"ArtikelDisukai\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_disukai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_artikel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artikel\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Artikel\",\"nativeType\":null,\"relationName\":\"ArtikelToArtikelDisukai\",\"relationFromFields\":[\"id_artikel\"],\"relationToFields\":[\"id_artikel\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pengguna\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pengguna\",\"nativeType\":null,\"relationName\":\"ArtikelDisukaiToPengguna\",\"relationFromFields\":[\"id_pengguna\"],\"relationToFields\":[\"id_pengguna\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"id_artikel\",\"id_pengguna\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id_artikel\",\"id_pengguna\"]}],\"isGenerated\":false},\"KomentarArtikel\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_komentar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_artikel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artikel\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Artikel\",\"nativeType\":null,\"relationName\":\"ArtikelToKomentarArtikel\",\"relationFromFields\":[\"id_artikel\"],\"relationToFields\":[\"id_artikel\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pengguna\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pengguna\",\"nativeType\":null,\"relationName\":\"KomentarArtikelToPengguna\",\"relationFromFields\":[\"id_pengguna\"],\"relationToFields\":[\"id_pengguna\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"komentar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"id_artikel\",\"id_pengguna\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id_artikel\",\"id_pengguna\"]}],\"isGenerated\":false},\"Workshop\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_workshop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"cuid\",\"args\":[1]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"judul_workshop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_workshop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alaamt_lengkap_workshop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deskripsi_workshop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"1000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"harga_workshop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"10\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kapasitas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_verifikasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lat_lokasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"long_lokasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gambar_workshop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_aktif\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_facilitator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"facilitator\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Facilitator\",\"nativeType\":null,\"relationName\":\"FacilitatorToWorkshop\",\"relationFromFields\":[\"id_facilitator\"],\"relationToFields\":[\"id_facilitator\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_kabupaten\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kabupaten\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Kabupaten\",\"nativeType\":null,\"relationName\":\"KabupatenToWorkshop\",\"relationFromFields\":[\"id_kabupaten\"],\"relationToFields\":[\"id_kabupaten\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pendaftaran\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorkshopTerdaftar\",\"nativeType\":null,\"relationName\":\"WorkshopToWorkshopTerdaftar\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"WorkshopTerdaftar\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_pendaftaran\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_peserta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_peserta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomor_telepon_peserta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_pendaftaran\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_pembayaran\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomor_tiket\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pengguna\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pengguna\",\"nativeType\":null,\"relationName\":\"PenggunaToWorkshopTerdaftar\",\"relationFromFields\":[\"id_pengguna\"],\"relationToFields\":[\"id_pengguna\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workshop\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Workshop\",\"nativeType\":null,\"relationName\":\"WorkshopToWorkshopTerdaftar\",\"relationFromFields\":[\"id_workshop\"],\"relationToFields\":[\"id_workshop\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_workshop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"nomor_tiket\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"nomor_tiket\"]}],\"isGenerated\":false},\"Tanaman\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_tanaman\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_tanaman\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_latin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"durasi_penanaman\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deskripsi_tanaman\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instruksi_tanaman\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InstruksiTanaman\",\"nativeType\":null,\"relationName\":\"InstruksiTanamanToTanaman\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hari_penanaman\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HariPenanaman\",\"nativeType\":null,\"relationName\":\"HariPenanamanToTanaman\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanaman_pengguna\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TanamanPengguna\",\"nativeType\":null,\"relationName\":\"TanamanToTanamanPengguna\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InstruksiTanaman\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_instruksi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instruksi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_tanaman\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanaman\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tanaman\",\"nativeType\":null,\"relationName\":\"InstruksiTanamanToTanaman\",\"relationFromFields\":[\"id_tanaman\"],\"relationToFields\":[\"id_tanaman\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"HariPenanaman\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_hari_penanaman\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jenis_tugas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_tanaman\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanaman\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tanaman\",\"nativeType\":null,\"relationName\":\"HariPenanamanToTanaman\",\"relationFromFields\":[\"id_tanaman\"],\"relationToFields\":[\"id_tanaman\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tugas_penanaman\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TugasPenanaman\",\"nativeType\":null,\"relationName\":\"HariPenanamanToTugasPenanaman\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TugasPenanaman\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_tugas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_tugas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_hari_penanaman\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hari_penanaman\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HariPenanaman\",\"nativeType\":null,\"relationName\":\"HariPenanamanToTugasPenanaman\",\"relationFromFields\":[\"id_hari_penanaman\"],\"relationToFields\":[\"id_hari_penanaman\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TanamanPengguna\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_tanaman_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_penanaman\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_penanaman\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_tanaman\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_tanaman\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanaman\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tanaman\",\"nativeType\":null,\"relationName\":\"TanamanToTanamanPengguna\",\"relationFromFields\":[\"id_tanaman\"],\"relationToFields\":[\"id_tanaman\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pengguna\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pengguna\",\"nativeType\":null,\"relationName\":\"PenggunaToTanamanPengguna\",\"relationFromFields\":[\"id_pengguna\"],\"relationToFields\":[\"id_pengguna\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hari_tanaman\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HariTanamanPengguna\",\"nativeType\":null,\"relationName\":\"HariTanamanPenggunaToTanamanPengguna\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"HariTanamanPengguna\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_hari_tanaman_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"catatan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tugas_penanaman\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TugasPenanamanPengguna\",\"nativeType\":null,\"relationName\":\"HariTanamanPenggunaToTugasPenanamanPengguna\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_tanaman_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanaman_pengguna\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TanamanPengguna\",\"nativeType\":null,\"relationName\":\"HariTanamanPenggunaToTanamanPengguna\",\"relationFromFields\":[\"id_tanaman_pengguna\"],\"relationToFields\":[\"id_tanaman_pengguna\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TugasPenanamanPengguna\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_tugas_penanaman_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_tugas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_hari_tanaman_pengguna\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hari_tanaman\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HariTanamanPengguna\",\"nativeType\":null,\"relationName\":\"HariTanamanPenggunaToTugasPenanamanPengguna\",\"relationFromFields\":[\"id_hari_tanaman_pengguna\"],\"relationToFields\":[\"id_hari_tanaman_pengguna\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"StatusArtikel\":{\"values\":[{\"name\":\"DRAFT\",\"dbName\":null},{\"name\":\"PUBLISHED\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "src/generated/prisma/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/generated/prisma/schema.prisma")
