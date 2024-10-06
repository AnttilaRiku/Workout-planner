import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { WorkoutContext } from '../context/WorkoutContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../Styles/Styles';

export default function Settings() {
  const { unit, setUnit } = useContext(WorkoutContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <Text style={styles.label}>Select Distance Unit</Text>

      <View style={styles.radioContainer}>
        <RadioButton.Group
          onValueChange={(value) => setUnit(value)}
          value={unit}
        >
          <View style={styles.radioButton}>
            <RadioButton value="kilometers" />
            <Text style={styles.radioText}>
              <Icon name="straighten" size={20} color="#4B0082" /> Kilometers
            </Text>
          </View>

          <View style={styles.radioButton}>
            <RadioButton value="miles" />
            <Text style={styles.radioText}>
              <Icon name="map" size={20} color="#4B0082" /> Miles
            </Text>
          </View>
        </RadioButton.Group>
      </View>
    </View>
  );
}