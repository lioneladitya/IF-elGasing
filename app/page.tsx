"use client";

import { faPencil, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getData, setUpdateStatus} from './models/mahasiswa';



export default function RootPage() {
  // buat hooks dengan usestate
  const [getValue, setValue] = useState({})
  // buat fungsi "fetch data"
  async function fetchData()
  {
    setValue(await getData());
  }
  // buat use hook "use effect"
  useEffect(() => {
    // panggil ferch data
    fetchData();


  }, [])


  // bust fungsi setDelete
  //ini parameter formal
  function setDelete(npm: string, nama: string) 
  {
    // alert("klik delete");
    if(confirm(`Data Mahasiswa Dengan npm: ${npm}\ndan nama: ${nama} \ningin dihapus ?`) == true)
          {
    setUpdateStatus(npm)
    alert(`Data Mahasiswa Dengan npm: ${npm}\ndan nama: ${nama} Berhasil Dihapus`)
    location.reload();
    }

    // else {
    //   alert("tombol cancel");
    // }

  }



  return (
    <><title>View Data Mahasiswa</title>
      {/*Menu untuk menambah data mahasiswa*/}
      <nav className="mb-5 flex justify-end text-center">
      <button className="btn btn-outline btn-success">
        <Link href={"/add"}>
        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        Tambah Data Mahasiswa
        </Link>
        </button>
      </nav>
      {/* tampilkan data mahasiswa */}
      <table className='w-full'>
        <thead>
          <tr className='bg-slate-300 h-10'>
            <th className='w-10% border border-slate-600'>Aksi</th>
            <th className='w-10% border border-slate-600'>Npm</th>
            <th className='w-50% border border-slate-600'>Nama</th>
            <th className='w-30% border border-slate-600'>Jurusan</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(getValue).map((data: any, index: number) => (
            // <div key={index}>
            //   <div>{data.npm} - {data.nama} - {data.jurusan}</div>
            // </div>

            <tr key={index}>
              <td className='text-center border border-slate-600 p-2'>
                {/* edit icon */}
                <Link href={`/edit/${btoa(data.npm)}`} className='bg-green-600 text-color2 px-2.5 py-5px rounded-md mr-5px text-sm' title='Edit'>
                  <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
                </Link>

                {/* delete icon */}
                <Link href={"/"} className='bg-red-600 text-color2 px-2.5 py-5px rounded-md ml-5px text-sm' title='Delete'
                  // onClick={setDelete}>
                  //ini parameter aktual
                  onClick={() => {setDelete(data.npm, data.nama)}}> 
                  <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </Link>
              </td>
              <td className='text-center border border-slate-600'>{data.npm}</td>
              <td className='text-justify border border-slate-600 px-2.5'>{data.nama}</td>
              <td className='text-center border border-slate-600'>{data.jurusan}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* {mahasiswa?.npm} */}
    </>
  )
}
