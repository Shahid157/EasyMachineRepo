import {FlatList, Text, View} from 'react-native';
import {styles} from './styles';
import strings from '../../utils/strings';
import InputText from '../textInput/input';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DropDown from '../dropDown/dropDown';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {removeFieldData} from '../../redux/toolkit/FieldDataSlicer';

const DynamicItem = ({
  onChangeText,
  labelText,
  data,
  onFieldTextChange,
  labelTitleText,
  onTitleFieldPress,
  onRemovePress,
  onEndEditing,
}) => {
  const dispatch = useDispatch();
  console.log('dataHere', data);
  const onDeletePress = (index: number) => {
    dispatch(removeFieldData(index));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>
        {labelText !== '' ? labelText : strings.new_category}
      </Text>
      <InputText
        inputStyle={styles.inputStyle}
        hint={strings.new_category}
        onChangeText={onChangeText}
        onEndEditing={onEndEditing}
      />
    </View>
  );
};
export default DynamicItem;
