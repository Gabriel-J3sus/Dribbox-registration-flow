import React from 'react';
import { useNavigation } from '@react-navigation/native';

import PagesProps from '../Interface/PagesProps';

import ButtonComponent from '../Components/Button';
import LinkButton from '../Components/LinkButton';

import { Container, Wrapper, Welcoming, Title, DescriptionContainer, Description } from '../styles/Pages/landing';

export default function Landing({ title }: PagesProps) {
    const navigation = useNavigation();

    function handleNavigateToLogin() {
        navigation.navigate('Login');
    }

    function handleNavigateToSignUp() {
        navigation.navigate('SignUp');
    }

    return (
        <Container>
            <Wrapper>
                <Welcoming>Welcome to</Welcoming>
                <Title>{title}</Title>

                <DescriptionContainer>
                    <Description>Best cloud storage platform for all business and individuals to manage there data </Description>
                    <Description>Join For Free.</Description>
                </DescriptionContainer>

                <ButtonComponent title='Sign in' handleNavigate={handleNavigateToLogin}/>
            </Wrapper>

            <LinkButton title='Create Account' handleNavigate={handleNavigateToSignUp} />
        </Container>
    );
}