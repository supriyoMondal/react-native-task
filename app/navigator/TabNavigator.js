import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './Routes';
import {
  HomeScreen,
  JobsScreen,
  MenuScreen,
  TasksScreen,
  WalletScreen,
} from '../screens';
import {colors} from '../styles/colors';

const Tab = createBottomTabNavigator();

const tabScreens = [
  {
    name: Routes.WALLET_SCREEN,
    component: WalletScreen,
    icon: require('../assets/images/icons/Wallet.png'),
  },
  {
    name: Routes.TASKS_SCREEN,
    component: TasksScreen,
    icon: require('../assets/images/icons/Calendar.png'),
  },
  {
    name: Routes.HOME_SCREEN,
    component: HomeScreen,
    icon: require('../assets/images/icons/home.png'),
  },
  {
    name: Routes.JOBS_SCREEN,
    component: JobsScreen,
    icon: require('../assets/images/icons/jobs.png'),
  },
  {
    name: Routes.MENU_SCREEN,
    component: MenuScreen,
    icon: require('../assets/images/icons/menu.png'),
  },
];

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: colors.backgroundColor,
            height: 64,
          },
        }}>
        {tabScreens.map(({name, component, icon}) => (
          <Tab.Screen
            name={name}
            key={name}
            component={component}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({focused}) => {
                const color = focused ? colors.primary : colors.grey;
                return (
                  <View>
                    <Text style={{color, fontSize: 13}}>{name}</Text>
                  </View>
                );
              },
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
