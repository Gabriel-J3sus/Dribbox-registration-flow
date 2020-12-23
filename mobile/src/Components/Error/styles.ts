import styled from 'styled-components/native';

export const ErrorContainer = styled.View`
    width: 100%;
    height: 40px;

    margin: 10px 0 5px ;

    justify-content: center;
    align-items: center;

    background: #FFF;
    border: 3px solid #CE6363;
    border-radius: 10px;
`;

export const ErrorDescription = styled.Text`
    font-family: 'Roboto_400Regular';
    font-size: 16px;
    line-height: 25px;
    color: #CE6363;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;