import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const SignInButton = styled(RectButton)`
    width: 100%;
    height: 50px;

    background: #567DF4;
    border-radius: 10px;

    flex-direction: row;
    justify-content: center;
    align-items: center;
`;


export const SignInButtonText = styled.Text`
    font-family: 'Roboto_500Medium';
    color: #FFF;
    font-size: 16px;
    line-height: 25px;
`;