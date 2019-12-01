import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactoTronConfig';

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="EA5276" />
      <Routes />
    </>
  );
}
