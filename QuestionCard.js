import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const QuestionCard = ({ question, answerOptions, onAnswerOptionClick }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.question}>{question}</Text>
      {answerOptions.map((option, index) => (
        <Button
          key={index}
          title={option.text}
          onPress={() => onAnswerOptionClick(option.isCorrect)}
          color={option.isCorrect ? 'green' : 'red'}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },
  question: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default QuestionCard;
