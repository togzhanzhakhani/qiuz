import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import QuestionCard from './QuestionCard';
import questions1 from './Questions1';
import questions2 from './Questions2';
import questions3 from './Questions3';

const Quiz = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const questions = activeTab === 1 ? questions1 : activeTab === 2 ? questions2 : questions3;


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
      <View style={styles.tabs}>
        <Button title="Set 1" onPress={() => setActiveTab(1)} color={activeTab === 1 ? '#BA89D5' : '#ccc'} />
        <Button title="Set 2" onPress={() => setActiveTab(2)} color={activeTab === 2 ? '#BA89D5' : '#ccc'} />
        <Button title="Set 3" onPress={() => setActiveTab(3)} color={activeTab === 3 ? '#BA89D5' : '#ccc'} />
      </View>
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
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 20,
  }
});

export default Quiz;

