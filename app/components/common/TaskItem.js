import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Icon, Text} from 'react-native-elements';
import {colors} from '../../styles/colors';
import {commonStyles} from '../../styles/globalStyles';
import {sizing} from '../../styles/sizing';
import {fontStyles} from '../../styles/typography';
import GreenIcon from './GreenIcon';

const TaskItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        <Icon
          name="check"
          type="feather"
          color={colors.white}
          size={17}
          style={{marginRight: sizing.x3}}
        />
        <Text style={styles.btnText}>Completed</Text>
      </View>
      <View style={styles.cardTop}>
        <Text style={styles.cardTitle}>Task Name</Text>

        <View style={commonStyles.rowAlignCenter}>
          <Icon
            color="#556969"
            name="calendar"
            size={12}
            type="ionicon"
            style={styles.icon}
          />
          <Text style={styles.lightText}>13:00,2nd October, 2021</Text>
        </View>
        <View style={styles.row}>
          <Icon
            color="#556969"
            name="md-location"
            size={12}
            type="ionicon"
            style={[styles.icon, {marginTop: 1}]}
          />
          <View style={commonStyles.rowAlignCenter}>
            <View style={{flex: 1}}>
              <View style={commonStyles.rowAlignCenterBetween}>
                <Text style={styles.mediumText}>Pick up location</Text>
                <View style={commonStyles.rowAlignCenter}>
                  <Text style={styles.dashed}>-----</Text>
                  <Image
                    style={styles.splash}
                    source={require('../../assets/images/icons/light.png')}
                  />
                </View>
              </View>
              <Text style={styles.lightText}>2972 Westheimer Rd....</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.mediumText}>Drop off location</Text>
              <Text style={styles.lightText}>3517 W. Gray St. ...</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.cardBottom}>
        <View style={commonStyles.rowAlignCenterBetween}>
          <View style={commonStyles.rowAlignCenter}>
            <Image
              source={require('../../assets/images/dummy/avatar.png')}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.name}>Max Doe</Text>
              <View style={{flexGrow: 1}} />
              <View style={commonStyles.rowAlignCenter}>
                <GreenIcon name="phone" type="material-community" />
                <GreenIcon name="mail" type="ionicon" />
              </View>
            </View>
          </View>
          <View style={commonStyles.rowAlignCenter}>
            <Icon
              name="ios-star"
              size={16}
              type="ionicon"
              color={colors.startColor}
            />
            <Text style={styles.rating}>4.5</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardBackground,
    elevation: 2,
    marginBottom: sizing.x12,
    borderRadius: sizing.x16,
    overflow: 'hidden',
    position: 'relative',
  },
  cardBottom: {
    backgroundColor: colors.cardBottom,
    paddingHorizontal: sizing.x12,
    paddingVertical: sizing.x8,
  },
  avatar: {
    height: 36,
    width: 36,
    borderRadius: 18,
    marginRight: sizing.x8,
  },
  name: {
    fontSize: 10,
    fontFamily: fontStyles.medium,
    color: colors.primary,
  },
  rating: {
    fontSize: 16,
    color: colors.lightText,
    marginHorizontal: sizing.x5,
  },
  cardTop: {
    paddingTop: sizing.x12,
    paddingBottom: sizing.x8,
    paddingHorizontal: sizing.x12,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: fontStyles.bold,
    color: colors.white,
  },
  lightText: {
    fontSize: 11,
    color: colors.lightText,
  },
  mediumText: {
    fontSize: 11,
    color: colors.textColor,
  },
  icon: {
    marginHorizontal: sizing.x4,
  },
  row: {
    marginTop: sizing.x4,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  btn: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    position: 'absolute',
    top: 16,
    right: 0,
    height: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    paddingHorizontal: sizing.x8,
  },
  btnText: {
    fontFamily: fontStyles.regular,
    color: colors.white,
    fontSize: 11,
  },
  splash: {
    height: 12,
    width: 14,
    resizeMode: 'contain',
    marginRight: sizing.x4,
  },
  dashed: {
    color: colors.lightText,
    bottom: 1,
  },
});
