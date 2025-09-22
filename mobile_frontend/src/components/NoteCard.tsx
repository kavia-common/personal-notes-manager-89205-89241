import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Theme } from '../theme';
import { Note } from '../services/storage';

type Props = {
  theme: Theme;
  note: Note;
  onPress?: () => void;
  onLongPress?: () => void;
};

export default function NoteCard({ theme, note, onPress, onLongPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      android_ripple={{ color: theme.colors.overlay }}
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.border,
          opacity: pressed ? 0.96 : 1,
          shadowColor: theme.colors.shadow,
        },
      ]}
    >
      <View
        style={[
          styles.topAccent,
          { backgroundColor: note.pinned ? theme.colors.secondary : theme.colors.primary, opacity: 0.18 },
        ]}
      />
      <Text numberOfLines={2} style={[styles.title, { color: theme.colors.text }]}>{note.title || 'Untitled'}</Text>
      {!!note.content && (
        <Text numberOfLines={3} style={[styles.preview, { color: theme.colors.mutedText }]}>{note.content}</Text>
      )}
      <View style={styles.metaRow}>
        {note.pinned ? (
          <Text style={{ color: theme.colors.secondary, fontWeight: '700' }}>PINNED</Text>
        ) : (
          <View />
        )}
        <Text style={{ color: theme.colors.mutedText }}>
          {new Date(note.updatedAt).toLocaleDateString()}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 14,
    marginBottom: 12,
    overflow: 'hidden',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 1,
  },
  topAccent: {
    position: 'absolute',
    top: -20,
    left: -20,
    right: -20,
    height: 60,
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 6,
  },
  preview: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
