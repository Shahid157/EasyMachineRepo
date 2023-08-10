import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import strings from '../utils/strings';
import {useSelector} from 'react-redux';
import Dashboard from '../screens/dashboard';
import ManageCat from '../screens/manageCategory';
import DynamicScreen from '../screens/dynamicScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const route = useSelector((state: any) => state?.CategorySlicer);
  console.log('route=', route);
  return (
    <Drawer.Navigator initialRouteName={strings.dashboard_screen}>
      {route &&
        route.length !== 0 &&
        route.map((item: any, index: number) => {
          return (
            <Drawer.Screen name={item.categoryName} component={DynamicScreen} />
          );
        })}
      <Drawer.Screen name={strings.dashboard_screen} component={Dashboard} />
      <Drawer.Screen name={strings.manage_cat} component={ManageCat} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
