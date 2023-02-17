import {
  View,
  SafeAreaView,
  Text,
  Dimensions,
  ImageBackground
 
} from 'react-native';
import React  from 'react';



const { width, height } = Dimensions.get('window');

export default function Splash({ navigation }) {


  return(
    
    <ImageBackground
        source={require('../../assets/splash12.png')}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: height, width: width }}
        imageStyle={{
        resizeMode: 'stretch' // works only here!
        }}>
  
      </ImageBackground>
  )

}