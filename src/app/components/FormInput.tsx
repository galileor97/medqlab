import React from 'react';

export interface FormInputProps {
    type?: string;
    className?: string;
    placeholder?: string;
    icon?: React.ReactNode; 
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({ type = 'text', className, placeholder, icon, value, onChange }) => {
    return (
        <div className={className} style={{ display: 'flex', alignItems: 'center' }}>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                style={{ flex: 1, fontFamily: 'Inter', fontSize: '0.875rem', padding: '0.5rem' }}
            />
            {icon && <span style={{ marginLeft: '8px' }}>{icon}</span>}
        </div>
    );
};

export default FormInput;
