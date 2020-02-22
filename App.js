import React from 'react';
import Routes from './src/routes';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#f05a5b" barStyle="light-content" />
      <Routes />
    </>
  );

}