import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WorkoutProvider } from './context/WorkoutContext';
import AddWorkout from './screens/AddWorkout';
import ExerciseHistory from './screens/ExerciseHistory';
import Settings from './screens/Settings';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <WorkoutProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="AddWorkout"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'AddWorkout') {
                iconName = 'add-circle-outline';
              } else if (route.name === 'ExerciseHistory') {
                iconName = 'history';
              } else if (route.name === 'Settings') {
                iconName = 'settings';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#4B0082',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="AddWorkout" component={AddWorkout} />
          <Tab.Screen name="ExerciseHistory" component={ExerciseHistory} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </WorkoutProvider>
  );
}