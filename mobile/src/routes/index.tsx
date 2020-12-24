import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from '../contexts/auth';

import AuthRoutes from './auth.routes';
// import AppRoutes from './app.routes';

export default function Routes() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <AuthRoutes />
            </AuthProvider>
        </NavigationContainer>
    );
}