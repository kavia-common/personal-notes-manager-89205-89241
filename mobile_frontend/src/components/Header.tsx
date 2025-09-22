import React from 'react';
import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';
import { Theme } from '../theme';

type Props = {
  theme: Theme;
  mode: 'light' | 'dark';
  onToggleTheme: () => void;
};

export default function Header({ theme, mode, onToggleTheme }: Props) {
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.surface, borderBottomColor: theme.colors.border }]}>
      <View style={styles.titleWrap}>
        <View style={[styles.logo, { backgroundColor: theme.colors.primary }]} />
        <Text style={[styles.title, { color: theme.colors.text }]}>Ocean Notes</Text>
      </View>
      <Pressable
        onPress={onToggleTheme}
        style={({ pressed }) => [
          styles.toggle,
          {
            backgroundColor: pressed ? theme.colors.overlay : theme.colors.background,
            borderColor: theme.colors.border,
          },
        ]}
        android_ripple={{ color: theme.colors.overlay }}
        accessibilityRole="button"
        accessibilityLabel="Toggle theme"
      >
        <Text style={{ color: theme.colors.mutedText, fontWeight: '600' }}>{mode === 'light' ? 'Dark' : 'Light'}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.select({ ios: 52, android: 20, default: 20 }),
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logo: {
    width: 28,
    height: 28,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  toggle: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: StyleSheet.hairlineWidth,
  },
});
