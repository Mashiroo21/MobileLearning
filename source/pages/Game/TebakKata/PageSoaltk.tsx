import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const question = [
  {
    id: 1,
    soal: 'Sebutkan istilah yang digunakan untuk menggambarkan kondisi ketika sinyal micorwave terhalangi atau melemah karena penghalang fisik atau cuaca buruk.',
    hint: 'F _ D _',
    jawab: 'Fade',
  },
  {
    id: 2,
    soal: 'Ini adalah istilah yang mengacu pada garis lurus yang menghubungkan dua perangkat microwave.',
    hint: 'L _ _ E O _ S _ G _ T',
    jawab: 'Line of sight',
  },
  {
    id: 3,
    soal: 'Apa istilah yang digunakan untuk menggambarkan proses membagi saluran komunikasi menjadi beberapa saluran frekuensi yang berbeda?.',
    hint: 'M _ _ _ I _ L _ X _ N _',
    jawab: 'Multiplexing',
  },
  {
    id: 4,
    soal: 'Ini adalah rentang frekuensi yang paling umum digunakan dalam microwave link.',
    hint: 'S _ F',
    jawab: 'SHF',
  },
  {
    id: 5,
    soal: 'Istilah ini mengacu pada proses meningkatkan kekuatan sinyal microwave agar mencapai jarak yang lebih jauh.',
    hint: 'A _ _ L _ F _ K A _ I',
    jawab: 'Amplifikasi',
  },
];

const Soaltk = ({navigation, route}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  const handleAnswer = () => {
    const currentAnswer = answer.toLowerCase().trim();
    if (currentAnswer === question[currentQuestion].jawab.toLowerCase()) {
      setScore(score + 1);

      if (currentQuestion < question.length - 1) {
        setAnswer('');
        setCurrentQuestion(currentQuestion + 1);
        console.log('score: ', score);
      } else {
        navigation.replace('Hasil Tebak Kata', {
          score: score + 1,
          total: question.length,
        });
      }
    } else {
      if (currentQuestion < question.length - 1) {
        setAnswer('');
        setCurrentQuestion(currentQuestion + 1);
        console.log('score: ', score);
      } else {
        navigation.replace('Hasil Tebak Kata', {
          score: score,
          total: question.length,
        });
      }
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.questionBox}>
        <Text style={styles.numquestion}>
          {question[currentQuestion].id}/{question.length}
        </Text>
        <Text style={styles.questionSoal}>
          {question[currentQuestion].soal}
        </Text>
        <Text style={styles.questionHint}>
          {question[currentQuestion].hint}
        </Text>
        <TextInput
          style={styles.answerInput}
          value={answer}
          onChangeText={text => setAnswer(text)}
          placeholder="ketik Jawaban"></TextInput>
        <TouchableOpacity style={styles.nextbtn} onPress={handleAnswer}>
          <Text style={styles.btnfont}>Selanjutnya</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#62CDFF',
  },
  questionBox: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: width * 0.9,
    height: height * 0.8,
    backgroundColor: 'white',
    marginTop: height * 0.025,
    borderRadius: 40,
  },
  questionSoal: {
    fontFamily: 'futura',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center',
    marginVertical: 10,
  },
  questionHint: {
    fontFamily: 'futura',
    fontWeight: 'bold',
    fontSize: 40,
    color: 'black',
    textAlign: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  },
  answerInput: {
    borderWidth: 2,
    borderRadius: 30,
    alignSelf: 'center',
    width: width * 0.8,
    marginVertical: 10,
    fontFamily: 'futura',
    fontSize: 20,
    paddingHorizontal: 20,
  },
  nextbtn: {
    bottom: 0,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#AA77FF',
    width: width * 0.3,
    height: 40,
    borderRadius: 30,
    marginTop: 60,
  },
  btnfont: {
    fontFamily: 'futura',
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
  },
  numquestion: {
    fontFamily: 'inter',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    alignSelf: 'center',
  },
});

export default Soaltk;
