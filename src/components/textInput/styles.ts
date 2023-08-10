import {StyleSheet} from 'react-native';
import AppConfig from '../../utils/config';

const color = AppConfig();
export const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    justifyContent: 'center',
    height: 50,
    margin: 10,
    backgroundColor: color.monochromeColors.grey4,
  },
});
