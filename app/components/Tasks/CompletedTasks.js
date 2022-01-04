import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TaskItem from '../common/TaskItem';

const CompletedTasks = () => {
  return (
    <>
      {[...Array(5).keys()].map(item => (
        <TaskItem key={`task-${item}`} />
      ))}
    </>
  );
};

export default CompletedTasks;

const styles = StyleSheet.create({});
