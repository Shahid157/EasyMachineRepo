import {TextInput, View} from 'react-native';
import {styles} from './styles';

const InputText = ({
  style,
  multiline,
  autoFocus,
  hint,
  onChangeText,
  onEndEditing,
  onFocus,
  value,
  inputStyle,
}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        multiline={multiline}
        autoCorrect={false}
        autoFocus={autoFocus}
        placeholder={hint}
        onChangeText={onChangeText}
        onEndEditing={onEndEditing}
        onFocus={onFocus}
        value={value}
        style={inputStyle}
      />
    </View>
  );
};
export default InputText;
