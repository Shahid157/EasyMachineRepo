import {StyleSheet} from 'react-native';
import AppConfig from '../../utils/config';

const color = AppConfig();
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: color.primaryColor.lightBlue,
  },
  noDataContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textStyle: {
    margin: 15,
    textAlign: 'center',
    fontSize: 18,
    color: color.monochromeColors.grey2,
  },
  buttonStyle: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: color.primaryColor.blue,
  },
  addCatBtnStyle: {
    margin: 20,
    backgroundColor: color.primaryColor.blue,
  },

  inputStyle: {},
});
