import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);
  const [unit, setUnit] = useState('kilometers');

  // Load saved workouts and unit from AsyncStorage when the app loads
  useEffect(() => {
    const loadWorkouts = async () => {
      try {
        const storedWorkouts = await AsyncStorage.getItem('workouts');
        const savedUnit = await AsyncStorage.getItem('unit');

        if (storedWorkouts !== null) {
          setWorkouts(JSON.parse(storedWorkouts));
        }

        if (savedUnit !== null) {
          setUnit(savedUnit);
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
      } catch (error) {
        console.log('Error saving workouts to storage:', error);
      }
    };

    saveWorkouts();
  }, [workouts]);

  // Save unit to AsyncStorage when it changes
  useEffect(() => {
    const saveUnit = async () => {
      try {
        await AsyncStorage.setItem('unit', unit);
      } catch (error) {
        console.log('Error saving unit to storage:', error);
      }
    };

    saveUnit();
  }, [unit]);

  const addWorkout = (newWorkout) => {
    setWorkouts((prevWorkouts) => [...prevWorkouts, newWorkout]);
  };

  // Handle adding a workout with conversion
  const handleAddWorkout = (sport, distance, duration, date) => {
    let distanceToSave = parseFloat(distance);

    if (unit === 'miles') {
      distanceToSave *= 1.61; // Kilometers to miles conversion in two decimals as the assignment says
    }

    const newWorkout = {
      sport,
      distance: distanceToSave,
      duration: parseFloat(duration),
      date,
    };

    addWorkout(newWorkout); // Add the new workout to the context
  };

  return (
    <WorkoutContext.Provider value={{ workouts, addWorkout, unit, setUnit, handleAddWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
};
