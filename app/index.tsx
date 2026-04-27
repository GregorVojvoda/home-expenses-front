import React from 'react';
import { Text, View } from 'react-native';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello World</Text>
      </View>
    </View>
  );
}
