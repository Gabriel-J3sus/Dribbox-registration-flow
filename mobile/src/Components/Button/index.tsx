import React from 'react';

import { SignInButton, SignInButtonText } from './styles';

import { IButtonProps } from '../../Interface';

export default function Button({ handleNavigate, title }: IButtonProps) {
    return (
        <SignInButton onPress={handleNavigate}> 
            <SignInButtonText> {title} </SignInButtonText>
        </SignInButton>
    );
}