import React from 'react';
import { View, StyleSheet, FlatList, Alert, RefreshControl } from 'react-native';
import Header from '../components/Header';
import NoteCard from '../components/NoteCard';
import FAB from '../components/FAB';
import EmptyState from '../components/EmptyState';
import { Theme } from '../theme';
import { deleteNote, listNotes, Note } from '../services/storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import type { HomeScreenProps } from '../navigation/types';

type Props = {
  theme: Theme;
  mode: 'light' | 'dark';
  onToggleTheme: () => void;
};

export default function HomeScreen({ theme, mode, onToggleTheme }: Props) {
  const [notes, setNotes] = React.useState<Note[]>([]);
  const [loading, setLoading] = React.useState(false);
  const navigation = useNavigation<HomeScreenProps['navigation']>();

  const load = React.useCallback(async () => {
    setLoading(true);
    const all = await listNotes();
    setNotes(all);
    setLoading(false);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      load();
    }, [load])
  );

  const handleDelete = (id: string) => {
    Alert.alert('Delete note', 'Are you sure you want to delete this note?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          await deleteNote(id);
          await load();
        },
      },
    ]);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Header theme={theme} mode={mode} onToggleTheme={onToggleTheme} />
      <FlatList
        contentContainerStyle={{ padding: 16, paddingBottom: 100 }}
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NoteCard
            theme={theme}
            note={item}
            onPress={() => navigation.navigate('NoteDetail', { id: item.id })}
            onLongPress={() => handleDelete(item.id)}
          />
        )}
        ListEmptyComponent={<EmptyState theme={theme} />}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={theme.colors.primary} />}
      />
      <FAB theme={theme} onPress={() => navigation.navigate('NoteDetail')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
