import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: number;
  updatedAt: number;
  pinned?: boolean;
  color?: string;
};

const STORAGE_KEY = '@notes:v1';

// INTERNAL: read all notes from AsyncStorage
async function readAll(): Promise<Note[]> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Note[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

// INTERNAL: write all notes to AsyncStorage
async function writeAll(notes: Note[]): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

// PUBLIC_INTERFACE
export async function listNotes(): Promise<Note[]> {
  /** Returns all notes sorted by pinned then updatedAt desc. */
  const notes = await readAll();
  return notes.sort((a, b) => {
    const pin = (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0);
    if (pin !== 0) return pin;
    return b.updatedAt - a.updatedAt;
  });
}

// PUBLIC_INTERFACE
export async function getNote(id: string): Promise<Note | undefined> {
  /** Returns a note by id or undefined. */
  const notes = await readAll();
  return notes.find(n => n.id === id);
}

// PUBLIC_INTERFACE
export async function createNote(partial: Pick<Note, 'title' | 'content'> & Partial<Note>): Promise<Note> {
  /** Creates a note with a generated id and timestamps. */
  const now = Date.now();
  const newNote: Note = {
    id: uuidv4(),
    title: (partial.title ?? '').trim(),
    content: (partial.content ?? '').trim(),
    createdAt: now,
    updatedAt: now,
    pinned: partial.pinned ?? false,
    color: partial.color,
  };
  const notes = await readAll();
  const updated = [newNote, ...notes];
  await writeAll(updated);
  return newNote;
}

// PUBLIC_INTERFACE
export async function updateNote(id: string, updates: Partial<Omit<Note, 'id' | 'createdAt'>>): Promise<Note | undefined> {
  /** Updates a note by id and returns the updated note. */
  const notes = await readAll();
  const idx = notes.findIndex(n => n.id === id);
  if (idx < 0) return undefined;
  const now = Date.now();
  const merged: Note = { ...notes[idx], ...updates, updatedAt: now };
  const newList = [...notes];
  newList[idx] = merged;
  await writeAll(newList);
  return merged;
}

// PUBLIC_INTERFACE
export async function deleteNote(id: string): Promise<boolean> {
  /** Deletes a note by id, returns true if deleted. */
  const notes = await readAll();
  const newList = notes.filter(n => n.id !== id);
  const changed = newList.length !== notes.length;
  if (changed) await writeAll(newList);
  return changed;
}

// PUBLIC_INTERFACE
export async function clearAllNotes(): Promise<void> {
  /** Clears all notes. Useful for debugging. */
  await writeAll([]);
}
