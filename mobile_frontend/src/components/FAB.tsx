import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Theme } from '../theme';

type Props = {
  theme: Theme;
  onPress: () => void;
  label?: string;
};

export default function FAB({ theme, onPress, label = '+' }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.fab,
        {
          backgroundColor: theme.colors.primary,
          transform: [{ scale: pressed ? 0.98 : 1 }],
          shadowColor: theme.colors.shadow,
        },
      ]}
      android_ripple={{ color: 'rgba(255,255,255,0.15)' }}
      accessibilityRole="button"
      accessibilityLabel="Create note"
    >
      <Text style={[styles.text, { color: '#fff' }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 28,
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 4,
  },
  text: {
    fontSize: 28,
    fontWeight: '900',
    marginTop: -2,
  },
});
