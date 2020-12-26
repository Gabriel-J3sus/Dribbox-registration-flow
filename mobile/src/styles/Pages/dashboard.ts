import styled from 'styled-components/native';

import { ContainerStyle, WrapperStyle, TitleStyle, ButtonContainerStyle } from '../commonStyles';

export const Container = styled.View`
    ${ContainerStyle};
`;

export const Wrapper = styled.View`
    ${WrapperStyle};
`;

export const Title = styled.Text`
    ${TitleStyle};
`;

export const ButtonContainer = styled.View`
    ${ButtonContainerStyle};
    margin-top: 200px;
`;