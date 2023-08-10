import {Text, SafeAreaView, View} from 'react-native';
import React from 'react';
import strings from '../../utils/strings';
import {styles} from './styles';
import InputText from '../../components/textInput/input';
import Button from '../../components/button/button';

const DynamicScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>{strings.manage_cat}</Text>
    </SafeAreaView>
  );
};
export default DynamicScreen;
