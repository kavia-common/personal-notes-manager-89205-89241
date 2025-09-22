import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import NoteDetailScreen from '../screens/NoteDetailScreen';
import { Theme, lightTheme, darkTheme, ThemeMode } from '../theme';
import { useColorScheme } from 'react-native';
import type { RootStackParamList } from './types';
import linking from './linking';

const Stack = createNativeStackNavigator<RootStackParamList>();

// PUBLIC_INTERFACE
export function useAppTheming(): { mode: ThemeMode; theme: Theme; toggle: () => void } {
  /** Hook to handle theme mode with system default and toggle. */
  const system = useColorScheme();
  const [mode, setMode] = React.useState<ThemeMode>((system ?? 'light') as ThemeMode);
  const toggle = React.useCallback(() => setMode(m => (m === 'light' ? 'dark' : 'light')), []);
  const theme = mode === 'light' ? lightTheme : darkTheme;
  return { mode, theme, toggle };
}

// PUBLIC_INTERFACE
export default function AppNavigation() {
  /** Main navigation container with two screens: Home and NoteDetail. */
  const { mode, theme, toggle } = useAppTheming();

  return (
    <NavigationContainer theme={mode === 'light' ? DefaultTheme : DarkTheme} linking={linking}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home">
          {() => <HomeScreen theme={theme} mode={mode} onToggleTheme={toggle} />}
        </Stack.Screen>
        <Stack.Screen name="NoteDetail">
          {() => <NoteDetailScreen theme={theme} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
