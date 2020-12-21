import React from 'react';

import { InputText } from './styles';

import { IInputProps } from '../../Interface';

export default function Input ({ placeholder }: IInputProps) {
    return (
        <InputText placeholder={placeholder} />
    );
}