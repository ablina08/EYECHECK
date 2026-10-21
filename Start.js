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

   const Header = () => (
    <View style={styles.header}>
      <View style={styles.logo}>
        <Text style={styles.logoSymbol}>◉</Text>
      </View>

      <View style={styles.brand}>
        <Text style={styles.brandName}>SYRI</Text>
        <Text style={styles.brandCaption}>EYECARE</Text>
      </View>

      <View style={styles.headerStatus}>
        <View style={styles.statusDot} />
        <Text style={styles.statusText}>Demo</Text>
      </View>
    </View>
  );

  const SectionTitle = ({ title, action, onAction }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {action ? (
        <Pressable onPress={onAction} hitSlop={8}>
          <Text style={styles.actionText}>{action}</Text>
        </Pressable>
      ) : null}
    </View>
  );

  const Card = ({ children, style }) => (
    <View style={[styles.card, style]}>{children}</View>
  );

  const PrimaryButton = ({ title, onPress, disabled = false }) => (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.primaryButton,
        disabled && styles.disabledButton,
      ]}
    >
      <Text style={styles.primaryButtonText}>{title}</Text>
    </Pressable>
  );
