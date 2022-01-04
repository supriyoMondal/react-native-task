import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Text} from 'react-native-elements';
import BackAction from '../components/common/BackAction';
import {commonStyles} from '../styles/globalStyles';
import {textStyles} from '../styles/typography';

const HeaderLeft = () => (
  <View style={commonStyles.rowAlignCenter}>
    <BackAction />
    <Text style={textStyles.headerTitle}>My tasks</Text>
  </View>
);

const TaskScreen = () => {
  return (
    <>
      <Header leftComponent={<HeaderLeft />} />
      <View style={commonStyles.centerInFlex1}>
        <Text>TaskScreen</Text>
      </View>
    </>
  );
};

export default TaskScreen;

const styles = StyleSheet.create({});
