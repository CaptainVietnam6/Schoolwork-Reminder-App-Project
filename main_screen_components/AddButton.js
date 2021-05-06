import React from 'react';
import { View, Image, Text, Button, Platform, StyleSheet } from 'react-native';

export default function AddAssignment() {
  return (
    <View style={styles.container}>
      <Button title = "Add Assignment" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    color: "#1BE049",
    paddingTop: 170
  }
})
