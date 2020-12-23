import React from 'react';

import { ErrorContainer, ErrorDescription } from './styles';

import { IErrorProps } from '../../Interface';

export default function Button({ style, errorStatusTitle }: IErrorProps) {
    return (
        <ErrorContainer style={{ display: style }}> 
            <ErrorDescription> {errorStatusTitle} </ErrorDescription>
        </ErrorContainer>
    );
}