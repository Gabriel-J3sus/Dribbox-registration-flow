import React from 'react';

import { IPagesProps } from '../Interface';

import { Container, Wrapper, Title, } from '../styles/Pages/landing';

export default function Dashboard({ title }: IPagesProps) {
    
    return (
        <Container>
            <Wrapper>
                <Title>{title}</Title>

            </Wrapper>
        </Container>
    );
}