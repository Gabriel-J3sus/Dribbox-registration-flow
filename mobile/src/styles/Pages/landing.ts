import styled from 'styled-components/native';

import { ContainerStyle, WrapperStyle, TitleStyle } from '../commonStyles';

export const Container = styled.View`
    ${ContainerStyle};
`;

export const Wrapper = styled.View`
    ${WrapperStyle};
`;

export const Welcoming = styled.Text`
    font-family: 'Roboto_300Light';
    font-size: 20px;
    line-height: 23px;
    color: #22215B;

    margin-bottom: 4px;
`;

export const Title = styled.Text`
    ${TitleStyle};
    font-size: 38px;
    line-height: 45px;
`;

export const DescriptionContainer = styled.View`
    width: 223px;
    height: 110px;

    margin-top: 12px;
    margin-bottom: 47px;

    justify-content: space-between;
`;

export const Description = styled.Text`
    font-family: 'Roboto_400Regular';
    font-size: 14px;
    line-height: 22px;
    color: #7B7F9E;
`;

