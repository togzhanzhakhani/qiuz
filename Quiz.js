import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import QuestionCard from './QuestionCard';
import questions from './Questions';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setAnswerSubmitted(true);
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
      resetQuestionState();
    } else {
      setShowScore(true);
    }
  };

  const resetQuestionState = () => {
    setSelectedOptions([]);
    setAnswerSubmitted(false);
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setShowScore(false);
    resetQuestionState();
  };

  return (
    <View style={styles.container}>
      {showScore ? (
        <View>
          <Text>You scored {score} out of {questions.length}</Text>
          <Button title="Restart quiz" onPress={restartQuiz} color='#BA89D5' />
        </View>
      ) : (
        <>
          <QuestionCard
            questionNumber={currentQuestionIndex + 1} 
            question={questions[currentQuestionIndex].question}
            answerOptions={questions[currentQuestionIndex].answers}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            answerSubmitted={answerSubmitted}
            handleAnswerOptionClick={handleAnswerOptionClick}
          />
          <Button title="Next Question" onPress={handleNextQuestion} disabled={!answerSubmitted} color='#BA89D5'  />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center', 
    padding: 20, 
    backgroundColor: '#f0f0f0' 
  }
});

export default Quiz;

