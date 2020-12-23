import React from 'react';

import { InputText } from './styles';

import { IInputProps } from '../../Interface';

export default function Input ({ placeholder, secureTextEntry, value, onChangeText }: IInputProps) {
    return (
        <InputText 
            placeholder={placeholder} 
            secureTextEntry={secureTextEntry} 
            placeholderTextColor="#999999" 
            value={value}
            onChangeText={onChangeText}
        />
    );
}