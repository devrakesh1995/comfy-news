import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Alert } from 'react-native';




import Home from '../Screens/Home/Home';
import Vedio from '../Screens/Home/Vedio';
import Search from '../Screens/Home/Search';
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
              ? require('../../src/assets/Icons/homeBlack1.png')
              : require('../../src/assets/Icons/homeGray.png');

          }

          else if (route.name === 'Video') {
            Label = 'Video'
            iconLink = focused
              ? require('../../src/assets/Icons/vedioBlack.png')
              : require('../../src/assets/Icons/vedioGray.png');
          }

          else if (route.name === 'Search') {
            Label = 'Search'
            iconLink = focused
              ? require('../../src/assets/Icons/searchBlack.png')
              : require('../../src/assets/Icons/searchGray.png');
          }


          return (
            <>
              <Image style={{
                width: 25,
                height: 25,
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

export default BottomTab;
