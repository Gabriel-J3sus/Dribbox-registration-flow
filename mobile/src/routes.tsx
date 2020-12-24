// import React from 'react';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import Landing from './pages/Landing';
// import Login from './pages/Login';
// import SignUp from './pages/SignUp';
// import Dashboard from './pages/Dashboard';

// const { Navigator, Screen } = createStackNavigator();

// export default function Routes() {
//     return (
//         <NavigationContainer>
//             <Navigator screenOptions={{ headerShown: false, }}>
//                 <Screen 
//                     name='Landing'
//                     children={() => <Landing title='Dirbbox'/>}

//                 />

//                 <Screen
//                     name="Login"
//                     children={() => <Login title='Faça login' />}
//                 />

//                 <Screen 
//                     name="SignUp"
//                     children={() => <SignUp title='Cadastrar' />}
//                 />

//                 <Screen 
//                     name="Dashboard"
//                     children={() => <Dashboard title='Dashboard' />}
//                 />
//             </Navigator>
//         </NavigationContainer>
//     );
// }