import {StyleSheet} from 'react-native';
import AppConfig from '../../utils/config';

const color = AppConfig();
export const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 15,
    color: color.monochromeColors.white,
  },
});
