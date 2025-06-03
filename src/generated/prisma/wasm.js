
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
  id_kategori_tanaman: 'id_kategori_tanaman'
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
  MetodePembayaran: 'MetodePembayaran',
  kategoriTanaman: 'kategoriTanaman',
  Tanaman: 'Tanaman',
  InstruksiTanaman: 'InstruksiTanaman',
  HariPenanaman: 'HariPenanaman',
  TugasPenanaman: 'TugasPenanaman',
  TanamanPengguna: 'TanamanPengguna',
  HariTanamanPengguna: 'HariTanamanPengguna',
  TugasPenanamanPengguna: 'TugasPenanamanPengguna'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
