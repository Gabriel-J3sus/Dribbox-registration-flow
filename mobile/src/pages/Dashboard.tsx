import React from 'react';

import { IPagesProps } from '../Interface';

import { Container, Wrapper, Title, } from '../styles/Pages/dashboard';

export default function Dashboard({ title }: IPagesProps) {
    
    return (
        <Container>
            <Wrapper>
                <Title>{title}</Title>

            </Wrapper>
        </Container>
    );
}