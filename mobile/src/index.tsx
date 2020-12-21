import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image  } from 'react-native';

import { Container, ContentWrapper} from './styles/global';
import Img from './images/backgroundImage.png';

import Routes from './routes';

export default function Index() {
    return (
        <>
            <StatusBar hidden />

            <Container>
                <Image source={Img} />

                <ContentWrapper>
                   <Routes />
                </ContentWrapper>
            </Container>
            
        </>
    );
}