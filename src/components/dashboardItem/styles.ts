import {StyleSheet} from 'react-native';
import AppConfig from '../../utils/config';

const color = AppConfig();
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: 10,
  },
  titleStyle: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  typeBtn: {
    marginTop: 10,
    marginRight: 10,
    marginBottom: 10,
    padding: 7,
    justifyContent: 'center',
    borderRadius: 3,
    borderWidth: 0.3,
    borderColor: '#C8C8C8',
  },
  listInsideText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'blue',
  },
  inputStyle: {flex: 1},
  deleteBtn: {
    marginTop: 10,
    marginRight: 10,
    marginBottom: 10,
    padding: 5,
    borderCurve: 'circular',
    justifyContent: 'center',
  },
  deleteBtnTxt: {
    textAlign: 'center',
    fontSize: 15,
  },
  footerContainer: {
    backgroundColor: 'blue',
    margin: 10,
    padding: 5,
    justifyContent: 'center',
    height: 40,
    borderRadius: 5,
  },
  footerTitleBtn: {textAlign: 'center', color: 'white', fontSize: 12},
  footerBottomContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 10,
    marginRight: 10,
  },
  footerAddBtn: {
    fontSize: 12,
    textAlign: 'center',
    color: 'blue',
  },
  footerRemoveBtn: {
    fontSize: 12,
    textAlign: 'center',
    padding: 10,
    color: 'blue',
    alignSelf: 'center',
    marginBottom: 8,
  },
  labelStyle: {
    textAlign: 'center',
    color: color.primaryColor.blue,
  },
  dropdownContainerBottom: {
    width: 150,
  },
  dropdownContainerType: {
    marginTop: 10,
    width: 80,
  },
  pickerStyle: {
    backgroundColor: color.monochromeColors.white,
    fontSize: 200,
  },
  listItemLabelStyle: {
    fontSize: 12,
  },
  listItemContainer: {
    height: 30,
  },
});
