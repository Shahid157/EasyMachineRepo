import {FlatList, Text, View} from 'react-native';
import {styles} from './styles';
import strings from '../../utils/strings';
import InputText from '../textInput/input';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DropDown from '../dropDown/dropDown';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {removeFieldData} from '../../redux/toolkit/FieldDataSlicer';

const DashboardItem = ({
  onChangeText,
  labelText,
  data,
  onFieldTextChange,
  labelTitleText,
  onTitleFieldPress,
  onAddNewFieldBtnPress,
  onRemovePress,
  onChangeTypePress,
  onEndEditing,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [openType, setOpenType] = useState(false);
  const [valueType, setValueType] = useState(null);
  const [items, setItems] = useState(strings.list_dropDown);
  const dispatch = useDispatch();
  const [itemsType, setItemsType] = useState(strings.list_dropDown);

  const onDeletePress = (index: number) => {
    dispatch(removeFieldData(index));
  };
  const ListFooterComponent = (item: any) => {
    return (
      <View>
        <TouchableOpacity
          onPress={onTitleFieldPress}
          style={styles.footerContainer}>
          <Text style={styles.footerTitleBtn}>
            {strings.title_field} :{' '}
            {labelTitleText !== '' ? labelTitleText : strings.unnamed_field}
          </Text>
        </TouchableOpacity>
        <View style={styles.footerBottomContainer}>
          <DropDown
            pickerStyle={styles.pickerStyle}
            open={open}
            items={items}
            setItems={setItems}
            setOpen={setOpen}
            value={value}
            setValue={setValue}
            placeholder={strings.add_new_field}
            showArrowIcon={false}
            placeholderStyle={styles.footerAddBtn}
            labelStyle={styles.labelStyle}
            onSelectItem={onAddNewFieldBtnPress}
            pickerContainerStyle={styles.dropdownContainerBottom}
          />
          <Text onPress={onRemovePress} style={styles.footerRemoveBtn}>
            {strings.remove}
          </Text>
        </View>
      </View>
    );
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
      <FlatList
        data={data}
        renderItem={item => {
          const data = item?.item;
          const index = item?.index;
          return (
            <View style={styles.listContainer}>
              <InputText
                onChangeText={onFieldTextChange}
                style={styles.inputStyle}
                hint={strings.feild}
              />
              <DropDown
                open={openType}
                items={itemsType}
                setItems={setItemsType}
                setOpen={setOpenType}
                value={valueType}
                setValue={setValueType}
                placeholder={data?.type}
                showArrowIcon={false}
                placeholderStyle={styles.footerAddBtn}
                labelStyle={styles.labelStyle}
                pickerContainerStyle={styles.dropdownContainerType}
                onSelectItem={onChangeTypePress}
                listItemLabelStyle={styles.listItemLabelStyle}
                listItemContainerStyle={styles.listItemContainer}
              />
              <View style={styles.deleteBtn}>
                <Text
                  onPress={() => {
                    onDeletePress(index);
                  }}
                  style={styles.deleteBtnTxt}>
                  {strings.delete}
                </Text>
              </View>
            </View>
          );
        }}
        ListFooterComponent={ListFooterComponent(data)}
      />
    </View>
  );
};
export default DashboardItem;
