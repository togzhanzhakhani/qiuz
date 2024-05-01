import { View, Text, StyleSheet, Pressable } from 'react-native';

const QuestionCard = ({ question, answerOptions, handleAnswerOptionClick, selectedOption, setSelectedOption, answerSubmitted }) => {
 
  const handleAnswerSelect = (option, index) => {
    if (!answerSubmitted) {
        setSelectedOption(index);
      }
  };

 
  const handleSubmitAnswer = () => {
    handleAnswerOptionClick(answerOptions[selectedOption].isCorrect);

  };

  return (
    <View style={styles.card}>
      <Text style={styles.question}>{question}</Text>
      {answerOptions.map((option, index) => (
        <Pressable
          key={index}
          style={{ backgroundColor: getBackgroundColor(index, option.isCorrect, selectedOption, answerSubmitted), padding: 10, margin: 5 }}
          onPress={() => handleAnswerSelect(option, index)}
          disabled={answerSubmitted}  
        >
          <Text style={styles.buttonText}>{option.text}</Text>
        </Pressable>
      ))}
      <Pressable
        style={styles.button}
        onPress={handleSubmitAnswer}
        disabled={answerSubmitted || selectedOption === null}
      >
        <Text style={styles.buttonText}>Submit Answer</Text>
      </Pressable>
    </View>
  );
};

const getBackgroundColor = (index, isCorrect, selectedOption, answerSubmitted) => {
  if (!answerSubmitted) {
    return index === selectedOption ? '#DCDCDC' : '#FFFAF0'; 
  } else {
    if (index === selectedOption) {
      return isCorrect ? '#9ACD32' : '#FA8072'; 
    }
    return isCorrect ? '#9ACD32' : '#FFFAF0'; 
  }
};


const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },
  question: {
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#AFEEEE',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16
  }
});

export default QuestionCard;
