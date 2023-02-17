import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Alert } from 'react-native';
import Home from './Home';
import Vedio from './Vedio';
import Search from './Search';

const Tab = createBottomTabNavigator();
const BottomTab = (props) => {
  return (
    <Tab.Navigator
      screenOptions={({ route, }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconLink;
          let Label;
          if (route.name === 'Home') {
            Label = 'Home'
            iconLink = focused
              ? require('../../assets/Icons/homeBlack.png')
              : require('../../assets/Icons/homeGray.png');
          }
          else if (route.name === 'Video') {
            Label = 'Video'
            iconLink = focused
              ? require('../../assets/Icons/vedioBlack.png')
              : require('../../assets/Icons/vedioGray.png');
          }
          else if (route.name === 'Search') {
            Label = 'Search'
            iconLink = focused
              ? require('../../assets/Icons/searchBlack.png')
              : require('../../assets/Icons/searchGray.png');
          }
          // You can return any component that you like here!
          return (
            <>
              <Image style={{
                width: 30,
                height: 30,
                margin: 3
              }} source={iconLink} />
            </>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        keyboardHidesTabBar: true,
        style: {
          position: 'absolute',
          backgroundColor: '#fff'

        },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Video" component={Vedio} />
      <Tab.Screen name="Search" component={Search} />

    </Tab.Navigator>
  );
}
export default (BottomTab);