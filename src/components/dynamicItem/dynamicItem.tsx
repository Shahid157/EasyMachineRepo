import {Text, View} from 'react-native';
import {styles} from './styles';
import strings from '../../utils/strings';
import InputText from '../textInput/input';

const DynamicItem = ({onChangeText, labelText, data, onEndEditing}) => {
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
