import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

const COLORS = {
  background: '#F5F7FA',
  navy: '#142B4A',
  blue: '#3268E8',
  teal: '#17A999',
  white: '#FFFFFF',
  text: '#203047',
  muted: '#77869A',
  border: '#E5EAF0',
  lightBlue: '#EAF0FF',
  lightTeal: '#E5F7F3',
  lightOrange: '#FFF3E1',
};

const TESTS = [
  {
    id: 'acuity',
    number: '01',
    title: 'Mprehtësia e shikimit',
    description: 'Ushtrim orientues me simbole',
    icon: 'E',
    color: COLORS.lightBlue,
  },
  {
    id: 'colors',
    number: '02',
    title: 'Njohja e ngjyrave',
    description: 'Ushtrim demonstrues me ngjyra',
    icon: '◉',
    color: COLORS.lightTeal,
  },
];

export default function App() {
  const [screen, setScreen] = useState('home');
  const [selectedTest, setSelectedTest] = useState(null);
  const [answer, setAnswer] = useState('');
  const [history, setHistory] = useState([]);
  const [lastResult, setLastResult] = useState(null);

  const startTest = (test) => {
    setSelectedTest(test);
    setAnswer('');
    setScreen('test');
  };

  const finishTest = () => {
    if (!answer || !selectedTest) return;

    const result = {
      id: String(Date.now()),
      title: selectedTest.title,
      answer,
      date: new Date().toLocaleDateString(),
    };

    setLastResult(result);
    setHistory((previous) => [result, ...previous]);
    setScreen('result');
  };
