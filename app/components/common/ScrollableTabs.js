import React, {useRef} from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {colors} from '../../styles/colors';
import {fontStyles} from '../../styles/typography';

const {width} = Dimensions.get('screen');
const TAB_HEADER_HEIGHT = 56;

const ScrollableTabs = ({tabs}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const headerScrollRef = React.useRef();
  const tabWidth = width / tabs.length;
  const ref = useRef();

  const translateX = scrollX.interpolate({
    inputRange: [0, width],
    outputRange: [0, tabWidth],
  });

  const onItemPress = React.useCallback(
    itemIndex => {
      ref?.current?.scrollToOffset({
        offset: itemIndex * width,
      });
    },
    [ref],
  );

  return (
    <>
      <View style={styles.tabHeader}>
        <ScrollView
          horizontal
          key="top-0"
          ref={headerScrollRef}
          showsHorizontalScrollIndicator={false}>
          {tabs.map((tab, index) => {
            const color = scrollX.interpolate({
              inputRange: [
                (index - 1) * width,
                index * width,
                (index + 1) * width,
              ],
              outputRange: [colors.lightText, colors.yellow, colors.lightText],
              extrapolate: 'clamp',
            });

            return (
              <TouchableOpacity
                key={`tab-header-${index}`}
                activeOpacity={0.7}
                onPress={() => onItemPress(index)}
                style={[styles.tabScrollableHeader, {width: tabWidth}]}>
                <Animated.Text
                  numberOfLines={1}
                  style={[styles.tabTitle, {color}]}>
                  {tab.title}
                </Animated.Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <Animated.View
          style={[
            styles.indicator,
            {
              width: tabWidth,
              transform: [{translateX}],
            },
          ]}
        />
      </View>

      <Animated.FlatList
        data={tabs}
        ref={ref}
        listKey="key-top"
        keyExtractor={(_, index) => `tab-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        renderItem={({item, index}) => (
          <ScrollView bounces={false} style={{width}}>
            {item.tab()}
          </ScrollView>
        )}
      />
    </>
  );
};

export default ScrollableTabs;

const styles = StyleSheet.create({
  tabScrollableHeader: {
    height: '100%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableIndicator: {
    height: 5,
    position: 'absolute',
    bottom: 0,
  },
  indicator: {
    height: 5,
    borderRadius: 1,
    backgroundColor: colors.yellow,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  tabHeader: {
    height: TAB_HEADER_HEIGHT,
    width,
    borderBottomWidth: 1,
    borderBottomColor: colors.accentGreen,
  },
  tabTitle: {
    fontSize: 16,
    fontFamily: fontStyles.medium,
  },
});
