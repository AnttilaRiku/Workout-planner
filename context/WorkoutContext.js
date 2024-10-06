import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);
  const [unit, setUnit] = useState('kilometers');

// Load saved workouts from AsyncStorage when the app loads

  useEffect(() => {
    const loadWorkouts = async () => {
      try {
        const storedWorkouts = await AsyncStorage.getItem('workouts');
        const savedUnit = await AsyncStorage.getItem('unit');
        if (storedWorkouts !== null) {
          setWorkouts(JSON.parse(storedWorkouts));
        }
      } catch (error) {
        console.log('Error loading workouts from storage:', error);
      }
    };

    loadWorkouts();
  }, []);

// Save workouts to AsyncStorage when they change

useEffect(() => {
  const saveWorkouts = async () => {
    try {
      await AsyncStorage.setItem('workouts', JSON.stringify(workouts));
      await AsyncStorage.setItem('unit', unit);
    } catch (error) {
      console.log('Error saving workouts to storage: ', error);
    }
  };

  if (workouts.length > 0) {
    saveWorkouts();
  }
}, [workouts, unit]);

const addWorkout = (newWorkout) => {
  setWorkouts((prevWorkouts) => [...prevWorkouts, newWorkout]);
};

  return (
    <WorkoutContext.Provider value={{ workouts, addWorkout, unit, setUnit }}>
      {children}
    </WorkoutContext.Provider>
  );
};