import React from 'react';

import { SignInButton, SignInButtonText } from './styles';

import { IButtonProps } from '../../Interface';

export default function Button({ onSubmit, title }: IButtonProps) {
    return (
        <SignInButton onPress={onSubmit} > 
            <SignInButtonText> {title} </SignInButtonText>
        </SignInButton>
    );
}