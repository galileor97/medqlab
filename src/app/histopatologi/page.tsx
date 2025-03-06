'use client'
import React, { useState } from 'react'

export default function Histopatologi() {
  const [formData, setFormData] = useState({
    namaDokterLuar: '',
    noTelpDokter: '',
    rsAsal: '',
    lokasiJaringan: '',
    jaringanDidapatkan: 'Eksisi percobaan',
    jamOperasi: '',
    jamJaringanKeluar: '',
    jamMulaiFiksasi: '',
    cairan: 'Formalin Buffer 10%',
    cairanLainnya: '',
    volumeFiksasi: 'Ya',
    jumlahJaringan: '',
    jumlahWadah: '',
    diagnosisKlinik: '',
    keteranganKlinik: '',
    noPemeriksaanPotong: 'LH23-00641',
    noPemeriksaanHistopatologiSebelumnya: '',
    tanggalPemeriksaanSebelumnya: '',
    catatan: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="bg-white rounded-lg w-full p-4">
      <section className='flex justify-between items-center'>
        <h1 className='text-md font-inter font-semibold text-[#19212E] py-5'>Lab Histopatologi</h1>
        <button onClick={() => console.log('clicked')} className="text-gray-500 hover:text-gray-700">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"/>
          </svg>
        </button>
      </section>

      <section className='p-3 bg-[#ECF5FF] rounded-xl mb-4'>
        <h1 className='text-lg font-inter font-semibold text-[#19212E] pb-2'>HARI WIBAWA (0015218620)</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
          <div>
            <p className='text-sm font-inter text-[#19212E]'>
              <span className='font-semibold'>NIK:</span> 3275053005470013
            </p>
            <p className='text-sm font-inter text-[#19212E]'>
              <span className='font-semibold'>Jenis Kelamin:</span> Laki-Laki
            </p>
          </div>
          <div>
            <p className='text-sm font-inter text-[#19212E]'>
              <span className='font-semibold'>Status Pernikahan:</span> Menikah
            </p>
            <p className='text-sm font-inter text-[#19212E]'>
              <span className='font-semibold'>Tanggal Lahir:</span> 20 Mei 1990 (34 Thn)
            </p>
          </div>
          <div>
            <p className='text-sm font-inter text-[#19212E]'>
              <span className='font-semibold'>BB / TB / Gol. Darah:</span> 80 kg / 170 cm / A
            </p>
            <p className='text-sm font-inter text-[#19212E]'>
              <span className='font-semibold'>Telp / HP:</span> 081820501724
            </p>
          </div>
        </div>
      </section>

      <form className="space-y-4">
        <div className="flex flex-row items-center">
          <label className="w-1/3 text-sm font-medium text-[#19212E]">
            Nama Dokter Luar
          </label>
          <div className="w-2/3">
            <input
              type="text"
              name="namaDokterLuar"
              value={formData.namaDokterLuar}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-row items-center">
          <label className="w-1/3 text-sm font-medium text-[#19212E]">
            No. Telp Dokter
          </label>
          <div className="w-2/3">
            <input
              type="text"
              name="noTelpDokter"
              value={formData.noTelpDokter}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-row items-center">
          <label className="w-1/3 text-sm font-medium text-[#19212E]">
            RS Asal / Kota
          </label>
          <div className="w-2/3 relative">
            <select
              name="rsAsal"
              value={formData.rsAsal}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md appearance-none"
            >
              <option value="">Pilih RS Asal</option>
              <option value="rs1">RS Asal 1</option>
              <option value="rs2">RS Asal 2</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10L12 15L17 10H7Z" fill="#19212E"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center">
          <label className="w-1/3 text-sm font-medium text-[#19212E]">
            Lokasi jaringan yang sakit<span className="text-red-500">*</span>
          </label>
          <div className="w-2/3">
            <input
              type="text"
              name="lokasiJaringan"
              value={formData.lokasiJaringan}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-row">
          <label className="w-1/3 text-sm font-medium text-[#19212E] pt-2">
            Jaringan tubuh didapatkan dengan<span className="text-red-500">*</span>
          </label>
          <div className="w-2/3">
            <div className="flex flex-wrap gap-3 py-1">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="jaringanDidapatkan"
                  checked={formData.jaringanDidapatkan === 'Eksisi percobaan'}
                  onChange={() => handleRadioChange('jaringanDidapatkan', 'Eksisi percobaan')}
                  className="mr-2"
                />
                Eksisi percobaan
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="jaringanDidapatkan"
                  checked={formData.jaringanDidapatkan === 'Kerokan'}
                  onChange={() => handleRadioChange('jaringanDidapatkan', 'Kerokan')}
                  className="mr-2"
                />
                Kerokan
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="jaringanDidapatkan"
                  checked={formData.jaringanDidapatkan === 'Operasi'}
                  onChange={() => handleRadioChange('jaringanDidapatkan', 'Operasi')}
                  className="mr-2"
                />
                Operasi
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="jaringanDidapatkan"
                  checked={formData.jaringanDidapatkan === 'Aspirasi / Biopsi'}
                  onChange={() => handleRadioChange('jaringanDidapatkan', 'Aspirasi / Biopsi')}
                  className="mr-2"
                />
                Aspirasi / Biopsi
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="jaringanDidapatkan"
                  checked={formData.jaringanDidapatkan === 'Lain-lain'}
                  onChange={() => handleRadioChange('jaringanDidapatkan', 'Lain-lain')}
                  className="mr-2"
                />
                Lain-lain
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center">
          <label className="w-1/3 text-sm font-medium text-[#19212E]">
            Jam mulai operasi
          </label>
          <div className="w-2/3">
            <input
              type="time"
              name="jamOperasi"
              value={formData.jamOperasi}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-row items-center">
          <label className="w-1/3 text-sm font-medium text-[#19212E]">
            Jam jaringan keluar dari tubuh
          </label>
          <div className="w-2/3">
            <input
              type="time"
              name="jamJaringanKeluar"
              value={formData.jamJaringanKeluar}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-row items-center">
          <label className="w-1/3 text-sm font-medium text-[#19212E]">
            Jam mulai dilakukan fiksasi
          </label>
          <div className="w-2/3">
            <input
              type="time"
              name="jamMulaiFiksasi"
              value={formData.jamMulaiFiksasi}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-row items-center">
          <label className="w-1/3 text-sm font-medium text-[#19212E]">
            Cairan fiksasi
          </label>
          <div className="w-2/3 flex items-center gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="cairan"
                checked={formData.cairan === 'Formalin Buffer 10%'}
                onChange={() => handleRadioChange('cairan', 'Formalin Buffer 10%')}
                className="mr-2"
              />
              Formalin Buffer 10%
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="cairan"
                checked={formData.cairan === 'Lain-lain'}
                onChange={() => handleRadioChange('cairan', 'Lain-lain')}
                className="mr-2"
              />
              Lain-lain
            </label>
            {formData.cairan === 'Lain-lain' && (
              <input
                type="text"
                name="cairanLainnya"
                value={formData.cairanLainnya}
                onChange={handleChange}
                placeholder="Sebutkan"
                className="p-2 border border-gray-300 rounded-md"
              />
            )}
          </div>
        </div>

        <div className="flex flex-row items-center">
          <label className="w-1/3 text-sm font-medium text-[#19212E]">
            Volume fiksasi 10x volume jaringan
          </label>
          <div className="w-2/3 flex items-center gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="volumeFiksasi"
                checked={formData.volumeFiksasi === 'Ya'}
                onChange={() => handleRadioChange('volumeFiksasi', 'Ya')}
                className="mr-2"
              />
              Ya
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="volumeFiksasi"
                checked={formData.volumeFiksasi === 'Tidak'}
                onChange={() => handleRadioChange('volumeFiksasi', 'Tidak')}
                className="mr-2"
              />
              Tidak
            </label>
          </div>
        </div>

        <div className="flex flex-row items-center">
          <label className="w-1/3 text-sm font-medium text-[#19212E]">
            Jumlah jaringan yang dikirim<span className="text-red-500">*</span>
          </label>
          <div className="w-2/3">
            <input
              type="text"
              name="jumlahJaringan"
              value={formData.jumlahJaringan}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-row items-center">
          <label className="w-1/3 text-sm font-medium text-[#19212E]">
            Jumlah wadah / botol / kantong<span className="text-red-500">*</span>
          </label>
          <div className="w-2/3">
            <input
              type="text"
              name="jumlahWadah"
              value={formData.jumlahWadah}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-row">
          <label className="w-1/3 text-sm font-medium text-[#19212E] pt-2">
            Diagnosis klinik<span className="text-red-500">*</span>
          </label>
          <div className="w-2/3">
            <textarea
              name="diagnosisKlinik"
              value={formData.diagnosisKlinik}
              onChange={handleChange}
              required
              rows={3}
              className="w-full p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
        </div>

        <div className="flex flex-row">
          <label className="w-1/3 text-sm font-medium text-[#19212E] pt-2">
            Keterangan klinik
          </label>
          <div className="w-2/3">
            <textarea
              name="keteranganKlinik"
              value={formData.keteranganKlinik}
              onChange={handleChange}
              rows={3}
              className="w-full p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
        </div>

        <div className="flex flex-row items-center">
          <label className="w-1/3 text-sm font-medium text-[#19212E]">
            No. pemeriksaan potong beku
          </label>
          <div className="w-2/3">
            <input
              type="text"
              name="noPemeriksaanPotong"
              value={formData.noPemeriksaanPotong}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
              readOnly
            />
          </div>
        </div>

        <div className="flex flex-row items-center">
          <label className="w-1/3 text-sm font-medium text-[#19212E]">
            No. pemeriksaan histopatologi sebelumnya
          </label>
          <div className="w-2/3">
            <input
              type="text"
              name="noPemeriksaanHistopatologiSebelumnya"
              value={formData.noPemeriksaanHistopatologiSebelumnya}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-row items-center">
          <label className="w-1/3 text-sm font-medium text-[#19212E]">
            Tanggal pemeriksaan sebelumnya
          </label>
          <div className="w-2/3">
            <input
              type="date"
              name="tanggalPemeriksaanSebelumnya"
              value={formData.tanggalPemeriksaanSebelumnya}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-row">
          <label className="w-1/3 text-sm font-medium text-[#19212E] pt-2">
            Catatan
          </label>
          <div className="w-2/3">
            <textarea
              name="catatan"
              value={formData.catatan}
              onChange={handleChange}
              rows={3}
              className="w-full p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-6">
          <button
            type="button"
            className="px-6 py-2 text-sm font-medium text-[#19212E] bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
          >
            Batal
          </button>
          <button
            type="submit"
            className="px-6 py-2 text-sm font-medium text-white bg-[#0078FF] border border-transparent rounded-md shadow-sm hover:bg-blue-700"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
}