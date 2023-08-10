import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const Button = ({onPress, style, buttonText}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text style={styles.textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
export default Button;
