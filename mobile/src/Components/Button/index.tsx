import React from 'react';

import { SignInButton, SignInButtonText } from './styles';

interface ButtonProps {
    handleNavigate: () => void;
    title: string;
}

export default function Button({ handleNavigate, title }: ButtonProps) {
    return (
        <SignInButton onPress={handleNavigate}> 
            <SignInButtonText> {title} </SignInButtonText>
        </SignInButton>
    );
}