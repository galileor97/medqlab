import React, { useState } from 'react';
import FormInput from './FormInput';
import RegisterIcon from './icons/RegisterIcon';

interface PenambahanBaruProps {
  onClose: () => void;
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  namaPasien: string;
  noRM: string;
  nik: string;
  noHP: string;
  statusPernikahan: string;
  tanggalLahir: string;
  beratBadan: string;
  tinggiBadan: string;
  golDarah: string;
  rhesus: string;
  outlet: string;
  unitKerja: string;
  pasienType: 'dalam' | 'luar';
}

const PenambahanBaru: React.FC<PenambahanBaruProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    namaPasien: '',
    noRM: '',
    nik: '',
    noHP: '',
    statusPernikahan: '',
    tanggalLahir: '',
    beratBadan: '',
    tinggiBadan: '',
    golDarah: '',
    rhesus: '',
    outlet: '',
    unitKerja: '',
    pasienType: 'luar'
  });

  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [field]: e.target.value
    });
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  const handleTypeChange = (type: 'dalam' | 'luar') => {
    setFormData({
      ...formData,
      pasienType: type
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="bg-white rounded-lg w-full max-w-5xl p-8">
        <div className="flex justify-between items-center mb-6 border-b border-[#D7DDE5] pb-4">
          <div className="flex items-center gap-2">
            <RegisterIcon/>
            <h2 className="font-inter font-semibold text-lg text-[#19212E]">Penambahan Baru</h2>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"/>
            </svg>
          </button>
        </div>

        <div className="mb-6">
          <div className="flex bg-[#ECF5FF] p-1 rounded-lg w-full py-3 gap-20">
            <label className="flex items-center">
              <input 
                type="radio" 
                value="dalam" 
                checked={formData.pasienType === 'dalam'} 
                onChange={() => handleTypeChange('dalam')} 
                className="mr-2 appearance-none w-5 h-5 border border-[#0078FF] rounded-full checked:bg-[#0078FF] "
              />
              Pasien Dalam
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                value="luar" 
                checked={formData.pasienType === 'luar'} 
                onChange={() => handleTypeChange('luar')} 
                className="mr-2  w-5 h-5 border border-[#0078FF] rounded-full checked:bg-[#0078FF] "
              />
              Pasien Luar
            </label>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          <div className="flex flex-col">
            <label className="font-medium text-[#19212E] mb-2">
              Nama Pasien<span className="text-red-500">*</span>
            </label>
            <FormInput 
              className="border border-[#D7DDE5] rounded-lg"
              placeholder="" 
              value={formData.namaPasien} 
              onChange={handleChange('namaPasien')} 
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-[#19212E] mb-2">
              No. RM<span className="text-red-500">*</span>
            </label>
            <FormInput 
              className="border border-[#D7DDE5] rounded-lg"
              placeholder="" 
              value={formData.noRM} 
              onChange={handleChange('noRM')} 
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-[#19212E] mb-2">
              NIK<span className="text-red-500">*</span>
            </label>
            <FormInput 
              className="border border-[#D7DDE5] rounded-lg"
              placeholder="" 
              value={formData.nik} 
              onChange={handleChange('nik')} 
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-[#19212E] mb-2">
              No. HP<span className="text-red-500">*</span>
            </label>
            <FormInput 
              className="border border-[#D7DDE5] rounded-lg"
              placeholder="" 
              value={formData.noHP} 
              onChange={handleChange('noHP')} 
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-[#19212E] mb-2">
              Status Pernikahan<span className="text-red-500">*</span>
            </label>
            <FormInput 
              className="border border-[#D7DDE5] rounded-lg"
              placeholder="" 
              value={formData.statusPernikahan} 
              onChange={handleChange('statusPernikahan')} 
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-[#19212E] mb-2">
              Tanggal Lahir<span className="text-red-500">*</span>
            </label>
            <FormInput 
              type="date"
              className="border border-[#D7DDE5] rounded-lg"
              value={formData.tanggalLahir} 
              onChange={handleChange('tanggalLahir')} 
            />
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col flex-1">
              <label className="font-medium text-[#19212E] mb-2">
                Berat Badan
              </label>
              <div className="flex">
                <FormInput 
                  className="border border-[#D7DDE5] rounded-l-lg border-r-0"
                  placeholder="" 
                  value={formData.beratBadan} 
                  onChange={handleChange('beratBadan')} 
                />
                <div className="bg-[#F2F5F8] flex items-center px-4 rounded-r-lg border border-[#D7DDE5] border-l-0">
                  <span className="text-md font-inter font-semibold text-[#19212E]">Kg</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-1">
              <label className="font-medium text-[#19212E] mb-2">
                Tinggi Badan
              </label>
              <div className="flex">
                <FormInput 
                  className="border border-[#D7DDE5] rounded-l-lg border-r-0"
                  placeholder="" 
                  value={formData.tinggiBadan} 
                  onChange={handleChange('tinggiBadan')} 
                />
                <div className="bg-[#F2F5F8] flex items-center px-4 rounded-r-lg border border-[#D7DDE5] border-l-0">
                  <span className="text-md font-inter font-semibold text-[#19212E]">Cm</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col flex-1">
              <label className="font-medium text-[#19212E] mb-2">
                Gol. Darah<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select 
                  className="appearance-none w-full border border-[#D7DDE5] rounded-lg p-2.5 bg-white font-inter text-sm"
                  value={formData.golDarah}
                  onChange={(e) => setFormData({...formData, golDarah: e.target.value})}
                >
                  <option value="">Pilih</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="AB">AB</option>
                  <option value="O">O</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10L12 15L17 10H7Z" fill="#19212E"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-1">
              <label className="font-medium text-[#19212E] mb-2">
                Rhesus
              </label>
              <div className="relative">
                <select 
                  className="appearance-none w-full border border-[#D7DDE5] rounded-lg p-2.5 bg-white font-inter text-sm"
                  value={formData.rhesus}
                  onChange={(e) => setFormData({...formData, rhesus: e.target.value})}
                >
                  <option value="">Pilih</option>
                  <option value="+">+</option>
                  <option value="-">-</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10L12 15L17 10H7Z" fill="#19212E"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-[#19212E] mb-2">
              Outlet<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select 
                className="appearance-none w-full border border-[#D7DDE5] rounded-lg p-2.5 bg-white font-inter text-sm"
                value={formData.outlet}
                onChange={(e) => setFormData({...formData, outlet: e.target.value})}
              >
                <option value="">Pilih Outlet</option>
                <option value="outlet1">Outlet 1</option>
                <option value="outlet2">Outlet 2</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10L12 15L17 10H7Z" fill="#19212E"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-[#19212E] mb-2">
              Unit Kerja<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select 
                className="appearance-none w-full border border-[#D7DDE5] rounded-lg p-2.5 bg-white font-inter text-sm"
                value={formData.unitKerja}
                onChange={(e) => setFormData({...formData, unitKerja: e.target.value})}
              >
                <option value="">Pilih Unit Kerja</option>
                <option value="unit1">Unit 1</option>
                <option value="unit2">Unit 2</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10L12 15L17 10H7Z" fill="#19212E"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <button 
            onClick={handleSubmit}
            className="px-4 py-2 bg-[#0078FF] text-white rounded-md font-medium"
          >
            Lanjutkan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PenambahanBaru;