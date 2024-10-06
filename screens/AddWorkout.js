import React, { useState, useContext } from 'react';
import { View, Alert, Modal } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import { WorkoutContext } from '../context/WorkoutContext';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../Styles/Styles';

export default function AddWorkout() {
  const { addWorkout, unit } = useContext(WorkoutContext);
  //Setting up miles and kilometers
  const unitName = unit === 'miles' ? 'Miles' : 'Kilometers';

  const [sport, setSport] = useState('running');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState('');
  const [calendarVisible, setCalendarVisible] = useState(false);


  //Alerts on typical user input errors (should not be possible but just in case)
  const handleAddWorkout = () => {
    if (isNaN(distance) || isNaN(duration)) {
      Alert.alert('Error', 'Please enter valid numeric values.');
      return;
    }

    if (distance < 0 || duration < 0) {
      Alert.alert('Error', 'Distance and duration must be positive values.');
      return;
    }

    const newWorkout = {
      sport,
      distance: parseFloat(distance),
      duration: parseFloat(duration),
      date,
    };

    addWorkout(newWorkout);
    Alert.alert('Success', 'Workout added successfully!');
    resetForm();
  };

  const resetForm = () => {
    setSport('running');
    setDistance('');
    setDuration('');
    setDate('');
  };

  const handleDateSelect = (day) => {
    setCalendarVisible(false);
    setDate(day.dateString);
  };

  const renderSportButton = (item, iconName) => (
    <Button
      key={item}
      mode={sport === item ? 'contained' : 'outlined'}
      onPress={() => setSport(item)}
      style={styles.sportButton}
      icon={() => <Icon name={iconName} size={20} color={sport === item ? 'white' : '#000'} />}
    >
      {item.charAt(0).toUpperCase() + item.slice(1)}
    </Button>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Workout</Text>

      <Text style={styles.label}>Sport</Text>
      <View style={styles.buttonContainer}>
        {renderSportButton('running', 'directions-run')}
        {renderSportButton('cycling', 'directions-bike')}
        {renderSportButton('swimming', 'pool')}
      </View>

      <TextInput
        label={`Distance (${unitName})`}
        mode="outlined"
        keyboardType="numeric"
        value={distance}
        onChangeText={setDistance}
        style={styles.input} />


      <TextInput
        label="Duration (minutes)"
        mode="outlined"
        keyboardType="numeric"
        value={duration}
        onChangeText={setDuration}
        style={styles.input} />

      {/*Calendar goes visible here after the button is pressed*/}

      <Text style={styles.label}>Date</Text>
      <Button onPress={() => setCalendarVisible(true)} style={styles.dateButton}>
        {date || 'Select Date'}
      </Button>

      <Modal visible={calendarVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <Calendar onDayPress={handleDateSelect} style={styles.calendar} />
        </View>
      </Modal>

      <Button mode="contained" onPress={handleAddWorkout} style={styles.button}>
        Add Workout
      </Button>
    </View>
  );
}
