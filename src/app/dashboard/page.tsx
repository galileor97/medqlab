'use client'
import React from 'react'
import Card from '../components/Card'
import HourGlassIcon from '../components/icons/HourGlass'
import ClockIcon from '../components/icons/Clock'
import CancelIcon from '../components/icons/Cancel'
import RefreshIcon from '../components/icons/Refresh'
import AlarmIcon from '../components/icons/Alarm'
import RegisterIcon from '../components/icons/RegisterIcon'
import { Search } from '../components/Search'
import FilterButton from '../components/FilterButton'
import ToggleIcon from '../components/icons/Toggle'
import Button from '../components/Button'
import SimpleButton from '../components/SimpleButton'
import PlusIcon from '../components/icons/Plus'
import { Table, TableHead, TableRow, TableCell } from '../components/Table'
import PenambahanBaru from '../components/Popup'


const cards = [
    {
        title: 'Belum Terima Spesimen',
        icon: HourGlassIcon,
        value: 72
    },
    {
        title: 'Belum Selesai',
        icon: ClockIcon,
        value: 72
    },
    {
        title: 'Batal',
        icon: CancelIcon,
        value: 72
    },
    {
        title: 'Re-Evaluasi',
        icon: RefreshIcon,
        value: 72
    },
    {
        title: 'Lewat TAT',
        icon: AlarmIcon,
        value: 72
    },
]


const DummyData = [
    {
      "No": 1,
      "No. PA": "001521862041",
      "No. RM": "001521862041",
      "Jenis Lab": "Histopatologi",
      "Nama": "Alfonso Rosser",
      "Dokter Klinis": "dr. Cindy",
      "Divisi/DPJP": "Divisi II-A",
      "Status Proses": "Kamar Potong",
      "Turnaround Time (TAT)": "-20 menit"
    },
    {
      "No": 2,
      "No. PA": "001521862041",
      "No. RM": "001521862041",
      "Jenis Lab": "Imunohistokimia",
      "Nama": "Zaire Franci",
      "Dokter Klinis": "dr. Maria",
      "Divisi/DPJP": "Divisi IV-B",
      "Status Proses": "Proses Lab",
      "Turnaround Time (TAT)": "25 menit"
    },
    {
      "No": 3,
      "No. PA": "001521862041",
      "No. RM": "001521862041",
      "Jenis Lab": "Sitopatologi",
      "Nama": "Phillip Franci",
      "Dokter Klinis": "dr. Nanda",
      "Divisi/DPJP": "Divisi III-D",
      "Status Proses": "Proses Dokter",
      "Turnaround Time (TAT)": "30 menit"
    },
    {
      "No": 4,
      "No. PA": "001521862041",
      "No. RM": "001521862041",
      "Jenis Lab": "Imunohistokimia",
      "Nama": "Alena Herwitz",
      "Dokter Klinis": "dr. Rika",
      "Divisi/DPJP": "Divisi VI-C",
      "Status Proses": "Proses DPJP",
      "Turnaround Time (TAT)": "31 menit"
    },
    {
      "No": 5,
      "No. PA": "001521862041",
      "No. RM": "001521862041",
      "Jenis Lab": "Imunohistokimia",
      "Nama": "Kaiya Vaccaro",
      "Dokter Klinis": "dr. Cindy",
      "Divisi/DPJP": "Divisi II-A",
      "Status Proses": "Proses Dokter",
      "Turnaround Time (TAT)": "33 menit"
    },
    {
      "No": 6,
      "No. PA": "001521862041",
      "No. RM": "001521862041",
      "Jenis Lab": "Imunohistokimia",
      "Nama": "Jaxs Westervelt",
      "Dokter Klinis": "dr. Rika",
      "Divisi/DPJP": "Divisi VI-C",
      "Status Proses": "Proses Lab",
      "Turnaround Time (TAT)": "38 menit"
    },
    {
      "No": 7,
      "No. PA": "001521862041",
      "No. RM": "001521862041",
      "Jenis Lab": "Sitopatologi",
      "Nama": "Kaiya Torff",
      "Dokter Klinis": "dr. Maria",
      "Divisi/DPJP": "Divisi IV-B",
      "Status Proses": "Kamar Potong",
      "Turnaround Time (TAT)": "45 menit"
    },
    {
      "No": 8,
      "No. PA": "001521862041",
      "No. RM": "001521862041",
      "Jenis Lab": "Histopatologi",
      "Nama": "Leo Dorwart",
      "Dokter Klinis": "dr. Rika",
      "Divisi/DPJP": "Divisi VI-C",
      "Status Proses": "Proses DPJP",
      "Turnaround Time (TAT)": "47 menit"
    },
    {
      "No": 9,
      "No. PA": "001521862041",
      "No. RM": "001521862041",
      "Jenis Lab": "Sitopatologi",
      "Nama": "Paityn Saris",
      "Dokter Klinis": "dr. Cindy",
      "Divisi/DPJP": "Divisi II-A",
      "Status Proses": "Kamar Potong",
      "Turnaround Time (TAT)": "49 menit"
    },
    {
      "No": 10,
      "No. PA": "001521862041",
      "No. RM": "001521862041",
      "Jenis Lab": "Histopatologi",
      "Nama": "Justin Carder",
      "Dokter Klinis": "dr. Maria",
      "Divisi/DPJP": "Divisi IV-B",
      "Status Proses": "Proses Lab",
      "Turnaround Time (TAT)": "50 menit"
    },
    {
      "No": 11,
      "No. PA": "001521862041",
      "No. RM": "001521862041",
      "Jenis Lab": "Sitopatologi",
      "Nama": "Wilson Curtis",
      "Dokter Klinis": "dr. Cindy",
      "Divisi/DPJP": "Divisi II-A",
      "Status Proses": "Proses Dokter",
      "Turnaround Time (TAT)": "52 menit"
    },
    {
      "No": 12,
      "No. PA": "001521862041",
      "No. RM": "001521862041",
      "Jenis Lab": "Imunohistokimia",
      "Nama": "Carla Workman",
      "Dokter Klinis": "dr. Rika",
      "Divisi/DPJP": "Divisi VI-C",
      "Status Proses": "Kamar Potong",
      "Turnaround Time (TAT)": "55 menit"
    },
    {
      "No": 13,
      "No. PA": "001521862041",
      "No. RM": "001521862041",
      "Jenis Lab": "Histopatologi",
      "Nama": "Brandon Torff",
      "Dokter Klinis": "dr. Rika",
      "Divisi/DPJP": "Divisi VI-C",
      "Status Proses": "Kamar Potong",
      "Turnaround Time (TAT)": "58 menit"
    }
  ]
  
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
    outlet: string;}

export default function Dashboard() {
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);

    const handleSearch = (query: string) => {
        console.log("Search query:", query);
    };

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const handleSubmit = (formData: FormData) => {
        console.log("Form submitted:", formData);
        handleClosePopup();
    };

    return (
        <>
            <div className='flex  gap-4 pt-7 pb-8'>
                {cards.map((card) => (
                    <Card key={card.title} title={card.title} icon={card.icon} value={card.value} />
                ))}
            </div>
            <div className='flex gap-4 justify-between'>
                <div className='flex items-center gap-2'>
                    <RegisterIcon />
                    <h1 className='font-inter font-semibold text-md text-[#19212E]'>Registrasi</h1>
                </div>
                <div className='flex items-center gap-2'>
                    <Search placeholder='Cari Nama / RM / No. PA...' onSearch={handleSearch} />
                    <FilterButton />
                    <SimpleButton icon={<RefreshIcon />} text='Refresh' variant='primary' />
                    <SimpleButton icon={<PlusIcon />} text='Tambah Formulir' variant='success' onClick={handleOpenPopup} />
                </div>
            </div>
            <div className='flex justify-between'>
            <div className='flex gap-2 pt-8'>
                    <SimpleButton text='Semua' variant='rounded' active={true} />
                    <SimpleButton text='Pasien Dalam' variant='rounded' active={false} />
                    <SimpleButton text='Pasien Luar' variant='rounded' active={false} />
            </div>
                {/* <SimpleButton text='Hari ini'  active={true} /> */}
            </div>
            <div className='mt-7'>
            <Table>
                <thead>
                <TableHead className='bg-[#F2F5F8] rounded-tl-lg'>No.</TableHead>
                <TableHead className='bg-[#F2F5F8]'>No. PA</TableHead>
                <TableHead className='bg-[#F2F5F8]'>No. RM</TableHead>
                <TableHead className='bg-[#F2F5F8]'>Jenis Lab</TableHead>
                <TableHead className='bg-[#F2F5F8]'>Nama</TableHead>
                <TableHead className='bg-[#F2F5F8]'>Dokter Klinis</TableHead>
                <TableHead className='bg-[#F2F5F8]'>Divisi/DPJP</TableHead>
                <TableHead className='bg-[#F2F5F8]'>Status Proses</TableHead>
                <TableHead className='bg-[#F2F5F8] rounded-tr-lg'>TAT</TableHead>
                </thead>
                <tbody>
                    {DummyData.map((data) => (
                        <TableRow key={data.No}>
                            <TableCell className='font-inter text-sm font-medium text-[#19212E]'>{data.No}</TableCell>
                            <TableCell className='font-inter text-sm font-medium text-[#19212E]'>{data["No. PA"]}</TableCell>
                            <TableCell className='font-inter text-sm font-medium text-[#19212E]'>{data["No. RM"]}</TableCell>
                            <TableCell className='font-inter text-sm font-medium text-[#19212E]'>{data["Jenis Lab"]}</TableCell>
                            <TableCell className='font-inter text-sm font-medium text-[#19212E]'>{data.Nama}</TableCell>
                            <TableCell className='font-inter text-sm font-medium text-[#19212E]'>{data["Dokter Klinis"]}</TableCell>
                            <TableCell className='font-inter text-sm font-medium text-[#19212E]'>{data["Divisi/DPJP"]}</TableCell>
                            <TableCell className='font-inter text-sm font-medium text-[#19212E]'>
                                <span className='bg-[#F2F5F8] px-2 py-1 rounded-lg border border-[#D7DDE5]'>{data["Status Proses"]}</span>
                            </TableCell>
                            <TableCell className={`font-inter text-sm font-medium ${data["Turnaround Time (TAT)"].includes('-') ? 'text-[#F03737]' : (parseInt(data["Turnaround Time (TAT)"]) < 32 ? 'text-[#F78F08]' : 'text-[#19212E]')}`}>
                                {data["Turnaround Time (TAT)"]}
                            </TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
            </div>
            {isPopupOpen && (
                <PenambahanBaru onClose={handleClosePopup} onSubmit={handleSubmit} />
            )}
        </>
    )
}
