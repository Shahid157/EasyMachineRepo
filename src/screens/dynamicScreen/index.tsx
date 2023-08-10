import {SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import DynamicItem from '../../components/dynamicItem/dynamicItem';

const DynamicScreen = ({navigation: any}) => {
  const fieldData = useSelector((state: any) => state?.FieldDataSlicer);
  console.log(fieldData);
  const renderItem = (item: any) => {
    <DynamicItem data={item} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={fieldData}
        renderItem={(item: any) => {
          renderItem(item);
        }}
      />
    </SafeAreaView>
  );
};
export default DynamicScreen;
