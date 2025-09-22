import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { Theme } from '../theme';
import { createNote, deleteNote, getNote, Note, updateNote } from '../services/storage';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NoteDetailScreenProps } from '../navigation/types';

type Props = {
  theme: Theme;
};

type RouteParams = { id?: string };

export default function NoteDetailScreen({ theme }: Props) {
  const route = useRoute<NoteDetailScreenProps['route']>();
  const navigation = useNavigation<NoteDetailScreenProps['navigation']>();
  const { id } = (route.params || {}) as RouteParams;
  const isNew = !id;

  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [pinned, setPinned] = React.useState(false);
  React.useEffect(() => {
    if (!id) return;
    (async () => {
      const n: Note | undefined = await getNote(id);
      if (n) {
        setTitle(n.title);
        setContent(n.content);
        setPinned(!!n.pinned);
      }
    })();
  }, [id]);

  const handleSave = async () => {
    if (isNew) {
      const created = await createNote({ title, content, pinned });
      navigation.replace('NoteDetail', { id: created.id });
    } else {
      await updateNote(id!, { title, content, pinned });
      navigation.goBack();
    }
  };

  const handleDelete = async () => {
    if (isNew) {
      navigation.goBack();
      return;
    }
    Alert.alert('Delete note', 'This action cannot be undone.', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          await deleteNote(id!);
          navigation.goBack();
        },
      },
    ]);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.select({ ios: 'padding', android: undefined })} style={{ flex: 1 }}>
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <View style={[styles.toolbar, { borderBottomColor: theme.colors.border, backgroundColor: theme.colors.surface }]}>
          <Pressable
            onPress={() => navigation.goBack()}
            android_ripple={{ color: theme.colors.overlay }}
            style={[styles.toolBtn, { borderColor: theme.colors.border }]}
          >
            <Text style={{ color: theme.colors.mutedText, fontWeight: '700' }}>Back</Text>
          </Pressable>

          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Pressable
              onPress={() => setPinned(p => !p)}
              android_ripple={{ color: theme.colors.overlay }}
              style={[
                styles.toolBtn,
                {
                  borderColor: theme.colors.border,
                  backgroundColor: pinned ? theme.colors.secondary : 'transparent',
                },
              ]}
            >
              <Text style={{ color: pinned ? '#111' : theme.colors.mutedText, fontWeight: '700' }}>
                {pinned ? 'Pinned' : 'Pin'}
              </Text>
            </Pressable>

            <Pressable
              onPress={handleSave}
              android_ripple={{ color: theme.colors.overlay }}
              style={[styles.primaryBtn, { backgroundColor: theme.colors.primary, shadowColor: theme.colors.shadow }]}
            >
              <Text style={{ color: '#fff', fontWeight: '800' }}>{isNew ? 'Create' : 'Save'}</Text>
            </Pressable>
          </View>
        </View>

        <View style={[styles.formWrap]}>
          <View style={[styles.inputWrap, { backgroundColor: theme.colors.inputBg, borderColor: theme.colors.inputBorder }]}>
            <TextInput
              placeholder="Title"
              placeholderTextColor={theme.colors.placeholder}
              value={title}
              onChangeText={setTitle}
              style={[styles.titleInput, { color: theme.colors.text }]}
            />
          </View>

          <View style={[styles.inputWrapLg, { backgroundColor: theme.colors.inputBg, borderColor: theme.colors.inputBorder }]}>
            <TextInput
              placeholder="Write your note..."
              placeholderTextColor={theme.colors.placeholder}
              value={content}
              onChangeText={setContent}
              multiline
              style={[styles.contentInput, { color: theme.colors.text }]}
            />
          </View>

          {!isNew && (
            <Pressable
              onPress={handleDelete}
              style={({ pressed }) => [
                styles.deleteBtn,
                {
                  borderColor: theme.colors.border,
                  backgroundColor: pressed ? theme.colors.overlay : 'transparent',
                },
              ]}
              android_ripple={{ color: theme.colors.overlay }}
            >
              <Text style={{ color: theme.colors.error, fontWeight: '800' }}>Delete note</Text>
            </Pressable>
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  toolbar: {
    paddingTop: Platform.select({ ios: 52, android: 20, default: 20 }),
    paddingBottom: 12,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toolBtn: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: StyleSheet.hairlineWidth,
  },
  primaryBtn: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 14,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.16,
    shadowRadius: 14,
    elevation: 2,
  },
  formWrap: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  inputWrap: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  titleInput: {
    fontSize: 18,
    fontWeight: '800',
  },
  inputWrapLg: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  contentInput: {
    flex: 1,
    fontSize: 16,
    lineHeight: 22,
    textAlignVertical: 'top',
  },
  deleteBtn: {
    marginTop: 8,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: StyleSheet.hairlineWidth,
  },
});
