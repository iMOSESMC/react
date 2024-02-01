import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../../modules/auth/login/adapters/screens/Login';
import CreateAccount from '../../modules/auth/login/account/adapters/screens/CreateAccount'



const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} options={{ title: "Inicio de sesión"}}/>
        <Tab.Screen name="CreateAccount" component={CreateAccount} options={{title: "Registrate!"}}/> 
      </Tab.Navigator>
    </NavigationContainer>
  );
}

