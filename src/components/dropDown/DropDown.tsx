import {View} from 'react-native';
import {styles} from './styles';
import DropDownPicker from 'react-native-dropdown-picker';

const DropDown = ({
  value,
  open,
  items,
  setOpen,
  setValue,
  setItems,
  placeholder,
  showArrowIcon,
  onSelectItem,
  placeholderStyle,
  pickerStyle,
  pickerContainerStyle,
  labelStyle,
  listItemLabelStyle,
  listItemContainerStyle,
}) => {
  return (
    <View style={[styles.container, pickerContainerStyle]}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onSelectItem={onSelectItem}
        placeholder={placeholder}
        showArrowIcon={showArrowIcon}
        dropDownDirection="TOP"
        listMode="SCROLLVIEW"
        placeholderStyle={placeholderStyle}
        style={pickerStyle}
        labelStyle={labelStyle}
        listItemLabelStyle={listItemLabelStyle}
        listItemContainerStyle={listItemContainerStyle}
        disableBorderRadius={true}
      />
    </View>
  );
};
export default DropDown;
