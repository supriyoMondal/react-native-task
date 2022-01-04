import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
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
import {sizing} from '../styles/sizing';
import {Text} from 'react-native-elements';

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
            height: 84,
            elevation: 1,
            borderTopWidth: 0,
          },
        }}>
        {tabScreens.map(({name, component, icon}, i) => (
          <Tab.Screen
            name={name}
            key={name}
            component={component}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({focused}) => {
                const color = focused ? colors.primary : colors.lightText;
                if (i === 2) {
                  return (
                    <View style={styles.homeIconContainer}>
                      <View style={styles.homeIcon}>
                        <Image
                          source={icon}
                          style={[styles.image, {marginBottom: 0}]}
                        />
                      </View>
                    </View>
                  );
                }
                return (
                  <View style={{alignItems: 'center'}}>
                    <Image source={icon} style={styles.image} />
                    <Text style={{color, fontSize: 14}}>{name}</Text>
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

const styles = StyleSheet.create({
  image: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    marginBottom: sizing.x8,
  },
  homeIcon: {
    height: 60,
    width: 60,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  homeIconContainer: {
    padding: sizing.x10,
    backgroundColor: colors.backgroundColor,
    borderRadius: 40,
    top: -18,
  },
});
