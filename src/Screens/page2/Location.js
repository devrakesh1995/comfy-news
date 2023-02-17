import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

const Location = (props) => {
    return (
        <View style={{ flex: 1 }}>

            {/* <Image style={{ width: '100%', height: '40%', resizeMode: 'cover' }} source={require('../assets/images/bg.png')} /> */}
            <View style={{ height: '61%', width: '100%', backgroundColor: "black" }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    {/* <Image style={{ width: 150, height: 150, resizeMode: 'contain', marginTop: -85 }} source={require('../assets/images/pointer.png')} /> */}
                </View>
                <Text style={{ fontSize: 20, textAlign: "center", marginTop: 15, fontWeight: '500' }}>अपने शहर की खबरें देखना चाहते है ?</Text>
                <Text style={{ fontSize: 20, textAlign: "center", fontWeight: '500' }}>हमें आपकी लोकेशन पता करने दें</Text>
                <View style={{ justifyContent: 'center', alignItems: 'center', top: 40 }}>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('HomeScreen')} style={{ width: '90%', backgroundColor: '#E9931B', height: 50, alignItems: "center", justifyContent: 'center', borderRadius: 5 }}>
                        <Text style={{ color: "white", fontWeight: '500', fontSize: 20 }}>ठीक है !</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '90%', borderColor: 'white', borderWidth: 1, height: 50, alignItems: "center", justifyContent: 'center', borderRadius: 5, top: 30 }}>
                        <Text style={{ color: "white", fontWeight: '500', fontSize: 20, }}>लोकेशन का चयन खुद से करें</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Location;