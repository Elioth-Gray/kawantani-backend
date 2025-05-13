import prisma from '../../prisma/prismaClient';
import { renderMailHtml, sendEmail } from '../mail/mail';

export async function generateUniqueVerificationCode(
  length: number = 4
): Promise<string> {
  const generateCode = () => {
    const min = Math.pow(10, length - 1);
    const max = Math.pow(10, length) - 1;
    return Math.floor(min + Math.random() * (max - min + 1)).toString();
  };

  let verificationCode = generateCode();

  let codeExists = await prisma.pengguna.findFirst({
    where: { kode_verifikasi: verificationCode },
  });

  while (codeExists) {
    verificationCode = generateCode();
    codeExists = await prisma.pengguna.findFirst({
      where: { kode_verifikasi: verificationCode },
    });
  }

  return verificationCode;
}
