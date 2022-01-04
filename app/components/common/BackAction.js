import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Icon} from 'react-native-elements';
import {colors} from '../../styles/colors';

const BackAction = ({color}) => {
  const navigation = useNavigation();
  return (
    <Icon
      name="chevron-left"
      type="feather"
      size={32}
      color={color || colors.textColor}
      onPress={() => navigation.goBack()}
    />
  );
};

export default BackAction;
