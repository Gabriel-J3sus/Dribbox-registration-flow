import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image  } from 'react-native';

import { AuthProvider } from './contexts/auth';

import { Container, ContentWrapper} from './styles/global';
import Img from './images/backgroundImage.png';

import Routes from './routes/index';

export default function Index() {
    return (
        <>
            <StatusBar hidden />

            <Container>
                <Image source={Img} />

                <ContentWrapper>
                    <NavigationContainer>
                        <AuthProvider>
                            <Routes />
                        </AuthProvider>
                    </NavigationContainer>
                </ContentWrapper>
            </Container>
            
        </>
    );
}