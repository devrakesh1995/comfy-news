import {
  View,
  SafeAreaView,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Share} from 'react-native';
import React, { Component, useEffect, useState } from 'react';
import HTMLView from 'react-native-htmlview';
//--------Redux-api-call------------
import { connect } from 'react-redux';
import { userActions,  } from '../../_actions';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

const { width, height } = Dimensions.get('window');
const CricketNewsDetail = props => {


  const { users, navigation } = props;
 
  const OnClick = () => {
    props.navigation.goBack()
  }

  // const oneShare = async (text) => {
  //   let { getNewsByIdData } = users;
  //   console.log('>>>>>>>>>>>',getNewsByIdData);
  //   try {
  //     const result = await Share.share({
  //       title: 'App link',
  //       message:getNewsByIdData.imageLinkUrl,
  //       url: 'https://play.google.com/store/apps/'
  //     });
  //     if (result.action === Share.sharedAction) {
  //       if (result.activityType) {

  //       } else {
  //         // shared
  //       }
  //     } else if (result.action === oneShare.dismissedAction) {
  //       // dismissed
  //     }
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };
  const onShare = async (text) => {
    // console.log("$$$$$$$$$$$$$$$$$$$$$",text.imageLinkUrl);
    try {
      const result = await Share.share({
        title: text.title,
        message: text.imageLinkUrl,
        imageLinkUrl:text.imageLinkUrl,
        // url: 'https://play.google.com/store/apps/'
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
  
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
  
  const dispatch = useDispatch();
  useEffect(() => {
    let id = props.route.params.id;
    dispatch(userActions.getNewsById(id));
  }, [])

  // const { users, navigation } = props;
  let { getNewsByIdData,getTopnewsdata } = users;

  const webViewStyle = StyleSheet.create({
    p: {
      marginTop: 15,
      color: '#1e293b',
      fontSize: 16,
      fontFamily: "Cochin"
    }
  });
  return (
    <SafeAreaView >
      <View style={{ height: '100%', backgroundColor: 'white', }}>
      <View style={{ borderBottomWidth: 2, borderBottomColor: 'lightgrey', flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15, paddingHorizontal: 5, marginHorizontal: 10 }} >
          <View>
            <TouchableOpacity onPress={OnClick}>
              <Icon style={{ left: 8 }} name="arrow-back" size={23} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', }}>
            <TouchableOpacity style={{ marginRight: 20 }}>
              <Icon name='ios-bookmark-outline' size={20} />
                  </TouchableOpacity>
          <TouchableOpacity onPress={() => oneShare()} style={{marginRight:20}}>
              <Icon name='md-share-social-outline' size={20}/>
                 </TouchableOpacity>
            <TouchableOpacity >
              <Image style={{ width: 20, height: 20 }} resizeMode={'center'} source={require('../../assets/text-size.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View style={{ marginBottom: 20, }}>
            <View style={{ margin: 12 }}>
              <>
                <View>
                  <Text style={{ fontSize: 18, fontWeight: '700' }} numberOfLines={3}>{getNewsByIdData && getNewsByIdData.title ? getNewsByIdData.title : null} </Text>
                  <View>
                    <Text style={{fontWeight:'bold',fontSize:12}}>2 घंटे पहले </Text>
                  </View>
                  <View style={{ paddingVertical: 15, alignSelf: 'center' }}>
                    <Image style={{ height: 250, width: 400, borderRadius: 10, }}
                      source={{ uri: getNewsByIdData && getNewsByIdData.imageLinkUrl ? getNewsByIdData.imageLinkUrl : null }} />
                  </View>
                  <View style={{ alignItems: 'center',}}>
                      <TouchableOpacity onPress={() => oneShare()} style={{ flexDirection: 'row', alignItems: 'center', alignItems: 'center' }}>
                        <Icon name='md-share-social-outline' size={20} />
                        <Text style={{ fontSize: 16, left: 10 }}>शेयर</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={{borderWidth:0.2,marginTop:5}}></View>
                  <View style={{marginTop:10}}>
                    <HTMLView
                      value={getNewsByIdData && getNewsByIdData.story.replace(new RegExp('<br>', 'g'), '<span>').replace(new RegExp('<br>', 'g'), '<span>') ?
                        getNewsByIdData.story.replace(new RegExp('<p>', 'g'), '<span>').replace(new RegExp('<br>', 'g'), '<span>') : null}
                      stylesheet={webViewStyle}>
                    </HTMLView>
                  </View>
                </View>
              </>
            </View>
            <View style={{ marginLeft: 15, marginTop: 5, marginBottom: 0 }}>
              <Text style={{ color: 'gray', fontSize: 22, fontWeight: 'bold' }}>
                खबरें और भी हैं
              </Text>
            </View>
            <>
              {getTopnewsdata && getTopnewsdata.length > 0 ? getTopnewsdata.map((element, index) => (
                  <>
                    <TouchableOpacity onPress={() => navigation.navigate('NewsDetail', { id: element.id })}>
                        <View style={{ flexDirection: 'row', marginHorizontal: 15, marginVertical: 10, justifyContent: 'space-between' }}>
                        <View style={{ width: 200, marginTop: 15 }}>
                          <Text style={{ fontWeight: '600', color: 'black', fontSize: 14, }} numberOfLines={2}>
                            {element.title}
                          </Text>
                        </View>
                        <View>
                          <Image source={{ uri: element.imageLinkUrl }} style={{ height: 75, width: 120, borderRadius: 10 }} />
                        </View>
                      </View>
                      <View style={{ height: 30, flexDirection: 'row', }}>
                        <View style={{ width: '50%', height: '100%' }}>
                          {/* <Text style={{ color: 'black', left: 10, fontSize: 14, fontWeight: '700' }}>{element.category}</Text> */}
                        </View>
                        <View style={{ width: '25%', height: '100%', alignItems: "center", justifyContent: "center", flexDirection: 'row' }}>
                          <Icon name='ios-bookmark-outline' size={18} style={{ left: 25 }} />
                          <Text style={{ color: 'black', left: 30, fontSize: 14, fontWeight: '700' }}>सेव</Text>
                        </View>
                        <TouchableOpacity onPress={() => onShare(element)} style={{ width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                          <Feather name="share-2" size={18} color="black" />
                          <Text style={{ color: 'black', left: 10, fontSize: 14, fontWeight: '700' }}>शेयर</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{ borderWidth: 0.5, borderColor: 'lightgray',marginTop:10 }} />
                    </TouchableOpacity>
                  </>
                )
                ) : null
              }
            </>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  const { users, } = state;
  return {
    loggingIn,
    users,
  };
}
export default connect(mapStateToProps)(CricketNewsDetail);
const styles = StyleSheet.create({
  textHeader: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    width: '90%'
  },

  NewsText: {
    marginTop: 15,
    color: '#1e293b',
    fontSize: 16,
    fontFamily: "Cochin"
  },

})
