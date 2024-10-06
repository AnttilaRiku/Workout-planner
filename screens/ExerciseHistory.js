import React, { useContext, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { WorkoutContext } from '../context/WorkoutContext';
import styles from '../Styles/Styles';

export default function ExerciseHistory() {
  const { workouts, unit } = useContext(WorkoutContext);
  const [selectedSport, setSelectedSport] = useState('all');

  const filterWorkoutsBySport = (sport) => {
    let filteredWorkouts = [];
    for (let i = 0; i < workouts.length; i++) {
      if (sport === 'all' || workouts[i].sport === sport) {
        filteredWorkouts.push(workouts[i]);
      }
    }
    return filteredWorkouts;
  };

  const calculateTotalDistance = (filteredWorkouts) => {
    return filteredWorkouts.reduce((sum, workout) => sum + workout.distance, 0);
  };

  const renderDistance = (distance) => {
    // Convert distance to miles if the unit is set to miles
    return unit === 'miles' ? (distance / 1.61).toFixed(2) : distance.toFixed(2);
  };

  const renderWorkouts = (filteredWorkouts) => {
    return filteredWorkouts.map((workout, index) => (
      <View key={index} style={styles.workoutItem}>
        <Text style={styles.workoutText}>{workout.sport}</Text>
        <Text style={styles.workoutText}>
          Distance: {renderDistance(workout.distance)} {unit === 'miles' ? 'miles' : 'km'}
        </Text>
        <Text style={styles.workoutText}>Duration: {workout.duration} min</Text>
        <Text style={styles.workoutText}>Date: {workout.date}</Text>
      </View>
    ));
  };

  const filteredWorkouts = filterWorkoutsBySport(selectedSport);
  const totalDistance = calculateTotalDistance(filteredWorkouts);

  return (
    <View style={styles.container}>**
      <Text style={styles.header}>Workout History</Text>

      <View style={styles.buttonRow}>
        <Button
          icon={() => <Icon name="filter-list" size={16} color="#4B0082" style={{ marginRight: 2 }} />}
          mode={selectedSport === 'all' ? 'contained' : 'outlined'}
          onPress={() => setSelectedSport('all')}
          style={styles.sportButton}
        >
          All
        </Button>
        <Button
          icon={() => <Icon name="directions-run" size={16} color="#4B0082" style={{ marginRight: 2 }} />}
          mode={selectedSport === 'running' ? 'contained' : 'outlined'}
          onPress={() => setSelectedSport('running')}
          style={styles.sportButton}
        >
          Running
        </Button>
        <Button
          icon={() => <Icon name="directions-bike" size={16} color="#4B0082" style={{ marginRight: 2 }} />}
          mode={selectedSport === 'cycling' ? 'contained' : 'outlined'}
          onPress={() => setSelectedSport('cycling')}
          style={styles.sportButton}
        >
          Cycling
        </Button>
        <Button
          icon={() => <Icon name="pool" size={16} color="#4B0082" />}
          mode={selectedSport === 'swimming' ? 'contained' : 'outlined'}
          onPress={() => setSelectedSport('swimming')}
          style={styles.sportButton}
        >
          Swimming
        </Button>
      </View>

      <Text style={styles.totalDistanceText}>
        Total Distance: {renderDistance(totalDistance)} {unit === 'miles' ? 'miles' : 'km'}
      </Text>

      <ScrollView style={styles.workoutList}>
        {renderWorkouts(filteredWorkouts)}
      </ScrollView>
    </View>
  );
}