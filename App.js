import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

import tabs from './src/navigation/tabs';
import {BookDetail} from './src/screens/BookDetail';
import {StatusBar} from 'react-native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
  border: 'transparent',
};

const Stack = createStackNavigator();

export const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={`Home`}>
        {/* Tabs */}
        <Stack.Screen name="Home" component={tabs} />

        {/* Screens */}
        <Stack.Screen
          name="BookDetail"
          component={BookDetail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
