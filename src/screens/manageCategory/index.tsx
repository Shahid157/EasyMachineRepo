import {Text, SafeAreaView, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import strings from '../../utils/strings';
import {styles} from './styles';
import Button from '../../components/button/button';
import {useSelector, useDispatch} from 'react-redux';
import CategoryItem from '../../components/categoryItem/categoryItem';
import {addCategory, removeCategory} from '../../redux/toolkit/CategorySlicer';
import {addFieldData} from '../../redux/toolkit/FieldDataSlicer';

const ManageCat = () => {
  const data = useSelector((state: any) => state?.CategorySlicer);
  const catData = useSelector((state: any) => state?.FieldDataSlicer);
  const dispatch = useDispatch();
  const [labelText, setLabelText] = useState('');
  const [labelTitleText, setLabelTitleText] = useState(strings.unnamed_field);
  const renderItem = (item: any) => {
    return (
      <CategoryItem
        labelText={
          item?.item?.categoryName ? item?.item?.categoryName : labelText
        }
        onTitleFieldPress={() => {}}
        onRemovePress={() => {
          dispatch(removeCategory(item.index));
        }}
        onAddNewFieldBtnPress={item => {
          const catRawData = {
            value: labelTitleText,
            type: item?.label,
          };
          dispatch(addFieldData(catRawData));
        }}
        data={catData}
        onChangeText={(text: string) => setLabelText(text)}
        onFieldTextChange={(text: string) => setLabelTitleText(text)}
        labelTitleText={
          labelTitleText !== '' ? labelTitleText : strings.unnamed_field
        }
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {data.length !== 0 ? (
        <View style={{flex: 1}}>
          <FlatList data={data} renderItem={item => renderItem(item)} />
          <Button
            style={styles.addCatBtnStyle}
            onPress={() => {
              if (labelText !== '') {
                dispatch(addCategory({categoryName: labelText}));
                setLabelText('');
              }
            }}
            buttonText={strings.add_category}
          />
        </View>
      ) : (
        <View style={styles.noDataContainer}>
          <Text style={styles.textStyle}>{strings.no_data}</Text>
          <Button
            style={styles.addCatBtnStyle}
            onPress={() => {
              if (labelText !== '') {
                dispatch(addCategory({categoryName: labelText}));
                setLabelText('');
              } else {
                dispatch(addCategory({categoryName: 'New Category'}));
              }
            }}
            buttonText={strings.add_category}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
export default ManageCat;
