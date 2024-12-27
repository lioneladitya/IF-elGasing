"use client";

import React, { useState } from 'react'

export default function Addpage() {
    // buat hook ("use state")
    const [getNPM, setNPM] = useState("");
    const [getNama, setNama] = useState("");
    const [getJurusan, setJurusan] = useState("");

    // buat fungsi untuk simpan data
    const setSave = () => {
        // jika seluruh data terisi
        // if (getNPM != "" &&
        //     getNama != "" &&
        //     getJurusan != "") {
        //     alert("Data tersimpan")
        // }
        // jika ada data yang tidak terisi
       
        
        //tenary operator
        (getNPM !="" && getNama!="" && getJurusan!="" )
        ?alert("Data Tersimpan")
        :[alert("Lengkapi Seluruh Data !"),
         alert("Gagal")]
    }
    return (
        <div>
            <div className="grid grid-cols-10 gap-2 items-center">
                <div className="">NPM</div>
                <div className="col-span-3 "> <input type="text" placeholder="Isi NPM" className="input input-bordered w-full " onChange={(e) => { setNPM(e.target.value) }} /> </div>
                <div className="col-start-1">Nama</div>
                <div className="col-span-3"><input type="text" placeholder="Isi Nama" className="input input-bordered w-full " onChange={(e) => { setNama(e.target.value) }} /></div>
                <div className="col-start-1">Jurusan</div>
                <div className="col-span-3"> <select defaultValue={""} className="select select-success w-full " onChange={(e) => { setJurusan(e.target.value) }}>
                    <option disabled value={""}>Pilih Jurusan</option>
                    <option value={"Teknik Informatika"}>Teknik Informatika</option>
                    <option value={"Teknik Elektro"}>Teknik Elektro</option>
                    <option value={"Teknik Sipil"}>Teknik Sipil</option>
                    <option value={"Teknik Komputer"}>Teknik Komputer</option>
                    <option value={"Teknik Mesin"}>Teknik Mesin</option>
                    <option value={"Sistem Informasi"}>Sistem Informasi</option>
                    <option value={"Teknologi Informasi"}>Teknologi Informasi</option>
                </select></div>
                <div className="col-start-2 col-span-2">
                    <button className="btn btn-success m-5px w-28" onClick={setSave}>Simpan</button>
                    <button className="btn btn-active ml-5px w-28">Batal</button>
                </div>
                {/* <div>className=""NPM</div>className=""
                <div>className=""
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>className=""
            </div>className=""
        </div>className="" */}
            </div>
            <div className="grid grid-cols-10 gap-2"></div>
        </div>
    )
}