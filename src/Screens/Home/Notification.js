import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { userActions,  } from '../../_actions';
import {
    View, Text, Dimensions, Image, TouchableOpacity, Alert, TextInput, StatusBar, ScrollView, Pressable,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons'


const Notification = props => {
    const dispatch = useDispatch();
    const goBack = () => {
        navigation.goBack();
    }
    useEffect(() => {
        dispatch(userActions.getAllNews());
        dispatch(userActions.getCurrentNews());
        // dispatch(userActions.getSportNewsList());

    }, [])
    const OnClick = () => {
        props.navigation.goBack()
      }
    const { users ,navigation} = props;
    // let { getAllNews,getCurrentNewss,getSportNewsListData } = users;
    
    return (
        <SafeAreaView>
            <View style={{ height: '100%', backgroundColor: 'white', }}>
                <View style={{ borderBottomWidth: 1, borderBottomColor: 'grey', flexDirection: 'row', paddingVertical: 12, paddingHorizontal: 8, }} >
                <TouchableOpacity onPress={OnClick}>
              <Icon style={{ left: 8 }} name="arrow-back" size={23} color="black" />
            </TouchableOpacity>
                    <Text style={{ marginLeft: 90, alignSelf: 'center', color: 'black', fontSize: 20, fontWeight: 'bold' }}> Notifications</Text>
                </View>
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
export default connect(mapStateToProps)(Notification);



