import {
  View,
  SafeAreaView,
  Text,
  Dimensions,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  ScrollView,
  Card, StyleSheet, Share
} from 'react-native';
import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { userActions, } from '../../_actions';
import HTMLView from 'react-native-htmlview';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { useDispatch } from 'react-redux';
import { shadow } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/Ionicons'


const { width, height } = Dimensions.get('window');
const onShare = async (text) => {
  // console.log("$$$$$$$$$$$$$$$$$$$$$",text.imageLinkUrl);
  try {
    const result = await Share.share({
      title: 'App link',
      message: text.imageLinkUrl,
      url: 'https://play.google.com/store/apps/'
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

const Magazine = props => {
  const dispatch = useDispatch();
  const goBack = () => {
    navigation.goBack();

  }
  const { users, navigation } = props;
  let { getMagazineNewsList } = users;
  // console.log("))))))))))))))))))",getTopnewsdata)
  return (
    <View>
      <View style={[styles.child, { backgroundColor: 'white' }]}>
        <View style={{ width: '100%', backgroundColor: '#fff', }}>
          <ScrollView>
            <View style={{  }}>
              {
                getMagazineNewsList && getMagazineNewsList.length > 0 ? getMagazineNewsList.map((element, index) => (
                  <>
                    <TouchableOpacity onPress={() => navigation.navigate('NewsDetail', { id: element.id })}>
                      <View style={{ flexDirection: 'row', marginHorizontal: 15, marginVertical: 10, justifyContent: 'space-between' }}>
                        <View style={{ width: 240, marginTop: 15 }}>
                          <Text style={{ fontWeight: '600', color: 'black', fontSize: 14, }} numberOfLines={2}>
                            {element.title}
                          </Text>
                          <HTMLView
                            value={element.story.slice(0, 45)}
                            stylesheet={styles}
                          />
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
                            <Text style={{ color: 'black', left: 30, fontSize: 14, fontWeight: '700' }}>?????????</Text>
                          </View>
                          <TouchableOpacity onPress={() => onShare(element)} style={{ width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <Feather name="share-2" size={18} color="black" />
                            <Text style={{ color: 'black', left: 10, fontSize: 14, fontWeight: '700' }}>????????????</Text>
                          </TouchableOpacity>
                        </View>
                      <View style={{ borderWidth: 0.5, borderColor: 'lightgray', marginTop: 10 }} />
                    </TouchableOpacity>
                  </>
                )
                ) : null
              }
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {

  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  container: { flex: 1, backgroundColor: 'white' },
  child: { width: width, justifyContent: 'center' },
  text: { fontSize: width * 0.5, textAlign: 'center' },
})

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  const { users, } = state;
  return {
    loggingIn,
    users,

  };
}
export default connect(mapStateToProps)(Magazine);