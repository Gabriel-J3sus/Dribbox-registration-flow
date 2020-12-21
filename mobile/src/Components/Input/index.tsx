import React from 'react';

import { InputText } from './styles';

interface InputProps {
    placeholder: string;
}

export default function Input ({ placeholder }: InputProps) {
    return (
        <InputText placeholder={placeholder} />
    );
}