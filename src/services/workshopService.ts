import prisma from '../prisma/prismaClient';
import * as Yup from 'yup';
import { TCreateArticle } from '../types/articlesType';
import { StatusArtikel } from '../generated/prisma';

const createSchema = Yup.object({
  title: Yup.string().required('Judul workshop harus diisi!'),
  date: Yup.string().required('tanggal workshop harus diisi!'),
  address: Yup.string().required('alamat workshop harus diisi!'),
  description: Yup.string().required('Gambar artikel harus diisi!'),
  price: Yup.string().required('Kategori artikel harus diisi!'),
  capacity: Yup.string().required('Kapasitas workshop harus diisi!'),
  image: Yup.string().required('Gambar workshop harus diisi!'),
  latitude: Yup.string().required('Koordinat harus lengkap'),
  longitude: Yup.string().required('Koordinat harus lengkap!'),
});
