import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  NoteDetail: { id?: string } | undefined;
};

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type NoteDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'NoteDetail'>;
