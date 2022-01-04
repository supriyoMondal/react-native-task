import {colors} from './colors';
import {fontStyles} from './typography';

const Text = {
  style: {
    fontFamily: fontStyles.regular,
    color: colors.textColor,
  },
};

const Header = {
  backgroundColor: colors.headerBackground,
  containerStyle: {height: 96, elevation: 3, borderBottomWidth: 0},
};
export default theme = {
  colors: {
    ...colors,
  },
  Text,
  Header,
};
