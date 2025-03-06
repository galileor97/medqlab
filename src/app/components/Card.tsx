import React from 'react'
import HourGlassIcon from './icons/HourGlass'

interface CardProps {
    title: string;
    icon: React.ElementType;
    value: number;
}

export default function Card({ title, icon: Icon, value }: CardProps) {
    return (
        <div className='bg-white border border-[#D7DDE5] rounded-lg px-5 py-4 gap-6' style={{ width: '212px'}} >
            <div className='flex items-center justify-between'>
                <h1 className='text-sm font-inter font-semibold text-[#19212E] whitespace-normal'>{title}</h1>
                <Icon />
            </div>
            <div>
                <p className='text-[36px] font-inter font-normal text-[#19212E]'>72</p>
            </div>
        </div>
    )
}
