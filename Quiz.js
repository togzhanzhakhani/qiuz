import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import QuestionCard from './QuestionCard';
import questions from './questions'; 

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setShowScore(false);
  };

  return (
    <View style={styles.container}>
      {showScore ? (
        <View>
          <Text>You scored {score} out of {questions.length}</Text>
          <Button title="Restart quiz" onPress={restartQuiz} />
        </View>
      ) : (
        <QuestionCard
          question={questions[currentQuestionIndex].question}
          answerOptions={questions[currentQuestionIndex].answers}
          onAnswerOptionClick={handleAnswerOptionClick}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
});

export default Quiz;
