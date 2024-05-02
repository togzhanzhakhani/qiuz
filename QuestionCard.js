import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';

const QuestionCard = ({ question, answerOptions, handleAnswerOptionClick, selectedOptions, setSelectedOptions, answerSubmitted }) => {
 
  const multipleAnswersAllowed = answerOptions.filter(option => option.isCorrect).length > 1;

  const handleAnswerSelect = (index) => {
    if (!answerSubmitted) {
      if (multipleAnswersAllowed) {
        if (selectedOptions.includes(index)) {
          setSelectedOptions(selectedOptions.filter(opt => opt !== index));
        } else {
          setSelectedOptions([...selectedOptions, index]); 
        }
      } else {
        setSelectedOptions([index]);
      }
    }
  };


 
  const handleSubmitAnswer = () => {
    if (multipleAnswersAllowed) {
      const allCorrect = answerOptions.filter(opt => opt.isCorrect).every(opt => selectedOptions.includes(answerOptions.indexOf(opt)));
      const noIncorrect = selectedOptions.every(index => answerOptions[index].isCorrect);
      handleAnswerOptionClick(allCorrect && noIncorrect);
    } else {
      handleAnswerOptionClick(answerOptions[selectedOptions[0]].isCorrect);
    }
  };

  return (
    <ScrollView style={styles.card}>
      <Text style={styles.question}>{question}</Text>
      {answerOptions.map((option, index) => (
        <Pressable
          key={index}
          style={{ backgroundColor: getBackgroundColor(index, option.isCorrect, selectedOptions, answerSubmitted), padding: 10, margin: 5 }}
          onPress={() => handleAnswerSelect(index)}
          disabled={answerSubmitted}  
        >
          <Text style={styles.buttonText}>{option.text}</Text>
        </Pressable>
      ))}
      <Pressable
        style={styles.button}
        onPress={handleSubmitAnswer}
        disabled={answerSubmitted || selectedOptions.length === 0}
      >
        <Text style={styles.buttonText}>Submit Answer</Text>
      </Pressable>
    </ScrollView>
  );
};

const getBackgroundColor = (index, isCorrect, selectedOptions, answerSubmitted) => {
  if (!answerSubmitted) {
    return selectedOptions.includes(index) ? '#DCDCDC' : '#FFFAF0'; 
  } else {
    if (selectedOptions.includes(index)) {
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
