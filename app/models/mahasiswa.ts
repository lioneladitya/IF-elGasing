"use server";

import { PrismaClient } from "@prisma/client";

// buat variable primsa
const prisma = new PrismaClient(); //buat variabel "prisma"

// buat fungsi tampil data
export async function getData() {
    // buat variabel "mahasiswa" untuk menampilkan data mahasiswa
    const mahasiswa = await prisma.tb_mahasiswa.findMany({
        where: {
            status: "Y",
            // jurusan: "informatika",
            // jurusan: {
            // startsWith: "Sistem"
            // endsWith: "Tika" 
            // contains: "tem"
            // }
        },
    })
    // const mahasiswa = await prisma.tb_mahasiswa.findUnique({
    //   where: {
    //     id: 1,
    //   },
    // })
    return mahasiswa;
}


// buat fungsi row function untuk update status
// export async function setUpdateStatus()
export const setUpdateStatus = async (npm: string) => {// buat variabel "mahasiswa" untuk menampilkan data mahasiswa
    await prisma.tb_mahasiswa.updateMany({
        where: {
            npm: npm,
        },
        data: {
            status: "N",
        }
    })
}
// buat fungsi cek data mahasiswa ("NPM")
export const checkData = async (npm: string) => {
    const check = await prisma.tb_mahasiswa.findMany({
        select: {
            id: true,
        },
        where: {
            npm: npm,
        },
    })

    return check;
}
