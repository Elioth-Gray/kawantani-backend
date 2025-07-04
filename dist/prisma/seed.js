"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// prisma/seed.ts
const client_1 = require("@prisma/client");
const prismaClient_1 = __importDefault(require("../src/prisma/prismaClient"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Data seeding disini
        yield prismaClient_1.default.provinsi.createMany({
            data: [
                {
                    id_provinsi: 11,
                    nama_provinsi: 'Aceh (NAD)',
                },
                {
                    id_provinsi: 12,
                    nama_provinsi: 'Sumatera Utara',
                },
                {
                    id_provinsi: 13,
                    nama_provinsi: 'Sumatera Barat',
                },
                {
                    id_provinsi: 14,
                    nama_provinsi: 'Riau',
                },
                {
                    id_provinsi: 15,
                    nama_provinsi: 'Jambi',
                },
                {
                    id_provinsi: 16,
                    nama_provinsi: 'Sumatera Selatan',
                },
                {
                    id_provinsi: 17,
                    nama_provinsi: 'Bengkulu',
                },
                {
                    id_provinsi: 18,
                    nama_provinsi: 'Lampung',
                },
                {
                    id_provinsi: 19,
                    nama_provinsi: 'Kepulauan Bangka Belitung',
                },
                {
                    id_provinsi: 21,
                    nama_provinsi: 'Kepulauan Riau',
                },
                {
                    id_provinsi: 31,
                    nama_provinsi: 'DKI Jakarta',
                },
                {
                    id_provinsi: 32,
                    nama_provinsi: 'Jawa Barat',
                },
                {
                    id_provinsi: 33,
                    nama_provinsi: 'Jawa Tengah',
                },
                {
                    id_provinsi: 34,
                    nama_provinsi: 'DI Yogyakarta',
                },
                {
                    id_provinsi: 35,
                    nama_provinsi: 'Jawa Timur',
                },
                {
                    id_provinsi: 36,
                    nama_provinsi: 'Banten',
                },
                {
                    id_provinsi: 51,
                    nama_provinsi: 'Bali',
                },
                {
                    id_provinsi: 52,
                    nama_provinsi: 'Nusa Tenggara Barat',
                },
                {
                    id_provinsi: 53,
                    nama_provinsi: 'Nusa Tenggara Timur',
                },
                {
                    id_provinsi: 61,
                    nama_provinsi: 'Kalimantan Barat',
                },
                {
                    id_provinsi: 62,
                    nama_provinsi: 'Kalimantan Tengah',
                },
                {
                    id_provinsi: 63,
                    nama_provinsi: 'Kalimantan Selatan',
                },
                {
                    id_provinsi: 64,
                    nama_provinsi: 'Kalimantan Timur',
                },
                {
                    id_provinsi: 65,
                    nama_provinsi: 'Kalimantan Utara',
                },
                {
                    id_provinsi: 71,
                    nama_provinsi: 'Sulawesi Utara',
                },
                {
                    id_provinsi: 72,
                    nama_provinsi: 'Sulawesi Tengah',
                },
                {
                    id_provinsi: 73,
                    nama_provinsi: 'Sulawesi Selatan',
                },
                {
                    id_provinsi: 74,
                    nama_provinsi: 'Sulawesi Tenggara',
                },
                {
                    id_provinsi: 75,
                    nama_provinsi: 'Gorontalo',
                },
                {
                    id_provinsi: 76,
                    nama_provinsi: 'Sulawesi Barat',
                },
                {
                    id_provinsi: 81,
                    nama_provinsi: 'Maluku',
                },
                {
                    id_provinsi: 82,
                    nama_provinsi: 'Maluku Utara',
                },
                {
                    id_provinsi: 91,
                    nama_provinsi: 'Papua',
                },
                {
                    id_provinsi: 92,
                    nama_provinsi: 'Papua Barat',
                },
                {
                    id_provinsi: 93,
                    nama_provinsi: 'Papua Selatan',
                },
                {
                    id_provinsi: 94,
                    nama_provinsi: 'Papua Tengah',
                },
                {
                    id_provinsi: 95,
                    nama_provinsi: 'Papua Pegunungan',
                },
                {
                    id_provinsi: 96,
                    nama_provinsi: 'Papua Barat Daya',
                },
            ],
            skipDuplicates: true,
        });
        yield prismaClient_1.default.kabupaten.createMany({
            data: [
                {
                    id_kabupaten: 1101,
                    id_provinsi: 11,
                    nama_kabupaten: 'Simeulue',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1102,
                    id_provinsi: 11,
                    nama_kabupaten: 'Aceh Singkil',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1103,
                    id_provinsi: 11,
                    nama_kabupaten: 'Aceh Selatan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1104,
                    id_provinsi: 11,
                    nama_kabupaten: 'Aceh Tenggara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1105,
                    id_provinsi: 11,
                    nama_kabupaten: 'Aceh Timur',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1106,
                    id_provinsi: 11,
                    nama_kabupaten: 'Aceh Tengah',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1107,
                    id_provinsi: 11,
                    nama_kabupaten: 'Aceh Barat',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1108,
                    id_provinsi: 11,
                    nama_kabupaten: 'Aceh Besar',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1109,
                    id_provinsi: 11,
                    nama_kabupaten: 'Pidie',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1110,
                    id_provinsi: 11,
                    nama_kabupaten: 'Bireuen',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1111,
                    id_provinsi: 11,
                    nama_kabupaten: 'Aceh Utara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1112,
                    id_provinsi: 11,
                    nama_kabupaten: 'Aceh Barat Daya',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1113,
                    id_provinsi: 11,
                    nama_kabupaten: 'Gayo Lues',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1114,
                    id_provinsi: 11,
                    nama_kabupaten: 'Aceh Tamiang',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1115,
                    id_provinsi: 11,
                    nama_kabupaten: 'Nagan Raya',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1116,
                    id_provinsi: 11,
                    nama_kabupaten: 'Aceh Jaya',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1117,
                    id_provinsi: 11,
                    nama_kabupaten: 'Bener Meriah',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1118,
                    id_provinsi: 11,
                    nama_kabupaten: 'Pidie Jaya',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1171,
                    id_provinsi: 11,
                    nama_kabupaten: 'Banda Aceh',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 1172,
                    id_provinsi: 11,
                    nama_kabupaten: 'Sabang',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 1173,
                    id_provinsi: 11,
                    nama_kabupaten: 'Lhokseumawe',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 1174,
                    id_provinsi: 11,
                    nama_kabupaten: 'Langsa',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 1175,
                    id_provinsi: 11,
                    nama_kabupaten: 'Subulussalam',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 1201,
                    id_provinsi: 12,
                    nama_kabupaten: 'Nias',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1202,
                    id_provinsi: 12,
                    nama_kabupaten: 'Mandailing Natal',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1203,
                    id_provinsi: 12,
                    nama_kabupaten: 'Tapanuli Selatan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1204,
                    id_provinsi: 12,
                    nama_kabupaten: 'Tapanuli Tengah',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1205,
                    id_provinsi: 12,
                    nama_kabupaten: 'Tapanuli Utara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1206,
                    id_provinsi: 12,
                    nama_kabupaten: 'Toba Samosir',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1207,
                    id_provinsi: 12,
                    nama_kabupaten: 'Labuhan Batu',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1208,
                    id_provinsi: 12,
                    nama_kabupaten: 'Asahan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1209,
                    id_provinsi: 12,
                    nama_kabupaten: 'Simalungun',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1210,
                    id_provinsi: 12,
                    nama_kabupaten: 'Dairi',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1211,
                    id_provinsi: 12,
                    nama_kabupaten: 'Karo',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1212,
                    id_provinsi: 12,
                    nama_kabupaten: 'Deliserdang',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1213,
                    id_provinsi: 12,
                    nama_kabupaten: 'Langkat',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1214,
                    id_provinsi: 12,
                    nama_kabupaten: 'Nias Selatan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1215,
                    id_provinsi: 12,
                    nama_kabupaten: 'Humbang Hasundutan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1216,
                    id_provinsi: 12,
                    nama_kabupaten: 'Pakpak Bharat',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1217,
                    id_provinsi: 12,
                    nama_kabupaten: 'Samosir',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1218,
                    id_provinsi: 12,
                    nama_kabupaten: 'Serdang Bedagai',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1219,
                    id_provinsi: 12,
                    nama_kabupaten: 'Batu Bara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1220,
                    id_provinsi: 12,
                    nama_kabupaten: 'Padang Lawas Utara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1221,
                    id_provinsi: 12,
                    nama_kabupaten: 'Padang Lawas',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1222,
                    id_provinsi: 12,
                    nama_kabupaten: 'Labuhan Batu Selatan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1223,
                    id_provinsi: 12,
                    nama_kabupaten: 'Labuhan Batu Utara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1224,
                    id_provinsi: 12,
                    nama_kabupaten: 'Nias Utara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1225,
                    id_provinsi: 12,
                    nama_kabupaten: 'Nias Barat',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1271,
                    id_provinsi: 12,
                    nama_kabupaten: 'Sibolga',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 1272,
                    id_provinsi: 12,
                    nama_kabupaten: 'Tanjung Balai',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 1273,
                    id_provinsi: 12,
                    nama_kabupaten: 'Pematang Siantar',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 1274,
                    id_provinsi: 12,
                    nama_kabupaten: 'Tebing Tinggi',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 1275,
                    id_provinsi: 12,
                    nama_kabupaten: 'Medan',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 1276,
                    id_provinsi: 12,
                    nama_kabupaten: 'Binjai',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 1277,
                    id_provinsi: 12,
                    nama_kabupaten: 'Padangsidimpuan',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 1278,
                    id_provinsi: 12,
                    nama_kabupaten: 'Gunungsitoli',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 1301,
                    id_provinsi: 13,
                    nama_kabupaten: 'Kepulauan Mentawai',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1302,
                    id_provinsi: 13,
                    nama_kabupaten: 'Pesisir Selatan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1303,
                    id_provinsi: 13,
                    nama_kabupaten: 'Solok',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1304,
                    id_provinsi: 13,
                    nama_kabupaten: 'Sijunjung',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1305,
                    id_provinsi: 13,
                    nama_kabupaten: 'Tanah Datar',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1306,
                    id_provinsi: 13,
                    nama_kabupaten: 'Padang Pariaman',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1307,
                    id_provinsi: 13,
                    nama_kabupaten: 'Agam',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1308,
                    id_provinsi: 13,
                    nama_kabupaten: 'Lima Puluh Kota',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1309,
                    id_provinsi: 13,
                    nama_kabupaten: 'Pasaman',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1310,
                    id_provinsi: 13,
                    nama_kabupaten: 'Solok Selatan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1311,
                    id_provinsi: 13,
                    nama_kabupaten: 'Dharmasraya',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1312,
                    id_provinsi: 13,
                    nama_kabupaten: 'Pasaman Barat',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1371,
                    id_provinsi: 13,
                    nama_kabupaten: 'Padang',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 1372,
                    id_provinsi: 13,
                    nama_kabupaten: 'Solok',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 1373,
                    id_provinsi: 13,
                    nama_kabupaten: 'Sawah Lunto',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 1374,
                    id_provinsi: 13,
                    nama_kabupaten: 'Padang Panjang',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 1375,
                    id_provinsi: 13,
                    nama_kabupaten: 'Bukittinggi',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 1376,
                    id_provinsi: 13,
                    nama_kabupaten: 'Payakumbuh',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 1377,
                    id_provinsi: 13,
                    nama_kabupaten: 'Pariaman',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 1401,
                    id_provinsi: 14,
                    nama_kabupaten: 'Kuantan Singingi',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1402,
                    id_provinsi: 14,
                    nama_kabupaten: 'Indragiri Hulu',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1403,
                    id_provinsi: 14,
                    nama_kabupaten: 'Indragiri Hilir',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1404,
                    id_provinsi: 14,
                    nama_kabupaten: 'Pelalawan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1405,
                    id_provinsi: 14,
                    nama_kabupaten: 'S I A K',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1406,
                    id_provinsi: 14,
                    nama_kabupaten: 'Kampar',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1407,
                    id_provinsi: 14,
                    nama_kabupaten: 'Rokan Hulu',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1408,
                    id_provinsi: 14,
                    nama_kabupaten: 'Bengkalis',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1409,
                    id_provinsi: 14,
                    nama_kabupaten: 'Rokan Hilir',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1410,
                    id_provinsi: 14,
                    nama_kabupaten: 'Kepulauan Meranti',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1471,
                    id_provinsi: 14,
                    nama_kabupaten: 'Pekanbaru',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 1473,
                    id_provinsi: 14,
                    nama_kabupaten: 'Dumai',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 1501,
                    id_provinsi: 15,
                    nama_kabupaten: 'Kerinci',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1502,
                    id_provinsi: 15,
                    nama_kabupaten: 'Merangin',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1503,
                    id_provinsi: 15,
                    nama_kabupaten: 'Sarolangun',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1504,
                    id_provinsi: 15,
                    nama_kabupaten: 'Batang Hari',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1505,
                    id_provinsi: 15,
                    nama_kabupaten: 'Muaro Jambi',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1506,
                    id_provinsi: 15,
                    nama_kabupaten: 'Tanjung Jabung Timur',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1507,
                    id_provinsi: 15,
                    nama_kabupaten: 'Tanjung Jabung Barat',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1508,
                    id_provinsi: 15,
                    nama_kabupaten: 'Tebo',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1509,
                    id_provinsi: 15,
                    nama_kabupaten: 'Bungo',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1571,
                    id_provinsi: 15,
                    nama_kabupaten: 'Jambi',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 1572,
                    id_provinsi: 15,
                    nama_kabupaten: 'Sungai Penuh',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 1601,
                    id_provinsi: 16,
                    nama_kabupaten: 'Ogan Komering Ulu',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1602,
                    id_provinsi: 16,
                    nama_kabupaten: 'Ogan Komering Ilir',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1603,
                    id_provinsi: 16,
                    nama_kabupaten: 'Muara Enim',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1604,
                    id_provinsi: 16,
                    nama_kabupaten: 'Lahat',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1605,
                    id_provinsi: 16,
                    nama_kabupaten: 'Musi Rawas',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1606,
                    id_provinsi: 16,
                    nama_kabupaten: 'Musi Banyuasin',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1607,
                    id_provinsi: 16,
                    nama_kabupaten: 'Banyuasin',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1608,
                    id_provinsi: 16,
                    nama_kabupaten: 'Ogan Komering Ulu Selatan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1609,
                    id_provinsi: 16,
                    nama_kabupaten: 'Ogan Komering Ulu Timur',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1610,
                    id_provinsi: 16,
                    nama_kabupaten: 'Ogan Ilir',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1611,
                    id_provinsi: 16,
                    nama_kabupaten: 'Empat Lawang',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1612,
                    id_provinsi: 16,
                    nama_kabupaten: 'Penukal Abab Lematang Ilir',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1613,
                    id_provinsi: 16,
                    nama_kabupaten: 'Musi Rawas Utara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1671,
                    id_provinsi: 16,
                    nama_kabupaten: 'Palembang',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 1672,
                    id_provinsi: 16,
                    nama_kabupaten: 'Prabumulih',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 1673,
                    id_provinsi: 16,
                    nama_kabupaten: 'Pagar Alam',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 1674,
                    id_provinsi: 16,
                    nama_kabupaten: 'Lubuklinggau',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 1701,
                    id_provinsi: 17,
                    nama_kabupaten: 'Bengkulu Selatan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1702,
                    id_provinsi: 17,
                    nama_kabupaten: 'Rejang Lebong',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1703,
                    id_provinsi: 17,
                    nama_kabupaten: 'Bengkulu Utara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1704,
                    id_provinsi: 17,
                    nama_kabupaten: 'Kaur',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1705,
                    id_provinsi: 17,
                    nama_kabupaten: 'Seluma',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1706,
                    id_provinsi: 17,
                    nama_kabupaten: 'Mukomuko',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1707,
                    id_provinsi: 17,
                    nama_kabupaten: 'Lebong',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1708,
                    id_provinsi: 17,
                    nama_kabupaten: 'Kepahiang',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1709,
                    id_provinsi: 17,
                    nama_kabupaten: 'Bengkulu Tengah',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1771,
                    id_provinsi: 17,
                    nama_kabupaten: 'Bengkulu',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 1801,
                    id_provinsi: 18,
                    nama_kabupaten: 'Lampung Barat',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1802,
                    id_provinsi: 18,
                    nama_kabupaten: 'Tanggamus',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1803,
                    id_provinsi: 18,
                    nama_kabupaten: 'Lampung Selatan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1804,
                    id_provinsi: 18,
                    nama_kabupaten: 'Lampung Timur',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1805,
                    id_provinsi: 18,
                    nama_kabupaten: 'Lampung Tengah',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1806,
                    id_provinsi: 18,
                    nama_kabupaten: 'Lampung Utara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1807,
                    id_provinsi: 18,
                    nama_kabupaten: 'Way Kanan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1808,
                    id_provinsi: 18,
                    nama_kabupaten: 'Tulangbawang',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1809,
                    id_provinsi: 18,
                    nama_kabupaten: 'Pesawaran',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1810,
                    id_provinsi: 18,
                    nama_kabupaten: 'Pringsewu',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1811,
                    id_provinsi: 18,
                    nama_kabupaten: 'Mesuji',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1812,
                    id_provinsi: 18,
                    nama_kabupaten: 'Tulang Bawang Barat',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1813,
                    id_provinsi: 18,
                    nama_kabupaten: 'Pesisir Barat',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1871,
                    id_provinsi: 18,
                    nama_kabupaten: 'Bandar Lampung',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 1872,
                    id_provinsi: 18,
                    nama_kabupaten: 'Metro',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 1901,
                    id_provinsi: 19,
                    nama_kabupaten: 'Bangka',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1902,
                    id_provinsi: 19,
                    nama_kabupaten: 'Belitung',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1903,
                    id_provinsi: 19,
                    nama_kabupaten: 'Bangka Barat',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1904,
                    id_provinsi: 19,
                    nama_kabupaten: 'Bangka Tengah',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1905,
                    id_provinsi: 19,
                    nama_kabupaten: 'Bangka Selatan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1906,
                    id_provinsi: 19,
                    nama_kabupaten: 'Belitung Timur',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 1971,
                    id_provinsi: 19,
                    nama_kabupaten: 'Pangkal Pinang',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 2101,
                    id_provinsi: 21,
                    nama_kabupaten: 'Karimun',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 2102,
                    id_provinsi: 21,
                    nama_kabupaten: 'Bintan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 2103,
                    id_provinsi: 21,
                    nama_kabupaten: 'Natuna',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 2104,
                    id_provinsi: 21,
                    nama_kabupaten: 'Lingga',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 2105,
                    id_provinsi: 21,
                    nama_kabupaten: 'Kepulauan Anambas',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 2171,
                    id_provinsi: 21,
                    nama_kabupaten: 'Batam',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 2172,
                    id_provinsi: 21,
                    nama_kabupaten: 'Tanjung Pinang',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3101,
                    id_provinsi: 31,
                    nama_kabupaten: 'Kepulauan Seribu',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3171,
                    id_provinsi: 31,
                    nama_kabupaten: 'Jakarta Selatan',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3172,
                    id_provinsi: 31,
                    nama_kabupaten: 'Jakarta Timur',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3173,
                    id_provinsi: 31,
                    nama_kabupaten: 'Jakarta Pusat',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3174,
                    id_provinsi: 31,
                    nama_kabupaten: 'Jakarta Barat',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3175,
                    id_provinsi: 31,
                    nama_kabupaten: 'Jakarta Utara',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3201,
                    id_provinsi: 32,
                    nama_kabupaten: 'Bogor',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3202,
                    id_provinsi: 32,
                    nama_kabupaten: 'Sukabumi',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3203,
                    id_provinsi: 32,
                    nama_kabupaten: 'Cianjur',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3204,
                    id_provinsi: 32,
                    nama_kabupaten: 'Bandung',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3205,
                    id_provinsi: 32,
                    nama_kabupaten: 'Garut',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3206,
                    id_provinsi: 32,
                    nama_kabupaten: 'Tasikmalaya',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3207,
                    id_provinsi: 32,
                    nama_kabupaten: 'Ciamis',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3208,
                    id_provinsi: 32,
                    nama_kabupaten: 'Kuningan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3209,
                    id_provinsi: 32,
                    nama_kabupaten: 'Cirebon',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3210,
                    id_provinsi: 32,
                    nama_kabupaten: 'Majalengka',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3211,
                    id_provinsi: 32,
                    nama_kabupaten: 'Sumedang',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3212,
                    id_provinsi: 32,
                    nama_kabupaten: 'Indramayu',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3213,
                    id_provinsi: 32,
                    nama_kabupaten: 'Subang',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3214,
                    id_provinsi: 32,
                    nama_kabupaten: 'Purwakarta',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3215,
                    id_provinsi: 32,
                    nama_kabupaten: 'Karawang',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3216,
                    id_provinsi: 32,
                    nama_kabupaten: 'Bekasi',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3217,
                    id_provinsi: 32,
                    nama_kabupaten: 'Bandung Barat',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3218,
                    id_provinsi: 32,
                    nama_kabupaten: 'Pangandaran',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3271,
                    id_provinsi: 32,
                    nama_kabupaten: 'Bogor',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3272,
                    id_provinsi: 32,
                    nama_kabupaten: 'Sukabumi',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3273,
                    id_provinsi: 32,
                    nama_kabupaten: 'Bandung',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3274,
                    id_provinsi: 32,
                    nama_kabupaten: 'Cirebon',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3275,
                    id_provinsi: 32,
                    nama_kabupaten: 'Bekasi',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3276,
                    id_provinsi: 32,
                    nama_kabupaten: 'Depok',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3277,
                    id_provinsi: 32,
                    nama_kabupaten: 'Cimahi',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3278,
                    id_provinsi: 32,
                    nama_kabupaten: 'Tasikmalaya',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3279,
                    id_provinsi: 32,
                    nama_kabupaten: 'Banjar',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3301,
                    id_provinsi: 33,
                    nama_kabupaten: 'Cilacap',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3302,
                    id_provinsi: 33,
                    nama_kabupaten: 'Banyumas',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3303,
                    id_provinsi: 33,
                    nama_kabupaten: 'Purbalingga',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3304,
                    id_provinsi: 33,
                    nama_kabupaten: 'Banjarnegara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3305,
                    id_provinsi: 33,
                    nama_kabupaten: 'Kebumen',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3306,
                    id_provinsi: 33,
                    nama_kabupaten: 'Purworejo',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3307,
                    id_provinsi: 33,
                    nama_kabupaten: 'Wonosobo',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3308,
                    id_provinsi: 33,
                    nama_kabupaten: 'Magelang',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3309,
                    id_provinsi: 33,
                    nama_kabupaten: 'Boyolali',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3310,
                    id_provinsi: 33,
                    nama_kabupaten: 'Klaten',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3311,
                    id_provinsi: 33,
                    nama_kabupaten: 'Sukoharjo',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3312,
                    id_provinsi: 33,
                    nama_kabupaten: 'Wonogiri',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3313,
                    id_provinsi: 33,
                    nama_kabupaten: 'Karanganyar',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3314,
                    id_provinsi: 33,
                    nama_kabupaten: 'Sragen',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3315,
                    id_provinsi: 33,
                    nama_kabupaten: 'Grobogan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3316,
                    id_provinsi: 33,
                    nama_kabupaten: 'Blora',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3317,
                    id_provinsi: 33,
                    nama_kabupaten: 'Rembang',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3318,
                    id_provinsi: 33,
                    nama_kabupaten: 'Pati',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3319,
                    id_provinsi: 33,
                    nama_kabupaten: 'Kudus',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3320,
                    id_provinsi: 33,
                    nama_kabupaten: 'Jepara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3321,
                    id_provinsi: 33,
                    nama_kabupaten: 'Demak',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3322,
                    id_provinsi: 33,
                    nama_kabupaten: 'Semarang',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3323,
                    id_provinsi: 33,
                    nama_kabupaten: 'Temanggung',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3324,
                    id_provinsi: 33,
                    nama_kabupaten: 'Kendal',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3325,
                    id_provinsi: 33,
                    nama_kabupaten: 'Batang',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3326,
                    id_provinsi: 33,
                    nama_kabupaten: 'Pekalongan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3327,
                    id_provinsi: 33,
                    nama_kabupaten: 'Pemalang',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3328,
                    id_provinsi: 33,
                    nama_kabupaten: 'Tegal',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3329,
                    id_provinsi: 33,
                    nama_kabupaten: 'Brebes',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3371,
                    id_provinsi: 33,
                    nama_kabupaten: 'Magelang',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3372,
                    id_provinsi: 33,
                    nama_kabupaten: 'Surakarta',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3373,
                    id_provinsi: 33,
                    nama_kabupaten: 'Salatiga',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3374,
                    id_provinsi: 33,
                    nama_kabupaten: 'Semarang',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3375,
                    id_provinsi: 33,
                    nama_kabupaten: 'Pekalongan',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3376,
                    id_provinsi: 33,
                    nama_kabupaten: 'Tegal',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3401,
                    id_provinsi: 34,
                    nama_kabupaten: 'Kulon Progo',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3402,
                    id_provinsi: 34,
                    nama_kabupaten: 'Bantul',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3403,
                    id_provinsi: 34,
                    nama_kabupaten: 'Gunung Kidul',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3404,
                    id_provinsi: 34,
                    nama_kabupaten: 'Sleman',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3471,
                    id_provinsi: 34,
                    nama_kabupaten: 'Yogyakarta',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3501,
                    id_provinsi: 35,
                    nama_kabupaten: 'Pacitan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3502,
                    id_provinsi: 35,
                    nama_kabupaten: 'Ponorogo',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3503,
                    id_provinsi: 35,
                    nama_kabupaten: 'Trenggalek',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3504,
                    id_provinsi: 35,
                    nama_kabupaten: 'Tulungagung',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3505,
                    id_provinsi: 35,
                    nama_kabupaten: 'Blitar',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3506,
                    id_provinsi: 35,
                    nama_kabupaten: 'Kediri',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3507,
                    id_provinsi: 35,
                    nama_kabupaten: 'Malang',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3508,
                    id_provinsi: 35,
                    nama_kabupaten: 'Lumajang',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3509,
                    id_provinsi: 35,
                    nama_kabupaten: 'Jember',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3510,
                    id_provinsi: 35,
                    nama_kabupaten: 'Banyuwangi',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3511,
                    id_provinsi: 35,
                    nama_kabupaten: 'Bondowoso',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3512,
                    id_provinsi: 35,
                    nama_kabupaten: 'Situbondo',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3513,
                    id_provinsi: 35,
                    nama_kabupaten: 'Probolinggo',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3514,
                    id_provinsi: 35,
                    nama_kabupaten: 'Pasuruan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3515,
                    id_provinsi: 35,
                    nama_kabupaten: 'Sidoarjo',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3516,
                    id_provinsi: 35,
                    nama_kabupaten: 'Mojokerto',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3517,
                    id_provinsi: 35,
                    nama_kabupaten: 'Jombang',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3518,
                    id_provinsi: 35,
                    nama_kabupaten: 'Nganjuk',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3519,
                    id_provinsi: 35,
                    nama_kabupaten: 'Madiun',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3520,
                    id_provinsi: 35,
                    nama_kabupaten: 'Magetan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3521,
                    id_provinsi: 35,
                    nama_kabupaten: 'Ngawi',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3522,
                    id_provinsi: 35,
                    nama_kabupaten: 'Bojonegoro',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3523,
                    id_provinsi: 35,
                    nama_kabupaten: 'Tuban',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3524,
                    id_provinsi: 35,
                    nama_kabupaten: 'Lamongan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3525,
                    id_provinsi: 35,
                    nama_kabupaten: 'Gresik',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3526,
                    id_provinsi: 35,
                    nama_kabupaten: 'Bangkalan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3527,
                    id_provinsi: 35,
                    nama_kabupaten: 'Sampang',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3528,
                    id_provinsi: 35,
                    nama_kabupaten: 'Pamekasan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3529,
                    id_provinsi: 35,
                    nama_kabupaten: 'Sumenep',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3571,
                    id_provinsi: 35,
                    nama_kabupaten: 'Kediri',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3572,
                    id_provinsi: 35,
                    nama_kabupaten: 'Blitar',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3573,
                    id_provinsi: 35,
                    nama_kabupaten: 'Malang',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3574,
                    id_provinsi: 35,
                    nama_kabupaten: 'Probolinggo',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3575,
                    id_provinsi: 35,
                    nama_kabupaten: 'Pasuruan',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3576,
                    id_provinsi: 35,
                    nama_kabupaten: 'Mojokerto',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3577,
                    id_provinsi: 35,
                    nama_kabupaten: 'Madiun',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3578,
                    id_provinsi: 35,
                    nama_kabupaten: 'Surabaya',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3579,
                    id_provinsi: 35,
                    nama_kabupaten: 'Batu',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3601,
                    id_provinsi: 36,
                    nama_kabupaten: 'Pandeglang',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3602,
                    id_provinsi: 36,
                    nama_kabupaten: 'Lebak',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3603,
                    id_provinsi: 36,
                    nama_kabupaten: 'Tangerang',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3604,
                    id_provinsi: 36,
                    nama_kabupaten: 'Serang',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 3671,
                    id_provinsi: 36,
                    nama_kabupaten: 'Tangerang',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3672,
                    id_provinsi: 36,
                    nama_kabupaten: 'Cilegon',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3673,
                    id_provinsi: 36,
                    nama_kabupaten: 'Serang',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 3674,
                    id_provinsi: 36,
                    nama_kabupaten: 'Tangerang Selatan',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 5101,
                    id_provinsi: 51,
                    nama_kabupaten: 'Jembrana',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5102,
                    id_provinsi: 51,
                    nama_kabupaten: 'Tabanan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5103,
                    id_provinsi: 51,
                    nama_kabupaten: 'Badung',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5104,
                    id_provinsi: 51,
                    nama_kabupaten: 'Gianyar',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5105,
                    id_provinsi: 51,
                    nama_kabupaten: 'Klungkung',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5106,
                    id_provinsi: 51,
                    nama_kabupaten: 'Bangli',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5107,
                    id_provinsi: 51,
                    nama_kabupaten: 'Karang Asem',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5108,
                    id_provinsi: 51,
                    nama_kabupaten: 'Buleleng',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5171,
                    id_provinsi: 51,
                    nama_kabupaten: 'Denpasar',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 5201,
                    id_provinsi: 52,
                    nama_kabupaten: 'Lombok Barat',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5202,
                    id_provinsi: 52,
                    nama_kabupaten: 'Lombok Tengah',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5203,
                    id_provinsi: 52,
                    nama_kabupaten: 'Lombok Timur',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5204,
                    id_provinsi: 52,
                    nama_kabupaten: 'Sumbawa',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5205,
                    id_provinsi: 52,
                    nama_kabupaten: 'Dompu',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5206,
                    id_provinsi: 52,
                    nama_kabupaten: 'Bima',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5207,
                    id_provinsi: 52,
                    nama_kabupaten: 'Sumbawa Barat',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5208,
                    id_provinsi: 52,
                    nama_kabupaten: 'Lombok Utara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5271,
                    id_provinsi: 52,
                    nama_kabupaten: 'Mataram',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 5272,
                    id_provinsi: 52,
                    nama_kabupaten: 'Bima',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 5301,
                    id_provinsi: 53,
                    nama_kabupaten: 'Sumba Barat',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5302,
                    id_provinsi: 53,
                    nama_kabupaten: 'Sumba Timur',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5303,
                    id_provinsi: 53,
                    nama_kabupaten: 'Kupang',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5304,
                    id_provinsi: 53,
                    nama_kabupaten: 'Timor Tengah Selatan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5305,
                    id_provinsi: 53,
                    nama_kabupaten: 'Timor Tengah Utara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5306,
                    id_provinsi: 53,
                    nama_kabupaten: 'Belu',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5307,
                    id_provinsi: 53,
                    nama_kabupaten: 'Alor',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5308,
                    id_provinsi: 53,
                    nama_kabupaten: 'Flores Timur',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5309,
                    id_provinsi: 53,
                    nama_kabupaten: 'Sikka',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5310,
                    id_provinsi: 53,
                    nama_kabupaten: 'Ende',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5311,
                    id_provinsi: 53,
                    nama_kabupaten: 'Ngada',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5312,
                    id_provinsi: 53,
                    nama_kabupaten: 'Manggarai',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5313,
                    id_provinsi: 53,
                    nama_kabupaten: 'Rote Ndao',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5314,
                    id_provinsi: 53,
                    nama_kabupaten: 'Manggarai Barat',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5315,
                    id_provinsi: 53,
                    nama_kabupaten: 'Sumba Tengah',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5316,
                    id_provinsi: 53,
                    nama_kabupaten: 'Sumba Barat Daya',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5317,
                    id_provinsi: 53,
                    nama_kabupaten: 'Nagekeo',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5318,
                    id_provinsi: 53,
                    nama_kabupaten: 'Manggarai Timur',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5319,
                    id_provinsi: 53,
                    nama_kabupaten: 'Sabu Raijua',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5320,
                    id_provinsi: 53,
                    nama_kabupaten: 'Malaka',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 5371,
                    id_provinsi: 53,
                    nama_kabupaten: 'Kupang',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 6101,
                    id_provinsi: 61,
                    nama_kabupaten: 'Sambas',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6102,
                    id_provinsi: 61,
                    nama_kabupaten: 'Mempawah',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6103,
                    id_provinsi: 61,
                    nama_kabupaten: 'Sanggau',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6104,
                    id_provinsi: 61,
                    nama_kabupaten: 'Ketapang',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6105,
                    id_provinsi: 61,
                    nama_kabupaten: 'Sintang',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6106,
                    id_provinsi: 61,
                    nama_kabupaten: 'Kapuas Hulu',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6107,
                    id_provinsi: 61,
                    nama_kabupaten: 'Bengkayang',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6108,
                    id_provinsi: 61,
                    nama_kabupaten: 'Landak',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6109,
                    id_provinsi: 61,
                    nama_kabupaten: 'Sekadau',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6110,
                    id_provinsi: 61,
                    nama_kabupaten: 'Melawi',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6111,
                    id_provinsi: 61,
                    nama_kabupaten: 'Kayong Utara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6112,
                    id_provinsi: 61,
                    nama_kabupaten: 'Kubu Raya',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6171,
                    id_provinsi: 61,
                    nama_kabupaten: 'Pontianak',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 6172,
                    id_provinsi: 61,
                    nama_kabupaten: 'Singkawang',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 6201,
                    id_provinsi: 62,
                    nama_kabupaten: 'Kotawaringin Barat',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6202,
                    id_provinsi: 62,
                    nama_kabupaten: 'Kotawaringin Timur',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6203,
                    id_provinsi: 62,
                    nama_kabupaten: 'Kapuas',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6204,
                    id_provinsi: 62,
                    nama_kabupaten: 'Barito Selatan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6205,
                    id_provinsi: 62,
                    nama_kabupaten: 'Barito Utara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6206,
                    id_provinsi: 62,
                    nama_kabupaten: 'Sukamara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6207,
                    id_provinsi: 62,
                    nama_kabupaten: 'Lamandau',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6208,
                    id_provinsi: 62,
                    nama_kabupaten: 'Seruyan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6209,
                    id_provinsi: 62,
                    nama_kabupaten: 'Katingan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6210,
                    id_provinsi: 62,
                    nama_kabupaten: 'Pulang Pisau',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6211,
                    id_provinsi: 62,
                    nama_kabupaten: 'Gunung Mas',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6212,
                    id_provinsi: 62,
                    nama_kabupaten: 'Barito Timur',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6213,
                    id_provinsi: 62,
                    nama_kabupaten: 'Murung Raya',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6271,
                    id_provinsi: 62,
                    nama_kabupaten: 'Palangka Raya',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 6301,
                    id_provinsi: 63,
                    nama_kabupaten: 'Tanah Laut',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6302,
                    id_provinsi: 63,
                    nama_kabupaten: 'Kota Baru',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6303,
                    id_provinsi: 63,
                    nama_kabupaten: 'Banjar',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6304,
                    id_provinsi: 63,
                    nama_kabupaten: 'Barito Kuala',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6305,
                    id_provinsi: 63,
                    nama_kabupaten: 'Tapin',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6306,
                    id_provinsi: 63,
                    nama_kabupaten: 'Hulu Sungai Selatan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6307,
                    id_provinsi: 63,
                    nama_kabupaten: 'Hulu Sungai Tengah',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6308,
                    id_provinsi: 63,
                    nama_kabupaten: 'Hulu Sungai Utara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6309,
                    id_provinsi: 63,
                    nama_kabupaten: 'Tabalong',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6310,
                    id_provinsi: 63,
                    nama_kabupaten: 'Tanah Bumbu',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6311,
                    id_provinsi: 63,
                    nama_kabupaten: 'Balangan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6371,
                    id_provinsi: 63,
                    nama_kabupaten: 'Banjarmasin',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 6372,
                    id_provinsi: 63,
                    nama_kabupaten: 'Banjarbaru',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 6401,
                    id_provinsi: 64,
                    nama_kabupaten: 'Paser',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6402,
                    id_provinsi: 64,
                    nama_kabupaten: 'Kutai Barat',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6403,
                    id_provinsi: 64,
                    nama_kabupaten: 'Kutai Kartanegara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6404,
                    id_provinsi: 64,
                    nama_kabupaten: 'Kutai Timur',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6405,
                    id_provinsi: 64,
                    nama_kabupaten: 'Berau',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6409,
                    id_provinsi: 64,
                    nama_kabupaten: 'Penajam Paser Utara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6471,
                    id_provinsi: 64,
                    nama_kabupaten: 'Balikpapan',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 6472,
                    id_provinsi: 64,
                    nama_kabupaten: 'Samarinda',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 6474,
                    id_provinsi: 64,
                    nama_kabupaten: 'Bontang',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 6501,
                    id_provinsi: 65,
                    nama_kabupaten: 'Malinau',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6502,
                    id_provinsi: 65,
                    nama_kabupaten: 'Bulungan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6503,
                    id_provinsi: 65,
                    nama_kabupaten: 'Tana Tidung',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6504,
                    id_provinsi: 65,
                    nama_kabupaten: 'Nunukan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 6571,
                    id_provinsi: 65,
                    nama_kabupaten: 'Tarakan',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 7101,
                    id_provinsi: 71,
                    nama_kabupaten: 'Bolaang Mongondow',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7102,
                    id_provinsi: 71,
                    nama_kabupaten: 'Minahasa',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7103,
                    id_provinsi: 71,
                    nama_kabupaten: 'Kepulauan Sangihe',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7104,
                    id_provinsi: 71,
                    nama_kabupaten: 'Kepulauan Talaud',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7105,
                    id_provinsi: 71,
                    nama_kabupaten: 'Minahasa Selatan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7106,
                    id_provinsi: 71,
                    nama_kabupaten: 'Minahasa Utara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7107,
                    id_provinsi: 71,
                    nama_kabupaten: 'Bolaang Mongondow Utara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7108,
                    id_provinsi: 71,
                    nama_kabupaten: 'Siau Tagulandang Biaro (Sitaro)',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7109,
                    id_provinsi: 71,
                    nama_kabupaten: 'Minahasa Tenggara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7110,
                    id_provinsi: 71,
                    nama_kabupaten: 'Bolaang Mongondow Selatan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7111,
                    id_provinsi: 71,
                    nama_kabupaten: 'Bolaang Mongondow Timur',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7171,
                    id_provinsi: 71,
                    nama_kabupaten: 'Manado',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 7172,
                    id_provinsi: 71,
                    nama_kabupaten: 'Bitung',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 7173,
                    id_provinsi: 71,
                    nama_kabupaten: 'Tomohon',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 7174,
                    id_provinsi: 71,
                    nama_kabupaten: 'Kotamobagu',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 7201,
                    id_provinsi: 72,
                    nama_kabupaten: 'Banggai',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7202,
                    id_provinsi: 72,
                    nama_kabupaten: 'Poso',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7203,
                    id_provinsi: 72,
                    nama_kabupaten: 'Donggala',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7204,
                    id_provinsi: 72,
                    nama_kabupaten: 'Toli-Toli',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7205,
                    id_provinsi: 72,
                    nama_kabupaten: 'Buol',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7206,
                    id_provinsi: 72,
                    nama_kabupaten: 'Morowali',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7207,
                    id_provinsi: 72,
                    nama_kabupaten: 'Banggai Kepulauan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7208,
                    id_provinsi: 72,
                    nama_kabupaten: 'Parigi Moutong',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7209,
                    id_provinsi: 72,
                    nama_kabupaten: 'Tojo Una-Una',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7210,
                    id_provinsi: 72,
                    nama_kabupaten: 'Sigi',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7271,
                    id_provinsi: 72,
                    nama_kabupaten: 'Palu',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 7301,
                    id_provinsi: 73,
                    nama_kabupaten: 'Kepulauan Selayar',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7302,
                    id_provinsi: 73,
                    nama_kabupaten: 'Bulukumba',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7303,
                    id_provinsi: 73,
                    nama_kabupaten: 'Bantaeng',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7304,
                    id_provinsi: 73,
                    nama_kabupaten: 'Jeneponto',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7305,
                    id_provinsi: 73,
                    nama_kabupaten: 'Takalar',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7306,
                    id_provinsi: 73,
                    nama_kabupaten: 'Gowa',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7307,
                    id_provinsi: 73,
                    nama_kabupaten: 'Sinjai',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7308,
                    id_provinsi: 73,
                    nama_kabupaten: 'Bone',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7309,
                    id_provinsi: 73,
                    nama_kabupaten: 'Maros',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7310,
                    id_provinsi: 73,
                    nama_kabupaten: 'Pangkajene Dan Kepulauan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7311,
                    id_provinsi: 73,
                    nama_kabupaten: 'Barru',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7312,
                    id_provinsi: 73,
                    nama_kabupaten: 'Soppeng',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7313,
                    id_provinsi: 73,
                    nama_kabupaten: 'Wajo',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7314,
                    id_provinsi: 73,
                    nama_kabupaten: 'Sidenreng Rappang',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7315,
                    id_provinsi: 73,
                    nama_kabupaten: 'Pinrang',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7316,
                    id_provinsi: 73,
                    nama_kabupaten: 'Enrekang',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7317,
                    id_provinsi: 73,
                    nama_kabupaten: 'Luwu',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7318,
                    id_provinsi: 73,
                    nama_kabupaten: 'Tana Toraja',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7322,
                    id_provinsi: 73,
                    nama_kabupaten: 'Luwu Utara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7325,
                    id_provinsi: 73,
                    nama_kabupaten: 'Luwu Timur',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7326,
                    id_provinsi: 73,
                    nama_kabupaten: 'Toraja Utara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7371,
                    id_provinsi: 73,
                    nama_kabupaten: 'Makassar',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 7372,
                    id_provinsi: 73,
                    nama_kabupaten: 'Parepare',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 7373,
                    id_provinsi: 73,
                    nama_kabupaten: 'Palu',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 7401,
                    id_provinsi: 74,
                    nama_kabupaten: 'Buton',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7402,
                    id_provinsi: 74,
                    nama_kabupaten: 'Muna',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7403,
                    id_provinsi: 74,
                    nama_kabupaten: 'Konawe',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7404,
                    id_provinsi: 74,
                    nama_kabupaten: 'Kolaka',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7405,
                    id_provinsi: 74,
                    nama_kabupaten: 'Konawe Selatan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7406,
                    id_provinsi: 74,
                    nama_kabupaten: 'Bombana',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7407,
                    id_provinsi: 74,
                    nama_kabupaten: 'Wakatobi',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7408,
                    id_provinsi: 74,
                    nama_kabupaten: 'Kolaka Utara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7409,
                    id_provinsi: 74,
                    nama_kabupaten: 'Buton Utara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7410,
                    id_provinsi: 74,
                    nama_kabupaten: 'Konawe Utara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7411,
                    id_provinsi: 74,
                    nama_kabupaten: 'Kolaka Timur',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7412,
                    id_provinsi: 74,
                    nama_kabupaten: 'Konawe Kepulauan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7413,
                    id_provinsi: 74,
                    nama_kabupaten: 'Muna Barat',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7414,
                    id_provinsi: 74,
                    nama_kabupaten: 'Buton Tengah',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7415,
                    id_provinsi: 74,
                    nama_kabupaten: 'Buton Selatan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7471,
                    id_provinsi: 74,
                    nama_kabupaten: 'Kendari',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 7472,
                    id_provinsi: 74,
                    nama_kabupaten: 'Baubau',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 7501,
                    id_provinsi: 75,
                    nama_kabupaten: 'Boalemo',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7502,
                    id_provinsi: 75,
                    nama_kabupaten: 'Gorontalo',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7503,
                    id_provinsi: 75,
                    nama_kabupaten: 'Pohuwato',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7504,
                    id_provinsi: 75,
                    nama_kabupaten: 'Bone Bolango',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7505,
                    id_provinsi: 75,
                    nama_kabupaten: 'Gorontalo Utara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7571,
                    id_provinsi: 75,
                    nama_kabupaten: 'Gorontalo',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 7601,
                    id_provinsi: 76,
                    nama_kabupaten: 'Majene',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7602,
                    id_provinsi: 76,
                    nama_kabupaten: 'Polewali Mandar',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7603,
                    id_provinsi: 76,
                    nama_kabupaten: 'Mamasa',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7604,
                    id_provinsi: 76,
                    nama_kabupaten: 'Mamuju',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7605,
                    id_provinsi: 76,
                    nama_kabupaten: 'Mamuju Utara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 7606,
                    id_provinsi: 76,
                    nama_kabupaten: 'Mamuju Tengah',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 8101,
                    id_provinsi: 81,
                    nama_kabupaten: 'Maluku Tenggara Barat',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 8102,
                    id_provinsi: 81,
                    nama_kabupaten: 'Maluku Tenggara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 8103,
                    id_provinsi: 81,
                    nama_kabupaten: 'Maluku Tengah',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 8104,
                    id_provinsi: 81,
                    nama_kabupaten: 'Buru',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 8105,
                    id_provinsi: 81,
                    nama_kabupaten: 'Kepulauan Aru',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 8106,
                    id_provinsi: 81,
                    nama_kabupaten: 'Seram Bagian Barat',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 8107,
                    id_provinsi: 81,
                    nama_kabupaten: 'Seram Bagian Timur',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 8108,
                    id_provinsi: 81,
                    nama_kabupaten: 'Maluku Barat Daya',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 8109,
                    id_provinsi: 81,
                    nama_kabupaten: 'Buru Selatan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 8171,
                    id_provinsi: 81,
                    nama_kabupaten: 'Ambon',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 8172,
                    id_provinsi: 81,
                    nama_kabupaten: 'Tual',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 8201,
                    id_provinsi: 82,
                    nama_kabupaten: 'Halmahera Barat',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 8202,
                    id_provinsi: 82,
                    nama_kabupaten: 'Halmahera Tengah',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 8203,
                    id_provinsi: 82,
                    nama_kabupaten: 'Kepulauan Sula',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 8204,
                    id_provinsi: 82,
                    nama_kabupaten: 'Halmahera Selatan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 8205,
                    id_provinsi: 82,
                    nama_kabupaten: 'Halmahera Utara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 8206,
                    id_provinsi: 82,
                    nama_kabupaten: 'Halmahera Timur',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 8207,
                    id_provinsi: 82,
                    nama_kabupaten: 'Pulau Morotai',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 8208,
                    id_provinsi: 82,
                    nama_kabupaten: 'Pulau Taliabu',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 8271,
                    id_provinsi: 82,
                    nama_kabupaten: 'Ternate',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 8272,
                    id_provinsi: 82,
                    nama_kabupaten: 'Tidore Kepulauan',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 9116,
                    id_provinsi: 91,
                    nama_kabupaten: 'Sarmi',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9117,
                    id_provinsi: 91,
                    nama_kabupaten: 'Keerom',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9118,
                    id_provinsi: 91,
                    nama_kabupaten: 'Waropen',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9119,
                    id_provinsi: 91,
                    nama_kabupaten: 'Supiori',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9120,
                    id_provinsi: 91,
                    nama_kabupaten: 'Mamberamo Raya',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9171,
                    id_provinsi: 91,
                    nama_kabupaten: 'Jayapura',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 9201,
                    id_provinsi: 92,
                    nama_kabupaten: 'Fakfak',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9202,
                    id_provinsi: 92,
                    nama_kabupaten: 'Kaimana',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9203,
                    id_provinsi: 92,
                    nama_kabupaten: 'Teluk Wondama',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9204,
                    id_provinsi: 92,
                    nama_kabupaten: 'Teluk Bintuni',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9205,
                    id_provinsi: 92,
                    nama_kabupaten: 'Manokwari',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9206,
                    id_provinsi: 92,
                    nama_kabupaten: 'Sorong Selatan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9207,
                    id_provinsi: 92,
                    nama_kabupaten: 'Sorong',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9208,
                    id_provinsi: 92,
                    nama_kabupaten: 'Raja Ampat',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9209,
                    id_provinsi: 92,
                    nama_kabupaten: 'Tambrauw',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9210,
                    id_provinsi: 92,
                    nama_kabupaten: 'Maybrat',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9211,
                    id_provinsi: 92,
                    nama_kabupaten: 'Manokwari Selatan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9212,
                    id_provinsi: 92,
                    nama_kabupaten: 'Pegunungan Arfak',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9271,
                    id_provinsi: 92,
                    nama_kabupaten: 'Sorong',
                    type: 'Kota',
                },
                {
                    id_kabupaten: 9301,
                    id_provinsi: 93,
                    nama_kabupaten: 'Asmat',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9302,
                    id_provinsi: 93,
                    nama_kabupaten: 'Boven Digoel',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9303,
                    id_provinsi: 93,
                    nama_kabupaten: 'Mappi',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9304,
                    id_provinsi: 93,
                    nama_kabupaten: 'Merauke',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9401,
                    id_provinsi: 94,
                    nama_kabupaten: 'Deiyai (Deliyai)',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9402,
                    id_provinsi: 94,
                    nama_kabupaten: 'Dogiyai',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9403,
                    id_provinsi: 94,
                    nama_kabupaten: 'Intan Jaya',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9404,
                    id_provinsi: 94,
                    nama_kabupaten: 'Mimika',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9408,
                    id_provinsi: 94,
                    nama_kabupaten: 'Nabire',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9409,
                    id_provinsi: 94,
                    nama_kabupaten: 'Paniai',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9410,
                    id_provinsi: 94,
                    nama_kabupaten: 'Puncak',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9411,
                    id_provinsi: 94,
                    nama_kabupaten: 'Puncak Jaya',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9501,
                    id_provinsi: 95,
                    nama_kabupaten: 'Jayawijaya',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9502,
                    id_provinsi: 95,
                    nama_kabupaten: 'Lanny Jaya',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9503,
                    id_provinsi: 95,
                    nama_kabupaten: 'Mamberamo Tengah',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9504,
                    id_provinsi: 95,
                    nama_kabupaten: 'Nduga',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9505,
                    id_provinsi: 95,
                    nama_kabupaten: 'Pegunungan Bintang',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9506,
                    id_provinsi: 95,
                    nama_kabupaten: 'Tolikara',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9507,
                    id_provinsi: 95,
                    nama_kabupaten: 'Yahukimo',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9508,
                    id_provinsi: 95,
                    nama_kabupaten: 'Yalimo',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9601,
                    id_provinsi: 96,
                    nama_kabupaten: 'Maybrat',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9602,
                    id_provinsi: 96,
                    nama_kabupaten: 'Raja Ampat',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9603,
                    id_provinsi: 96,
                    nama_kabupaten: 'Sorong',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9604,
                    id_provinsi: 96,
                    nama_kabupaten: 'Sorong Selatan',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9605,
                    id_provinsi: 96,
                    nama_kabupaten: 'Tambrauw',
                    type: 'Kabupaten',
                },
                {
                    id_kabupaten: 9606,
                    id_provinsi: 96,
                    nama_kabupaten: 'Sorong',
                    type: 'Kota',
                },
            ],
            skipDuplicates: true,
        });
        const tanggalPembuatanAkun = new Date();
        tanggalPembuatanAkun.setHours(0, 0, 0, 0);
        const tanggalLahir = new Date('12-03-1999');
        tanggalLahir.setHours(0, 0, 0, 0);
        yield prismaClient_1.default.pengguna.createMany({
            data: [
                {
                    id_pengguna: 'cmbnw2d03000007l4dnaj99yf',
                    nama_depan_pengguna: 'Elena',
                    nama_belakang_pengguna: 'Susanto',
                    tanggal_lahir_pengguna: tanggalLahir,
                    email_pengguna: 'elena@gmail.com',
                    nomor_telepon_pengguna: '08123826312',
                    jenisKelamin: 1,
                    password_pengguna: '$2y$10$4jPkO1PD4zkL8MeoQ92Cu.ezq6N0fwqopVcC3dowEJOOF5xYa/UDq',
                    avatar: 'elena.webp',
                    status_verfikasi: true,
                    status_aktif: true,
                    tanggal_pembuatan_akun: tanggalPembuatanAkun,
                    kode_verifikasi: '8082',
                },
                {
                    id_pengguna: 'cmbnw2d03000007l4dnaj99yg',
                    nama_depan_pengguna: 'Andi',
                    nama_belakang_pengguna: 'Wijaya',
                    tanggal_lahir_pengguna: tanggalLahir,
                    email_pengguna: 'andi@gmail.com',
                    nomor_telepon_pengguna: '08123456789',
                    jenisKelamin: 0,
                    password_pengguna: '$2y$10$4jPkO1PD4zkL8MeoQ92Cu.ezq6N0fwqopVcC3dowEJOOF5xYa/UDq',
                    avatar: 'andi.webp',
                    status_verfikasi: true,
                    status_aktif: true,
                    tanggal_pembuatan_akun: tanggalPembuatanAkun,
                    kode_verifikasi: '1234',
                },
                {
                    id_pengguna: 'cmbnw2d03000007l4dnaj99yh',
                    nama_depan_pengguna: 'Budi',
                    nama_belakang_pengguna: 'Santoso',
                    tanggal_lahir_pengguna: tanggalLahir,
                    email_pengguna: 'budi@gmail.com',
                    nomor_telepon_pengguna: '08987654321',
                    jenisKelamin: 0,
                    password_pengguna: '$2y$10$4jPkO1PD4zkL8MeoQ92Cu.ezq6N0fwqopVcC3dowEJOOF5xYa/UDq',
                    avatar: 'budi.webp',
                    status_verfikasi: true,
                    status_aktif: true,
                    tanggal_pembuatan_akun: tanggalPembuatanAkun,
                    kode_verifikasi: '5678',
                },
                {
                    id_pengguna: 'cmbnw2d03000007l4dnaj99yi',
                    nama_depan_pengguna: 'Citra',
                    nama_belakang_pengguna: 'Putri',
                    tanggal_lahir_pengguna: tanggalLahir,
                    email_pengguna: 'citra@gmail.com',
                    nomor_telepon_pengguna: '08211234567',
                    jenisKelamin: 1,
                    password_pengguna: '$2y$10$4jPkO1PD4zkL8MeoQ92Cu.ezq6N0fwqopVcC3dowEJOOF5xYa/UDq',
                    avatar: 'citra.webp',
                    status_verfikasi: true,
                    status_aktif: true,
                    tanggal_pembuatan_akun: tanggalPembuatanAkun,
                    kode_verifikasi: '9012',
                },
                {
                    id_pengguna: 'cmbnw2d03000007l4dnaj99yj',
                    nama_depan_pengguna: 'Dewi',
                    nama_belakang_pengguna: 'Lestari',
                    tanggal_lahir_pengguna: tanggalLahir,
                    email_pengguna: 'dewi@gmail.com',
                    nomor_telepon_pengguna: '08331112222',
                    jenisKelamin: 1,
                    password_pengguna: '$2y$10$4jPkO1PD4zkL8MeoQ92Cu.ezq6N0fwqopVcC3dowEJOOF5xYa/UDq',
                    avatar: 'dewi.webp',
                    status_verfikasi: true,
                    status_aktif: true,
                    tanggal_pembuatan_akun: tanggalPembuatanAkun,
                    kode_verifikasi: '3456',
                },
            ],
        });
        yield prismaClient_1.default.kategoriArtikel.createMany({
            data: [
                {
                    id_kategori_artikel: 1,
                    nama_kategori_artikel: 'Teknik Pertanian dan Produksi',
                },
                {
                    id_kategori_artikel: 2,
                    nama_kategori_artikel: 'Pengendalian Hama dan Penyakit',
                },
                {
                    id_kategori_artikel: 3,
                    nama_kategori_artikel: 'Peningkatan Kualitas Pertanian',
                },
                {
                    id_kategori_artikel: 4,
                    nama_kategori_artikel: 'Teknologi Pertanian',
                },
                {
                    id_kategori_artikel: 5,
                    nama_kategori_artikel: 'Manajemen dan Bisnis Pertanian',
                },
            ],
            skipDuplicates: true,
        });
        yield prismaClient_1.default.artikel.createMany({
            data: [
                {
                    id_artikel: 'peningkatan-kualitas-pertanian-001',
                    judul_artikel: 'Peningkatan kualitas dan ketahanan padi anda',
                    deskripsi_artikel: 'Tips dan strategi untuk meningkatkan kualitas dan ketahanan hasil panen padi Anda.',
                    isi_artikel: 'Ketahanan padi terhadap hama dan penyakit sangat penting untuk menjamin hasil panen yang maksimal. Artikel ini membahas penggunaan benih unggul, pemupukan seimbang, serta teknik rotasi tanaman yang terbukti efektif meningkatkan kualitas dan produktivitas padi.',
                    status_artikel: client_1.StatusArtikel.PUBLISHED,
                    status_verifikasi: client_1.StatusVerifikasiArtikel.DIVERIFIKASI,
                    status_aktif: true,
                    id_kategori_artikel: 3,
                    id_pengguna: 'cmbnw2d03000007l4dnaj99yj',
                    gambar_artikel: 'artikel1.webp',
                },
                {
                    id_artikel: 'peningkatan-kualitas-pertanian-002',
                    judul_artikel: 'Strategi menanam padi dengan efisien',
                    deskripsi_artikel: 'Panduan lengkap bagaimana menanam padi dengan efisien, hemat biaya, dan hasil maksimal.',
                    isi_artikel: 'Efisiensi dalam budidaya padi dapat dicapai melalui teknik tanam jajar legowo, penggunaan pupuk organik, serta irigasi terjadwal. Dengan mengatur pola tanam dan input secara cermat, petani bisa mengurangi biaya produksi tanpa mengorbankan hasil panen.',
                    status_artikel: client_1.StatusArtikel.PUBLISHED,
                    status_verifikasi: client_1.StatusVerifikasiArtikel.DIVERIFIKASI,
                    status_aktif: true,
                    id_kategori_artikel: 3,
                    id_pengguna: 'cmbnw2d03000007l4dnaj99yj',
                    gambar_artikel: 'artikel2.webp',
                },
                {
                    id_artikel: 'peningkatan-kualitas-pertanian-003',
                    judul_artikel: 'Teknik pertanian modern yang ramah lingkungan',
                    deskripsi_artikel: 'Pelajari teknologi pertanian terkini yang mendukung produksi berkelanjutan.',
                    isi_artikel: 'Pertanian modern menggabungkan prinsip efisiensi dan keberlanjutan, seperti penggunaan drone untuk monitoring lahan, sistem pertanian presisi, serta aplikasi smart irrigation. Teknik ini tidak hanya meningkatkan hasil, tapi juga menjaga lingkungan hidup.',
                    status_artikel: client_1.StatusArtikel.PUBLISHED,
                    status_verifikasi: client_1.StatusVerifikasiArtikel.DIVERIFIKASI,
                    status_aktif: true,
                    id_kategori_artikel: 3,
                    id_pengguna: 'cmbnw2d03000007l4dnaj99yj',
                    gambar_artikel: 'artikel3.webp',
                },
                {
                    id_artikel: 'peningkatan-kualitas-pertanian-004',
                    judul_artikel: 'Cara mengatasi hama padi secara alami',
                    deskripsi_artikel: 'Solusi organik dan alami untuk memberantas hama tanpa merusak ekosistem sawah.',
                    isi_artikel: 'Menggunakan predator alami seperti burung dan ikan, serta tanaman pengusir serangga seperti serai, merupakan cara yang efektif dan ramah lingkungan untuk mengendalikan populasi hama. Teknik ini membantu menjaga keseimbangan ekosistem sawah.',
                    status_artikel: client_1.StatusArtikel.PUBLISHED,
                    status_verifikasi: client_1.StatusVerifikasiArtikel.DIVERIFIKASI,
                    status_aktif: true,
                    id_kategori_artikel: 3,
                    id_pengguna: 'cmbnw2d03000007l4dnaj99yj',
                    gambar_artikel: 'artikel4.webp',
                },
                {
                    id_artikel: 'peningkatan-kualitas-pertanian-005',
                    judul_artikel: 'Pemanfaatan teknologi dalam pertanian',
                    deskripsi_artikel: 'Mengupas bagaimana teknologi digital membantu petani menjadi lebih produktif.',
                    isi_artikel: 'Teknologi seperti aplikasi prediksi cuaca, sensor tanah, dan platform pasar online kini membantu petani dalam pengambilan keputusan, memaksimalkan hasil panen, serta menjual produk secara langsung tanpa perantara.',
                    status_artikel: client_1.StatusArtikel.PUBLISHED,
                    status_verifikasi: client_1.StatusVerifikasiArtikel.DIVERIFIKASI,
                    status_aktif: true,
                    id_kategori_artikel: 3,
                    id_pengguna: 'cmbnw2d03000007l4dnaj99yj',
                    gambar_artikel: 'artikel5.webp',
                },
                {
                    id_artikel: 'peningkatan-kualitas-pertanian-006',
                    judul_artikel: 'Manajemen air untuk hasil panen optimal',
                    deskripsi_artikel: 'Manajemen air yang tepat akan menentukan keberhasilan panen padi Anda.',
                    isi_artikel: 'Sistem irigasi tetes, penggunaan embung, serta pemanfaatan air hujan dapat membantu petani menjaga ketersediaan air sepanjang musim tanam. Pengaturan volume dan waktu penyiraman menjadi kunci utama menjaga kualitas tanaman.',
                    status_artikel: client_1.StatusArtikel.PUBLISHED,
                    status_verifikasi: client_1.StatusVerifikasiArtikel.DIVERIFIKASI,
                    status_aktif: true,
                    id_kategori_artikel: 3,
                    id_pengguna: 'cmbnw2d03000007l4dnaj99yj',
                    gambar_artikel: 'artikel6.webp',
                },
            ],
        });
        yield prismaClient_1.default.facilitator.createMany({
            data: [
                {
                    id_facilitator: 'cmbnwysgy000007jtasf15hfe',
                    nama_facilitator: 'PT Rokok Javier',
                    email_facilitator: 'javierrokok@gmail.com',
                    nomor_telepon_facilitator: '0821324362',
                    password_facilitator: '$2y$10$5h7NuiHIE6/knsnfSqbHdOoXxKm7eatNa6QphlDlkg0.D23ZWNQ5u',
                    tanggal_pembuatan_akun: tanggalPembuatanAkun,
                    id_kabupaten: 1116,
                    alamat_lengkap_facilitator: 'JL Simulaki',
                    avatar: 'facilitator1.webp',
                    status_aktif: true,
                },
                {
                    id_facilitator: 'cmbnwysgy000007jtasf15hff',
                    nama_facilitator: 'CV Tani Maju Bersama',
                    email_facilitator: 'tanimaju@gmail.com',
                    nomor_telepon_facilitator: '0821456789',
                    password_facilitator: '$2y$10$5h7NuiHIE6/knsnfSqbHdOoXxKm7eatNa6QphlDlkg0.D23ZWNQ5u',
                    tanggal_pembuatan_akun: tanggalPembuatanAkun,
                    id_kabupaten: 1116,
                    alamat_lengkap_facilitator: 'JL Lintas Tani',
                    avatar: 'facilitator2.webp',
                    status_aktif: true,
                },
                {
                    id_facilitator: 'cmbnwysgy000007jtasf15hfg',
                    nama_facilitator: 'PT Agro Sejahtera',
                    email_facilitator: 'agrosejahtera@gmail.com',
                    nomor_telepon_facilitator: '08531234987',
                    password_facilitator: '$2y$10$5h7NuiHIE6/knsnfSqbHdOoXxKm7eatNa6QphlDlkg0.D23ZWNQ5u',
                    tanggal_pembuatan_akun: tanggalPembuatanAkun,
                    id_kabupaten: 1116,
                    alamat_lengkap_facilitator: 'JL Cinta Tani',
                    avatar: 'facilitator3.webp',
                    status_aktif: true,
                },
                {
                    id_facilitator: 'cmbnwysgy000007jtasf15hfh',
                    nama_facilitator: 'Koperasi Makmur Jaya',
                    email_facilitator: 'makmurjaya@gmail.com',
                    nomor_telepon_facilitator: '0811223344',
                    password_facilitator: '$2y$10$5h7NuiHIE6/knsnfSqbHdOoXxKm7eatNa6QphlDlkg0.D23ZWNQ5u',
                    tanggal_pembuatan_akun: tanggalPembuatanAkun,
                    id_kabupaten: 1116,
                    alamat_lengkap_facilitator: 'JL Kemakmuran Raya',
                    avatar: 'facilitator4.webp',
                    status_aktif: true,
                },
                {
                    id_facilitator: 'cmbnwysgy000007jtasf15hfi',
                    nama_facilitator: 'Bumdes Tani Subur',
                    email_facilitator: 'tanisubur@gmail.com',
                    nomor_telepon_facilitator: '08999887766',
                    password_facilitator: '$2y$10$5h7NuiHIE6/knsnfSqbHdOoXxKm7eatNa6QphlDlkg0.D23ZWNQ5u',
                    tanggal_pembuatan_akun: tanggalPembuatanAkun,
                    id_kabupaten: 1116,
                    alamat_lengkap_facilitator: 'JL Persawahan Indah',
                    avatar: 'facilitator5.webp',
                    status_aktif: true,
                },
            ],
        });
        yield prismaClient_1.default.metodePembayaran.createMany({
            data: [
                {
                    id_metode_pembayaran: 1,
                    nama_metode_pembayaran: 'gopay',
                    gambar_metode_pembayaran: 'gopay.jpg',
                },
                {
                    id_metode_pembayaran: 2,
                    nama_metode_pembayaran: 'dana',
                    gambar_metode_pembayaran: 'dana.jpg',
                },
                {
                    id_metode_pembayaran: 3,
                    nama_metode_pembayaran: 'ovo',
                    gambar_metode_pembayaran: 'ovo.jpg',
                },
                {
                    id_metode_pembayaran: 4,
                    nama_metode_pembayaran: 'qris',
                    gambar_metode_pembayaran: 'qris.jpg',
                },
            ],
            skipDuplicates: true,
        });
        yield prismaClient_1.default.workshop.createMany({
            data: [
                {
                    id_workshop: 'pt-rokok-javier-001',
                    judul_workshop: 'Teknik Menanam Padi untuk Pemula',
                    tanggal_workshop: tanggalPembuatanAkun,
                    alaamt_lengkap_workshop: 'Jl Sukolilo',
                    deskripsi_workshop: 'Pelatihan dasar untuk petani baru yang ingin memahami teknik menanam padi secara efisien dan produktif.',
                    harga_workshop: 100000,
                    kapasitas: 100,
                    status_verifikasi: client_1.StatusVerifikasiWorkshop.DIVERIFIKASI,
                    lat_lokasi: -7.2575,
                    long_lokasi: 112.7521,
                    id_facilitator: 'cmbnwysgy000007jtasf15hfe',
                    gambar_workshop: 'workshop1.webp',
                    id_kabupaten: 1116,
                },
                {
                    id_workshop: 'pt-rokok-javier-002',
                    judul_workshop: 'Penggunaan Pupuk Organik yang Efektif',
                    tanggal_workshop: tanggalPembuatanAkun,
                    alaamt_lengkap_workshop: 'Jl Pahlawan Tani',
                    deskripsi_workshop: 'Workshop ini membahas bagaimana memilih, membuat, dan menggunakan pupuk organik untuk hasil panen maksimal.',
                    harga_workshop: 120000,
                    kapasitas: 80,
                    status_verifikasi: client_1.StatusVerifikasiWorkshop.DIVERIFIKASI,
                    lat_lokasi: -6.9147,
                    long_lokasi: 107.6098,
                    id_facilitator: 'cmbnwysgy000007jtasf15hfe',
                    gambar_workshop: 'workshop2.webp',
                    id_kabupaten: 1116,
                },
                {
                    id_workshop: 'pt-rokok-javier-003',
                    judul_workshop: 'Manajemen Irigasi untuk Lahan Sawah',
                    tanggal_workshop: tanggalPembuatanAkun,
                    alaamt_lengkap_workshop: 'Jl Irigasi Barat',
                    deskripsi_workshop: 'Pelajari bagaimana mengelola sistem pengairan secara efisien untuk meningkatkan hasil pertanian.',
                    harga_workshop: 150000,
                    kapasitas: 60,
                    status_verifikasi: client_1.StatusVerifikasiWorkshop.DIVERIFIKASI,
                    lat_lokasi: -8.4095,
                    long_lokasi: 115.1889,
                    id_facilitator: 'cmbnwysgy000007jtasf15hfe',
                    gambar_workshop: 'workshop3.webp',
                    id_kabupaten: 1116,
                },
                {
                    id_workshop: 'pt-rokok-javier-004',
                    judul_workshop: 'Teknologi Digital dalam Pertanian',
                    tanggal_workshop: tanggalPembuatanAkun,
                    alaamt_lengkap_workshop: 'Jl Teknologi Hijau',
                    deskripsi_workshop: 'Mengenalkan pemanfaatan teknologi seperti sensor, drone, dan aplikasi monitoring untuk mendukung pertanian cerdas.',
                    harga_workshop: 175000,
                    kapasitas: 50,
                    status_verifikasi: client_1.StatusVerifikasiWorkshop.DIVERIFIKASI,
                    lat_lokasi: -7.8014,
                    long_lokasi: 110.3647,
                    id_facilitator: 'cmbnwysgy000007jtasf15hfe',
                    gambar_workshop: 'workshop4.webp',
                    id_kabupaten: 1116,
                },
                {
                    id_workshop: 'pt-rokok-javier-005',
                    judul_workshop: 'Pengendalian Hama Terpadu',
                    tanggal_workshop: tanggalPembuatanAkun,
                    alaamt_lengkap_workshop: 'Jl Agroindustri',
                    deskripsi_workshop: 'Pelatihan ini mengajarkan cara mengidentifikasi dan mengatasi hama secara terpadu dan ramah lingkungan.',
                    harga_workshop: 130000,
                    kapasitas: 70,
                    status_verifikasi: client_1.StatusVerifikasiWorkshop.DIVERIFIKASI,
                    lat_lokasi: -0.7893,
                    long_lokasi: 113.9213,
                    id_facilitator: 'cmbnwysgy000007jtasf15hfe',
                    gambar_workshop: 'workshop5.webp',
                    id_kabupaten: 1116,
                },
            ],
        });
        yield prismaClient_1.default.kategoriTanaman.createMany({
            data: [
                {
                    id_kategori_tanaman: 1,
                    nama_kategori_tanaman: 'Tanaman Pangan',
                },
                {
                    id_kategori_tanaman: 2,
                    nama_kategori_tanaman: 'Tanaman Perkebunan',
                },
                {
                    id_kategori_tanaman: 3,
                    nama_kategori_tanaman: 'Tanaman Hortikultura',
                },
            ],
            skipDuplicates: true,
        });
        yield prismaClient_1.default.tanaman.createMany({
            data: [
                {
                    id_tanaman: 'pang-001',
                    nama_tanaman: 'Jagung',
                    nama_latin: 'Zea mays',
                    durasi_penanaman: 90,
                    deskripsi_tanaman: 'Jagung (Zea mays) adalah tanaman serealia penting yang tumbuh dengan cepat dan memiliki nilai ekonomi tinggi. Tanaman ini banyak dibudidayakan untuk dikonsumsi dalam bentuk jagung manis, tepung jagung, atau pakan ternak. Selain mudah ditanam di berbagai jenis tanah, jagung juga tahan terhadap kekeringan ringan dan membutuhkan sinar matahari penuh selama masa pertumbuhan.',
                    tingkat_kesulitan: 'MUDAH',
                    id_kategori_tanaman: 1,
                    gambar_tanaman: 'jagung.webp',
                },
                {
                    id_tanaman: 'perk-001',
                    nama_tanaman: 'Bayam',
                    nama_latin: 'Spinacia oleracea',
                    durasi_penanaman: 30,
                    deskripsi_tanaman: 'Bayam (Spinacia oleracea) adalah sayuran daun hijau yang sangat bergizi, kaya akan zat besi, vitamin A, C, dan K, serta antioksidan. Tanaman ini tumbuh dengan cepat dan cocok untuk ditanam di pekarangan rumah atau pot. Bayam membutuhkan penyiraman teratur dan tempat yang mendapatkan cahaya matahari cukup, namun tidak terlalu terik. Karena kemudahan perawatannya, bayam sangat cocok bagi pemula dalam dunia bercocok tanam.',
                    tingkat_kesulitan: 'SANGAT_MUDAH',
                    id_kategori_tanaman: 2,
                    gambar_tanaman: 'bayam.webp',
                },
            ],
            skipDuplicates: true,
        });
        yield prismaClient_1.default.instruksiTanaman.createMany({
            data: [
                {
                    instruksi: 'Siapkan lahan dengan menggemburkan tanah sedalam 20–30 cm',
                    urutan: 1,
                    id_tanaman: 'pang-001',
                },
                {
                    instruksi: 'Bersihkan gulma dan sisa tanaman sebelumnya dari lahan tanam',
                    urutan: 2,
                    id_tanaman: 'pang-001',
                },
                {
                    instruksi: 'Buat bedengan jika tanah cenderung basah untuk memperlancar drainase',
                    urutan: 3,
                    id_tanaman: 'pang-001',
                },
                {
                    instruksi: 'Buat lubang tanam dengan kedalaman 2–3 cm dan jarak antar lubang 20–30 cm',
                    urutan: 4,
                    id_tanaman: 'pang-001',
                },
                {
                    instruksi: 'Tanam 2–3 biji jagung per lubang, lalu tutup dengan tanah tipis',
                    urutan: 5,
                    id_tanaman: 'pang-001',
                },
                {
                    instruksi: 'Siram lahan secukupnya untuk menjaga kelembaban tanah',
                    urutan: 6,
                    id_tanaman: 'pang-001',
                },
                {
                    instruksi: 'Lakukan penjarangan jika semua biji tumbuh; sisakan 1–2 tanaman per lubang',
                    urutan: 7,
                    id_tanaman: 'pang-001',
                },
                {
                    instruksi: 'Berikan pupuk dasar seperti kompos atau NPK seimbang saat usia 7–10 hari',
                    urutan: 8,
                    id_tanaman: 'pang-001',
                },
                {
                    instruksi: 'Lakukan penyiangan gulma secara berkala untuk menjaga tanaman dari kompetisi',
                    urutan: 9,
                    id_tanaman: 'pang-001',
                },
                {
                    instruksi: 'Jagung siap dipanen saat rambut jagung mulai mengering dan biji mengeras, sekitar 90 hari setelah tanam',
                    urutan: 10,
                    id_tanaman: 'pang-001',
                },
                {
                    instruksi: 'Siapkan media tanam dengan campuran tanah gembur, kompos, dan pasir dengan perbandingan 1:1:1',
                    urutan: 1,
                    id_tanaman: 'perk-001',
                },
                {
                    instruksi: 'Pastikan media tanam berada dalam pot, polybag, atau bedengan dengan drainase baik',
                    urutan: 2,
                    id_tanaman: 'perk-001',
                },
                {
                    instruksi: 'Taburkan benih bayam secara merata di atas permukaan tanah yang telah diratakan',
                    urutan: 3,
                    id_tanaman: 'perk-001',
                },
                {
                    instruksi: 'Tutup tipis dengan tanah halus atau abu sekam agar benih tetap lembab',
                    urutan: 4,
                    id_tanaman: 'perk-001',
                },
                {
                    instruksi: 'Siram dengan sprayer halus agar benih tidak hanyut atau tergeser',
                    urutan: 5,
                    id_tanaman: 'perk-001',
                },
                {
                    instruksi: 'Letakkan di tempat yang cukup cahaya tetapi tidak terkena sinar matahari langsung berlebihan',
                    urutan: 6,
                    id_tanaman: 'perk-001',
                },
                {
                    instruksi: 'Jaga kelembaban tanah dengan penyiraman pagi dan sore secara rutin',
                    urutan: 7,
                    id_tanaman: 'perk-001',
                },
                {
                    instruksi: 'Lakukan penjarangan jika tumbuh terlalu rapat agar tanaman bisa berkembang optimal',
                    urutan: 8,
                    id_tanaman: 'perk-001',
                },
                {
                    instruksi: 'Berikan pupuk organik cair seminggu sekali untuk mempercepat pertumbuhan',
                    urutan: 9,
                    id_tanaman: 'perk-001',
                },
                {
                    instruksi: 'Bayam bisa dipanen dalam 25–30 hari setelah tanam saat daun terlihat segar dan belum berbunga',
                    urutan: 10,
                    id_tanaman: 'perk-001',
                },
            ],
            skipDuplicates: true,
        });
        function seedJagung() {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('Seeding Jagung (90 days)...');
                for (let i = 1; i <= 90; i++) {
                    let fase;
                    let deskripsi;
                    let tugas1;
                    let tugas2;
                    let jenis1;
                    let jenis2;
                    let waktu1;
                    let waktu2;
                    // Tentukan fase dan deskripsi berdasarkan hari ke-
                    if (i <= 7) {
                        fase = client_1.FasePenanaman.PERSIAPAN;
                        deskripsi = 'Persiapan lahan dan benih';
                        if (i === 1) {
                            tugas1 = 'Pengolahan tanah';
                            tugas2 = 'Pemilihan benih';
                            jenis1 = client_1.JenisTugas.PENGECEKAN_HARIAN;
                            jenis2 = client_1.JenisTugas.PENGECEKAN_HARIAN;
                            waktu1 = 120;
                            waktu2 = 30;
                        }
                        else {
                            tugas1 = 'Pengecekan kondisi lahan';
                            tugas2 = 'Penyiraman persiapan';
                            jenis1 = client_1.JenisTugas.PENGECEKAN_HARIAN;
                            jenis2 = client_1.JenisTugas.TUGAS_BIASA;
                            waktu1 = 20;
                            waktu2 = 15;
                        }
                    }
                    else if (i <= 14) {
                        fase = client_1.FasePenanaman.PENANAMAN;
                        deskripsi = 'Penanaman benih jagung';
                        if (i === 8) {
                            // Perbaikan: seharusnya hari ke-8, bukan 7
                            tugas1 = 'Penanaman benih';
                            tugas2 = 'Penyiraman pertama';
                            jenis1 = client_1.JenisTugas.TUGAS_BIASA;
                            jenis2 = client_1.JenisTugas.TUGAS_BIASA;
                            waktu1 = 60;
                            waktu2 = 15;
                        }
                        else {
                            tugas1 = 'Pemantauan perkecambahan';
                            tugas2 = 'Penyiraman rutin';
                            jenis1 = client_1.JenisTugas.PENGECEKAN_HARIAN;
                            jenis2 = client_1.JenisTugas.TUGAS_BIASA;
                            waktu1 = 15;
                            waktu2 = 10;
                        }
                    }
                    else if (i <= 60) {
                        fase = client_1.FasePenanaman.PERTUMBUHAN;
                        deskripsi = 'Perawatan tanaman muda';
                        if (i === 14 || i === 30 || i === 45) {
                            const urutan = Math.floor((i - 14) / 15) + 1;
                            tugas1 = `Pemupukan ke-${urutan}`;
                            tugas2 = 'Penyiangan gulma';
                            jenis1 = client_1.JenisTugas.PENGECEKAN_HARIAN;
                            jenis2 = client_1.JenisTugas.TUGAS_BIASA;
                            waktu1 = 30;
                            waktu2 = 45;
                        }
                        else {
                            tugas1 = 'Pemantauan pertumbuhan';
                            tugas2 = 'Penyiraman rutin';
                            jenis1 = client_1.JenisTugas.PENGECEKAN_HARIAN;
                            jenis2 = client_1.JenisTugas.TUGAS_BIASA;
                            waktu1 = 15;
                            waktu2 = 10;
                        }
                    }
                    else if (i <= 80) {
                        fase = client_1.FasePenanaman.PEMELIHARAAN;
                        deskripsi = 'Pemeliharaan intensif';
                        if (i === 60) {
                            tugas1 = 'Pemupukan intensif';
                            tugas2 = 'Penyemprotan pestisida';
                            jenis1 = client_1.JenisTugas.PENGECEKAN_HARIAN;
                            jenis2 = client_1.JenisTugas.PENGECEKAN_HARIAN;
                            waktu1 = 45;
                            waktu2 = 30;
                        }
                        else {
                            tugas1 = 'Pemantauan kesehatan tanaman';
                            tugas2 = 'Penyiraman sesuai kebutuhan';
                            jenis1 = client_1.JenisTugas.PENGECEKAN_HARIAN;
                            jenis2 = client_1.JenisTugas.TUGAS_BIASA;
                            waktu1 = 20;
                            waktu2 = 15;
                        }
                    }
                    else if (i <= 85) {
                        fase = client_1.FasePenanaman.PRAPANEN;
                        deskripsi = 'Persiapan panen';
                        tugas1 = 'Pengecekan kematangan';
                        tugas2 = 'Persiapan alat panen';
                        jenis1 = client_1.JenisTugas.PENGECEKAN_HARIAN;
                        jenis2 = client_1.JenisTugas.TUGAS_BIASA;
                        waktu1 = 20;
                        waktu2 = 30;
                    }
                    else {
                        fase = client_1.FasePenanaman.PANEN;
                        deskripsi = 'Panen jagung';
                        if (i === 90) {
                            tugas1 = 'Panen jagung';
                            tugas2 = 'Sortasi hasil panen';
                            jenis1 = client_1.JenisTugas.TUGAS_BIASA;
                            jenis2 = client_1.JenisTugas.TUGAS_BIASA;
                            waktu1 = 180;
                            waktu2 = 120;
                        }
                        else {
                            tugas1 = 'Panen bertahap';
                            tugas2 = 'Pengepakan hasil';
                            jenis1 = client_1.JenisTugas.TUGAS_BIASA;
                            jenis2 = client_1.JenisTugas.TUGAS_BIASA;
                            waktu1 = 150;
                            waktu2 = 90;
                        }
                    }
                    // Insert hari penanaman dan tugas
                    const hariPenanaman = yield prismaClient_1.default.hariPenanaman.create({
                        data: {
                            hari_ke: i,
                            nama_fase: fase,
                            deskripsi_fase: deskripsi,
                            id_tanaman: 'pang-001',
                        },
                    });
                    // Insert tugas harian
                    yield prismaClient_1.default.tugasPenanaman.createMany({
                        data: [
                            {
                                nama_tugas: tugas1,
                                jenis_tugas: jenis1,
                                estimasi_waktu: waktu1,
                                id_hari_penanaman: hariPenanaman.id_hari_penanaman,
                            },
                            {
                                nama_tugas: tugas2,
                                jenis_tugas: jenis2,
                                estimasi_waktu: waktu2,
                                id_hari_penanaman: hariPenanaman.id_hari_penanaman,
                            },
                        ],
                    });
                }
                console.log('Jagung seeding completed!');
            });
        }
        function seedBayam() {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('Seeding Bayam (30 days)...');
                for (let i = 1; i <= 30; i++) {
                    let fase;
                    let deskripsi;
                    let tugas1;
                    let tugas2;
                    let jenis1;
                    let jenis2;
                    let waktu1;
                    let waktu2;
                    // Tentukan fase dan deskripsi berdasarkan hari ke-
                    if (i <= 3) {
                        fase = client_1.FasePenanaman.PERSIAPAN;
                        deskripsi = 'Persiapan media tanam';
                        if (i === 1) {
                            tugas1 = 'Penyiapan media tanam';
                            tugas2 = 'Perendaman benih';
                            jenis1 = client_1.JenisTugas.PENGECEKAN_HARIAN;
                            jenis2 = client_1.JenisTugas.PENGECEKAN_HARIAN;
                            waktu1 = 60;
                            waktu2 = 15;
                        }
                        else {
                            tugas1 = 'Pengecekan media tanam';
                            tugas2 = 'Penyiraman persiapan';
                            jenis1 = client_1.JenisTugas.PENGECEKAN_HARIAN;
                            jenis2 = client_1.JenisTugas.TUGAS_BIASA;
                            waktu1 = 15;
                            waktu2 = 10;
                        }
                    }
                    else if (i <= 7) {
                        fase = client_1.FasePenanaman.PENANAMAN;
                        deskripsi = 'Penaburan benih bayam';
                        if (i === 4) {
                            tugas1 = 'Penaburan benih';
                            tugas2 = 'Penyiraman pertama';
                            jenis1 = client_1.JenisTugas.TUGAS_BIASA;
                            jenis2 = client_1.JenisTugas.TUGAS_BIASA;
                            waktu1 = 20;
                            waktu2 = 10;
                        }
                        else {
                            tugas1 = 'Pemantauan perkecambahan';
                            tugas2 = 'Penyiraman rutin';
                            jenis1 = client_1.JenisTugas.PENGECEKAN_HARIAN;
                            jenis2 = client_1.JenisTugas.TUGAS_BIASA;
                            waktu1 = 10;
                            waktu2 = 5;
                        }
                    }
                    else if (i <= 20) {
                        fase = client_1.FasePenanaman.PERTUMBUHAN;
                        deskripsi = 'Perawatan tanaman bayam';
                        if (i === 10 || i === 15) {
                            tugas1 = 'Pemupukan cair';
                            tugas2 = 'Penyiangan gulma';
                            jenis1 = client_1.JenisTugas.PENGECEKAN_HARIAN;
                            jenis2 = client_1.JenisTugas.TUGAS_BIASA;
                            waktu1 = 20;
                            waktu2 = 30;
                        }
                        else {
                            tugas1 = 'Pemantauan pertumbuhan';
                            tugas2 = 'Penyiraman rutin';
                            jenis1 = client_1.JenisTugas.PENGECEKAN_HARIAN;
                            jenis2 = client_1.JenisTugas.TUGAS_BIASA;
                            waktu1 = 10;
                            waktu2 = 5;
                        }
                    }
                    else if (i <= 25) {
                        fase = client_1.FasePenanaman.PEMELIHARAAN;
                        deskripsi = 'Pemeliharaan intensif';
                        if (i === 20) {
                            tugas1 = 'Penyemprotan pestisida organik';
                            tugas2 = 'Pemupukan akhir';
                            jenis1 = client_1.JenisTugas.PENGECEKAN_HARIAN;
                            jenis2 = client_1.JenisTugas.PENGECEKAN_HARIAN;
                            waktu1 = 25;
                            waktu2 = 20;
                        }
                        else {
                            tugas1 = 'Pemantauan kesehatan tanaman';
                            tugas2 = 'Penyiraman sesuai kebutuhan';
                            jenis1 = client_1.JenisTugas.PENGECEKAN_HARIAN;
                            jenis2 = client_1.JenisTugas.TUGAS_BIASA;
                            waktu1 = 15;
                            waktu2 = 10;
                        }
                    }
                    else {
                        fase = client_1.FasePenanaman.PANEN;
                        deskripsi = 'Panen bayam';
                        if (i === 30) {
                            tugas1 = 'Panen bayam';
                            tugas2 = 'Sortasi hasil panen';
                            jenis1 = client_1.JenisTugas.TUGAS_BIASA;
                            jenis2 = client_1.JenisTugas.TUGAS_BIASA;
                            waktu1 = 90;
                            waktu2 = 60;
                        }
                        else {
                            tugas1 = 'Panen bertahap';
                            tugas2 = 'Pengepakan hasil';
                            jenis1 = client_1.JenisTugas.TUGAS_BIASA;
                            jenis2 = client_1.JenisTugas.TUGAS_BIASA;
                            waktu1 = 60;
                            waktu2 = 45;
                        }
                    }
                    // Insert hari penanaman dan tugas
                    const hariPenanaman = yield prismaClient_1.default.hariPenanaman.create({
                        data: {
                            hari_ke: i,
                            nama_fase: fase,
                            deskripsi_fase: deskripsi,
                            id_tanaman: 'perk-001',
                        },
                    });
                    // Insert tugas harian
                    yield prismaClient_1.default.tugasPenanaman.createMany({
                        data: [
                            {
                                nama_tugas: tugas1,
                                jenis_tugas: jenis1,
                                estimasi_waktu: waktu1,
                                id_hari_penanaman: hariPenanaman.id_hari_penanaman,
                            },
                            {
                                nama_tugas: tugas2,
                                jenis_tugas: jenis2,
                                estimasi_waktu: waktu2,
                                id_hari_penanaman: hariPenanaman.id_hari_penanaman,
                            },
                        ],
                    });
                }
                console.log('Bayam seeding completed!');
            });
        }
        seedJagung();
        seedBayam();
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prismaClient_1.default.$disconnect();
}));
