import React from 'react';

import PagesProps from '../Interface/PagesProps';

import { Container, Wrapper, Title, } from '../styles/Pages/landing';

export default function Dashboard({ title }: PagesProps) {
    
    return (
        <Container>
            <Wrapper>
                <Title>{title}</Title>

            </Wrapper>
        </Container>
    );
}