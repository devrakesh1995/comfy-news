import {
    View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, StyleSheet,
} from 'react-native'
import React from 'react'
// import { ScrollView } from 'react-native-gesture-handler'
// import Home from './Home'
import Icon from 'react-native-vector-icons/Ionicons'

const ePaper = (props) => {
    const OnClick = () => {
        props.navigation.goBack()
    }
    const {navigation} = props;

    return (
        // <SafeAreaView>
            <View style={{ flex:1, backgroundColor: 'white', }}>
                <View style={{ borderBottomWidth: 1, borderBottomColor: 'grey', flexDirection: 'row', paddingVertical: 12, paddingHorizontal: 8,}} >
                    <TouchableOpacity onPress={OnClick}>
                        <Icon style={{ left: 8 }} name="arrow-back" size={23} color="black" />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 30, alignSelf: 'center', color: 'black', fontSize: 20, fontWeight: 'bold' }}> ई-पेपर</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around',marginTop:10}}>
                    <Image style={{height:150,width:180}} source={require('../../assets/Paper1.png')} />
                    <Image style={{height:150,width:180}} source={require('../../assets/Paper1.png')} />

                </View>
            </View>
        // </SafeAreaView>
    )
}

export default ePaper





// <View style={{ marginTop: -250 }}>
//     <View style={{ alignItems: 'center', marginTop: 160, justifyContent: 'space-between' }}>
//         <Image
//             style={{
//                 justifyContent: 'center',
//                 height: 100,
//                 width: 180,

//                 resizeMode: 'center',
//                 marginVertical: 20,
//             }}
//             source={require('../../assets/dbLogo.png')}
//         />
//         <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'black' }}>
//             कृपया लॉगिन काने के लिए अपना मोबाइल
//         </Text>
//         <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'black' }}>
//             नंबर जोड़े
//         </Text>


//     </View>

//     <View style={{ borderWidth: 0.5, backgroundColor: 'lightgray', borderColor: 'grey', marginLeft: 50, maringTop: 15, height: 40, width: 70, backgroundColor: '//#endregionEDEDED', flexDirection: 'row', alignItems: 'center', alignContent: 'center' }}>
//         <Image style={{ marginLeft: 8, height: 30, width: 30 }} source={require('../../assets/india.png')} />
//         <Text style={{ color: 'black', fontWeight: 'bold' }}> +91</Text>

//         <TextInput style={styles.input}
//             underlineColorAndroid="transparent"
//             placeholder="फ़ोन नंबर डालें "
//             placeholderTextColor="grey"
//             autoCapitalize="none"
//         //onChangeText = {this.handlePassword}
//         />
//     </View>
//     <TouchableOpacity >
//         <View style={styles.button}>
//             <Text style={styles.text} > आगे बढ़ें </Text>
//         </View>

//     </TouchableOpacity>

// </View> * /}





// const styles = StyleSheet.create({
//     input: {
//         margin: 20,
//         height: 40,
//         width: 200,
//         borderColor: '#0000',
//         borderWidth: 1
//     },

//     text: {
//         textAlign: 'center',
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: 'black'
//     },

//     button: {
//         backgroundColor: '#B2B2B2',
//         height: 40, width: '75%',
//         alignSelf: 'center',
//         borderRadius: 10,
//         borderColor: 'black',
//         marginTop: 15,
//         justifyContent: "center"
//     }
// });

