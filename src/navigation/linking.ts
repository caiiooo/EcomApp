import { LinkingOptions } from '@react-navigation/native';
import { RootStackParamList } from './index';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['ecomapp://', 'https://ecomapp.com.br'],
  config: {
    screens: {
      ProductDetail: 'produto/:id',
    },
  },
};

export default linking;
