import type { LinkingOptions } from '@react-navigation/native';
import type { RootStackParamList } from './types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [],
  config: {
    screens: {
      Home: '',
      NoteDetail: 'note/:id',
    },
  },
};

export default linking;
