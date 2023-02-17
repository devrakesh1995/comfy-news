import React, {useRef, useState} from 'react';
import {View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';
import Video from 'react-native-video';
import Ionic from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { log } from 'react-native-reanimated';

const SingleReel = ({item, index, currentIndex}) => {
  // console.log("sssssssssssssssssssss",item);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const videoRef = useRef(null);

  const onBuffer = buffer => {
    console.log('buffring', buffer);
  };
  const onError = error => {
    console.log('error', error);
  };

  const [mute, setMute] = useState(false);

  // const [like, setLike] = useState(item.isLike);

  return (
    <>
    <View style={{
      width: '100%',
      height: Dimensions.get('window').height,
    }}>

      <Video
        source={{ uri: item.vedioUri }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        onError={(e) => console.log(e)}
        resizeMode={'stretch'}
        repeat={true}
        paused={false}
        muted={mute}
        // muted={mute}
      />

      <View style={{
        height: '100%',
        // justifyContent: 'flex-end',
      }}>
        <View style={{
          height: '50%',
          // justifyContent: ''
        }}>
          <View style={{
            // alignSelf: 'flex-start',
            height: 150,
            // justifyContent: 'center',
            marginRight: 5,
            // backgroundColor:'white'
          }}>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Image style={{
                width: 90,
                height: 75,
                left:15
              }} resizeMode={'center'}
                // source={require('../../assets/img.jpg')}
                source={require('../../assets/Comfg.png')}
              />
              <TouchableOpacity style={{ alignSelf: 'center', marginRight: 14, }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white', backgroundColor: 'rgba(0,0,0,0.3)', padding: 5, borderRadius: 15 }}>View Details</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>

        <View style={{
          height: '35%',
          // justifyContent: 'flex-end'
        }}>
          <View style={{
            alignSelf: 'flex-end',
            height: 150,
            justifyContent: 'space-between',
            marginRight: 5,
            marginTop: 120
          }}>


            <TouchableOpacity style={{ padding: 12, backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 24, }} >
              <Image style={{
                width: 25,
                height: 25,
                alignSelf: 'center'

              }}
                source={require('../../assets/Icons/sharea.png')}
              />
            </TouchableOpacity>
{!mute?
            <TouchableOpacity style={{ padding: 12, backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 24, }} onPress={() => setMute(true)}>
              {/* {mute`` ? */}
                <Image style={{
                  width: 25,
                  height: 25,
                  alignSelf: 'center'

                }}
                  source={require('../../assets/Icons/mutea.png')}
                /> 
                {/* <Image style={{
                  width: 25,
                  height: 25,
                  alignSelf: 'center'

                }}
                  source={require('../../assets/Icons/volumea.png')}
                /> */}


              {/* } */}
            </TouchableOpacity>
            :
            <TouchableOpacity style={{ padding: 12, backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 24, }} onPress={() => setMute(false)}>
              {/* {mute`` ? */}
                {/* <Image style={{
                  width: 25,
                  height: 25,
                  alignSelf: 'center'

                }}
                  source={require('../../assets/Icons/mutea.png')}
                />  */}
                <Image style={{
                  width: 25,
                  height: 25,
                  alignSelf: 'center'

                }}
                  source={require('../../assets/Icons/volumea.png')}
                />


              {/* } */}
            </TouchableOpacity>
}

          </View>
        </View>
        <View style={{ height: '20%' }}>
          <Text style={{ margin: 5, fontWeight: 'bold', fontSize: 20, color: 'white' }}> {item.title}</Text>

        </View>


      </View>
    </View>
  </>
    // <View
    //   style={{
    //     width: windowWidth,
    //     height: windowHeight,
    //     position: 'relative',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   }}>
    //   <TouchableOpacity
    //     activeOpacity={0.9}
    //     onPress={() => setMute(!mute)}
    //     style={{
    //       width: '100%',
    //       height: '100%',
    //       position: 'absolute',
    //     }}>
    //     <Video
    //       videoRef={videoRef}
    //       onBuffer={onBuffer}
    //       onError={onError}
    //       repeat={true}
    //       resizeMode="cover"
    //       paused={currentIndex == index ? false : true}
    //       source={item.vedioUri}
    //       muted={mute}
    //       style={{
    //         width: '100%',
    //         height: '100%',
    //         position: 'absolute',
    //       }}
    //     />
    //   </TouchableOpacity>
    //   <Ionic
    //     name="volume-mute"
    //     style={{
    //       fontSize: mute ? 20 : 0,
    //       color: 'white',
    //       position: 'absolute',
    //       backgroundColor: 'rgba(52,52,52,0.6)',
    //       borderRadius: 100,
    //       padding: mute ? 20 : 0,
    //     }}
    //   />
    //   <View
    //     style={{
    //       position: 'absolute',
    //       width: windowWidth,
    //       zIndex: 1,
    //       bottom: 0, //edited
    //       padding: 10,
    //     }}>
    //     <View style={{}}>
    //       <TouchableOpacity style={{width: 150}}>
    //         <View
    //           style={{width: 100, flexDirection: 'row', alignItems: 'center'}}>
    //           <View
    //             style={{
    //               width: 32,
    //               height: 32,
    //               borderRadius: 100,
    //               backgroundColor: 'white',
    //               margin: 10,
    //             }}>
    //             <Image
    //               source={item.postProfile}
    //               style={{
    //                 width: '100%',
    //                 height: '100%',
    //                 resizeMode: 'cover',
    //                 borderRadius: 100,
    //               }}
    //             />
    //           </View>
    //           <Text style={{color: 'white', fontSize: 16}}>{item.title}</Text>
    //         </View>
    //       </TouchableOpacity>
    //       <Text style={{color: 'white', fontSize: 14, marginHorizontal: 10}}>
    //         {item.description}
    //       </Text>
    //       <View style={{flexDirection: 'row', padding: 10}}>
    //         <Ionic
    //           name="ios-musical-note"
    //           style={{color: 'white', fontSize: 16}}
    //         />
    //         <Text style={{color: 'white'}}>Original Audio</Text>
    //       </View>
    //     </View>
    //   </View>
    //   <View
    //     style={{
    //       position: 'absolute',
    //       bottom: 10, //edited
    //       right: 0,
    //     }}>
    //     <TouchableOpacity onPress={() => setLike(!like)} style={{padding: 10}}>
    //       <AntDesign
    //         name={like ? 'heart' : 'hearto'}
    //         style={{color: like ? 'red' : 'white', fontSize: 25}}
    //       />
    //       <Text style={{color: 'white'}}>{item.likes}</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={{padding: 10}}>
    //       <Ionic
    //         name="ios-chatbubble-outline"
    //         style={{color: 'white', fontSize: 25}}
    //       />
    //     </TouchableOpacity>
    //     <TouchableOpacity style={{padding: 10}}>
    //       <Ionic
    //         name="paper-plane-outline"
    //         style={{color: 'white', fontSize: 25}}
    //       />
    //     </TouchableOpacity>
    //     <TouchableOpacity style={{padding: 10}}>
    //       <Feather
    //         name="more-vertical"
    //         style={{color: 'white', fontSize: 25}}
    //       />
    //     </TouchableOpacity>
    //     <View
    //       style={{
    //         width: 30,
    //         height: 30,
    //         borderRadius: 10,
    //         borderWidth: 2,
    //         borderColor: 'white',
    //         margin: 10,
    //       }}>
    //       <Image
    //         source={item.postProfile}
    //         style={{
    //           width: '100%',
    //           height: '100%',
    //           borderRadius: 10,
    //           resizeMode: 'cover',
    //         }}
    //       />
    //     </View>
    //   </View>
    // </View>
  );
};

export default SingleReel;
