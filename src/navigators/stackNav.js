import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from '../screens/auth/Welcome';
import Login from '../screens/auth/login/login';
import Registrationstep1 from '../screens/auth/registration/User/registrationstep1';
import Registrationstep2 from '../screens/auth/registration/User/registrationstep2';
import Emailconfirmation from '../screens/auth/registration/User/emailconfirmation';
import SetPassword from '../screens/auth/registration/User/setPassword';
import Addsignature from '../screens/auth/registration/User/addsignature';
import Policy from '../screens/home/user/Policy/Policy';
const Stack = createStackNavigator();
function StackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: null,
        }}>
        {/* <Stack.Screen name="TabNavigation" component={TabNavigationComponent} /> */}
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="AddSignature" component={Addsignature} />
        <Stack.Screen name="SetPassword" component={SetPassword} />
        <Stack.Screen name="EmailConfirmation" component={Emailconfirmation} />
        <Stack.Screen name="RegistrationStep2" component={Registrationstep2} />
        <Stack.Screen name="RegistrationStep1" component={Registrationstep1} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Policy" component={Policy} />

        {/* <Stack.Screen name="Header" component={Header} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNav;
