import {StyleSheet} from 'react-native';
import {colors} from './colors';
import {sizing} from './sizing';
import {fontStyles} from './typography';

export const commonStyles = StyleSheet.create({
  centerInFlex1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowAlignCenterBetween: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  paddedContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: 16,
    paddingVertical: 12,
    position: 'relative',
  },
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  elevatedBtnContainer: {
    backgroundColor: colors.white,
    height: 32,
    width: 32,
    justifyContent: 'center',
    borderRadius: 16,
    elevation: 2,
  },
  productList: {
    flexDirection: 'row',
    marginHorizontal: sizing.x16,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  pageHeading: {
    fontSize: 26,
    fontFamily: fontStyles.bold,
  },
  rowTopBetween: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  rowBottomBetween: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: sizing.x12,
    borderBottomWidth: 0.7,
    borderBottomColor: colors.dividerColor,
  },
  authButton: {
    backgroundColor: '#f8f8f8',
    position: 'relative',
    marginBottom: sizing.x30,
  },
});
