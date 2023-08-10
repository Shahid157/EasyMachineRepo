import {StyleSheet} from 'react-native';
import AppConfig from '../../utils/config';

const color = AppConfig();
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryColor.lightBlue,
  },
  textStyle: {
    marginTop: '35%',
    textAlign: 'center',
    fontSize: 23,
    color: color.secondaryColor.lightMajorelle,
  },
  inputContainer: {
    padding: 20,
    marginTop: '10%',
  },
  buttonStyle: {
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
  },
});
