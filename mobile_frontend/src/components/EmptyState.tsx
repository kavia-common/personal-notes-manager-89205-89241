import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme } from '../theme';

type Props = {
  theme: Theme;
};

export default function EmptyState({ theme }: Props) {
  return (
    <View style={[styles.wrap, { borderColor: theme.colors.border, backgroundColor: theme.colors.surface }]}>
      <View style={[styles.badge, { backgroundColor: theme.colors.primary, opacity: 0.12 }]} />
      <Text style={[styles.title, { color: theme.colors.text }]}>No notes yet</Text>
      <Text style={[styles.subtitle, { color: theme.colors.mutedText }]}>
        Tap the + button to create your first note.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 14,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    width: 68,
    height: 68,
    borderRadius: 16,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
  },
});
