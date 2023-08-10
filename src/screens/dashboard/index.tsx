import {Text, SafeAreaView, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import strings from '../../utils/strings';
import {styles} from './styles';
import Button from '../../components/button/button';
import {useSelector, useDispatch} from 'react-redux';
import {addCategory, removeCategory} from '../../redux/toolkit/CategorySlicer';
import {addFieldData} from '../../redux/toolkit/FieldDataSlicer';
import DashboardItem from '../../components/dashboardItem/categoryItem';

const Dashboard = ({navigation}) => {
  const data = useSelector((state: any) => state?.CategorySlicer);
  const catData = useSelector((state: any) => state?.FieldDataSlicer);
  const dispatch = useDispatch();
  const [labelText, setLabelText] = useState('');
  const [labelTitleText, setLabelTitleText] = useState(strings.unnamed_field);
  const renderItem = (item: any) => {
    return (
      <DashboardItem
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
          <Button
            style={styles.addCatBtnStyle}
            onPress={() => {
              if (labelText !== '') {
                dispatch(addCategory({categoryName: labelText}));
                setLabelText('');
              } else {
                alert(strings.user_message);
              }
            }}
            buttonText={strings.add_category}
          />
          <FlatList data={data} renderItem={item => renderItem(item)} />
        </View>
      ) : (
        <View style={styles.noDataContainer}>
          <Text style={styles.textStyle}>{strings.no_data}</Text>
          <Button
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate(strings.manage_cat);
            }}
            buttonText={strings.add_category}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
export default Dashboard;
