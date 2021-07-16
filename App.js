import 'react-native-gesture-handler';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import StackNav from './src/navigators/stackNav';

export default function App(props) {
  return (
    <PaperProvider>
      <StackNav />
    </PaperProvider>
  );
}
