import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppNavigation from './src/navigation/Navigation';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AppNavigation />
    </>
  );
}
