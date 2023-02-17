
import {
  View,
  SafeAreaView,
  Text,
  Dimensions,
  Alert,
  Share,

  // TextInput,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
  Linking,
  // FlatList,
  // TouchableOpacity,
  // ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { CONST } from '../../_config';
import React from 'react';
import { useDispatch } from 'react-redux';
import { userActions, } from '../../_actions';
import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'

const { width, height } = Dimensions.get('window');

const Profile = props => {
  const dispatch = useDispatch();

  const gotoSignup = () => {
    navigation.navigate('Signup')
  }
  const OnClick = () => {
    props.navigation.goBack()
  }

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'App link',
        message: 'Please install this app and stay safe , AppLink :https://play.google.com/store/apps/',
        url: 'https://play.google.com/store/apps/'
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === onShare.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const logout = () => {
    // this.Profile.close();
    dispatch(userActions.logout());
    navigation.navigate('Login')
  }
  // const {navigation,users} =props
  let { navigation, font, users, language } = props;
  // console.log("props^^^^^^^^^^^^^^^^^^^^^^^^^^", props);
  let { token } = users;
  return (

    <SafeAreaView >
      <View style={{ height: '100%', backgroundColor: 'white', }}>
        <View style={{ borderBottomWidth: 1, borderBottomColor: 'grey', flexDirection: 'row', paddingVertical: 12, paddingHorizontal: 8, }} >
        <TouchableOpacity onPress={OnClick}>
              <Icon style={{ left: 8 }} name="arrow-back" size={23} color="black" />
            </TouchableOpacity>
          <Text style={{ marginLeft: 30, alignSelf: 'center', color: 'black', fontSize: 20, fontWeight: 'bold' }}> Profile</Text>
        </View>
        <ScrollView>
          <View>
            {
              token == null ?
                <>
                  <View style={{ width: '100%', height: 100, flexDirection: 'row' }}>
                    <View style={{ width: '70%', height: '100%', flexDirection: 'row' }}>
                      <FontAwesome style={{ top: 25, left: 10 }} name="user-circle-o" size={50} color="gray" />
                      <View style={{ marginTop: 30, left: 20 }}>
                        <Text style={{ fontWeight: 'bold' }}>My Profile</Text>
                        <Text style={{ fontWeight: 'bold' }}>दैनिक भास्कर से जुड़े</Text>
                      </View>
                    </View>
                    <View style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: "center" }}>
                      <View style={{ height: 50, width: 80, marginLeft: 20, justifyContent: 'center', marginTop: 5, borderRadius: 10 }}>
                        <Button title="Login"
                          onPress={() => navigation.navigate("Login")}
                        />
                      </View>
                    </View>
                  </View>
                </>
                :
                <>
                  <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 15 }}>
                    <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                      <Image source={require('../../assets/profile1.png')} style={{ height: 50, width: 50, borderRadius: 15, }} />
                    </View>
                    <TouchableOpacity onPress={() => logout()}>
                      <View style={{ backgroundColor: '#EB6440', justifyContent: 'center', width: 80, height: 35, borderRadius: 5, alignContentL: 'center' }}>
                        <Text style={{ textAlign: 'left', color: '#fff', fontSize: 20, fontWeight: '600' }}>  Logout
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'lightgrey', }} />
                </>
            }
              {/* <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'lightgrey', height: 60, }}>
              <TouchableOpacity style={{ marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 60, }}>
                <Text style={{ color: 'black', marginLeft: 10, fontWeight: 'bold' }}>
                  Select your state and city
                </Text>
                <Icon style={{right: 10 }} name="md-location-outline" size={22}/>
              </TouchableOpacity>
            </View>  */}
            {/* <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'lightgrey', height: 60, }}>
              <TouchableOpacity style={{ marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 60, }}>
                <Text style={{ color: 'black', marginLeft: 10, fontWeight: 'bold' }}>
                  My favourites
                </Text>
                <Icon style={{right: 10 }} name="book-outline" size={22}/>
              </TouchableOpacity>
            </View>
            <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'lightgrey', height: 60, }}>
              <TouchableOpacity style={{ marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 60, }}>
                <Text style={{ color: 'black', marginLeft: 10, fontWeight: 'bold' }}>
                  Save
                </Text>
                <Icon style={{right: 10 }} name="ios-bookmark-outline" size={22}/>
              </TouchableOpacity>
            </View> */} 
            <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'lightgrey', height: 60, }}>
              <TouchableOpacity style={{ marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 60, }}>
                <Text style={{ color: 'black', marginLeft: 10, fontWeight: 'bold' }}>
                  Notifications
                </Text>
                <Icon style={{right: 10 }} name="notifications-outline" size={22}/>
              </TouchableOpacity>
            </View>
            {/* <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'lightgrey', height: 60, }}>
              <TouchableOpacity style={{ marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 60, }}>
                <Text style={{ color: 'black', marginLeft: 10, fontWeight: 'bold' }}>
                  Dark mode
                </Text>
                <Icon style={{right: 10 }} name="moon-outline" size={22}/>
              </TouchableOpacity>
            </View> */}

            {/* <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'lightgrey', height: 60, }}>
              <TouchableOpacity style={{ marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 60, }}>
                <Text style={{ color: 'black', marginLeft: 10, fontWeight: 'bold' }}>
                  Artical font size
                </Text>
                <Image source={require('../../assets/font-size.png')} style={{ marginRight: 10, height: 25, width: 25, }} />
              </TouchableOpacity>
            </View>  */}
            <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'lightgrey', height: 60, }}>
              <TouchableOpacity style={{ marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 60, }} onPress={() => onShare()}>
                <Text style={{ color: 'black', marginLeft: 10, fontWeight: 'bold' }}>
                  Share App
                </Text>
                <Icon style={{right: 10 }} name="md-share-social-outline" size={22}/>
              </TouchableOpacity>
            </View>
            <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'lightgrey', height: 60, }}>
              <TouchableOpacity style={{ marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 60, }} onPress={() => onShare()}>
                <Text style={{ color: 'black', marginLeft: 10, fontWeight: 'bold' }}>
                  Invite friends
                </Text>
                <AntDesign style={{right: 10 }} name="link" size={22}/>
              </TouchableOpacity>
            </View>
            <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'lightgrey', height: 60, }}>
              <TouchableOpacity style={{ marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 60, }} onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.ak.ta.dainikbhaskar.activity')}>
                <Text style={{ color: 'black', marginLeft: 10, fontWeight: 'bold' }}>
                  App Rating
                </Text>
                <Icon style={{right: 10 }} name="md-star-outline" size={22}/>
              </TouchableOpacity>
            </View>
            {/* <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'lightgrey', height: 60, }}>
              <TouchableOpacity style={{ marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 60, }} onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.ak.ta.dainikbhaskar.activity')}>
                <Text style={{ color: 'black', marginLeft: 10, fontWeight: 'bold' }}>
                  Give feedback
                </Text>
                <Icon style={{right: 10 }} name="ios-mail-open-outline" size={22}/>
              </TouchableOpacity>
            </View> */}
            <View>
              <TouchableOpacity onPress={() => console.log("clicked")}>
                <Text style={{ color: 'grey', marginLeft: 18, marginTop: 10, marginBottom: 10 }}> Term and Condition </Text>
              </TouchableOpacity>
              {/* <TouchableOpacity onPress={() => console.log("clicked")}>
                <Text style={{ color: 'grey', margin: 18 }}> News Publisher Details </Text>
              </TouchableOpacity> */}
              <Text style={{ color: 'grey', marginLeft: 18, marginBottom: 18 }}> App Version v1.0.0 </Text>
            </View>
          </View>
        </ScrollView>

      </View>
    </SafeAreaView>
  )
}
function mapStateToProps(state) {

  const { loggingIn } = state.authentication;
  const { users, dashboard, theme, font } = state;
  return {
    loggingIn,
    users,
    dashboard, theme, font
  };
}
export default connect(mapStateToProps)(Profile);
