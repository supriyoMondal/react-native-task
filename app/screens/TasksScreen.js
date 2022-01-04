import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Text} from 'react-native-elements';
import BackAction from '../components/common/BackAction';
import ScrollableTabs from '../components/common/ScrollableTabs';
import {commonStyles} from '../styles/globalStyles';
import {textStyles} from '../styles/typography';

const HeaderLeft = () => (
  <View style={commonStyles.rowAlignCenter}>
    <BackAction />
    <Text style={textStyles.headerTitle}>My tasks</Text>
  </View>
);

const TaskScreen = () => {
  const tabs = [
    {title: 'Active', tab: () => <Text>active</Text>},
    {title: 'Upcoming', tab: () => <Text>upcoming</Text>},
    {title: 'Completed', tab: () => <Text>Completed</Text>},
  ];
  return (
    <>
      <Header leftComponent={<HeaderLeft />} />
      <View style={commonStyles.container}>
        <ScrollableTabs tabs={tabs} />
      </View>
    </>
  );
};

export default TaskScreen;

const styles = StyleSheet.create({});
