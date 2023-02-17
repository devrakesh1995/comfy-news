import React, { Component } from 'react';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import SettingPage from '../pages/Page2/SettingPage';
import BottomTab from './BottomTab';
import Location from '../Screens/page2/Location';
import Profile from '../Screens/Home/Profile';
import Notification from '../Screens/Home/Notification';

import NewsDetail from '../Screens/Home/TopNewsDetail';
import CricketNewsDetail from '../Screens/Home/CricketNewsDetail';
import NationalNewsDetail from '../Screens/Home/NationalNewsDetail';
import InternationalNewsDetails from '../Screens/Home/InternationalNewsDetails';



import ePaper from '../Screens/Home/ePaper';
import Signup from '../Screens/Auth/Signup';
import Login from '../Screens/Auth/Login';





const RouteStack = createStackNavigator();

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  async componentDidMount() {
    this.getItem();
  }


  getItem = async () => {
    try {
      const value = await AsyncStorage.getItem('lan');
      if (value !== null) {

        this.setState({ userData: value })

      }
    } catch (error) {
    }
  }
  render() {
    let { language } = this.props;

    return (
      <>
        <SafeAreaProvider>
          <NavigationContainer>

            <>
              <RouteStack.Navigator headerMode="BottomTab" >
              <RouteStack.Screen name="BottomTab" component={BottomTab} />
              {/* <RouteStack.Screen name="Location" component={Location} /> */}
                
                {/* <RouteStack.Screen name="SettingPage" component={SettingPage} /> */}
              
                <RouteStack.Screen name="Profile" component={Profile} />
                <RouteStack.Screen name="Notification" component={Notification} />
                <RouteStack.Screen name="NewsDetail" component={NewsDetail} />
                <RouteStack.Screen name="CricketNewsDetail" component={CricketNewsDetail} />
                <RouteStack.Screen name="NationalNewsDetail" component={NationalNewsDetail} />
                <RouteStack.Screen name="InternationalNewsDetails" component={InternationalNewsDetails} />
                <RouteStack.Screen name="ePaper" component={ePaper} />

                <RouteStack.Screen name="Login" component={Login} />
                <RouteStack.Screen name="Signup" component={Signup} />



              </RouteStack.Navigator>
            </>

          </NavigationContainer>
        </SafeAreaProvider>

      </>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  const { users, dashboard, language } = state;
  return {
    loggingIn,
    users,
    dashboard,
    language

  };
}
export default connect(mapStateToProps)(Routes);


