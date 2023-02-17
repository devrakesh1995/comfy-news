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
  Card, StyleSheet
} from 'react-native';
import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import HTMLView from 'react-native-htmlview';
import { userActions, } from '../../_actions';
import { useDispatch } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/Ionicons'


const { width, height } = Dimensions.get('window');


const Crime = props => {
  const dispatch = useDispatch();

  const { users, navigation } = props;
  let { getCrimeNewsListdata, getTopnewsdata, getNationalNewsList, getInternationalNewsList_Data } = users;

  return (
    <View>
      <View style={[styles.child, { backgroundColor: 'white' }]}>
        <View style={{ width: '100%', backgroundColor: '#fff', marginBottom: 80 }}>
          <ScrollView>
            <View style={{ marginBottom: 20 }}>
              {
                getCrimeNewsListdata && getCrimeNewsListdata.length > 0 ? getCrimeNewsListdata.map((element, index) => (
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
                      <View style={{ flexDirection: 'row' }}>
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
export default connect(mapStateToProps)(Crime);



