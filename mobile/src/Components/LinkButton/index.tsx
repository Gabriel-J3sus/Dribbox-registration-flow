import React from 'react';

import { LinkButtonContainer, LinkButtonText } from './styles';

interface LinkProps {
    handleNavigate: () => void;
    title: string
}

export default function LinkButton({ handleNavigate, title }: LinkProps) {
    return (
        <LinkButtonContainer onPress={handleNavigate}> 
          <LinkButtonText> {title} </LinkButtonText>
        </LinkButtonContainer>
    );
}