import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Quiz from './Quiz';  

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Quiz />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 10,
  },
});

export default App;

