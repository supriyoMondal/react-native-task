import {StyleSheet} from 'react-native';
import {sizing} from './sizing';

export const fontStyles = {
  regular: 'WorkSans-Regular',
  light: 'WorkSans-Light',
  bold: 'WorkSans-Bold',
  medium: 'WorkSans-Medium',
  semiBold: 'WorkSans-SemiBold',
};

export const textStyles = StyleSheet.create({
  headerTitle: {
    fontSize: 18,
    fontFamily: fontStyles.semiBold,
    width: 120,
    marginLeft: sizing.x16,
    marginBottom: sizing.x2,
  },
});
