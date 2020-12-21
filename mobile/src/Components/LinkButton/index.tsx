import React from 'react';

import { LinkButtonContainer, LinkButtonText } from './styles';

import { ILinkProps } from '../../Interface';

export default function LinkButton({ handleNavigate, title }: ILinkProps) {
    return (
        <LinkButtonContainer onPress={handleNavigate}> 
          <LinkButtonText> {title} </LinkButtonText>
        </LinkButtonContainer>
    );
}