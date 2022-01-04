import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {colors} from '../../styles/colors';
import {sizing} from '../../styles/sizing';

const GreenIcon = ({name, type}) => {
  return (
    <Icon
      name={name}
      type={type}
      color={colors.primary}
      size={11}
      containerStyle={{
        backgroundColor: '#0B2C25',
        borderRadius: 24,
        padding: 2,
        marginRight: sizing.x5,
      }}
    />
  );
};

export default GreenIcon;

const styles = StyleSheet.create({});
