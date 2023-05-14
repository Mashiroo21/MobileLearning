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
  Image,
} from 'react-native';
import {
  bersihoptik,
  konektor,
  multimode,
  powermeter,
  splitter,
} from '../../../Images';

const {height, width} = Dimensions.get('window');

const question = [
  {
    id: 1,
    soal: konektor,
    hint: 'Gambar apakah itu?',
    opsi1: 'Transmitter',
    opsi2: 'Konektor',
    opsi3: 'Receiver',
    opsi4: 'Router',
    jawab: 'Konektor',
  },
  {
    id: 2,
    soal: bersihoptik,
    hint: 'Gambar apakah itu?',
    opsi1: 'Proses penyambungan serat optik',
    opsi2: 'Proses instalasi serat optik',
    opsi3: 'Proses pembersihan serat optik',
    opsi4: 'Proses pengujian serat optik',
    jawab: 'Proses pembersihan serat optik',
  },
  {
    id: 3,
    soal: multimode,
    hint: 'Gambar apakah itu?',
    opsi1: 'Jenis kabel single-mode',
    opsi2: 'Jenis kabel multi-mode',
    opsi3: 'Kabel coaxial',
    opsi4: 'Kabel ethernet',
    jawab: 'Jenis kabel multi-mode',
  },
  {
    id: 4,
    soal: splitter,
    hint: 'Gambar apakah itu?',
    opsi1: 'Splitter serat optik',
    opsi2: 'Modulator',
    opsi3: 'Amplifier',
    opsi4: 'Repeater',
    jawab: 'Splitter serat optik',
  },
  {
    id: 5,
    soal: powermeter,
    hint: 'Gambar apakah itu?',
    opsi1: 'OTDR',
    opsi2: 'OSA',
    opsi3: 'Light Source',
    opsi4: 'Power Meter',
    jawab: 'Power Meter',
  },
];

const Soaltg = ({navigation, route}) => {
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
        navigation.replace('Hasil Tebak Gambar', {
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
        navigation.replace('Hasil Tebak Gambar', {
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
        <Image
          source={question[currentQuestion].soal}
          style={styles.soalpic}></Image>
        <Text style={styles.questionHint}>
          {question[currentQuestion].hint}
        </Text>
        <View style={styles.opsiwrapper}>
          <View style={styles.opsiwrapper2}>
            <Text style={styles.opsi}>{question[currentQuestion].opsi1}</Text>
            <Text style={styles.opsi}>{question[currentQuestion].opsi2}</Text>
          </View>
          <View style={styles.opsiwrapper2}>
            <Text style={styles.opsi}>{question[currentQuestion].opsi3}</Text>
            <Text style={styles.opsi}>{question[currentQuestion].opsi4}</Text>
          </View>
        </View>
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
  opsiwrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  opsiwrapper2: {
    marginHorizontal: 20,
  },
  opsi: {
    fontFamily: 'futura',
    fontSize: 16,
    color: 'black',
    marginVertical: 5,
    maxWidth: width * 0.385,
  },
  soalpic: {
    minWidth: width * 0.4,
    maxWidth: width * 0.7,
    minHeight: height * 0.2,
    maxHeight: height * 0.4,
    alignSelf: 'center',
    marginHorizontal: 10,
    marginTop: 20,
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
    fontSize: 20,
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
    marginTop: 20,
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

export default Soaltg;
