
import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  // Pressable,
  StatusBar
} from 'react-native';
import { userActions, } from '../../_actions';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native-paper';
import TopNews from '../page2/TopNews';
import Cricket from '../page2/Cricket';
import National from '../page2/National';
import Crime from '../page2/Crime';
import Bollywood from '../page2/Bollywood';
import International from '../page2/International';
import Icon from 'react-native-vector-icons/Ionicons';
import FaIcon from 'react-native-vector-icons/FontAwesome'
import DBorijnal from '../page2/DBorijnal';
import Takeauto from '../page2/Takeauto';
import Women from '../page2/Women';
import Feknews from '../page2/Feknews';
import Budget2023 from '../page2/Budget2023';
import Madhuriya from '../page2/Madhuriya';
import Magazine from '../page2/Magazine';
import Rashifal from '../page2/Rashifal';


const Tab = createMaterialTopTabNavigator();
const { width, height } = Dimensions.get('window');

function Matches_Slide(props) {

  const { users, navigation } = props;
  const dispatch = useDispatch();

 

  useEffect(() => {
  
    // dispatch(userActions.getAllNews());
    // dispatch(userActions.getCurrentNews());
    // dispatch(userActions.getSportNewsList());
    // dispatch(userActions.getInternationalNewsList());
     dispatch(userActions.getBollywoodNewsList());
     dispatch(userActions.getMainNewsList());
     dispatch(userActions.getTopNewsList());
    dispatch(userActions.getSportNewsList());
    dispatch(userActions.getInternationalNewsList());
    dispatch(userActions.getNationalNewsList());
    dispatch(userActions.getCrimeNewsList());
    dispatch(userActions.getDBorijnalNewsList());
    dispatch(userActions.getBudget2023NewsList());
    dispatch(userActions.getWomenNewsList());
    dispatch(userActions.getMagazineNewsList());
    dispatch(userActions.getFekNewsList());
    dispatch(userActions.getMadhuriyaNewsList());
    dispatch(userActions.getTakeautoNewsList());
    dispatch(userActions.getRashifalNewsList());
    dispatch(userActions.getMainNewsList());




    // dispatch(userActions.getNationalNewsList());
    // dispatch(userActions.getNationalNewsList());

  }, [])


  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor='white' />
      <View style={{ height: '100%', backgroundColor: 'white' }}>
        <View style={{ height: 60, width: '100%', flexDirection: 'row' }}>
          <View style={{ width: '40%', height: '100%', justifyContent: 'center', alignItems: 'center', }}>
            <Image style={{ height: 75, width: 90,right:10}} resizeMode={'contain'} source={require('../../assets/Comfygennews.png')} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginLeft: 18, }}>
            <View style={{ width: '25%', height: '100%', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => navigation.navigate("ePaper")} style={{ height: 25, width: 70, borderWidth: 2, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderRadius: 5, marginLeft: 12 }}>
                <Icon style={{ right: 5 }} name="md-newspaper-outline" size={14} color='#000' />
                <Text style={{ fontWeight: '600', color: '#000' }}>ई-पेपर</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: '18.3%', height: '100%', justifyContent: 'center', alignItems: 'center', }}>
              <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
                <Icon style={{ left: 15 }} name="notifications-outline" size={22} color='#000' />
              </TouchableOpacity>
            </View>
            <View style={{ width: '18.3%', height: '100%', justifyContent: 'center', alignItems: 'center', }}>
              <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <FaIcon name="user-circle-o" size={22} color='#000' />
              </TouchableOpacity>
            </View>
          </View>
        </View>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} scrollEnabled={false}>
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
              <View style={{ height: height - 50 }}>
                <Tab.Navigator 
                tabBarOptions={{
                  scrollEnabled: true,
                  // style:{backgroundColor:'yellow'},
                  labelStyle: {
                    color: 'black',
                    fontWeight: 'bold'
                  },
                  tabStyle: { width: 135, },
                  // activeTintColor: 'red',
                  indicatorStyle: { width: 125, backgroundColor: 'black',},
                }}>
           
                  <Tab.Screen name="🔥टॉप न्यूज़" component={TopNews} />
                  <Tab.Screen name="DB ओरिजिनल" component={DBorijnal} />
                  <Tab.Screen name="🎬 बॉलीवुड" component={Bollywood} />
                  <Tab.Screen name="💆‍♀️ वुमन" component={Women} />
                  <Tab.Screen name="🇮🇳  राष्ट्रीय" component={National} />
                  <Tab.Screen name="🌍 अंतरराष्ट्रीय" component={International} />
                  {/* <Tab.Screen name="💰	 बजट 2023" component={Budget2023} /> */}
                  <Tab.Screen name="☀ राशिफल" component={Rashifal} />
                  <Tab.Screen name="🏏 स्पोर्ट्स" component={Cricket} />
                  <Tab.Screen name="🚨 क्राइम" component={Crime} />
                  <Tab.Screen name="🚘 टेक-ऑटो" component={Takeauto} />
                  <Tab.Screen name="🚫	 फेक न्यूज" component={Feknews} />
                  <Tab.Screen name="Ⓜ	 मधुरिमा" component={Madhuriya} />
                   <Tab.Screen name="📑	 मैगजीन" component={Magazine} /> 

                </Tab.Navigator>
                {/* <TabView
                  indicatorStyle={{ backgroundColor: 'red' }}
                  style={{ backgroundColor: 'white', color: 'red' }}
                  navigationState={{ index, routes }}
                  renderScene={SceneMap({
                    first: () => <TopNews {...props} />,
                    second: () => <Cricket {...props} />,
                    third: () => <National {...props} />,
                    fouth: () => <International {...props} />
                  })}
                  scrollEnable={false}
                  onIndexChange={setIndex}
                  initialLayout={{ width: Dimensions.get('window').width }}
                  renderTabBar={props => (
                    <TabBar
                      {...props}
                      style={{ backgroundColor: '#fff' }}
                      activeColor={'black'}
                      indicatorStyle={{ backgroundColor: 'black' }}
                      inactiveColor={'black'}
                    />
                  )}
                /> */}
              </View>
            </View>
          </ScrollView>
          {/* :
          <View
            style={{
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255,0.8)',
            }}>
            <ActivityIndicator color={'red'} size={'small'} />
            <Text
              style={{
                color: '#b30000',
                fontFamily: 'Poppins-Medium',
                fontSize: 13,
              }}>
              Loading....
            </Text>
          </View>
        } */}
      </View>
    </SafeAreaView>
  );
}

function mapStateToProps(state) {

  const { users, dashboard, theme, matches } = state;
  return {
    theme,
    matches
  };
}

export default connect(mapStateToProps)(Matches_Slide);
const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    padding: 6,
  },
  itemContainer: {
    marginRight: 16,
    marginLeft: 6,
  },
  item: {
    flex: 1,
    margin: 3,
    backgroundColor: 'white',
  },

});