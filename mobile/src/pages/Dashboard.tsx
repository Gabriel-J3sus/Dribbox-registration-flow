import React from 'react';
import { Text } from 'react-native';
import { IPagesProps } from '../Interface';
import { useAuth } from '../contexts/auth';

import ButtonComponent from '../Components/Button';
import { Container, Wrapper, Title, ButtonContainer} from '../styles/Pages/dashboard';

export default function Dashboard({ title }: IPagesProps) {
    const { signOut, email } = useAuth();

    function handleSignOut() {
        signOut();
    }

    return (
        <Container>
            <Wrapper>
                <Title>{title}</Title>
                <Text>{email}</Text>
                <ButtonContainer>
                    <ButtonComponent onSubmit={handleSignOut} title="Sign out"/>
                </ButtonContainer>
            </Wrapper>
        </Container>
    );
}